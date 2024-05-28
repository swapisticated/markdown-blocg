import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import path from "path";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <div className="p-8 h-full">
        <div>
          <h1 className="text-6xl text font-bold justify-center flex text-gray-800">
            {title}
          </h1>
          <div className="text-gray-500 text-sm justify-center flex mb-4">
            {date}
          </div>
        </div>

        <div className="justify-center h-1/3
         flex w-full p-10">
          <img src={cover_image} alt="" className=" rounded-lg  " />
        </div>
        <div className="flex justify-center w-full p-20 ">
          <div
            className="text-lg   p-10"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  //   console.log(paths)
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markDownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markDownWithMeta);

  console.log(slug);
  return {
    props: { frontmatter, slug, content },
  };
}
