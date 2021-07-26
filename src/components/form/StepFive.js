import React, { useEffect, useState } from "react";
import formImageTwo from "../../images/ekom-sign.png";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";

const StepThree = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(33.2);

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
      <p className="form-step-2">Wann möchten Sie finanzieren?</p>

      <div className="button-container">
        <div className="button-align">
          <Button
            variant="primary"
            onClick={() => {
              formData.StepFive = "In weniger als 3 Monaten";
              next();
              console.log(formData);
            }}
            value="In weniger als 3 Monaten"
          >
            In weniger als 3 Monaten
          </Button>
          <br></br>
          <Button
            variant="primary"
            onClick={() => {
              formData.StepFive = " In 3-6 Monaten";
              next();
              console.log(formData);
            }}
            value="In 3-6 Monaten"
          >
            In 3-6 Monaten
          </Button>
          <br></br>
          <Button
            variant="primary"
            onClick={() => {
              formData.StepFive = " In über 6 Monaten";
              next();
              console.log(formData);
            }}
            value="In über 6 Monaten"
          >
            In über 6 Monaten
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
          />{" "}
        </div>
      </div>

      <img src={formImageTwo} alt="img" className="image-cover" />
    </div>
  );
};

export default StepThree;
