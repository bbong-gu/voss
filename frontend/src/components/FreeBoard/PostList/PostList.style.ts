import { styled } from "styled-components";


export const PostListDesign = styled.div`
  /* border: solid 1px white; */
  display: flex;
  width: 70vw;
  height: 5.6vh;
  font-size: 0.8vw;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  `;

export const PostNumberDesign = styled.div`
  /* border: solid 2px red;  */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 8%;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
  `;

export const PostTitleDesign = styled.div`
  /* border: solid 2px red; */
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 6%;
  width: 44%;
  font-size: 0.9vw;
  &:hover {
    text-decoration: underline;
  }
  `;

export const PostFileDesign = styled.img`
  margin-left: 0.3vw;
  width: 15px;
  height: 15px;
`;

export const PostCommentsDesign = styled.div`
  margin-left: 1.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 50%;
  background-color: white;
  color: black;
  width: 20px;
  height: 20px;
  font-size: 12px;
`;

export const PostUserDesign = styled.div`
  /* border: solid 2px red; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  &:hover {
    text-decoration: underline;
  }
`;

export const PostCreatedatDesign = styled.div`
  /* border: solid 2px red; */
  display: flex;
  justify-content: center;
  align-items : center;
  width: 16%;
`;

export const PostHitDesign = styled.div`
  /* border: solid 2px red; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8%;
`;

export const PostLikeDesign = styled.div`
  /* border: solid 2px red; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8%;
`;