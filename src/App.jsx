import "./App.css";
import ConvertedForm from "./components/currencyForm";

const App = () => {
  return (
    <div className="currency-converter">
      <h2 className="converter-title">Currency Converter</h2>
      <ConvertedForm />
    </div>
  );
};
export default App;
