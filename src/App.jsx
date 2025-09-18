import { Suspense } from "react";
import "./App.css";
import Country from "./assets/components/Countries/Countries";
const countriesData = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h1>Countries Loading...</h1>}>
        <Country countriesData={countriesData}></Country>
      </Suspense>
    </>
  );
}

export default App;
