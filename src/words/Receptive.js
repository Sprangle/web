import { useEffect, useState } from "react";

import LoadingAnimation from "../components/LoadingAnimation";
import { setTitle } from "../assorted/setTitle";
import strings from "../i18n/definitions";
import Word from "./Word";
import * as s from "../components/TopMessage.sc";
import { UMR_SOURCE } from "../reader/ArticleReader";

export default function Receptive ({ api }) {
  const [words, setWords] = useState(null);

  useEffect(() => {
    api.topBookmarks(300, (topWords) => {
      const receptiveWords = topWords.filter((word) => word.learning_cycle === 1);
      setWords(receptiveWords);
    });
    setTitle(strings.titleReceptiveWords);
  }, [api]);

  if (!words) {
    return <LoadingAnimation />;
  }

  return (
    <>
       <s.TopMessage>
            <img 
              src="/static/icons/receptive-icon.png" 
              alt="Productive Icon" 
              style={{height: '2.5em', width: '2.5em', margin: '0.5em'}}
            />
            {strings.receptiveMsg}
        </s.TopMessage>
      {words.map((each) => (
        <Word key={each.id} bookmark={each} api={api} source={UMR_SOURCE}/>
      ))}
    </>
  );
}
