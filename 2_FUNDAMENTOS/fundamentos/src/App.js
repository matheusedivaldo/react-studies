//Componentes
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyCOmponent";
import Events from "./components/Events";

//Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React!</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
