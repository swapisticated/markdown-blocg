import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="elem bg-slate-100 w-full max-h-max rounded-3xl overflow-hidden p-6 ">
      <div className="image-div w-full max-h-max">
        <Link legacyBehavior href={`/blog/${post.slug}`}>
          <img
            src={post.frontmatter.cover_image}
            className=" rounded-3xl"
            alt=""
          />
        </Link>
      </div>
      <div className="pt-10">
        <div className=" text-sm">{post.frontmatter.date}</div>
        <h3 className="text-xl font-semibold  mb-2">{post.frontmatter.title}</h3>
        <p className="text-gray-700">{post.frontmatter.excerpt}</p>{" "}
      </div>
      <div className=" flex justify-center p-4">
        <Link legacyBehavior href={`/blog/${post.slug}`}>
          <div className="read border-2 flex justify-center rounded-xl p-2 mt-2 w-1/4 border-zinc-500">
            <a> Read More</a>
          </div>
        </Link>
      </div>
    </div>
  );
}
