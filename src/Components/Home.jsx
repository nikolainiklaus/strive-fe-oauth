import React, { useEffect, useState } from "react";

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);

  const storedAccessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/blogposts", {
          headers: {
            Authorization: `Bearer ${storedAccessToken}`,
          },
        });
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchBlogPosts(); // <---- Add this line
  }, []);

  return (
    <div>
      <h1>Welcome Home!</h1>
      <p>Access Token: {storedAccessToken}</p>
      {error ? (
        <p>There was an error loading the blog posts.</p>
      ) : (
        <ul>
          {blogPosts.map((post) => (
            <li key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>
                Author:{" "}
                {post.author
                  ? `${post.author.name} ${post.author.surname}`
                  : "Unknown"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
