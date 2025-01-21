/**
 * 주어진 함수의 결과를 캐싱하여 성능을 향상시키는 메모이제이션 함수입니다.
 *
 * @param {Function} fn - 메모이제이션을 적용할 함수
 * @returns {Function} - 메모이제이션이 적용된 새로운 함수
 */
export function memoize(fn) {
  // 함수 호출 결과를 저장할 캐시 객체를 초기화합니다.
  const cache = {};

  // 원래 함수를 감싸는 새로운 함수를 반환합니다.
  return function (...args) {
    // 함수가 여러 인자를 받을 경우 메모이제이션을 생략합니다.
    if (args.length !== 1) {
      return fn(...args); // 원래 함수를 직접 호출합니다.
    }

    const key = args[0].src;

    // 현재 인자(args)에 해당하는 결과가 캐시에 존재하는지 확인합니다.
    if (cache.hasOwnProperty(key)) {
      return cache[key]; // 캐시된 결과를 반환합니다.
    }

    // 캐시에 없을 경우, 원래 함수를 호출하여 결과를 계산합니다.
    const result = fn(...args);

    // 계산된 결과를 캐시에 저장합니다.
    cache[key] = result;

    // 계산된 결과를 반환합니다.
    return result;
  };
}
