import { Tab } from "@/types/tab";

interface ITabService {
  openTab: (url: string) => void
  closeTab: (tabId: number) => void
  getActiveTab: () => Promise<Tab>
  getOpenedTabs: () => Promise<Tab[]>
}

export class TabService implements ITabService {
  async openTab(url: string) {
    await chrome.tabs.create({ url });
  }

  async closeTab(tabId: number) {
    await chrome.tabs.remove(tabId);
  }

  async getActiveTab() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab;
  }

  async getOpenedTabs() {
    return await chrome.tabs.query({ currentWindow: true });
  }
}
