export default function Button({ onClick, buttonType, children }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType !== "primary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
