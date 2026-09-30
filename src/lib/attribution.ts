import type { Attribution } from '../features/assessment/types';

interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export function captureAttribution(_input: {
  search: string;
  landingUrl: string;
  capturedAt: string;
  storage?: StorageLike;
}): Attribution {
  const input = _input;
  const params = new URLSearchParams(input.search);
  const mappings = [
    ['utm_source', 'utmSource'],
    ['utm_medium', 'utmMedium'],
    ['utm_campaign', 'utmCampaign'],
    ['utm_term', 'utmTerm'],
    ['utm_content', 'utmContent'],
    ['gclid', 'gclid'],
  ] as const;

  const campaignValues: Partial<Attribution> = {};
  for (const [queryKey, property] of mappings) {
    const value = params.get(queryKey)?.trim();
    if (value) campaignValues[property] = value;
  }

  const hasCampaignValues = Object.keys(campaignValues).length > 0;
  const fresh: Attribution = {
    ...campaignValues,
    landingUrl: input.landingUrl,
    capturedAt: input.capturedAt,
  };

  if (!input.storage) return fresh;

  try {
    if (hasCampaignValues) {
      input.storage.setItem('omni-coolsculpting-attribution', JSON.stringify(fresh));
      return fresh;
    }

    const stored = input.storage.getItem('omni-coolsculpting-attribution');
    if (stored) {
      const parsed = JSON.parse(stored) as Attribution;
      if (parsed.landingUrl && parsed.capturedAt) return parsed;
    }
  } catch {
    return fresh;
  }

  return fresh;
}
