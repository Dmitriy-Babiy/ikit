import "./App.scss";
import ControlTest from "./pages/control-test/ControlTest";
import EducationalText from "./pages/educational-text/EducationalText";
import { useState } from "react";

export default function App() {
  const [isTestShow, setIsTestShow] = useState(false);

  const ChangeIsTestShow = () => {
    setIsTestShow(!isTestShow);
  };

  return (
    <div>
      {isTestShow ? (
        <ControlTest ChangeIsTestShow={ChangeIsTestShow} />
      ) : (
        <EducationalText ChangeIsTestShow={ChangeIsTestShow} />
      )}
    </div>
  );
}
