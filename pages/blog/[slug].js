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
      <div class="p-8 h-auto bg-[#f9f6f2]">
        <div>
          <h1 class="text-6xl text font-bold justify-center flex text-gray-800">
            {title}
          </h1>
          <div class="text-gray-500 text-sm justify-center flex mb-4">
            {date}
          </div>
        </div>

        <div class="justify-center h-96 flex w-full p-2  ">
          <img src={cover_image} alt="" class=" rounded-lg  " />
        </div>
        <div class="flex justify-center w-full p-2 ">
          <div
            class="grid justify-items-stretch text-lg 
             grid-cols-1 
             md:grid-cols-1 md:p-10  text-md 
             lg:grid-cols-1 lg:p-10 
             xl:grid-cols-1 xl:p-10 
             2xl:grid-cols-1 2xl:p-20 
             place-items-center gap-10"
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
