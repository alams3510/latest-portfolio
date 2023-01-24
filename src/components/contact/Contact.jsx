import "./contact.scss";
export default function Contact() {
  

  
  return (
    <div className="contact" id="contact">
      
      <div className="left">
       
        <img
          src="https://w7.pngwing.com/pngs/1005/526/png-transparent-milkshake-handshake-shake-hands-angle-white-text.png"
          alt=""
        />
      </div>
      <div className="right">
        <a href="/Resume-updated.pdf" download='/Resume-updated.pdf'>
        <button className="button" >Download CV</button>
        </a>
        <form action="https://formspree.io/f/myyaznbv"
        method="POST"
        >
          <input name="username" type="text" placeholder="username" required autoComplete="off" />
          <input name="email" type="email" placeholder="Email" autoComplete="off" />
          <textarea name="message" type='text' cols='30'rows='6' placeholder="Message" autoComplete="off" ></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
      
    </div>
  );
}
