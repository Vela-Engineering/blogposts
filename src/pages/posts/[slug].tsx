import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import { Document } from "../../interfaces/document";
import { getDocumentPaths, getDocumentBySlug } from "outstatic/server";
import AuthorAvatar from "../../components/blog/AuthorAvatar";
import CoverImage from "../../components/blog/CoverImage";
import PostDate from "../../components/blog/PostDate";

type Props = {
  post: Document;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-5">
        <Header />
        {router.isFallback ? (
          <h1 className="font-primary text-2xl font-bold md:text-4xl mb-2">
            Loading…
          </h1>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{`${post.title} | Vela Partners Blog`}</title>
                <meta property="og:image" content={post.coverImage} />
              </Head>
              <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
                {post.title}
              </h1>
              <div className="hidden md:mb-12 md:block">
                {post.author && (
                  <AuthorAvatar
                    name={post.author.name}
                    picture={post.author.picture}
                  />
                )}
              </div>
              <div className="mb-8 sm:mx-0 md:mb-16">
                <CoverImage
                  title={post.title}
                  image={post.coverImage}
                  priority
                  slug={post.slug}
                />
              </div>
              <hr className="border-neutral-200 mt-10 mb-10" />

              <div className="mx-auto max-w-2xl">
                <div className="mb-6 block md:hidden">
                  {post.author && (
                    <AuthorAvatar
                      name={post.author.name}
                      picture={post.author.picture}
                    />
                  )}
                </div>
                <div className="mb-6 text-lg">
                  <PostDate dateString={post.publishedAt} />
                </div>
              </div>

              <div className="max-w-2xl mx-auto">
                <div
                  className="prose lg:prose-lg"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </article>
          </>
        )}
      </div>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getDocumentBySlug("posts", params.slug, [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getDocumentPaths("posts"),
    fallback: false,
  };
}
