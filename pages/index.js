import fs from "fs";
import Post from "@/components/Post";
import path from "path";
import matter from "gray-matter";
import {sortByDate} from "../utils"

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post}/>
        ))}
      </div>
    </>
  );
}
export async function getStaticProps() {
  //get files from the post directory
  const files = fs.readdirSync(path.join("posts"));

  //get slug and frontmatter from posts
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    //get frontmatter
    const markDownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markDownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts: posts.sort(sortByDate)
    },
  };
}
