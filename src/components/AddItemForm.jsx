import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  const handleChange = (e) => {
    setItemText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={handleChange}
        autoFocus
      />
      <Button buttonType="primary">Add to list</Button>
    </form>
  );
}
