function EstateDetail(props) {
  const { estate, estateToCompare } = props;

  const priceComparison =
    Number(estate.prize_czk) < Number(estateToCompare.prize_czk)
      ? "compare__better"
      : "compare__worse";
  const floorComparison =
    Number(estate.building_area) > Number(estateToCompare.building_area)
      ? "compare__better"
      : "compare__worse";

  const landComparison =
    Number(estate.land_area) > Number(estateToCompare.land_area)
      ? "compare__better"
      : "compare__worse";

  console.log(estate);
  return (
    <div className="estate__detail__container">
      <img src={estate.images[0]} alt={`${estate.locality}-img`} />
      <div className="estate__detail__info">
        <div className="estate__detail__info--name">{estate.name}</div>
        <div className={`estate__detail__info--box ${priceComparison}`}>
          <h4>Price</h4>
          <p>{`${estate.prize_czk} Kč`}</p>
        </div>
        <div className="estate__detail__info--box">
          <h4>Locality</h4>
          <p>{estate.locality}</p>
        </div>
        <div className={`estate__detail__info--box ${floorComparison}`}>
          <h4>Floor area</h4>
          <p>{estate.building_area}</p>
        </div>
        <div className={`estate__detail__info--box ${landComparison}`}>
          <h4>Land area</h4>
          <p>{estate.land_area}</p>
        </div>
      </div>
      {estate.company_logo && estate.company_name && (
        <div className="estate__detail__info--company">
          <img src={estate.company_logo} alt={`${estate.company_name}-img`} />
          <p>{estate.company_name}</p>
        </div>
      )}
    </div>
  );
}

export default EstateDetail;
