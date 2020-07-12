//  모든 컴포넌트의 공통적인 사항들을 lib 으로 뺀다.

// utils 가져온다
export const calculateSpacing = (numbers: number[] = []) => {
  if (numbers.length === 0) {
    return '0 0 0 0'
  }

  return numbers.map((number) => `${number}px`).join(' ')
}
