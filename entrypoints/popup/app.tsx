import {createMemoryHistory, MemoryRouter, Route} from "@solidjs/router";
import {Suspense} from "solid-js";
import "~/assets/tailwind.css";

import {Index} from "@/entrypoints/popup/routes";
import {Settings} from "@/entrypoints/popup/routes/settings";

export default function App() {
  const history = createMemoryHistory();

  return (<>
    <MemoryRouter
      history={history}
      root={(props) => <Suspense>{props.children}</Suspense>}
    >
      <Route path="/" component={() => <Index history={history}/>}/>
      <Route path="/settings" component={() => <Settings history={history}/>}/>
    </MemoryRouter>
  </>);
}
