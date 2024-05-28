import fs from "fs";
import React, { useState } from "react";
import Post from "@/components/Post";
import path from "path";
import matter from "gray-matter";
import { sortByDate, filterPosts } from "../utils";
import SearchBar from "@/components/Searchbar";

export default function Home({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts); // State for filtered results
  const [hasSearched, setHasSearched] = useState(false); // Track search state

  const handleSearch = (query) => {
    const filtered = filterPosts(posts, query);
    setFilteredPosts(filtered);
    setHasSearched(true); // Set hasSearched to true on search
  };

  const clearSearch = () => {
    setFilteredPosts(posts); // Set filteredPosts back to all posts
    setHasSearched(false); // Reset hasSearched to false after clear
  };

  return (
    <>
      <div>
        <div className="flex justify-center m-8">
          <SearchBar
            onSearch={handleSearch}
            onClear={clearSearch}
            hasSearched={hasSearched}
          />
        </div>
        {/* <div className="flex justify-center w-full text-[180px] font-semibold">
          FRESH POSTS
        </div> */}

        <div className="grid p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 place-items-center gap-10">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => <Post key={index} post={post} />)
          ) : (
            <p>No results found for your search.</p>
          )}
        </div>

      </div>

      {/* <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div> */}
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
      posts: posts.sort(sortByDate),
    },
  };
}
