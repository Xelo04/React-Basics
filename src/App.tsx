// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  // always remebmer to close components and if possible use self closing components
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {/* <ListGroup /> */}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}

      <Alert>
        My <span></span> Alert
      </Alert>
    </div>
  );
}

export default App;
