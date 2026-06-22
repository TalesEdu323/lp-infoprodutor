/** Insere espaço inseparável entre as duas últimas palavras (evita viúva). */
export function tieLastWords(text: string): string {
  const parts = text.trim().split(/\s+/)
  if (parts.length < 2) return text
  const last = parts.pop()!
  const secondLast = parts.pop()!
  return [...parts, `${secondLast}\u00A0${last}`].join(" ")
}

/** Espaço inseparável após preposição/artigo curto. */
export function nbspAfter(shortWord: string, next: string): string {
  return `${shortWord}\u00A0${next}`
}
