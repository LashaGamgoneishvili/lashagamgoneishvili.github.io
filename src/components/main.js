import Header from "./header";
import Section from "./section";
import Footer from "./footer";
import { students } from "./section";

export default function Main() {
  return (
    <>
      <Header key={students.id} />
      <Section key={students.id} />
      <Footer key={students.id} />
    </>
  );
}
