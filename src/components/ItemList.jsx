export default function ItemList({
  items,
  handleToggleItem,
  handleDeleteItem,
}) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleToggleItem={handleToggleItem}
            handleDeleteItem={handleDeleteItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, handleToggleItem, handleDeleteItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
