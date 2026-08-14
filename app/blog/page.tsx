import { BlogPosts } from 'app/components/posts'
import { JsonLd } from 'app/components/json-ld'
import { DATA } from 'app/data/portfolio'

export const metadata = {
  title: 'Blog',
  description: `Technical blog by ${DATA.name} covering software engineering, system design, and building internet products.`,
}

export default function Page() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Blog by ${DATA.name}`,
    description: `Technical blog by ${DATA.name} covering software engineering, system design, and building internet products.`,
    url: `${DATA.url}/blog`,
    author: {
      '@type': 'Person',
      name: DATA.name,
      url: DATA.url,
    },
  }

  return (
    <section>
      <JsonLd data={collectionSchema} />
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
