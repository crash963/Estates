import { useEffect, useState } from "react";

function EstatePreview(props) {
  const { name_extracted, locality } = props.estate;
  const [clicked, setClicked] = useState("");

  function handleClick(event) {
    event.preventDefault();
    if (props.compareIds.length < 2) {
      if (props.compareIds.length >= 1) {
        setClicked("selection__b");
        props.setCompareIds([...props.compareIds, props.estate.id]);
      } else {
        setClicked("selection__a");
        props.setCompareIds([props.estate.id]);
      }
    }
  }

  useEffect(() => {
    if (props.compareIds.length === 0) {
      setClicked("");
    }
  }, [props.compareIds]);

  return (
    <div
      className={`estate__preview ${clicked && clicked}`}
      onClick={handleClick}
    >
      {clicked === "selection__b" && <p className="selection__b--letter">B</p>}
      {clicked === "selection__a" && <p className="selection__a--letter">A</p>}
      <img src={props.estate.images[0]} alt={`${locality}-img`} />
      <p>{`${name_extracted} ${locality}`}</p>
    </div>
  );
}

export default EstatePreview;
