import React, { useEffect, useState } from "react";
import formImageTwo from "../../images/ekom-sign.png";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";

const StepEight = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(58.1);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 8.3;

        return newValue;
      });
    }, 200);
  }, []);

  const myCallBack = (statefromchild) => {
    formData.StepEight = statefromchild;
  };

  return (
    <div className="form">
      <p className="form-step-2">Wie viel Eigenkapital bringen Sie ein?</p>

      <div className="button-container">
        <Slider
          left_text="0 €"
          right_text="250.000 €"
          value="50000"
          min="0"
          max="250000"
          step={5000}
          callBackFromParent={myCallBack}
        />
        <div className="button-align">
          <Button
            variant="primary"
            onClick={() => {
              console.log(formData);
              next();
            }}
            value="Weiter"
          >
            Weiter
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

export default StepEight;
