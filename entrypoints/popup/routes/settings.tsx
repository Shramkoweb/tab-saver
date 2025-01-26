import { createMemoryHistory } from "@solidjs/router";

import { ROUTER_PATH } from "@/lib/constants";
import { Button } from "@/components/button";

interface SettingsProps {
  history: ReturnType<typeof createMemoryHistory>
}

function Settings(props: SettingsProps) {
  const handleHomeClick = () => {
    props.history.set({ value: ROUTER_PATH.Home });
  };

  return (<div class='bg-blue-700 w-full min-w-[600px]'>
    <div>SettingsPage</div>
    <Button onClick={handleHomeClick}>Home</Button>
  </div>);
}

export { Settings };
