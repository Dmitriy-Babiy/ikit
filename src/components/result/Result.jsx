import Button from "../../ui/button-view/Button";
import "./Result.scss";

export default function Result({ questions, correct, onClickRestart, ChangeIsTestShow }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="img"/>
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <Button mt={15} title={"Попробовать снова"} fun={onClickRestart} />
      <Button mt={15} title={"Назад"} fun={ChangeIsTestShow} />
    </div>
  );
}
