export default function TabButton({ children, onActive, ...props }) {
  return (
    <li>
      <button className={onActive ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
