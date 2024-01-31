export default function TapButton({children, onClick}) {


  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}
