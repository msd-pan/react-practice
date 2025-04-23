import "./App.css";
import Header from "@/components/header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
};

export default App;
