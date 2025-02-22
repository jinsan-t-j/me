import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        I'm Jinsan
      </h1>
      <p className="mb-4">
        {` SWE based in India. I’ve got a mix of experience in backend development, cloud computing, and DevOps, and I’m totally obsessed with performance and how computers tick. I love chatting about tech solutions and am always up for brainstorming ideas! `}
        </p>
        <p className="mb-4">
        {`I’m also passionate about helping freshers break into the tech world, so if you’re just starting out, let’s connect! `}
        </p>
        <p className="mb-4">
          {`Excited to share my journey, thoughts, and projects with you! Check out my blogs and portfolio to see what I’ve been up to`}
          </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
