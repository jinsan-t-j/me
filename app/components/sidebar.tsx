"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "app/lib/utils";

const SECTIONS = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "blog", label: "Blog" },
];

export function Sidebar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -35% 0px" }
        );

        SECTIONS.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <aside className="hidden lg:block fixed right-8 top-20 w-48 z-10">
            <nav className="flex flex-col space-y-2">
                {SECTIONS.map(({ id, label }) => (
                    <Link
                        key={id}
                        href={`#${id}`}
                        className={cn(
                            "text-sm transition-colors duration-200 pl-4 mb-4 border-l-2",
                            activeSection === id
                                ? "border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 font-medium"
                                : "border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
                        )}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
