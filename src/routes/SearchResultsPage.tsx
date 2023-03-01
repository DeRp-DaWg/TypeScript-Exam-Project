import React, { useState } from 'react'

interface Props {}

export default function SearchResultsPage({}: Props) {
  const [tagSearch, setTagSearch] = useState<string>("")
  const [mainSearch, setMainSearch] = useState<string>("")
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [tagButtons, setTagButtons] = useState<JSX.Element[]>([])
  const [tags, setTags] = useState<string[]>(["italy","vegan","non-vegan"])
  function updateTagSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setTagSearch(event.target.value)
    let validTags: string[] = []
    if (tagSearch === "") validTags = tags
    else {
      for (const tag of tags) {
        if (activeTags.includes(tag)) {
          validTags.push(tag)
        }
        else if (tag.includes(tagSearch)) validTags.push(tag)
      }
    }
    renderTagButtons(validTags)
  }

  function sendMainSearch() {

  }

  function renderTagButtons(tags: string[]) {
    const results = tags.map(tag => {
      return (
        <button key={tag}>{tag.charAt(0).toUpperCase()+tag.substring(1)}</button>
      )
    })
    setTagButtons(results)
  }

  return (
    <div>
    <form>
      <input type="text" id="tagSearch" onChange={updateTagSearch}/>
      {tagButtons}
      <input type="text" id="mainSearch" onChange={event => setMainSearch(event.target.value)}/>
      <button type="button" onClick={sendMainSearch}>Search</button>
    </form>
    </div>
  )
}