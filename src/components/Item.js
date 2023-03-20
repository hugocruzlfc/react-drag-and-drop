import { Draggable } from "react-beautiful-dnd";

export default function Item({ index, item, dragItemStyle = {}, children }) {
  return (
    <Draggable
      index={index}
      draggableId={item.id}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          // {...provided.dragHandleProps}
          style={{
            // default item style
            padding: "8px 16px",
            // default drag style
            ...provided.draggableProps.style,
            // customized drag style
            // background: snapshot.isDragging ? "pink" : "transparent",
            ...(snapshot.isDragging ? dragItemStyle : {}),
          }}
        >
          {/* {item.firstName} {item.lastName} */}
          {children(item, provided.dragHandleProps)}
        </div>
      )}
    </Draggable>
  );
}
