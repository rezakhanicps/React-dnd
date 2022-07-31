import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";
import {
  Container,
  DropContainer,
  Legend,
  ShowBadge,
  Title
} from "./components";
import { data } from "./data";

const responses = [
  "I want to work.",
  "Available to work.",
  "Prefer not to work.",
  "Not available to work.",
  "No response."
];

class App extends Component {
  state = { ...data };

  onDragEnd = ({ source, destination, draggableId }) => {
    // dropped inside of the list
    if (source && destination) {
      this.setState(prevState => {
        // source container index and id
        const { index: sourceIndex, droppableId: sourceId } = source;

        // destination container index and id
        const {
          index: destinationIndex,
          droppableId: destinationId
        } = destination;

        // source container object
        const sourceContainer = prevState.columns.find(
          column => column.id === sourceId
        );

        // desination container object
        const destinationContainer = prevState.columns.find(
          column => column.id === destinationId
        );

        // source container "userIds" array
        const sourceIds = Array.from(sourceContainer.userIds);

        // destination container "userIds" array
        const destinationIds = Array.from(destinationContainer.userIds);

        // check if source and destination container are the same
        const isSameContainer = sourceContainer.id === destinationContainer.id;

        //  remove a userId from the source "userIds" array via the sourceIndex
        sourceIds.splice(sourceIndex, 1);

        // add a userId (draggableId) to the source or destination "userIds" array
        if (isSameContainer) {
          sourceIds.splice(destinationIndex, 0, draggableId);
        } else {
          destinationIds.splice(destinationIndex, 0, draggableId);
        }

        // update the source container with changed sourceIds
        const newSourceContainer = {
          ...sourceContainer,
          userIds: sourceIds
        };

        // update the destination container with changed destinationIds
        const newDestinationContainer = {
          ...destinationContainer,
          userIds: destinationIds
        };

        // loop through current columns and update the source
        // and destination containers
        const columns = prevState.columns.map(column => {
          if (column.id === newSourceContainer.id) {
            return newSourceContainer;
          } else if (
            column.id === newDestinationContainer.id &&
            !isSameContainer
          ) {
            return newDestinationContainer;
          } else {
            return column;
          }
        });

        return {
          ...prevState,
          columns
        };
      });
    }
  };

  render() {
    const { users, columns } = this.state;

    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Legend>
            <Title>Legend</Title>
            {responses.map(response => (
              <ShowBadge
                key={response}
                response={response}
                style={{ fontSize: 17 }}
                showLast
              >
                {response}
              </ShowBadge>
            ))}
          </Legend>
          {columns.map(({ id, title, userIds }) => (
            <DropContainer
              id={id}
              key={id}
              title={title}
              users={userIds.map(id => users.find(user => user.id === id))}
            />
          ))}
        </DragDropContext>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
