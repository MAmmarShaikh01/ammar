import React from 'react';
import blogData from '@/blogs/blogs';
import styles from "../../../styles/BlogDetail.module.css";
import CommentSection from '@/components/CommentSection';
import Image from 'next/image';

interface BlogDetailProps {
  params: {
    detail: string; // The dynamic route parameter
  };
}

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  content: string;
}

// The component should be a regular function, not async
const BlogDetail: React.FC<BlogDetailProps> = ({ params }) => {
  const { detail } = params; // Extract the detail parameter
  const blog: Blog | undefined = blogData.find((b) => b.id === detail);

  if (!blog) {
    return <p style={{ textAlign: "center", padding: "2rem" }}>Blog not found.</p>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{blog.title}</h1>
          <p className={styles.excerpt}>{blog.excerpt}</p>
          <div className={styles.meta}>
            <span>By {blog.author}</span>
            <span>{blog.date}</span>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={blog.image} alt={blog.title} width={300} height={300} className={styles.image} />
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