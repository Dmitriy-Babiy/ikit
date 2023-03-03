import React, { useState } from "react";
import Test from "../../components/test/Test";
import Result from "../../components/result/Result";
import "./ControlTest.scss";
import { questions } from "../../mocks/questions";

export default function ControlTest({ ChangeIsTestShow }) {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [isShowHelper, setIsShowHelper] = useState(false);
  const question = questions[step];

  const onClickVariant = (correct) => {
    if (correct === question.correct) {
      setIsShowHelper(false);
      setCorrect(correct + 1);
      setStep(step + 1);
    } else {
      setIsShowHelper(true);
    }
  };

  const onClickRestart = () => {
    setStep(0);
    setCorrect(0);
  };

  return (
    <div className="control-test-wrapper">
      {step !== questions.length ? (
        <Test
          isShowHelper={isShowHelper}
          questions={questions}
          step={step}
          question={question}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result
          questions={questions}
          correct={correct}
          onClickRestart={onClickRestart}
          ChangeIsTestShow={ChangeIsTestShow}
        />
      )}
    </div>
  );
}
