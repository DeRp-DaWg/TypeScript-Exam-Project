import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getRecipeByName } from '../fetchers/recipeFetcher'
import { capatilizeFirstChar } from '../helpers'
import { Tag } from '../types'

interface Props {}

type TagBoolean = {
  tagName: string,
  boolean: boolean
}

export default function SearchResultsPage({}: Props) {
  const data = useLoaderData() as {tags: Tag[], allTags: Tag[]}
  const [mainSearch, setMainSearch] = useState<string>("")
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [tagButtons, setTagButtons] = useState<JSX.Element[]>([])
  const [allTags, setAllTags] = useState<string[]>([])
  const [validTags, setValidTags] = useState<TagBoolean[]>([])
  
  useEffect(() => {
    if (data.tags !== undefined) {
      setActiveTags(data.tags.map(tag => {
        return (tag.name)
      }))
    }
    setAllTags(data.allTags.map(tag => tag.name))
  }, [])
  
  useEffect(() => {
    renderTagButtons()
  }, [validTags, activeTags])
  
  function updateTagSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const tagSearch = event.target.value
    let newValidTags: TagBoolean[] = []
    if (tagSearch === "") newValidTags = allTags.map(tag => ({tagName: tag, boolean: false}))
    else {
      for (const tag of allTags) {
        if (activeTags.includes(tag)) {
          console.log("first")
          newValidTags.push({tagName: tag, boolean: true})
        }
        else if (tag.includes(tagSearch)) {
          newValidTags.push({tagName: tag, boolean: false})
        }
      }
    }
    setValidTags(newValidTags)
  }
  
  function handleTagClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const selectedTag = event.currentTarget.value
    const tagIndex = activeTags.indexOf(selectedTag)
    if (tagIndex >= 0) {
      setActiveTags(activeTags.splice(tagIndex, 1))
    } else {
      setActiveTags([...activeTags, selectedTag])
    }
    console.log(selectedTag)
  }

  function sendMainSearch() {
    console.log(mainSearch)
    getRecipeByName(mainSearch).then((res) => console.log(res))
  }

  function renderTagButtons() {
    const results = validTags.map(tag => 
      <button value={tag.tagName} className={tag.boolean ? "activeGreen" : ""} key={tag.tagName} onClick={handleTagClick}>{capatilizeFirstChar(tag.tagName)}</button>
    )
    setTagButtons(results)
  }

  return (
    <div className='divContainer'>
      <h1 className="headline">Søg efter opskrifter</h1>
      <div className="containerSearch">
        <input type="text" placeholder="tags" id="tagSearch" onChange={updateTagSearch}/>
        {tagButtons}
        <input type="text" placeholder="main search" id="mainSearch" onChange={event => setMainSearch(event.target.value)}/>
        <button type="button" onClick={sendMainSearch}>Search</button>
      </div>
      <div className="lines"></div>
    </div>
  )
}


// <div>
// <form>
  // <input type="text" id="tagSearch" onChange={updateTagSearch}/>
  // {tagButtons}
  // <input type="text" id="mainSearch" onChange={event => setMainSearch(event.target.value)}/>
  // <button type="button" onClick={sendMainSearch}>Search</button>
// </form>
// </div>
