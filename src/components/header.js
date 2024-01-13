import logo from "../DHL-Logo.png";
import { students } from "./section";

export default function Header() {
  return (
    <header className="header" key={students.id}>
      <img src={logo} alt="DHL logo" key={students.id} />
    </header>
  );
}
