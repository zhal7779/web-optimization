import React from "react";

import "./index.css";

function zeroPad(value, len) {
  const str = "0000000000" + value.toString();
  return str.substring(str.length - len);
}

/* 파라미터 참고: https://unsplash.com/documentation#supported-parameters */
function getParametersForUnsplash({ width, height, quality, format }) {
  return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`;
}

/*
 * 파라미터로 넘어온 문자열에서 일부 특수문자를 제거하는 함수
 * (Markdown으로 된 문자열의 특수문자를 제거하기 위함)
 * */
//bottleneck 해결방안
// 1. 특수 문자를 효율적으로 제거하기
//  - replace 함수와 정규식 사용 혹은 마크다운 특수문자를 지워주는 라이브러리 사용
// 2. 작업하는 양 자체를 줄이기
// - 텍스트를 실제로 사용하는 정도로만 양을 줄이기

function removeSpecialCharacter(str) {
  //기존 코드
  // const removeCharacters = [
  //   "#",
  //   "_",
  //   "*",
  //   "~",
  //   "&",
  //   ";",
  //   "!",
  //   "[",
  //   "]",
  //   "`",
  //   ">",
  //   "\n",
  //   "=",
  //   "-",
  // ];
  // let _str = str;
  // let i = 0,
  //   j = 0;
  // for (i = 0; i < removeCharacters.length; i++) {
  //   j = 0;
  //   while (j < _str.length) {
  //     if (_str[j] === removeCharacters[i]) {
  //       _str = _str.substring(0, j).concat(_str.substring(j + 1));
  //       continue;
  //     }
  //     j++;
  //   }
  // }
  // return _str;

  // bottleneck 코드 최적화
  const regex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

  let _str = str.substring(0, 300);
  _str = _str.replace(regex, "");

  return _str;
}

function Article(props) {
  const createdTime = new Date(props.createdTime);
  return (
    <div className={"Article"}>
      <div className={"Article__summary"}>
        <div className={"Article__summary__title"}>{props.title}</div>
        <div className={"Article__summary__desc"}>
          {removeSpecialCharacter(props.content)}
        </div>
        <div className={"Article__summary__etc"}>
          {createdTime.getFullYear() +
            "." +
            zeroPad(createdTime.getMonth() + 1, 2) +
            "." +
            zeroPad(createdTime.getDate(), 2)}
        </div>
      </div>
      <div className={"Article__thumbnail"}>
        <img
          src={
            props.image +
            getParametersForUnsplash({
              width: 120,
              height: 120,
              quality: 80,
              format: "jpg",
            })
          }
          alt="thumbnail"
        />
      </div>
    </div>
  );
}

export default Article;
