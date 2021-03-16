import { useEffect, useState } from "react";
import EstateDetail from "./EstateDetail";

function EstatesCompare(props) {
  const [firstEstate, setFirstEstate] = useState(null);
  const [secondEstate, setSecondEstate] = useState(null);

  function fetchComparedata() {
    props.compareIds.forEach(async (id, index) => {
      const response = await fetch(
        `https://estate-comparison.codeboot.cz/detail.php?id=${id}`
      );
      const data = await response.json();
      if (index === 0) {
        setFirstEstate(data);
      } else {
        setSecondEstate(data);
      }
    });
  }

  useEffect(() => {
    fetchComparedata();
  }, []);

  return (
    <div className="estate__compare">
      {firstEstate && secondEstate && (
        <>
          <EstateDetail estate={firstEstate} estateToCompare={secondEstate} />
          <EstateDetail estate={secondEstate} estateToCompare={firstEstate} />
        </>
      )}
    </div>
  );
}

export default EstatesCompare;
