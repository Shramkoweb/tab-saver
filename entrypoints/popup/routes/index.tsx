import { createMemoryHistory } from "@solidjs/router";
import { onMount } from "solid-js";

/*TODO: add  sorting linter */
import { TabService } from "@/lib/services/tab";
import { ROUTER_PATH } from "@/lib/constants";
import { StorageService } from "@/lib/services/storage";

import { Tab } from "@/types/tab";

import { Button } from "@/components/button";

interface IndexPageProps {
  history: ReturnType<typeof createMemoryHistory>
}

function Index(props: IndexPageProps) {
  /*
  * TODO: Right now I have chrome.storage service, vut in future I want change it to indexeddb
  *  without any hustle. Think about architecture and layers
  *  */
  const tabService = new TabService();
  const storageService = new StorageService()
  const [tabs, setTabs] = createSignal<Tab[]>();

  onMount(async () => {
    console.log(new Intl.DateTimeFormat('ua', {
      year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric",
    }).format(new Date()));
    const activeTab = await tabService.getActiveTab();
    const allTabs = await tabService.getOpenedTabs();
    const storage = await storageService.get();
    console.log({ allTabs, activeTab, storage })
    const { savedTabs } = await chrome.storage.local.get(['savedTabs'])
    setTabs(savedTabs)
  })

  const handleSettingsClick = () => {
    props.history.set({ value: ROUTER_PATH.Settings });
  }

  return <div>
    <ul class='menu bg-blue-700 w-full min-w-[600px]'>
      {/* TODO: Add fallback component */}
      <For each={tabs()} fallback={<p>Loading...</p>}>{link => {
        return <li>
          <a href={link.url} target='_blank'>
            <img class='w-4 h-4' src={link.favIconUrl} alt=""/>
            <span class='text-ellipsis overflow-hidden w-full whitespace-nowrap'>{link.title}</span>
          </a>
        </li>
      }}</For>
    </ul>

    <Button onClick={handleSettingsClick}>Settings</Button>
  </div>;
}

export { Index };
