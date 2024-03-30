import Button from "./Button";

const secondaryButtons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return <Button key={text}>{text}</Button>;
      })}
      {/* <Button>Mark all as complete</Button>
      <Button>Mark all as incomplete</Button>
      <Button>Reset to initial</Button>
      <Button>Remove all items</Button> */}
    </section>
  );
}
