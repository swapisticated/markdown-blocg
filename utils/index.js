export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

export function filterPosts(posts, query) {
    if (!query) return posts; // Return all posts if no query
  
    return posts.filter((post) => {
      const lowerCaseTitle = post.frontmatter.title.toLowerCase();
      const lowerCaseContent = post.content?.toLowerCase() || ""; // Use optional chaining or default value
  
      return (
        lowerCaseTitle.includes(query) || lowerCaseContent.includes(query)
      );
    });
  }
  