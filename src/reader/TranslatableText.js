import { useState } from "react";
import TranslatableWord from "./TranslatableWord";
import * as s from "./TranslatableText.sc";

export function TranslatableText({
  interactiveText,
  translating,
  pronouncing,
  translatedWords,
  setTranslatedWords,
  bookmarkToStudy,
}) {
  const [translationCount, setTranslationCount] = useState(0);

  function wordUpdated() {
    setTranslationCount(translationCount + 1);
  }
  return (
    <s.TranslatableText>
      {interactiveText.getParagraphs().map((par, index) => (
        <div key={index} className="textParagraph">
          {par
            .getWords()
            .map((word) =>
              word.word === bookmarkToStudy ? (
                "______ "
              ) : (
                <TranslatableWord
                  interactiveText={interactiveText}
                  key={word.id}
                  word={word}
                  wordUpdated={wordUpdated}
                  translating={translating}
                  pronouncing={pronouncing}
                  translatedWords={translatedWords}
                  setTranslatedWords={setTranslatedWords}
                />
              )
            )}
        </div>
      ))}
    </s.TranslatableText>
  );
}
