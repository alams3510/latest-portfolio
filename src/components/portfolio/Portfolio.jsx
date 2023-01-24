import { useEffect, useState } from "react";
import "./portfolio.scss";
import FeaturedList from "../featuredList/FeaturedList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../Data";

export default function Portfolio() {
  const [select, setSelect] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (select === 1) {
      setData(featuredPortfolio);
    }
    if (select === 2) {
      setData(webPortfolio);
    }
    if (select === 3) {
      setData(designPortfolio);
    }
    if (select === 4) {
      setData(mobilePortfolio);
    }
    if (select === 5) {
      setData(contentPortfolio);
    }
  }, [select]);

  const list = [
    {
      id: 1,
      title: "User Interface",
    },
    {
      id: 2,
      title: "State Mangment",
    },
    {
      id: 3,
      title: "Frontend",
    },
    {
      id: 4,
      title: "Backend",
    },
    {
      id: 5,
      title: "Database",
    },
  ];
  return (
    <div className="portfolio " id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, i) => (
          <FeaturedList
            // className={select && "active"}
            item={item}
            active={select === item.id}
            setSelect={setSelect}
            key={i}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((data, i) => (
          <div className="item" key={data.id}>
            <img src={data.img} alt="" />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
