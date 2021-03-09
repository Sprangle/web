export default function Contributors() {
  function member(name, role) {
    return (
      <>
        <small>
          <b>{name}</b>
          <br />
          {role}
        </small>
        <br />
        <br />
      </>
    );
  }
  return (
    <>
      <h1>Contributors</h1>

      {member("Mircea Lungu", "Production, maintenance")}

      {member("Katrine Iversen", "UI Modernization")}

      {member("Konstantina Argyropoulou", "UI Modernization")}

      {member("Kristin Kallevik", "UI Modernization")}

      {member("Feiko Ritsema", "Topic Browser")}

      {member("Lars Holdijk", "API Design")}

      {member("Dan Chirtoaca", "Universal Multilingual Reader")}

      {member("Alexander Lukjanenkovs", "Learner Feedback")}

      {member("Anca Lungu", "Linguistics")}

      {member("Linus Schwab", "Android RSS Feed Reader")}

      {member("Jeroen van Engen", "Education Feedback")}

      {member("Mads Kristian Brodt Nielsen ", "Teacher Dashboard")}

      {member("Sybren van Vliet", "Forgiving Exercise Feedback")}

      {member("Martin Avagyan", "Language Exercises")}

      {member("Luc van der Brand", "Universal Multilingual Reader")}

      {member("Jorrit Oosterhof", "iOS News Reader")}

      {member("Karan Sethi", "Knowledge Estimator")}

      {member("Pascal Giehl", "Android Development")}

      {member("Simon Marti", "Initial API and Chrome Extension")}

      {member("Wim Gombert", "Education Feedback")}

      {member("Alin Balutoiu", "Performance and Scalability")}

      {member("Jonathan Sparvath", "Teacher Dashboard")}

      {member("Joël Grondman", "Personalized Difficulty Estimator")}

      {member("Carlos Paz", "Knowledge Dashboard")}

      {member("Johan De Jager", "Translation Multiplexer")}

      {member("Ada Lungu", "UX and Web Design")}

      {member("Niels Haan", "Smartwatch Development")}

      {member("Vlad Turbureanu", "Language Exercises")}
    </>
  );
}
