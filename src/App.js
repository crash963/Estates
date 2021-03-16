import { useEffect, useState } from "react";
import Estates from "./components/Estates";
import EstatesCompare from "./components/EstatesCompare";
import "./sass/app.scss";

function App() {
  const [compareIds, setCompareIds] = useState([]);

  useEffect(() => {
    console.log(compareIds);
  }, [compareIds]);

  return (
    <div className="App">
      <div className="header">
        <h1>Estate Comparison</h1>
      </div>
      <button
        onClick={() => {
          setCompareIds([]);
        }}
      >
        reset
      </button>
      <Estates setCompareIds={setCompareIds} compareIds={compareIds} />
      {compareIds.length === 2 && <EstatesCompare compareIds={compareIds} />}
    </div>
  );
}

export default App;
