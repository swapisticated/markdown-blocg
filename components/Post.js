import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="elem bg-[#e1dbd6] w-full max-h-max rounded-xl overflow-hidden p-6 ">
      <div className="image-div  w-full max-h-max">
        <Link legacyBehavior href={`/blog/${post.slug}`}>
          <img
            src={post.frontmatter.cover_image}
            className=" rounded-xl"
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
          <div className="read border-2 flex text-center justify-center rounded-xl p-2 mt-2 w-1/4 border-[#b2b3b3] hover:animate-pulse hover:bg-[#bbb3ab] hover:text-gray-800 hover:transition-all ease-in-out">
            <a> Read More</a>
          </div>
        </Link>
      </div>
    </div>
  );
}
