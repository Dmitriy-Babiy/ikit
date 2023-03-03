import AnswerOption from "../answer-option/AnswerOption";
import "./Test.scss";

export default function Test({ questions, step, question, onClickVariant, isShowHelper }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <div className="test__wrapper">
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <div test__question>
        <h1>{question.title}</h1>
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
            {questions[step].title}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
