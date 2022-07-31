import styled from "styled-components";

export default styled.div`
  font-size: 13px;
  background-color: ${({ isDragging }) => (isDragging ? "#03a9f3" : "#fff")};
  box-shadow: ${({ isDragging }) =>
    isDragging
      ? "0px 10px 13px -7px #8433FF, 5px 5px 5px -2px #8433FF"
      : "0 1px 0 rgba(9,30,66,.25)"};
  color: ${({ isDragging }) => (isDragging ? "#fff" : "#000")};
  padding: 10px;
  cursor: grab;
  border-radius: 3px;
  margin-bottom: 5px;
  word-wrap: break-word;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
