import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const questionPrecedente = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const quesionSuivante = questionNumberInt + 1;
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${questionPrecedente}`}>Précedent</Link>
      {questionNumberInt === 10 ? (
        <Link to="/results">Resultats</Link>
      ) : (
        <Link to={`/survey/${quesionSuivante}`}>Suivant</Link>
      )}
    </div>
  );
}

export default Survey;
