import { getTag } from "../fetchers/tagFetcher";
import { tag } from "../types";

export default async function loader({params}: any) {
  const tag: tag = await getTag(params.tagId)
  return {tag}
}
