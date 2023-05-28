import Link from "next/link";

const PostPreview = (props) => {
  return (
    <div>
      <p className="text-sm text-slate-600 dark:text-slate-400">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-3xl font-bold hover:underline mb-2">
          {props.title}
        </h2>
      </Link>
      <p className="text-slate-600 dark:text-slate-400">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
