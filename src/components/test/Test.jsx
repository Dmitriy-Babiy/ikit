import AnswerOption from "../answer-option/AnswerOption";
import "./Test.scss";

export default function Test({
  questions,
  step,
  question,
  onClickVariant,
  isShowHelper,
}) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <div className="test__wrapper">
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"></div>
      </div>
      <div className="test__img">
        {question.img ? <img src={question.img} alt="" /> : ""}
      </div>
      <div className="test__title">
        <h2>{question.title}</h2>
      </div>
      <div className="test__question">
        <ul>
          {question.variants.map((text, index) => (
            <AnswerOption
              mt={10}
              key={index}
              text={text}
              index={index}
              onClickVariant={onClickVariant}
            />
          ))}
        </ul>
      </div>
      {isShowHelper ? (
        <div>
          <hr />
          <div className="test__helper">
            <span>Подсказка:</span>
            {question.helper}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
