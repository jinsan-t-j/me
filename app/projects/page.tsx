import type { Metadata } from 'next'
import { DATA } from 'app/data/portfolio'
import { JsonLd } from 'app/components/json-ld'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: `Open-source tools and ventures by ${DATA.name} — ${DATA.projects.map((p) => p.title).join(', ')}.`,
}

export default function Page() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Projects by ${DATA.name}`,
    description: `Open-source tools and ventures by ${DATA.name}.`,
    url: `${DATA.url}/projects`,
    author: {
      '@type': 'Person',
      name: DATA.name,
      url: DATA.url,
    },
    hasPart: DATA.projects.map((project) => ({
      '@type': 'SoftwareApplication',
      name: project.title,
      description: project.description,
      url: project.href,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web',
      author: {
        '@type': 'Person',
        name: DATA.name,
        url: DATA.url,
      },
    })),
  }

  return (
    <section className="animate-fade-in space-y-8">
      <JsonLd data={collectionSchema} />
      <div className="space-y-12">
        {DATA.projects.map((project) => (
          <div key={project.title} className="space-y-2">
            <div className="flex justify-between items-baseline">
              <h2 className="font-semibold text-base text-neutral-800 dark:text-neutral-200">
                <Link target='_blank' href={project.href} className="group flex items-center gap-1 hover:underline">
                  {project.title}
                  <svg className="h-3 w-3 opacity-0 group-hover:opacity-60 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </h2>
                
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.description}
            </p>
            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-500 pt-1">
              {project.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  target="_blank"
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1"
                >
                  {link.type}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
