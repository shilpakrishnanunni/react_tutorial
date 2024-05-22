function ListGroup() {
  let items = ["London", "Tokyo", "Egypt", "Paris"];
  // items = [];
  // const message = items.length === 0 ? <p>NO ITEMS FOUND</p> : null;
  // const getMessage = () => (
  //   items.length === 0 ? <p>NO ITEMS FOUND</p> : null
  // );
  return (
    <>
      <h1>MY LIST</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
