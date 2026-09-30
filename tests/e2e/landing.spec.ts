import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

async function advanceAssessmentToContact(page: Page) {
  const assessment = page.locator('#assessment');

  await assessment.getByRole('button', { name: 'Abdomen' }).click();
  await assessment.getByRole('button', { name: /Flanks/ }).click();
  await assessment.getByRole('button', { name: /Upper Arms/ }).click();
  await expect(assessment.getByText('3 of 3 areas selected')).toBeVisible();
  await assessment.getByRole('button', { name: 'Thighs' }).click();
  await expect(assessment.getByRole('button', { name: 'Thighs' })).toHaveAttribute('aria-pressed', 'false');
  await expect(assessment.getByText(/Choose up to three areas/)).toBeVisible();
  await assessment.getByRole('button', { name: 'Continue' }).click();

  await assessment.getByRole('radio', { name: /Reduce stubborn fat/ }).check();
  await assessment.getByRole('button', { name: 'Continue' }).click();
  await assessment.getByRole('radio', { name: /Close to my goal weight/ }).check();
  await assessment.getByRole('button', { name: 'Continue' }).click();

  await assessment.getByRole('button', { name: /Back/ }).click();
  await expect(assessment.getByRole('radio', { name: /Close to my goal weight/ })).toBeChecked();
  await assessment.getByRole('button', { name: 'Continue' }).click();

  await assessment.getByRole('radio', { name: /Within 1–3 months/ }).check();
  await assessment.getByRole('button', { name: 'Continue' }).click();
  return assessment;
}

test('assessment supports five steps, retained answers, validation, and guidance result', async ({ page }) => {
  await page.goto('/?utm_source=qa&gclid=local-check');
  const assessment = await advanceAssessmentToContact(page);

  await assessment.getByRole('button', { name: 'See my guidance' }).click();
  await expect(assessment.getByText('Enter your first name.')).toBeVisible();
  await expect(assessment.getByLabel('First name')).toBeFocused();

  await assessment.getByLabel('First name').pressSequentially('Alex');
  await expect(assessment.getByLabel('First name')).toHaveValue('Alex');
  await expect(assessment.getByLabel('First name')).toBeFocused();
  await assessment.getByLabel('Last name').fill('Morgan');
  await assessment.getByLabel('Email').fill('alex@example.com');
  await assessment.getByLabel('Phone').fill('(360) 555-0142');
  await assessment.getByLabel(/Omni Centers may contact me/).check();
  await assessment.getByRole('button', { name: 'See my guidance' }).click();

  await expect(assessment.getByRole('heading', { name: /may be a candidate/i })).toBeVisible();
  await expect(assessment.getByText(/consultation confirms candidacy/i)).toBeVisible();
  await expect(assessment.getByText('Reduce stubborn fat')).toBeVisible();
  await expect(assessment.getByRole('link', { name: /Call Omni/ })).toHaveAttribute('href', 'tel:+13603523065');
});

test('assessment can be started and advanced with the keyboard', async ({ page }) => {
  await page.goto('/');
  const assessment = page.locator('#assessment');
  const abdomen = assessment.getByRole('button', { name: 'Abdomen' });
  await abdomen.focus();
  await page.keyboard.press('Enter');
  await expect(abdomen).toHaveAttribute('aria-pressed', 'true');
  const next = assessment.getByRole('button', { name: 'Continue' });
  await next.focus();
  await page.keyboard.press('Enter');
  await expect(assessment.getByText('What would you most like this to do for you?')).toBeVisible();
});

test('page has no serious accessibility violations or horizontal overflow', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);

  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact ?? ''))).toEqual([]);
});

test('review marquee is static when reduced motion is requested', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const animationName = await page.locator('.review-track').first().evaluate((element) => getComputedStyle(element).animationName);
  expect(animationName).toBe('none');
});

for (const size of [
  { name: '1440', width: 1440, height: 1000 },
  { name: '1280', width: 1280, height: 900 },
  { name: '768', width: 768, height: 1024 },
  { name: '390', width: 390, height: 844 },
]) {
  test(`captures the ${size.name} full-page design`, async ({ page }) => {
    test.setTimeout(60_000);
    await page.setViewportSize({ width: size.width, height: size.height });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('main')).toBeVisible();
    for (const image of await page.locator('img[loading="lazy"]').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    await page.screenshot({
      path: `artifacts/qa/coolsculpting-${size.name}.png`,
      fullPage: true,
      animations: 'disabled',
    });
  });
}
