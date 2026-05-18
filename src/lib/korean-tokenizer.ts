// Orama는 Korean 미지원. custom tokenizer 사용 시 language 옵션 동시 전달 금지.
export const koreanTokenizer = {
  tokenize(input: string): string[] {
    if (typeof input !== 'string') return [];
    return input
      .toLowerCase()
      .split(
        /[\s\u3000\uFEFF\u00A0,.。:：;；!！?？、()\[\]{}<>「」『』【】…\-_/\\|@#%^&*=+~`'"]+/,
      )
      .filter((token) => token.length > 0);
  },
};
