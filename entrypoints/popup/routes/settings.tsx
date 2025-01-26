import { Button } from "@/components/button";
import { createMemoryHistory } from "@solidjs/router";

interface SettingsProps {
  history: ReturnType<typeof createMemoryHistory>
}

function Settings(props: SettingsProps) {
  const toHome = () => {
    props.history.set({ value: "/" });
  };

  return (<>
    <div>SettingsPage</div>
    <Button onClick={toHome}>Home</Button>
  </>);
}

export { Settings };
