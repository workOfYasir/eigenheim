import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import MultiStepForm from "./components/form/MultiStepForm"


function App() {
  return (
    <div>
   <Header />
   <div className="site_wrapper">
    <div className="wrraper_header">
      <h2 className="form_header">Kostenlose Finanzierungsangebote einholen</h2>
    </div>
   <MultiStepForm />
   </div>
   <Footer />
   </div>
  );
}

export default App;
