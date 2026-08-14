import Link from 'next/link'
import { JsonLd } from './components/json-ld'
import { DATA } from 'app/data/portfolio'

export default function Page() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: DATA.name,
    url: DATA.url,
    jobTitle: DATA.jobTitle,
    description: DATA.summary,
    image: `${DATA.url}${DATA.avatarUrl}`,
    sameAs: DATA.sameAs,
    knowsAbout: [
      'Software Engineering',
      'Full Stack Development',
      'AI Integration',
      'System Design',
      'Go',
      'Node.js',
      'Python',
      'React',
      'Vue.js',
    ],
  }

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: DATA.name,
    url: DATA.url,
    description: DATA.summary,
    author: {
      '@type': 'Person',
      name: DATA.name,
      url: DATA.url,
    },
  }

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: DATA.name,
      url: DATA.url,
      jobTitle: DATA.jobTitle,
      description: DATA.summary,
      sameAs: DATA.sameAs,
    },
    dateModified: new Date().toISOString().split('T')[0],
  }

  return (
    <section className="w-full space-y-16 animate-fade-in">
      <JsonLd data={[personSchema, webSiteSchema, profilePageSchema]} />
      <article>
        <div className="space-y-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Hi, I&apos;m Jinsan T J
            </h1>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Software Engineer
            </p>
          </div>

          <div className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm space-y-4">
            <p>
              I love to build internet things. I enjoy building products that help people solve their problems. This is my personal website where I share my thoughts, projects, and about my pasts.
            </p>
            <p>
              I&apos;ve built <Link href="/projects" className="text-neutral-900 dark:text-white underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-900 dark:hover:decoration-white font-medium">QueueBuzz</Link> and engineered systems at <Link href="https://buymeacoffee.com" target="_blank" className="text-neutral-900 dark:text-white underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-900 dark:hover:decoration-white font-medium">Buy Me a Coffee</Link>.
            </p>
            <p>
              Now, I am building <span className="text-neutral-900 dark:text-white font-medium">sweatside</span>.
            </p>
          </div>
        </div>
      </article>

    </section>
  )
}
