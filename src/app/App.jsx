import "./App.scss";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import Header from "../components/Header";
import ListItem from "../components/LisItem";
import Lists from "../components/Lists";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoLists from "../components/Todo/TodoLists";

function App() {
  // <ListItem text="Inbox" icon={<FaInbox />} active={true} />
  const generalLists = [
    { id: 1, text: "Inbox", icon: <FaInbox />, active: true },
    { id: 2, text: "Today", icon: <FaCalendar />, active: false },
    { id: 3, text: "Next 7 Days", icon: <FaCalendarAlt />, active: false },
  ];

  const projectLists = [
    { id: 4, text: "Project-A", icon: <FaInbox />, active: true },
    { id: 5, text: "Project-B", icon: <FaInbox />, active: false },
  ];
  // ObjectDetail => <ListItem ... ObjectDetail />
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <Lists data={generalLists} />
            {/* {generalLists.map((obj) => (
                <ListItem
                  key={obj.id}
                  text={obj.text}
                  icon={obj.icon}
                  active={obj.active}
                />
              ))} */}
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
            {/* <ListItem text="Inbox" icon={<FaInbox />} active={true} />
              <ListItem text="Today" icon={<FaCalendar />} active={false} />
              <ListItem
                text="Next 7 Days"
                icon={<FaCalendarAlt />}
                active={false}
              /> */}
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              {/* /*Toggle*/}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active" />
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>

              {/* /**List */}
              <Lists data={projectLists} />
              {/* <ul className="lists">
                {projectLists.map((obj) => {
                  obj.key = obj.id;
                  delete obj.id;
                  return <ListItem {...obj} />;
                })} */}
              {/* {projectLists.map((obj) => (
                  <ListItem key={obj.key} {...obj} />
                ))} */}
              {/* <ListItem text="Project-A" icon={<FaInbox />} active={true} />
                <ListItem text="Project-B" icon={<FaInbox />} active={false} /> */}
              {/* </ul> */}
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">
        <main className="todo__container">
          {/* Header */}
          <TodoHeader />
          {/* CreateTodo */}
          <TodoCreate />
          {/* TodoLists */}
          <TodoLists />
        </main>
      </div>
    </div>
  );
}

export default App;
