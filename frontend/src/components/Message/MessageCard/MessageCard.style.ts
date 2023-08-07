import { styled } from "styled-components";

export const MessageCardDiv = styled.div`
  width: 95%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  &:hover {
    background-color: rgba(217, 217, 217, 0.5);
  }
`;

export const MessageTitle = styled.div`
  font-size: 15px;
  margin: 3%;
`;

export const MessageChecked = styled.img`
  float: right;
  margin: 5px;
  width: 8px;
`;