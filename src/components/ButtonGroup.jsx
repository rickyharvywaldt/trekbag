// import { SECONDARYBUTTONS } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup({
  handleMarkAllComplete,
  handleMarkAllIncomplete,
  handleResetItems,
  handleRemoveAllItems,
}) {
  return (
    <section className="button-group">
      {/* {SECONDARYBUTTONS.map((text) => {
        return (
          <Button handleRemoveAllItems={handleRemoveAllItems} key={text}>
            {text}
          </Button>
        );
      })} */}
      <Button onClick={handleMarkAllComplete}>Mark all as complete</Button>
      <Button onClick={handleMarkAllIncomplete}>Mark all as incomplete</Button>
      <Button onClick={handleResetItems}>Reset to initial</Button>
      <Button onClick={handleRemoveAllItems}>Remove all items</Button>
    </section>
  );
}
