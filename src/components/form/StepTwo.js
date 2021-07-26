import React, { useEffect, useState } from "react";
import formImageTwo from "../../images/ekom-sign.png";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";

const StepTwo = ({ setForm, formData, navigation }) => {
  const { StepOne } = formData;

  const { previous, next } = navigation;
  const [value, setValue] = useState(0);

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
      <p className="form-step-2">Was möchten Sie finanzieren?</p>

      <div className="button-container">
        <div className="button-align">
          <Button
            variant="primary"
            name="StepOne"
            onClick={() => {
              formData.StepTwo = "Neubau einer Immobilie"
              next()
              console.log(formData)
            }}
            
          >
            Neubau einer Immobilie
          </Button>
          <br></br>
          <Button
              variant="primary"
              name="StepOne"
              onClick={() => {
                formData.StepTwo = "Kauf einer Immobilie"
                next()
                console.log(formData)
              }}
            
            
          >
            Kauf einer Immobilie
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

export default StepTwo;
