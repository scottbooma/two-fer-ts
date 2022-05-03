export function twoFer(name: string | null): string {
  if (name) {
    return `One for ${name}, one for me.`;
  }
  return `One for you, one for me.`;
}
