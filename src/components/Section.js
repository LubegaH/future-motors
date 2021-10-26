import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/cover.jpeg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 10vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: #4e4e50;
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.7;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: rgb(204, 84, 84);
  opacity: 0.65;
  color: white;
`;

const DownArrow = styled.img`
  // margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;

function Section(props) {
  return (
    <Wrap>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{props.LeftButton}</LeftButton>
          <RightButton>{props.RightButton}</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

// function Section({
//   title,
//   description,
//   backgroundImg,
//   LeftButton,
//   RightButton,
// }) {
//   return (
//     <Wrap bgImage={backgroundImg}>
//       <ItemText>
//         <h1>{title}</h1>
//         <p>{description}</p>
//       </ItemText>
//       <Buttons>
//         <ButtonGroup>
//           <LeftButton>{LeftButton}</LeftButton>
//           <RightButton>{RightButton}</RightButton>
//         </ButtonGroup>
//         <DownArrow src="/images/down-arrow.svg"></DownArrow>
//       </Buttons>
//     </Wrap>
//   );
// }

export default Section;
