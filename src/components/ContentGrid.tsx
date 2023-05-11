import type { Document } from "../interfaces/document";
import HeroPost from "./blog/HeroPost";
import MorePosts from "./blog/MorePosts";

type Props = {
  collection: "posts";
  title?: string;
  items: Document[];
};

const ContentGrid = ({ items, collection }: Props) => {
  const [heroPost, ...morePosts] = items || [];

  return (
    <section id={collection}>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.publishedAt}
          author={heroPost.author}
          slug={heroPost.slug}
          description={heroPost.description}
        />
      )}
      {morePosts.length > 0 && <MorePosts posts={morePosts} />}
    </section>
  );
};

export default ContentGrid;
