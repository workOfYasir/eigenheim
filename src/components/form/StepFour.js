import React, { useEffect, useState } from "react";
import formImageTwo from "../../images/ekom-sign.png";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";

const StepThree = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(16.6);

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
        Wie ist der aktuelle Stand der Immobiliensuche?
      </p>

      <div className="button-container">
        <div className="button-align">
          <Button
            variant="primary"
            onClick={() => {
              formData.StepFour = "Noch nicht in Planung";
              next();
              console.log(formData);
            }}
            value="Noch nicht in Planung"
          >
            Noch nicht in Planung
          </Button>
          <br></br>
          <Button
            variant="primary"
            onClick={() => {
              formData.StepFour = "Grundstück gefunde";
              next();
              console.log(formData);
            }}
            value="Grundstück gefunden"
          >
            Grundstück gefunden
          </Button>
          <br></br>
          <Button
            variant="primary"
            onClick={() => {
              formData.StepFour = "Grundstück vorhanden";
              next();
              console.log(formData);
            }}
            value="Grundstück vorhanden"
          >
            Grundstück vorhanden
          </Button>
          <br></br>
          <Button
            variant="primary"
            onClick={() => {
              formData.StepFour = "Notartermin geplant";
              next();
              console.log(formData);
            }}
            value="Notartermin geplant"
          >
            Notartermin geplant
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
