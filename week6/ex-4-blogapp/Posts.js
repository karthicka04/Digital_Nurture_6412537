import React, { Component } from 'react';

class Posts extends Component {
  constructor() {
    super();
    this.state = { posts: [], hasError: false };
  }

  loadPosts = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ hasError: true });
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
