import "./featuredList.scss";

export default function FeaturedList({ item, active, setSelect }) {
  return (
    <li className={active ? "active" : ""} onClick={() => setSelect(item.id)}>
      {item.title}
    </li>
  );
}
