import Button from "../../ui/button-view/Button";
import "./Result.scss";

export default function Result({ onClickRestart, ChangeIsTestShow }) {
  return (
    <div className="result">
      {/* <img src="ikit/img/result.png" alt="img"/> */}
      <img src="./img/result.png" alt="img"/>
      <h2>
        Поздравляем, вы удачно прошли тест, ответив на все вопросы!
      </h2>
      <Button mt={15} title={"Попробовать снова"} fun={onClickRestart} />
      <Button mt={15} title={"Назад"} fun={ChangeIsTestShow} />
    </div>
  );
}
