import { DATA } from 'app/data/portfolio'
import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

export const dynamic = 'force-static'

export async function GET() {
  const posts = getBlogPosts()
    .toSorted((a, b) =>
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
    )

  const lines = [
    `# ${DATA.name}`,
    ``,
    `> ${DATA.summary}`,
    ``,
    `${DATA.name} is a ${DATA.jobTitle} based in ${DATA.location}. Personal website: ${baseUrl}`,
    ``,
    `## About`,
    `- [Home](${baseUrl}): Personal website and introduction`,
    `- [Experience](${baseUrl}/pasts): Professional work history`,
    `- [Projects](${baseUrl}/projects): Ventures and open-source projects`,
    `- [Blog](${baseUrl}/blog): Technical writing on software engineering`,
    ``,
    `## Projects`,
    ...DATA.projects.map(
      (p) => `- [${p.title}](${p.href}): ${p.description}`
    ),
    ``,
    `## Experience`,
    ...DATA.work.map(
      (w) => `- ${w.title} at [${w.company}](${w.href}) (${w.start} — ${w.end})`
    ),
    ``,
    `## Blog Posts`,
    ...posts.map(
      (post) => `- [${post.metadata.title}](${baseUrl}/blog/${post.slug}): ${post.metadata.summary}`
    ),
    ``,
    `## Contact`,
    `- Email: ${DATA.contact.email}`,
    `- GitHub: ${DATA.contact.social.GitHub.url}`,
    `- LinkedIn: ${DATA.contact.social.LinkedIn.url}`,
  ]

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
