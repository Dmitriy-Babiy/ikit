import "./App.scss";
import ControlTest from "./pages/control-test/ControlTest";
import EducationalText from "./pages/educational-text/EducationalText";
import { useMemo, useState } from "react";
import shuffle from "./utils/shuffle";
import { staticQuestions } from "./mocks/questions";
export default function App() {
  const [isTestShow, setIsTestShow] = useState(false);

  const ChangeIsTestShow = () => {
    setIsTestShow(!isTestShow);
  };

  const questions = useMemo(() => {
    return shuffle(staticQuestions).slice(0, 10);
  }, [isTestShow]);

  return (
    <div>
      {isTestShow ? (
        <ControlTest
          ChangeIsTestShow={ChangeIsTestShow}
          questions={questions}
        />
      ) : (
        <EducationalText ChangeIsTestShow={ChangeIsTestShow} />
      )}
    </div>
  );
}
