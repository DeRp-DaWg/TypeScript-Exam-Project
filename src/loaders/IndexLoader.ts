import { getAllUnfilledCategories } from "../fetchers/categoryFetcher";
import { getTag } from "../fetchers/tagFetcher";
import { category, tag, unfilledCategory } from "../types";

export default async function loader({params}: any) {
  async function fillCategory(unfilledCategory: unfilledCategory): Promise<category> {
    const tagPromises = unfilledCategory.tags.map(async (tagId) => {
      const tag: tag = await getTag(tagId)
      return tag
    })
    const tags = await Promise.all(tagPromises)
    const category: category = {
      id: unfilledCategory.id,
      name: unfilledCategory.name,
      tags: tags
    }
    return category
  }
  
  const unfilledCategories: unfilledCategory[] = await getAllUnfilledCategories()
  const categoryPromises = await unfilledCategories.map(async (unfilledCategory) => {
    const category = await fillCategory(unfilledCategory)
    return category
  })
  const categories = await Promise.all(categoryPromises)
  return {categories}
}
