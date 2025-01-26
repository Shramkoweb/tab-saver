import { JSX } from "solid-js";

interface ButtonProps {
  onClick: () => void
  children: JSX.Element
}

function Button(props: ButtonProps) {
  return <button onclick={props.onClick} type='button' class="btn">{props.children}</button>;
}

export { Button };
