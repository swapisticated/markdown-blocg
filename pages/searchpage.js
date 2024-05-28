// import React, { useState } from "react";

// import Post from "@/components/Post";
// import { sortByDate, filterPosts } from "../utils";
// import SearchBar from "@/components/Searchbar";

// export default function searchpage(posts) {
//   const [filteredPosts, setFilteredPosts] = useState(posts); // State for filtered results
//   const handleSearch = (query) => {
//     const filtered = filterPosts(posts, query);
//     setFilteredPosts(filtered);
//   };

//   return (
//     <>
//       <SearchBar onSearch={handleSearch} />
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8">
//             {filteredPosts.length > 0 ? (
//               filteredPosts.map((post, index) => (
//                 <Post key={index} post={post} />
//               ))
//             ) : (
//               <p>No results found for your search.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
