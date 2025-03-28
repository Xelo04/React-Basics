// import { Fragment } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    // <h1>List</h1> u cant use more than 2 elements in a single component
    // u can wrap elements in a single element like div or fragment using CTRL+SHIFT+P -> wrap with abbreviation
    // <div>
    //   <h1>List</h1>
    //   <ul className="list-group">
    //     <li className="list-group-item">An item</li>
    //     <li className="list-group-item">A second item</li>
    //     <li className="list-group-item">A third item</li>
    //     <li className="list-group-item">A fourth item</li>
    //     <li className="list-group-item">And a fifth one</li>
    //   </ul>
    // </div>

    //but better way is to use fragment
    // to use fragment u dont have to import it and wirte it, just use <> and </>
    // <Fragment>
    // <>
    //   <h1>List</h1>
    //   <ul className="list-group">
    //     <li className="list-group-item">An item</li>
    //     <li className="list-group-item">A second item</li>
    //     <li className="list-group-item">A third item</li>
    //     <li className="list-group-item">A fourth item</li>
    //     <li className="list-group-item">And a fifth one</li>
    //   </ul>
    // </>
    // </Fragment>

    <>
      <h1>List</h1>
      <ul className="list-group"></ul>
      {/* it is now allowed expresion in JSX bcs u can only use HTML or React elements  */}
      {/* items.map((item) => (<li>{item}</li>))*/}
      {items.map((item) => (
        <li key={item}>{item}</li> // every item should have a unique key
      ))}
    </>
  );
}

export default ListGroup;
