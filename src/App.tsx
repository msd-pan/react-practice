import "./App.css";
import { Header } from "@/components/header/Header";
import { CoreConcepts } from "@/components/CoreConcepts";
import { Examples } from "@/components/Examples";

export const App = () => {
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
