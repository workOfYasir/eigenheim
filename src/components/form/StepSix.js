import React, { useState, useEffect } from "react";
import formImageTwo from "../../images/ekom-sign.png";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";

const StepSix = ({ setForm, formData, navigation }) => {
  const { previous, next } = navigation;
  const { StepSix } = formData;
  const [value1, setValue] = useState(41.5);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 8.3;

        return newValue;
      });
    }, 200);
  }, []);

  const myCallBack = (statefromchild) => {
    formData.StepSix = statefromchild;
  }

  return (
    <div className="form">
      <p className="form-step-2">Wie hoch ist der gewünschte Finanzierungsbetrag?</p>

      <div className="button-container">
        <Slider
          left_text="50.000 €"
          right_text="1.000.000 €"
          value="500000"
          min="0"
          max="1000000"
          step="10000"
          callBackFromParent={myCallBack}
        />
        <div className="button-align">
          <Button variant="primary" value="Weiter"
          onClick={() => {
            next()
            
            console.log(formData)
          }}
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
            value={value1}
            max={100}
          />
        </div>
      </div>

      <img src={formImageTwo} alt="img" className="image-cover" />
    </div>
  );
};

export default StepSix;
