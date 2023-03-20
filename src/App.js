import { useState } from "react";
import "./App.css";
import List from "./components/List";
import reorder from "./utilities/reorder";

const INITIAL_LIST = [
  {
    id: "1",
    firstName: "Robin",
    lastName: "Wieruch",
  },
  {
    id: "2",
    firstName: "Aiden",
    lastName: "Kettel",
  },
  {
    id: "3",
    firstName: "Jannet",
    lastName: "Layn",
  },
];

function App() {
  const [list, setList] = useState(INITIAL_LIST);

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;

    setList(reorder(list, source.index, destination.index));
  };

  return (
    <div className="App">
      <header className="App-header">
        <List
          list={list}
          onDragEnd={handleDragEnd}
          dragItemStyle={{
            background: "pink",
            borderRadius: "16px",
          }}
          dragListStyle={{
            background: "lightblue",
            borderRadius: "16px",
          }}
        >
          {(item, dragHandleProps) => (
            <>
              {item.firstName} {item.lastName}
              <span {...dragHandleProps}>#</span>
            </>
          )}
        </List>
      </header>
    </div>
  );
}

export default App;
