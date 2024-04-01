import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { INITIALITEMS } from "../lib/constants";

function App() {
  const [items, setItems] = useState(INITIALITEMS);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleMarkAllComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const handleMarkAllIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  const handleResetItems = () => {
    setItems(INITIALITEMS);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleMarkAllComplete={handleMarkAllComplete}
          handleMarkAllIncomplete={handleMarkAllIncomplete}
          handleResetItems={handleResetItems}
          handleRemoveAllItems={handleRemoveAllItems}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
