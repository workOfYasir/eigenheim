import React, { useEffect, useState } from "react";
import formImageTwo from "../../images/ekom-sign.png";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";

const StepThree = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(66.4);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 8.3;

        return newValue;
      });
    }, 200);
  }, []);

  return (
    <div className="form">
      <p className="form-step-2">
        In welchem Beschäftigungsverhältnis stehen Sie?"
      </p>

      <div className="button-container">
        <div className="button-align">
          <Button
            variant="primary"
            onClick={() => {
              formData.StepNine = "Angestellte/r";
              next();
              console.log(formData);
            }}
            value="Angestellte/r"
          >
            Angestellte/r
          </Button>
          <br></br>
          <Button
            variant="primary"
            onClick={() => {
              formData.StepNine = "Freiberufler/Selbständiger "
              next();
              console.log(formData);
            }}
            value="Freiberufler/Selbständiger"
          >
            Freiberufler/Selbständiger
          </Button>
          <br></br>
          <Button
            variant="primary"
            onClick={() => {
              formData.StepNine = "Arbeitssuchend";
              next();
              console.log(formData);
            }}
            value="Arbeitssuchend"
          >
            Arbeitssuchend
          </Button>
        </div>
      </div>

      <div className="progressbar-container">
        <div className="progressbar-align">
          <ProgressBar
            color={"#577B0A"}
            width={"300px"}
            value={value}
            max={100}
          />
        </div>
      </div>

      <img src={formImageTwo} alt="img" className="image-cover" />
    </div>
  );
};

export default StepThree;
