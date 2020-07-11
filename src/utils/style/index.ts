export function calculateSpacing(numbers: number[] = []): string {
  if (numbers.length === 0) {
    return '0 0 0 0'
  }

  return numbers.map((number) => `${number}px`).join(' ')
}
