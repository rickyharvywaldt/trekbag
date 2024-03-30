import { SECONDARYBUTTONS } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {SECONDARYBUTTONS.map((text) => {
        return <Button key={text}>{text}</Button>;
      })}
      {/* <Button>Mark all as complete</Button>
      <Button>Mark all as incomplete</Button>
      <Button>Reset to initial</Button>
      <Button>Remove all items</Button> */}
    </section>
  );
}
