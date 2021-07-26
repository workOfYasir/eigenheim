import React,{useEffect,useState} from "react";
import formImageTwo from '../../images/ekom-sign.png'
import { Button ,ButtonGroup } from 'react-bootstrap';
import ProgressBar from '../progress-bar/ProgressBar'
import Slider from '../slider/Slider'



const StepThree = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(74.7);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue(oldValue => {
        const newValue = oldValue + 8.3;


        return newValue;
      });
    },200);
  }, []);


  return (
    <div className="form">
      
    <p className="form-step-2">Wie hoch ist Ihr monatliches Haushaltsnettoeinkommen?</p>
  

    <div className="button-container">
      <div className="button-align">
      <Button variant="primary"  onClick={() => {
              formData.StepTen = "1000 bis 1500 EUR";
              next();
              console.log(formData);
            }} value="1000 bis 1500 EUR">1000 bis 1500 EUR</Button><br></br>
      <Button variant="primary"  onClick={() => {
              formData.StepTen = "1501 bis 2000 EUR";
              next();
              console.log(formData);
            }} value="1501 bis 2000 EUR">1501 bis 2000 EUR</Button><br></br>
      <Button variant="primary"  onClick={() => {
              formData.StepTen = "2001 - 2500 EUR";
              next();
              console.log(formData);
            }} value="2001 - 2500 EUR">2001 - 2500 EUR</Button><br></br>
      <Button variant="primary"  onClick={() => {
              formData.StepTen = "2501 - 3000 EUR";
              next();
              console.log(formData);
            }} value="2501 - 3000 EUR">2501 - 3000 EUR</Button><br></br>
      <Button variant="primary"  onClick={() => {
              formData.StepTen = "3001 - 3500 EUR";
              next();
              console.log(formData);
            }} value="3001 - 3500 EUR">3001 - 3500 EUR</Button><br></br>
      <Button variant="primary"  onClick={() => {
              formData.StepTen = ">3501 - 4000 EUR";
              next();
              console.log(formData);
            }} value="3501 - 4000 EUR">3501 - 4000 EUR</Button><br></br>
      <Button variant="primary"  onClick={() => {
              formData.StepTen = "Über 4000 EUR";
              next();
              console.log(formData);
            }} value="Über 4000 EUR">Über 4000 EUR</Button>
      </div> 
    </div>
    
    <div className="progressbar-container">
      <div className="progressbar-align">
      <ProgressBar color={"#577B0A"} width={"300px"} value={value} max={100} />
      </div> 
    </div>
    
    
    <img
      src={formImageTwo}
      alt="img"
      className="image-cover"
    />
  </div>
  );
};

export default StepThree;