/* eslint-disable react/no-unescaped-entities */
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

export default function Home() {
  const postMetadata = getPostMetadata("posts");
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main className="mb-10">
      <section className="flex flex-col">
        <p className="text-2xl font-bold">
          I'm Hussam, a skilled Project Manager based in Cairo, with a diverse
          background that spans industries such as localization and travel. From
          Project Management to Software Development and Customer Support, I've
          been fortunate to lead teams to success, and gain extensive experience
          in various domains.
        </p>
        <a
          href="/Resume-Hussam-Hassan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 text-center justify-self-center	 outline outline-2 rounded p-2 outline-slate-300 dark:outline-slate-500 hover:outline-slate-500 dark:hover:outline-slate-300"
        >
          <button>Resume</button>
        </a>
      </section>
      <section className="mt-10">
        <div>
          <p className="font-bold">Business Skills</p>
          <ul className="flex flex-wrap">
            <li className="mt-2 mr-2 max-w-fit bg-slate-200 dark:bg-slate-800 rounded-full px-3 py-1">
              Project Planning
            </li>
            <li className="mt-2 mr-2 max-w-fit bg-slate-200 dark:bg-slate-800 rounded-full px-3 py-1">
              Team Leadership
            </li>
            <li className="mt-2 mr-2 max-w-fit bg-slate-200 dark:bg-slate-800 rounded-full px-3 py-1">
              Budgeting & Resource Allocation
            </li>
            <li className="mt-2 mr-2 max-w-fit bg-slate-200 dark:bg-slate-800 rounded-full px-3 py-1">
              Agile/Scrum Methodologies
            </li>
            <li className="mt-2 mr-2 max-w-fit bg-slate-200 dark:bg-slate-800 rounded-full px-3 py-1">
              Stakeholder Management
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <p className="font-bold">Technical Skills</p>
          <ul className="flex flex-wrap">
            <li className="mt-2 mr-2 max-w-fit bg-slate-200 dark:bg-slate-800 rounded-full px-3 py-1">
              JavaScript
            </li>
            <li className="mt-2 mr-2 max-w-fit bg-slate-200 dark:bg-slate-800 rounded-full px-3 py-1">
              React
            </li>
            <li className="mt-2 mr-2 max-w-fit bg-slate-200 dark:bg-slate-800 rounded-full px-3 py-1">
              MongoDB
            </li>
            <li className="mt-2 mr-2 max-w-fit bg-slate-200 dark:bg-slate-800 rounded-full px-3 py-1">
              Node.js
            </li>
            <li className="mt-2 mr-2 max-w-fit bg-slate-200 dark:bg-slate-800 rounded-full px-3 py-1">
              Next.js
            </li>
          </ul>
        </div>
      </section>

      {/* <section className="mt-10">
        <div className="grid gap-10">{postPreviews}</div>
      </section> */}
    </main>
  );
}
