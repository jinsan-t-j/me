import { BlogPosts } from 'app/components/posts'
import { Experience } from 'app/components/experience'
import { Education } from 'app/components/education'
import { Skills } from 'app/components/skills'
import { DATA } from 'app/data/resume'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold">
        Hey, &nbsp;I'm {DATA.name} 👋
      </h1>
      <p className="mb-4">
        <span dangerouslySetInnerHTML={{ __html: DATA.description }} />
      </p>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Skills</h2>
        <Skills />
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Experience</h2>
        <Experience />
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Education</h2>
        <Education />
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Blog</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
