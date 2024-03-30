export default function Button({ type, children }) {
  return (
    <button className={`btn ${type !== "primary" ? "btn--secondary" : ""}`}>
      {children}
    </button>
  );
}
