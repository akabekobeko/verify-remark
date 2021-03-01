import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkAttr from 'remark-attr'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

const main = () => {
  const md = `
# Header 1 {#header-1}

# Header 2
{#header-2}

# Header 3 **with text** {#header-3}
`

  unified()
    .use(remarkParse)
    .use(remarkAttr)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(md, (err, file) => {
      if (err) {
        console.error(err)
      } else {
        console.log(String(file))
      }
    })
}

main()
