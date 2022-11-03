function Title({ props }) {
  const title = props.reduce(
    (acc, loc) => (acc.includes(loc.title) ? acc : acc.concat(loc.title)),
    []
  );
  return <h1 className="information__content__title">{title}</h1>;
}

export default Title;
