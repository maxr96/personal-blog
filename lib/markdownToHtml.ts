import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkRehype).data('settings', {fragment: true}).use(rehypeHighlight).use(rehypeStringify).process(markdown)
  return result.toString()
}
