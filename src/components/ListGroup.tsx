// import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = []; // to test the empty list case

  //   const GetMessage = () => {
  //     return items.length === 0 ? <p>No items found</p> : null;
  //   };

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

    // <>
    //   <h1>List</h1>
    //   {/* {message} */}
    //   {GetMessage()}
    //   {/*one of the ways show the message of empty array but if u dont need and variable in function its better to use const*/}
    //   <ul className="list-group"></ul>
    //   {/* it is now allowed expresion in JSX bcs u can only use HTML or React elements  */}
    //   {/* items.map((item) => (<li>{item}</li>))*/}
    //   {items.map((item) => (
    //     <li key={item}>{item}</li> // every item should have a unique key
    //   ))}
    // </>

    <>
      <h1>List</h1>
      {/* code is more readable and cleaner */}
      {items.length == 0 && <p>No items found</p>}
      <ul className="list-group"></ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
}

export default ListGroup;
