import { students } from "./section.js";
import { selectedStudent } from "./section.js";

export default function About() {
  console.log(selectedStudent);
  return (
    <>
      <h1>{students[1 - 1].name}</h1>
      <h1>{selectedStudent.name}</h1>
    </>
  );
}
