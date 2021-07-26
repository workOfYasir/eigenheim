import React, { useEffect, useState } from "react";
import formImageTwo from "../../images/ekom-sign.png";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";

const StepThree = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(8.3);

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
      <p className="form-step-2">Wie möchten Sie die Immobilie nutzen?</p>

      <div className="button-container">
        <div className="button-align">
          <Button
            variant="primary"
            onClick={() => {
              formData.StepThree = "Selbst bewohnen";
              next();
              console.log(formData);
            }}
            value="Selbst bewohnen"
          >
            Selbst bewohnen
          </Button>
          <br></br>
          <Button
            variant="primary"
            onClick={() => {
              formData.StepThree = "Teilweise vermieten";
              next();
              console.log(formData);
            }}
            value=" Teilweise vermieten"
          >
            Teilweise vermieten
          </Button>
          <br></br>
          <Button
            variant="primary"
            onClick={() => {
              formData.StepThree= "Vermieten";
              next();
              console.log(formData);
            }}
            value="Vermieten"
          >
            Vermieten
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
