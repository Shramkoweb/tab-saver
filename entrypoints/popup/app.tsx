import { createMemoryHistory, MemoryRouter, Route } from "@solidjs/router";
import { Suspense } from "solid-js";

import { Index } from "@/entrypoints/popup/routes";
import { Settings } from "@/entrypoints/popup/routes/settings";

import "~/assets/tailwind.css";

export default function App() {
  const history = createMemoryHistory();

  return (<>
    <MemoryRouter
      history={history}
      root={(props) => <Suspense>{props.children}</Suspense>}
    >
      {/*TODO: Think about rerender component*/}
      <Route path="/" component={() => <Index history={history}/>}/>
      <Route path="/settings" component={() => <Settings history={history}/>}/>
    </MemoryRouter>
  </>);
}
