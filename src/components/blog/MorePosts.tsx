import PostPreview from "./PostPreview";

export default function MorePosts({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Posts
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map(
          (post) =>
            post.status === "published" && (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                publishedAt={post.publishedAt}
                author={post.author}
                slug={post.slug}
                description={post.description}
              />
            )
        )}
      </div>
    </section>
  );
}
