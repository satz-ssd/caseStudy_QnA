import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination1 from "./Pagination1";
import axios from "axios";
import Posts from "./Posts";

function SearchParent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading && posts.length === 0) {
    return <h2>Loading...</h2>;
  }
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div>
      <Posts posts={currentPosts} />
      <Pagination1 pages={howManyPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default SearchParent;
