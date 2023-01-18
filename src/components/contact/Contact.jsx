import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [mssg, setMssg] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();
    setMssg(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://www.pinclipart.com/picdir/big/571-5711317_negotiation-clipart.png"
          alt=""
        />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handlesubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">submit</button>
          {mssg && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </div>
  );
}
