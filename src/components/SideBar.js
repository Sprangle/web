import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import strings from "../i18n/definitions";

import * as s from "./SideBar.sc";

export default function SideBar(props) {
  const user = useContext(UserContext);
  const [initialSidebarState, setInitialSidebarState] = useState(true);

  function toggleSidebar(e) {
    e.preventDefault();
    setInitialSidebarState(!initialSidebarState);
  }

  function resetSidebarToDefault(e) {
    setInitialSidebarState(true);
  }

  let sidebarContent = (
    <>
      <div className="logo">
        <a href="/articles" rel="external">
          <img
            src="/static/images/zeeguuWhiteLogo.svg"
            alt="Zeeguu Logo - The Elephant"
          />
        </a>
      </div>
      <div className="arrowHolder">
        <span className="toggleArrow" onClick={toggleSidebar}>
          ▲
        </span>
      </div>
      <div className="navigationLink">
        <Link to="/articles" onClick={resetSidebarToDefault}>
          <small>{strings.articles}</small>
        </Link>
      </div>
      <div className="navigationLink">
        <Link to="/words/history" onClick={resetSidebarToDefault}>
          <small>{strings.words}</small>
        </Link>
      </div>
      <div className="navigationLink">
        <Link to="/exercises" onClick={resetSidebarToDefault}>
          <small>{strings.exercises}</small>
        </Link>
      </div>
      <div className="navigationLink">
        <Link to="/user_dashboard" onClick={resetSidebarToDefault}>
          <small>{strings.userDashboard}</small>
        </Link>
      </div>
      {(user.is_teacher === "true" || user.is_teacher === true) && (
        <div className="navigationLink">
          <Link
            target="_blank"
            to="/teacher-dashboard"
            onClick={resetSidebarToDefault}
          >
            <small>{strings.teacherSite}</small>
          </Link>
        </div>
      )}

      <br />
      <div className="navigationLink">
        <Link to="/account_settings" onClick={resetSidebarToDefault}>
          <small>{strings.settings}</small>
        </Link>
      </div>
      <br />
      <div className="navigationLink">
        <Link
          to="/"
          onClick={() => {
            user.logoutMethod();
          }}
        >
          <small>{strings.logout}</small>
        </Link>
      </div>
    </>
  );

  if (!initialSidebarState) {
    return (
      <s.SideBarToggled>
        {sidebarContent}
        <s.MainContentToggled>{props.children}</s.MainContentToggled>
      </s.SideBarToggled>
    );
  }

  return (
    <s.SideBarInitial>
      {sidebarContent}
      <s.MainContentInitial>{props.children}</s.MainContentInitial>
    </s.SideBarInitial>
  );
}
