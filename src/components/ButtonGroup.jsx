import Button from "./Button";

export default function ButtonGroup({
  handleMarkAllComplete,
  handleMarkAllIncomplete,
  handleResetItems,
  handleRemoveAllItems,
}) {
  const secondaryButtons = [
    { text: "Mark all as complete", onClick: handleMarkAllComplete },
    { text: "Mark all as incomplete", onClick: handleMarkAllIncomplete },
    { text: "Reset to initial", onClick: handleResetItems },
    { text: "Remove all items", onClick: handleRemoveAllItems },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => {
        return (
          <Button
            onClick={button.onClick}
            key={button.text + button.onClick.toString()}
          >
            {button.text}
          </Button>
        );
      })}
    </section>
  );
}
