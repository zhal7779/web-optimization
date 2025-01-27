## 웹 성능 최적화 학습

### 완료한 내용

#### lecture-1

- 로딩 성능 최적화

1. 이미지 사이즈 최적화
2. bottleneck 코드 최적화
3. 코드 스플리팅 (=코드 분할)

- 렌더링 성능 최적화

1. 텍스트 압축

#### lecture-2

- 렌더링 성능 최적화

1. 애니메이션 최적화 (Reflow, Repaint)

- 로딩 성능 최적화

1. 컴포넌트 Lazy Loading(코트 스플리팅)
2. 컴포넌트 Preloading
3. 이미지 Preloading

#### lecture-3

- 로딩 성능 최적화

1. 이미지 Lazy Loading(+ intersection observer)
2. 이미지 사이즈 최적화 (이미지 포맷 최적화)
3. 동영상 사이즈 최적화 (동영상 압축)
4. 폰트 최적화(폰트 적용 시점 컨트롤, 웹폰트 포멧 사용, local 폰트 사용, subset 사용, unicode range 적용, data-uri 변환, preload)
5. 캐시 최적화
6. 불필요한 css 줄이기(purgecss)

#### lecture-4

- 로딩 성능 최적화

1. 이미지 Lazy Loading(+ react-lazyload)

- 렌더링 성능 최적화

1. Layout Shift 피하기
2. useSelect 렌더링 문제 해결(+ redux)
3. Redux Reselect 라이브러리를 통한 렌더링 최적화
4. 병목 함수에 memoization 적용
5. 병목 함수 로직 개선하기
