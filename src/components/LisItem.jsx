import "./ListItem.scss";
import { FaInbox } from "react-icons/fa";

/*
props = {
    text : string
    icon : <Component/>

} */

function ListItem(props) {
  console.log(props); // props = {text: "custom text"}
  const listClassName = `list__item ${props.active ? "active" : ""}`;
  // active=false => textClassName = "list_item"
  // active=true => textClassName = "list_item active"
  return (
    <li className={listClassName}>
      {props.icon}
      <p className="list__item_text">{props.text}</p>
    </li>
  );
}

// CSS + JS Value == DynamicsClassName
//not - active : className="list__item"
// active : className="list__item active"
export default ListItem;
