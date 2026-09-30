import { describe, expect, it } from 'vitest';
import { captureAttribution } from './attribution';

class MemoryStorage {
  private values = new Map<string, string>();

  getItem(key: string) {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string) {
    this.values.set(key, value);
  }
}

describe('captureAttribution', () => {
  it('captures and persists supported campaign parameters', () => {
    const storage = new MemoryStorage();

    const attribution = captureAttribution({
      search: '?utm_source=google&utm_campaign=fall&gclid=abc123&ignored=no',
      landingUrl: 'https://example.test/?utm_source=google',
      capturedAt: '2026-09-30T19:00:00.000Z',
      storage,
    });

    expect(attribution).toEqual({
      utmSource: 'google',
      utmCampaign: 'fall',
      gclid: 'abc123',
      landingUrl: 'https://example.test/?utm_source=google',
      capturedAt: '2026-09-30T19:00:00.000Z',
    });
    expect(JSON.parse(storage.getItem('omni-coolsculpting-attribution')!)).toEqual(attribution);
  });

  it('continues without storage when access throws', () => {
    const storage = {
      getItem() {
        throw new Error('storage blocked');
      },
      setItem() {
        throw new Error('storage blocked');
      },
    };

    expect(
      captureAttribution({
        search: '?utm_medium=paid-social',
        landingUrl: 'https://example.test/',
        capturedAt: '2026-09-30T19:00:00.000Z',
        storage,
      }),
    ).toEqual({
      utmMedium: 'paid-social',
      landingUrl: 'https://example.test/',
      capturedAt: '2026-09-30T19:00:00.000Z',
    });
  });
});
