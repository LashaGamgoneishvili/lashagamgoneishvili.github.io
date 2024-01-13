import { useState } from "react";
import mirza from "../mirza.1.jpg";
import mirzaqr from "./mirza-qr.png";
import maillqr from "./jano-mail-qr.png";
import {
  AiFillPhone,
  AiFillPicture,
  AiFillMail,
  AiOutlineQrcode,
  AiFillFire,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Janvredi() {
  let [like, setLike] = useState(0);
  let [popup, setPopup] = useState("popup");
  let [overlay, setOverlay] = useState("hidden");
  let [qr, setQr] = useState("qr");
  let [mail, setMail] = useState("mail");

  function handleLike() {
    setLike((like += 1));
    // localStorage.setItem(like, (like += 1));
    // console.log(localStorage);
  }

  function handlePopup() {
    setPopup((popup) => (popup = "popup active"));
    setOverlay((x) => (x = "overlay"));
  }

  function handleQr() {
    setQr((code) => (code = "active qr"));
    setOverlay((x) => (x = "overlay"));
  }

  function handleMail() {
    setMail((mail) => (mail = "mail active"));
    setOverlay((x) => (x = "overlay"));
  }

  function handleClose() {
    setPopup((popup) => (popup = "popup"));
    setMail((mail) => (mail = "mail"));
    setOverlay((x) => (x = "hidden"));
    setQr((code) => (code = "hidden"));
  }

  return (
    <>
      <main className="about-container">
        <div className="about-img-container">
          <img src={mirza} alt="Jano's" />
        </div>
        <div className="about-about-me">
          <h1>Mirza Mirzashvili</h1>
          <p>
            <TextExpander collapsedNumWords={10}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique aut hic deserunt ex quod dignissimos, incidunt iste
              voluptatibus! Molestiae eum omnis incidunt, cupiditate accusamus
              quam totam beatae. Quaerat, aut exercitationem. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Ad vel mollitia fuga
              sapiente nesciunt consequuntur accusamus minus molestias
              cupiditate ducimus similique magni, assumenda ullam. Quaerat quos
              nesciunt praesentium in ea! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Id quas eaque ad minus. Tempora,
              inventore dolore quibusdam iusto sed explicabo et! Harum sed
              delectus commodi fuga inventore ducimus aut voluptatum.
            </TextExpander>
          </p>
          <div className="about-icons-container">
            <a
              href="https://www.facebook.com/David.Davidd91"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="react-icons about-facebook" />
            </a>

            <a
              className="about-icon"
              href="https://www.instagram.com/mirzashvili77/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="react-icons about-instagram" />
            </a>
            <a
              className="about-icon"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="react-icons about-twitter"
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
            <div
              className="call icon"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePopup}
            >
              <AiFillPhone className="react-icons" />
            </div>
            <div
              className="image-outline icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillPicture className="react-icons" />
            </div>
            <div className="circle-outline icon">
              <AiFillMail className="react-icons" onClick={handleMail} />
            </div>
            <div className="musical-notes icon">
              <a
                href="https://www.youtube.com/watch?v=xbIG_b2IMO0"
                rel="noopener noreferrer"
              >
                <AiFillYoutube className="react-icons" />
                {/* <AiOutlinePlayCircle className="react-icons" target="_blank" /> */}
              </a>
            </div>
            <div className="qr-code icon">
              <AiOutlineQrcode className="react-icons" onClick={handleQr} />
            </div>
          </div>
          <div div className="about-footer">
            <div className="about-special-icon">
              <AiFillFire
                className="react-icons"
                onClick={handleLike}
              ></AiFillFire>
              <div id="about-likes" value={like}>
                {like}
              </div>
              <span
                style={{
                  backgroundColor: "#49a9c7",
                  borderRadius: "8px",
                  color: "#fff",
                  padding: "10px",
                }}
              >
                Hit the fire
              </span>
            </div>
            <div className="about-back-button">
              <a href="/">Back</a>
            </div>
            <button className="reset">reset</button>
          </div>
        </div>
      </main>
      <div class={popup}>
        <button class="button" onClick={handleClose}>
          &#10005;
        </button>
        <p style={{ cursor: "pointer" }}>+49 177 4591214</p>
      </div>
      <div class={qr}>
        <button class="button" onClick={handleClose}>
          &#10005;
        </button>
        <img src={mirzaqr} alt="Qr-Code" />
      </div>

      <div class={mail}>
        <button class="button" onClick={handleClose}>
          &#10005;
        </button>
        <div className="inside-mailbox">
          <h1>mirzamirzashvili@gmail.com</h1>
          <img src={maillqr} alt="Qr-Code" />
        </div>
      </div>

      <div class={overlay} onClick={handleClose}></div>
    </>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
}) {
  const [isExpended, setIsExpended] = useState(expanded);
  const displayText = isExpended
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpended((exp) => !exp)} style={buttonStyle}>
        {isExpended ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
