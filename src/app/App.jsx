import "./App.scss";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import Header from "../components/Header";
import ListItem from "../components/LisItem";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <ul className="list">
              {/* <li className="list__item">
                <FaInbox className="list__item__icon" />
                <p className="list_item_text">Inbox</p>
              </li>
              <li className="list__item">
                <FaCalendar className="list__item__icon" />
                <p className="list_item_text">Today</p>
              </li>
              <li className="list__item">
                <FaCalendarAlt className="list__item__icon" />
                <p className="list_item_text">Next 7 Days</p>
              </li> */}
              <ListItem
                text="Inbox"
                icon={<FaInbox className="list__item__icon" />}
              />
              <ListItem
                text="Today"
                icon={<FaCalendar className="list__item__icon" />}
              />
              <ListItem
                text="Next 7 Days"
                icon={<FaCalendarAlt className="list__item__icon" />}
              />
            </ul>
          </section>
          <section className="sidebar__category">2</section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
