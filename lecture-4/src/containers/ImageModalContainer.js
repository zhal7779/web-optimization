import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import ImageModal from '../components/ImageModal';

function ImageModalContainer() {
  //useSelector 중복 렌더링 문제 해결 방법

  // 1. Object를 새로 만들지 않도록 State 쪼개기
  //기존은  모든 값들을 object에 넣어 매번 생성했으므로 셀렉터를 구독하고 있는 모든 컴포넌트들이 같이 리렌더링 됐음.
  // 하나의 object를 각자로 쪼개놓으니 변경된 것만 리렌더링됨
  // const modalVisible = useSelector(state => state.imageModal.modalVisible); //boolean
  // const bgColor = useSelector(state => state.imageModal.bgColor); //string
  // const src = useSelector(state => state.imageModal.src); //string
  // const alt = useSelector(state => state.imageModal.alt); //string

  //2.새로운 Equality Function 사용하기
  // shallowEqual " 하나씩 비교를 하다가 중간에 변경된 값이 있으면 비교를 멈추고 렌더링을 해주는 리덕스에서 제공하는 함수이다.
  const { modalVisible, bgColor, src, alt } = useSelector(state => {
    return {
      modalVisible: state.imageModal.modalVisible,
      bgColor: state.imageModal.bgColor,
      src: state.imageModal.src,
      alt: state.imageModal.alt,
    };
  }, shallowEqual);

  return <ImageModal modalVisible={modalVisible} bgColor={bgColor} src={src} alt={alt} />;
}

export default ImageModalContainer;
