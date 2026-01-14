import { DATA } from "app/data/resume";
import Link from "next/link";

export function Experience() {
    return (
        <div className="flex flex-col space-y-4">
            {DATA.work.map((job, id) => (
                <div key={id} className="flex flex-col space-y-1 my-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <h3 className="font-semibold text-lg hover:underline decoration-1 cursor-pointer">
                            <Link href={job.href} target="_blank">
                                {job.company}
                            </Link>
                        </h3>
                        <span className="text-sm text-neutral-500 tabular-nums">
                            {job.start} - {job.end}
                        </span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        {job.title}
                    </p>
                    <p className="text-sm text-neutral-800 dark:text-neutral-200">
                        {job.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
