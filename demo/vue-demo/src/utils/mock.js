// 返回一个随机的单词
export function mockWord() {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const length = Math.floor(Math.random() * 10) + 3;
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

// 返回一个随机的句子，包含10到110个单词
export function mockParagraph() {
  const wordLength = Math.floor(Math.random() * 100) + 10;
  // 返回一个随机的句子，包含wordLength个单词
  return Array.from({ length: wordLength }, mockWord).join(' ');
}