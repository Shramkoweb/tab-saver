import { STORAGE_KEY } from "@/lib/constants";

export interface IStorageService {
  get(): Promise<chrome.tabs.Tab[]>;

  set(items: chrome.tabs.Tab | chrome.tabs.Tab[]): Promise<void>;

  clear(): Promise<void>
}

export class StorageService implements IStorageService {
  async clear(): Promise<void> {
    await chrome.storage.local.set({ [STORAGE_KEY]: [] });
  }

  async set(items: chrome.tabs.Tab | chrome.tabs.Tab[]) {
    await chrome.storage.local.set({ [STORAGE_KEY]: items });
  }

  async get(): Promise<chrome.tabs.Tab[]> {
    const items = await chrome.storage.local.get({ [STORAGE_KEY]: [] });

    return items[STORAGE_KEY];
  }
}
