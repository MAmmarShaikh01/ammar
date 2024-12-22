import React from 'react';
import blogData from '@/blogs/blogs';
import styles from "../../../styles/BlogDetail.module.css";
import CommentSection from '@/components/CommentSection';
import Image from 'next/image';
interface BlogDetailProps {
  params: {
    detail: string; // Assuming the 'detail' field is a string (it can be number if required)
  };
}

const BlogDetail = async (props:BlogDetailProps) => {
  
  console.log("Prints to stdout with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar toPrints to stdout with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar toPrints to stdout with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar toPrints to stdout with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar toPrints to stdout with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar toPrints to stdout with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to")
  const amm = await props.params;
  const id = amm.detail;
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
