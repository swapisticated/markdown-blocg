import fs from "fs";
import React, { useState } from "react";
import Post from "@/components/Post";
import path from "path";
import matter from "gray-matter";
import { sortByDate, filterPosts } from "../utils";
import SearchBar from "@/components/Searchbar";

export default function Home({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query) => {
    const filtered = filterPosts(posts, query);
    setFilteredPosts(filtered);
    setHasSearched(true);
  };

  const clearSearch = () => {
    setFilteredPosts(posts);
    setHasSearched(false);
  };

  return (
    <>
      <div className="bg-[#f9f6f2]">
        <div className="flex bg justify-center items-center p-[25px] gap-10">
          <SearchBar
            posts={posts}
            onSearch={handleSearch}
            onClear={clearSearch}
            hasSearched={hasSearched}
          />
        </div>
        <div className="grid p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 place-items-center gap-10 ">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => <Post key={index} post={post} />)
          ) : (
            <p>No results found for your search.</p>
          )}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
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
