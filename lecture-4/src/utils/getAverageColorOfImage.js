// 병목함수에 메모이제이션 적용
// 메모이제이션 기법을 적용하려면 순수 함수여야 한다.(인풋이 들어오면 같은 아웃풋으로 나와야하기 때문에)
// 메모이제이션 기법도 결국 기회 비용이 있기에 모든 함수에 적용하는 건 좋지않다. ex) 인풋값이 매번 다른 경우 모든 인풋을 키로 저장한기에는 메모리 낭비가 심하기에 적절하지 못함
// 반복적으로 동일한 인풋값이 들어오거나 연산이 오래걸리는 작업에 메모이제이션을 적용하는 게 적절하다
import { memoize } from './memoize';

export const getAverageColorOfImage = memoize(function (imgElement) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');
  const averageColor = {
    r: 0,
    g: 0,
    b: 0,
  };

  if (!context) {
    return averageColor;
  }

  const width = (canvas.width =
    imgElement.naturalWidth || imgElement.offsetWidth || imgElement.width);
  const height = (canvas.height =
    imgElement.naturalHeight || imgElement.offsetHeight || imgElement.height);

  context.drawImage(imgElement, 0, 0);

  const imageData = context.getImageData(0, 0, width, height).data;
  const length = imageData.length;

  for (let i = 0; i < length; i += 4) {
    averageColor.r += imageData[i];
    averageColor.g += imageData[i + 1];
    averageColor.b += imageData[i + 2];
  }

  const count = length / 4;
  averageColor.r = ~~(averageColor.r / count); // ~~ => convert to int
  averageColor.g = ~~(averageColor.g / count);
  averageColor.b = ~~(averageColor.b / count);

  return averageColor;
});
