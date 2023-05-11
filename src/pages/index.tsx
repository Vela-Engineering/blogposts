import Layout from "../components/Layout";
import Head from "next/head";
import { Document } from "../interfaces/document";
import { getDocumentBySlug, getDocuments } from "outstatic/server";
import ContentGrid from "../components/ContentGrid";
import markdownToHtml from "../lib/markdownToHtml";

type Props = {
  page: Document;
  allPosts: Document[];
};

export default function Index({ page, allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Vela Partners Blog</title>
        </Head>
        <div className="max-w-5xl mx-auto px-5">
          <section className="mt-16 mb-16 md:mb-12">
            <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
              Vela Partners Blog
            </h2>
          </section>
          {allPosts.length > 0 && (
            <ContentGrid title="Posts" items={allPosts} collection="posts" />
          )}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const page = getDocumentBySlug("pages", "home", ["content"]);

  const allPosts = getDocuments("posts", [
    "title",
    "publishedAt",
    "slug",
    "coverImage",
    "description",
    "author",
  ]);

  const content = await markdownToHtml(page.content || "");

  return {
    props: { page: { content }, allPosts },
  };
};
