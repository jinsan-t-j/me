import { DATA } from "app/data/resume";
import Link from "next/link";

export function Education() {
    return (
        <div className="flex flex-col space-y-4">
            {DATA.education.map((edu, id) => (
                <div key={id} className="flex flex-col space-y-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <h3 className="font-semibold text-lg hover:underline decoration-1 cursor-pointer">
                            <Link href={edu.href} target="_blank">
                                {edu.school}
                            </Link>
                        </h3>
                        <span className="text-sm text-neutral-500 tabular-nums">
                            {edu.start} - {edu.end}
                        </span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        {edu.degree}
                    </p>
                </div>
            ))}
        </div>
    );
}
