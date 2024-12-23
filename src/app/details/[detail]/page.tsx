import React from 'react';
import blogData from '@/blogs/blogs';
import styles from "../../../styles/BlogDetail.module.css";
import CommentSection from '@/components/CommentSection';

const BlogDetail = async ({params}:{params:{detail:string}}) => {
  const amm = await params
  const id = amm["detail"];
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return <p style={{ textAlign: "center", padding: "2rem" }}>Blog not found.</p>;
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1> {blog.title}</h1>
        <p className={styles.excerpt}>{blog.excerpt}</p>
        <div className={styles.meta}>
          <span>By {blog.author}</span>
          <span>{blog.date}</span>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={blog.image} alt={blog.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <p>{blog.content}</p>
      </div>
    </div>
    <CommentSection />
    </>
  );
};

export default BlogDetail;
