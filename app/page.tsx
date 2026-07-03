import Link from 'next/link'

export default function Page() {
  return (
    <section className="w-full space-y-16 animate-fade-in">
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

    </section>
  )
}

