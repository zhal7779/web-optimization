import React from "react";
import styled from "styled-components";

const Bar = (props) => {
  return (
    <BarWrapper onClick={props.handleClickBar} isSelected={props.isSelected}>
      <BarInfo>
        <Percent>{props.percent}%</Percent>
        <ItemVaue>{props.itemValue}</ItemVaue>
        <Count>{props.count}</Count>
      </BarInfo>
      <BarGraph width={props.percent} isSelected={props.isSelected}></BarGraph>
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  position: relative;
  margin-bottom: 3px;
  padding: 8px 0;
  background: ${({ isSelected }) => (isSelected ? "#dddddd" : "#f3f3f3")};
`;
const BarInfo = styled.div`
  width: 100%;
  display: flex;
  z-index: 2;
  position: relative;
`;
const Percent = styled.span`
  text-align: right;
  min-width: 70px;
  flex: 0 0 auto;
`;
const ItemVaue = styled.span`
  padding-left: 60px;
  flex: 1 1 0%;
`;
const Count = styled.span`
  padding-right: 20px;
  flex: 0 0 auto;
`;
const BarGraph = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  // 애니메이션 최적화
  // => 쟁크현상(애니메이션이 버벅이는 현상)을 없애야 함.
  //브라우저 렌더링 과정에서 css 속성이 변경될 경우 reflow, repaint가 다시 일어나게 됨
  //1. reflow:레이아웃(width, height등)이 변경될 때
  //2. repaint: 색상 color, background등이 변경될 때
  // 특히, reflow가 시간이 오래걸리는데 이를 최적화 하기 위해서는 gpu의 도움을 받으면 된다.

  // 그렇다면 gpu의 도움을 받아 reflow와 repaint를 피하는 방법을 알아보자.
  // * css 속성을 gpu가 관련할 수 있는 속성으로 변경하면 된다.
  // ** gpu가 관여할 수 있는 속성: transform,opacity

  // 아래코드는 width를 변경하여 애니메이션을 보이게하여 쟁크현상이 일어나는 코드이다.
  // 리팩토링하여 reflow가 일어나지 않게 애니메이션을 최적화해보자.

  // 기존 코드
  /* width: ${({ width }) => width}%; */
  /* transition: width 1.5s ease; */

  // 리팩토링 코드
  width: 100%;
  transform: scaleX(${({ width }) => width / 100});
  transform-origin: center left; // 왼쪽을 기준으로

  transition: transform 1.5s ease;
  height: 100%;
  background: ${({ isSelected }) =>
    isSelected ? "rgba(126, 198, 81, 0.7)" : "rgb(198, 198, 198)"};
  z-index: 1;
`;

export default Bar;
