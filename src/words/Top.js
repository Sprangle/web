import { useEffect, useState } from 'react'

import LoadingAnimation from '../components/LoadingAnimation'
import Word from './Word'
import * as s from './WordHistory.sc'

export default function Top ({ zapi }) {
  const [words, setWords] = useState(null)

  useEffect(() => {
    console.log('in useEffect in Top')
    zapi.topBookmarks(300, topWords => {
      console.log(topWords)
      setWords(topWords)
    })
  }, [zapi])

  if (!words) {
    return <LoadingAnimation />
  }

  if (words.length === 0) {
    return (
      <div className='topMessageContainer'>
        <div className='topMessage'>
          Learned words are words that were correct in exercises in 4 different
          days.
        </div>
      </div>
    )
  }

  function deleteBookmark (bookmark) {
    zapi.deleteBookmark(bookmark.id)
    setWords(words.filter(e => e.id !== bookmark.id))
  }

  function toggleStarred (bookmark) {
    let state = bookmark.starred
    if (bookmark.starred) {
      zapi.unstarBookmark(bookmark.id)
    } else {
      zapi.starBookmark(bookmark.id)
    }

    setWords(
      words.map(e => (e.id !== bookmark.id ? e : { ...e, starred: !state }))
    )
  }

  return (
    <>
      <s.TopMessage>
        <p>Words that you have translated ranked by importance.</p>
      </s.TopMessage>

      {words.map(each => (
        <Word
          bookmark={each}
          deleteBookmark={deleteBookmark}
          toggleStarred={toggleStarred}
        />
      ))}
    </>
  )
}
