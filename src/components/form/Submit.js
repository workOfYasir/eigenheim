import React,{useEffect} from "react";
const Submit = ({ navigation }) => {
  
  React.useEffect(() => {
    setTimeout(() => {
     next()
    }, 10000);
  });
  
  const { next } = navigation;
  return (
    <div className="navigation-description">
      <h3 className="navigation-h3-text">Vielen Dank für Ihr Vertrauen! Wir melden uns in Kürze bei Ihnen.</h3>
     
    </div>
  );
};

export default Submit;