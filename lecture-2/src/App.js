import React, { lazy, Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import InfoTable from "./components/InfoTable";
import SurveyChart from "./components/SurveyChart";
import Footer from "./components/Footer";

function lazyWithPreload(importFunction) {
  const Component = React.lazy(importFunction);
  Component.preload = importFunction;

  return Component;
}

// 컴포넌트 lazy loading
const LazyImageModal = lazyWithPreload(() => import("./components/ImageModal"));

function App() {
  const [showModal, setShowModal] = useState(false);

  //컴포넌트 preloading 타이밍
  // 1. 버튼위에 마우스를 올려 놨을 때 => 모듈 파일이 작고 로드하는데 1초 이하로 걸릴 경우
  // 2. 최초 페이지가 로드가 되고, 모든 컴포넌트의 마운트가 끝났을 때 => 모듈 파일이 크고 로드하는데 1초 이상이 걸릴 경우

  //컴포넌트 preloading 타이밍 1번
  const handleMouseEnter = () => {
    LazyImageModal.preload();
  };

  //컴포넌트 preloading 타이밍 2번
  useEffect(() => {
    LazyImageModal.preload();

    //이미지 preloading
    //전체 이미지를 preloading할 필요는 없고 대표 이미지만 preloading해도 괜찮음
    const img = new Image();
    img.src =
      "https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:800";
  }, []);

  return (
    <div className="App">
      <Header />
      <InfoTable />
      <ButtonModal
        onClick={() => {
          setShowModal(true);
        }}
        // onMouseEnter={handleMouseEnter}
      >
        올림픽 사진 보기
      </ButtonModal>
      <SurveyChart />
      <Footer />
      {/* 이미지 모달 레이지 로딩 적용 */}
      <Suspense fallback={null}>
        {showModal ? (
          <LazyImageModal
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </Suspense>
    </div>
  );
}

const ButtonModal = styled.button`
  border-radius: 30px;
  border: 1px solid #999;
  padding: 12px 30px;
  background: none;
  font-size: 1.1em;
  color: #555;
  outline: none;
  cursor: pointer;
`;

export default App;
