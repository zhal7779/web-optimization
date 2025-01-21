import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/imageModal';
import LazyLoad from 'react-lazyload';
function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({ src: urls.full, alt }));
  };

  return (
    <ImageWrap>
      {/* offset => 500픽셀만큼의 영역에 있는 이미지들도 미리 불러오는 옵션 */}
      <LazyLoad offset={500}>
        <Image src={urls.small + '&t=' + new Date().getTime()} alt={alt} onClick={openModal} />
      </LazyLoad>
    </ImageWrap>
  );
}

// 현재 Layout Shift 해결방안
// 가로(16): 세로(9) 비율로 사이즈를 미리 고정해둔다.
// 가로의 길이는 정해져있기 때문에 세로는 가로의 길이에서 비율로 지정한다. 9%16*100 => 56.25
const ImageWrap = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`;

const Image = styled.img`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export default PhotoItem;
