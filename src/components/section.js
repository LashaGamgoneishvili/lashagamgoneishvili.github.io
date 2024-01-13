import lasha from "../lasha.png.jpg";
import mirza from "../mirza.1.jpg";
import jano from "../janverd.jpg";
import kniaz from "../kniaz.jpg";
import toko from "../tornike.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export const students = [
  {
    name: "lasha",
    surname: "Gamgoneishvili",
    age: 24,
    status: "student",
    image: lasha,
    id: 1,
  },
  {
    name: "Mirza",
    surname: "Mirzashvili",
    age: 25,
    status: "student",
    image: mirza,
    id: 2,
  },
  {
    name: "Janverdi",
    surname: "Janelidze",
    age: 27,
    status: "student",
    image: jano,
    id: 3,
  },
  {
    name: "Kniaz",
    surname: "Tamoian",
    age: 31,
    status: "student",
    image: kniaz,
    id: 4,
  },
  {
    name: "Tornike",
    surname: "Jikia",
    age: 33,
    status: "student",
    image: toko,
    id: 5,
  },
];

let selectedStudent = "";

export default function Section({ onStudentId }) {
  const [person, setPerson] = useState(students[0]);
  const [id, setId] = useState(0);

  function handleSetPerson(id) {
    selectedStudent = students.filter((student) => student.id === id);
    setId(id);
    setPerson(selectedStudent[0].name);
    console.log(person);
  }
  onStudentId = id;

  return (
    <div className="section" key={students.id}>
      {students.map((student) => (
        <div className="img-container" key={students.id}>
          <div className="student-container" key={students.id}>
            <div className="student" key={students.id}>
              <img src={student.image} alt="student" key={students.id}></img>
            </div>
            <div className="about-student" key={students.id}>
              <p key={students.id}>{student.surname}</p>
              <p key={students.id}>{student.name}</p>
              <p key={students.id}>Age: {student.age}</p>
              <p key={students.id}>Status: {student.status}</p>
              <div className="home-sci" key={students.id}>
                <a
                  href="https://www.facebook.com/lasha.gamgoneishvili.3"
                  target="_blank"
                  rel="noreferrer"
                  className="facebook"
                  key={students.id}
                >
                  <FontAwesomeIcon icon={faFacebook} key={students.id} />
                </a>
                <a
                  href="https://www.instagram.com/lasha_.g.a._/"
                  target="_blank"
                  rel="noreferrer"
                  className="instagram"
                  key={students.id}
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="instagram"
                    key={students.id}
                  />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="twit"
                  key={students.id}
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="twitter"
                    key={students.id}
                  />
                </a>
              </div>
              <div
                className="read-more"
                onClick={() => handleSetPerson(student.id)}
                key={students.id}
              >
                <a href={`/${person}`} targer="_blank" rel="noopener">
                  Read-More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { selectedStudent };
