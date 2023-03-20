import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Item from "./Item";

export default function List({
  list,
  onDragEnd,
  dragListStyle = {},
  ...props
}) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="droppable"
        direction="horizontal"
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              ...(snapshot.isDraggingOver ? dragListStyle : {}),
              display: "flex",
            }}
          >
            {list.map((item, index) => (
              <Item
                key={item.id}
                index={index}
                item={item}
                {...props}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
