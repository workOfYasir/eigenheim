import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import StepEight from "./StepEight";
import StepNine from "./StepNine";
import StepTen from "./StepTen";
import StepEleven from "./StepEleven";
import StepTwelve from "./StepTwelve";
import StepThirteen from "./StepThirteen";
import Submit from "./Submit";

import "./styles.css";

const steps = [
  { id: "StepOne" },
  { id: "StepTwo" },
  { id: "StepThree" },
  { id: "StepFour" },
  { id: "StepFive" },
  { id: "StepSix" },
  { id: "StepSeven" },
  { id: "StepEight" },
  { id: "StepNine" },
  { id: "StepTen" },
  { id: "StepEleven" },
  { id: "StepThirteen" },
  { id: "StepTwelve" },
  { id: "Submit" },
];

const defaultData = {
  StepTwo: "",
  StepThree: "",
  StepFour: "",
  StepFive: "",
  StepSix: "500000",
  StepSeven: "25000",
  StepEight: "50000",
  StepNine: "",
  StepTen: "",
  Day: "1",
  Month: "1",
  Year: "1970",
  firstName: "",
  lastName: "",
  address : "",
  postcode : "",
  place : "",
  email: "",
  phone: "",
};

const MultiStepForm = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "StepOne":
      return <StepOne {...props} />;
    case "StepTwo":
      return <StepTwo {...props} />;
    case "StepThree":
      return <StepThree {...props} />;
    case "StepThree":
      return <StepThree {...props} />;
    case "StepFour":
      return <StepFour {...props} />;
    case "StepFive":
      return <StepFive {...props} />;
    case "StepSix":
      return <StepSix {...props} />;
    case "StepSeven":
      return <StepSeven {...props} />;
    case "StepEight":
      return <StepEight {...props} />;
    case "StepNine":
      return <StepNine {...props} />;
    case "StepTen":
      return <StepTen {...props} />;
    case "StepEleven":
      return <StepEleven {...props} />;
    case "StepThirteen":
      return <StepThirteen {...props} />;
    case "StepTwelve":
      return <StepTwelve {...props} />;
    case "Submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
