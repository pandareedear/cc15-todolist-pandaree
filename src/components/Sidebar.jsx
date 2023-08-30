import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <sidebar className="sidebar">
      <div className="sidebar__genericBar">
        <div>
          <a href="#" className="genericBar__inbox">
            <FaInbox />
            Inbox
          </a>
        </div>
        <div>
          <a href="#" className="genericBar__today">
            <FaCalendar />
            Today
          </a>
        </div>
        <div>
          <a href="#" className="genericBar__next7Days">
            <FaCalendarAlt />
            Next 7 Days
          </a>
        </div>
      </div>
      <div className="sidebar__projectsBar">
        <div className="projectsBar__accordion">
          <FaChevronDown />
          Projects
          <div className="accordion__1">
            <a href="#" className="work">
              <FaInbox />
              Work
            </a>
          </div>
          <div className="accordion__2">
            <a href="#" className="home">
              <FaInbox />
              Home
            </a>
          </div>
        </div>
      </div>
    </sidebar>
  );
}

export default Sidebar;
