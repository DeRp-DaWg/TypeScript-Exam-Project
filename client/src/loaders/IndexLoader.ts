import { getAllUnfilledCategories } from "../fetchers/categoryFetcher";
import { getTag } from "../fetchers/tagFetcher";
import { Category, Tag, UnfilledCategory } from "../types";

export default async function loader({params}: any) {
  // The json-server database does not send the "tag" entities together with the "category" entitites.
  // Instead it sends the id's of each tag, the name of this type is "unfilledCategory".
  // fillCategory takes a "unfilledCategory" and returns a promise of a "category" by fetching every "tag" entity by their id.
  async function fillCategory(unfilledCategory: UnfilledCategory): Promise<Category> {
    const tagPromises = unfilledCategory.tags.map(async (tagId) => {
      const tag: Tag = await getTag(tagId)
      return tag
    })
    const tags = await Promise.all(tagPromises)
    const category: Category = {
      id: unfilledCategory.id,
      name: unfilledCategory.name,
      tags: tags
    }
    return category
  }
  
  const unfilledCategories: UnfilledCategory[] = await getAllUnfilledCategories()
  const categoryPromises = await unfilledCategories.map(async (unfilledCategory) => {
    const category = await fillCategory(unfilledCategory)
    return category
  })
  const categories = await Promise.all(categoryPromises)
  return {categories}
}
