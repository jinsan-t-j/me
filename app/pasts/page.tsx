import type { Metadata } from 'next'
import Link from "next/link";
import { DATA } from "app/data/portfolio";

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Work history and professional experience.',
}

export default function Page() {
  return (
    <section className="animate-fade-in space-y-8">
      <div className="space-y-8">
            {DATA.work.map((job, id) => (
                <div key={id} className="group flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-1">
                        <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">
                            <Link href={job.href} target="_blank" className="flex items-center gap-1 hover:underline">
                                {job.company}
                                <svg className="h-3 w-3 opacity-0 group-hover:opacity-60 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        </h3>
                        <span className="text-xs text-neutral-500 tabular-nums">
                            {job.start} — {job.end}
                        </span>
                    </div>
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-3">
                        {job.title}
                    </p>
                    {job.description && (
                        <ul className="list-disc pl-4 space-y-1 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {job.description.map((bullet, index) => (
                                <li key={index}>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    </section>
  )
}
