// import { getAllTags, getTag } from "../fetchers/tagFetcher";
// // import { stringify, parse } from "qs"

// // type params = {
// //   recipeId: number
// // }

// export default async function loader({params}: any) {
//   const allTags: Tag[] = await getAllTags()
//   const tagsString: string = params.tagIds
//   if (tagsString === undefined) {
//     return {allTags: allTags}
//   }
//   const tagIds: number[] = JSON.parse(tagsString)
//   const tags: Tag[] = await Promise.all(tagIds.map(tagId => {
//     return (getTag(tagId))
//   }))
//   return {tags: tags, allTags: allTags}
// }
