import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ handleAddItem }) {
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

    handleAddItem(itemText);
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
      <Button type="primary">Add to list</Button>
    </form>
  );
}
