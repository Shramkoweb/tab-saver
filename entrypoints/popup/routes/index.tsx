import { createMemoryHistory } from "@solidjs/router";

import { Button } from "@/components/button";

interface IndexPageProps {
  history: ReturnType<typeof createMemoryHistory>
}

function Index(props: IndexPageProps) {
  const toSettings = () => {
    props.history.set({ value: "/settings" });
  }

  return (<>
      <div>IndexPage</div>
      <Button onClick={toSettings}>Settings</Button>
    </>);
}

export { Index };
