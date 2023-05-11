import { Document } from "outstatic";
import Avatar from "./AuthorAvatar";
import CoverImage from "./CoverImage";
import Date from "./PostDate";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  publishedAt,
  description,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={publishedAt} />
      </div>
      {description && (
        <p className="mb-4 text-lg leading-relaxed">{description}</p>
      )}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}
