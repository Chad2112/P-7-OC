function Location({ props }) {
  // Recuperation de la localisation a l'id voulu
  const location = props.reduce(
    (acc, loc) => (acc.includes(loc.location) ? acc : acc.concat(loc.location)),
    []
  );
  return <h2 className="information__content__location">{location}</h2>;
}

export default Location;
