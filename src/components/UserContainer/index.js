import styled from "styled-components";

export default styled.div`
  transition: background-color 0.2s ease;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "#ffebe6" : "#ebecf0"};
`;
