import "./App.css";
import Header from "./components/Header";

/* loggedIn prop for <Header /> set to true for now.
  We are not sure where that piece of state will come from yet.
*/

function App() {
  return (
    <div className="App">
      <Header loggedIn={true} />
    </div>
  );
}

export default App;
