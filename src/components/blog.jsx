import React, { useEffect, useState } from 'react';
import '../source/blog.css'; // Assuming CSS is imported elsewhere

function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [start, setStart] = useState(0);
  const [limit] = useState(5); // Fixed limit
  const [action, setAction] = useState('inactive');

  const loadData = (limit, start) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://192.168.197.3/skytup/blog/load.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.data.length === 0) {
          setIsLoading(false);
          setAction('active'); // No more data
        } else {
          setPosts((prevPosts) => [...prevPosts, ...response.data]);
          setIsLoading(false);
          setAction('inactive');
        }
      }
    };

    xhr.send(`limit=${limit}&start=${start}`);
  };

  useEffect(() => {
    if (action === 'inactive') {
      setIsLoading(true);
      loadData(limit, start);
    }
  }, [start, action]); // Dependency array to trigger on changes

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );

      if (scrollTop + clientHeight >= scrollHeight - 100 && action === 'inactive') {
        setStart((prevStart) => prevStart + limit);
        setAction('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [action, limit]);

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <div
        className="post"
        key={post.id}
        onClick={() => (window.location.href = `/skytup/blog/data/${post.id}`)}
      >
        <div className="thumbnail-container">
          <img src={post.thumbnail} alt={post.title} />
        </div>
        <div className="post-toolbar">
          <div className="date">{post.date}</div>
        </div>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        <div className="post-meta">
          <div className="views">
            <i className="fas fa-eye"></i> {post.views}
          </div>
          <div className="likes">
            <i className="fas fa-heart"></i> {post.likes}
          </div>
          <div className="share" onClick={(e) => sharePost(e, post.id)}>
            <i className="fas fa-share-alt"></i> Share
          </div>
        </div>
      </div>
    ));
  };

  const sharePost = (event, postId) => {
    event.stopPropagation();
    console.log(`Share post with ID: ${postId}`);
  };

  return (
    <div className="blog">
      <div className="container">
        <aside className="sidebar">
          <h2>Categories</h2>
          <ul>
            <li>
              <a href="/skytup">Home</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </aside>
        <div className="main-content">
          <div className="posts">{renderPosts(posts)}</div>
          {isLoading ? (
            <div className="loading">
              <i className="fas fa-spinner fa-spin"></i> Loading...
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Blog;
