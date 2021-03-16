import { useState } from "react";
import EstatePreview from "./EstatePreview";

function Estates(props) {
  const [estates, setEstates] = useState([]);

  async function fetchEstatesData() {
    const response = await fetch(
      "https://estate-comparison.codeboot.cz/list.php"
    );
    const data = await response.json();
    setEstates(data.slice(20, 30));
    console.log(data);
  }

  useState(() => {
    fetchEstatesData();
  }, []);

  return (
    <div className="estates__preview__container">
      {estates.map((estate, i) => (
        <EstatePreview
          key={i}
          estate={estate}
          setCompareIds={props.setCompareIds}
          compareIds={props.compareIds}
        />
      ))}
    </div>
  );
}

export default Estates;
