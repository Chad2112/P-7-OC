function Host({ props }) {
  const host = props.reduce(
    (acc, loc) => (acc.includes(loc.host) ? acc : acc.concat(loc.host)),
    []
  );
  return (
    <div>
      {host.map((host, index) => (
        <div key={index} className="host">
          <span className="host__name">{host.name}</span>
          <img className="host__img" src={host.picture} alt="profile"></img>
        </div>
      ))}
    </div>
  );
}

export default Host;
