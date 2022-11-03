function Tags({ props }) {
  const tags = props.reduce(
    (acc, loc) => (acc.includes(loc.tags) ? acc : acc.concat(loc.tags)),
    []
  );
  return (
    <div className="information__content__tags">
      {tags.map((tags, index) => (
        <span key={index} className="information__content__tags__items">
          {tags}
        </span>
      ))}
    </div>
  );
}
export default Tags;
