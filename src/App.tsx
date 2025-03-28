import ListGroup from "./components/ListGroup";

function App() {
  // always remebmer to close components and if possible use self closing components
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
