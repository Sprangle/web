import { Link } from "react-router-dom";
import strings from "../i18n/definitions";

export default function StudentSpecificSidebarOptions({
  resetSidebarToDefault,
  user,
  setIsOnStudentSide,
}) {
  const is_teacher = user.is_teacher === "true" || user.is_teacher === true;
  const new_site = process.env.REACT_APP_NEW_TEACHER_SITE === "true";

  return (
    <>
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

      {!new_site && is_teacher && (
        // Old TD
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

      {new_site && is_teacher && (
        // New TD
        <div className="navigationLink">
          <Link to="/teacher/classes" onClick={resetSidebarToDefault}>
            <small>{strings.teacherSite}</small>
          </Link>
        </div>
      )}
    </>
  );
}
