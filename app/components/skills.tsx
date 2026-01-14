import { DATA } from "app/data/resume";
import Link from "next/link";

export function Skills() {
    return (
        <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
                <Link key={id} href={skill.href || "#"} target={skill.href ? '_blank' : ''}>
                    <span className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-2 py-1 rounded text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                        {skill.name}
                    </span>
                </Link>
            ))}
        </div>
    );
}
