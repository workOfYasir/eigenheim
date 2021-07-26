import React, { useEffect, useState } from "react";
import formImageTwo from "../../images/ekom-sign.png";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";

const StepSeven = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(49.8);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 8.3;

        return newValue;
      });
    }, 200);
  }, []);

  const myCallBack = (statefromchild) => {
    formData.StepSeven = statefromchild;
  }

  return (
    <div className="form">
      <p className="form-step-2">Wie hoch sind die geplanten Nebenkosten?</p>
      <p className="form-step-3">
        Grunderwerbssteuer, Notar, Makler - in der Regel ca. 10%
      </p>

      <div className="button-container">
        <Slider
          left_text="0 €"
          right_text="50.000 €"
          value="25000"
          min="0"
          max="50000"
          step={1000}
          callBackFromParent={myCallBack}
        />
        <div className="button-align">
          <Button variant="primary" 
          onClick={()=> {
            console.log(formData)
            next()
            }} value="Weiter">
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

export default StepSeven;
