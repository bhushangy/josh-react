import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import { BLOG_TITLE } from "@/constants";
import { loadBlogPost } from "@/helpers/file-helpers";

import BlogHero from "@/components/BlogHero";
import DivisionGroupsDemo from "@/components/DivisionGroupsDemo";

import styles from "./postSlug.module.css";
import CodeSnippet from "@/components/CodeSnippet";
import CircularColorsDemo from "@/components/CircularColorsDemo";

export async function generateMetadata({ params }) {
  const { postSlug } = await params;

  const { frontmatter } = await loadBlogPost(postSlug);

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

const components = {
  pre: CodeSnippet,
  DivisionGroupsDemo,
  CircularColorsDemo,
};

async function BlogPost({ params }) {
  const { postSlug } = await params;
  const { frontmatter, content } = await loadBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
}

export default BlogPost;
