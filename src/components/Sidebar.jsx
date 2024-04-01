import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleMarkAllComplete,
  handleMarkAllIncomplete,
  handleResetItems,
  handleRemoveAllItems,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleMarkAllComplete={handleMarkAllComplete}
        handleMarkAllIncomplete={handleMarkAllIncomplete}
        handleResetItems={handleResetItems}
        handleRemoveAllItems={handleRemoveAllItems}
      />
    </div>
  );
}
