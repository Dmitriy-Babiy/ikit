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
        <div>
          <ControlTest ChangeIsTestShow={ChangeIsTestShow} />
        </div>
      ) : (
        <EducationalText ChangeIsTestShow={ChangeIsTestShow} />
      )}
    </div>
  );
}
