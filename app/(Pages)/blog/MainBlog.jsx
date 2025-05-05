"use client";
import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import RecentPosts from "./components/recent-posts";
import "../../../public/css/home.css";
import "../../../public/css/blog.css";
import { useEffect, useState } from "react";
import Head from "next/head";

// export const metadata = {
//     title: "AAPC | Blog Posts",
//     description:
//         "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
//     keywords: "Architecture, AAPC, Building, Design, Drafting",
// };

const MainBlog = () => {
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postCount, setPostCount] = useState();
  const [postsPerPage, setPostsPerPage] = useState(5);

  // const postsPerPage = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      const BLOG_URL = "https://public-api.wordpress.com/rest/v1.1/sites/azarkblog.wordpress.com/posts";
      const fields = "ID,author,excerpt,date,slug,featured_image,title";

      try {
        const res = await fetch(`${BLOG_URL}?category=AAPC&fields=${fields}&number=${postsPerPage}`);
        if (!res.ok) {
          throw new Error(`Error fetching blog posts: ${res.status}`);
        }

        const json = await res.json();
        setPosts(json.posts);
        setPostCount(json.found);
        setDisplayedPosts(json.posts.slice(0, postsPerPage));
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        // Handle error state if needed
      }
    };

    fetchPosts();
  }, [currentPage]);
  // console.log(posts)

  const loadMorePosts = () => {
    const nextPage = currentPage + 1;
    const nextPosts = postsPerPage + 5;
    setPostsPerPage(nextPosts);
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    setDisplayedPosts(posts.slice(0, postsPerPage)); // Append more posts to the displayed list
    setCurrentPage(nextPage);
  };

  return (
    <div>
      <title>AAPC | Blog</title>

      <Navbar />
      <Topper />
      <div className="blog-overview">
        <RecentPosts posts={displayedPosts} />
        {postCount > posts.length && (
          <button onClick={loadMorePosts} className="load-more-button">
            Load More Posts
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MainBlog;
