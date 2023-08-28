import { useState } from "react";
import "./work.scss";

export default function Work() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      icon: "https://cdn.pixabay.com/photo/2017/01/13/01/22/mobile-1976104_640.png",
      title: "Web Social Media App",
      desc: "A complete MERN Stack Application having multiple functionalities.",
      img: "/facebuk.png",
      link: "https://frontend-gbd4.onrender.com/",
    },
    {
      id: 2,
      icon: "https://th.bing.com/th/id/R.a1716c43b327e0b0f511b272bb82ad77?rik=yijtHssHNESsLg&riu=http%3a%2f%2fpngimagesfree.com%2fGlobe%2fglobe_png_satellite-view.png&ehk=sNt81KDuJLAomTtWGSzoSALMtNqZL9ZqovP9IBGc%2bqI%3d&risl=1&pid=ImgRaw&r=0",
      title: "Ecommerce web App",
      desc: "A Shopping Application having Context-API for data flow",
      img: "/shoppingCart.png",
      link: "https://shoppingos.netlify.app/",
    },
    {
      id: 3,
      icon: "https://th.bing.com/th/id/R.164f3e97e43c8104eef513662b414f68?rik=ZPZ%2bvRP7l2Fq2g&riu=http%3a%2f%2fwww.tiverton.ri.gov%2fimg%2fcontent%2ftrees%2fhome_tree.png&ehk=3RbiYQZAiP3Ra%2f%2fyLssAopTmpnTxwVsHFFRxrZGyKPs%3d&risl=&pid=ImgRaw&r=0",
      title: "My Portfolio",
      desc: "My Portfolio having email and Download CV functions.",
      img: "/portfolio.png",
      link: "#",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="wcontainer">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>
                    <a href={d.link}>Projects</a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/leftArrow.png"
        alt=""
        className="arrow left"
        onClick={() => {
          handleClick("left");
        }}
      />
      <img
        src="assets/leftArrow.png"
        alt=""
        className="arrow right"
        onClick={() => {
          handleClick("right");
        }}
      />
    </div>
  );
}
