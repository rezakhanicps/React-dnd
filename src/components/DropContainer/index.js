import React from "react";
import isEmpty from "lodash/isEmpty";
import { Droppable, Draggable } from "react-beautiful-dnd";
import {
  Column,
  Footer,
  NoData,
  ShowBadge,
  Title,
  User,
  UserContainer
} from "../index";

const DropContainer = ({ id, title, users }) => (
  <Column>
    <Title style={{ marginBottom: 5 }}>{title}</Title>
    <Droppable droppableId={id}>
      {({ innerRef, placeholder }, { isDraggingOver }) => (
        <UserContainer ref={innerRef} isDraggingOver={isDraggingOver}>
          {!isEmpty(users) ? (
            users.map(({ id, firstName, lastName, response, notes }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(
                  { draggableProps, dragHandleProps: eventHandlers, innerRef },
                  { isDragging }
                ) => (
                  <User
                    ref={innerRef}
                    {...draggableProps}
                    {...eventHandlers}
                    isDragging={isDragging}
                  >
                    <ShowBadge response={response} style={{ margin: 0 }}>
                      {firstName} {lastName}
                    </ShowBadge>
                    <span />
                    {notes && (
                      <p style={{ margin: 0, fontStyle: "italic" }}>{notes}</p>
                    )}
                  </User>
                )}
              </Draggable>
            ))
          ) : (
            <NoData />
          )}
          {placeholder}
          <Footer />
        </UserContainer>
      )}
    </Droppable>
  </Column>
);

export default DropContainer;
