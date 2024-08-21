import { removePunctuation, tokenize } from "./preprocessing";

function isExpression(text) {
  return text.includes(" ");
}

function isTextInSentence(text, sentence) {
  if (isExpression(text)) {
    return sentence.includes(text);
  }
  let tokens = tokenize(sentence);
  tokens = tokens.map((each) => removePunctuation(each));
  return tokens.includes(removePunctuation(text));
}

function isWordIncluded(word, expression) {
  let isWordIncluded = false;
  let wordsInAnswer = expression.split(" ");
  let wordsInInput = word.split(" ");
  if (wordsInInput.length === 1)
    wordsInAnswer.forEach((each) => {
      if (each === word) isWordIncluded = true;
    });
  return isWordIncluded;
}

export { isWordIncluded };
export { isTextInSentence };
export { isExpression };
