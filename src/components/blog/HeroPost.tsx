import AuthorAvatar from "./AuthorAvatar";
import CoverImage from "./CoverImage";
import Date from "./PostDate";
import Link from "next/link";

export default function HeroPost(props) {
  const { title, coverImage, date, description, author, slug } = props;

  return (
    <section>
      <div className="mb-8">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-5 lg:gap-x-8">
        <div className="md:col-span-3">
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title || "Untitled"}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div className="flex flex-col justify-between md:col-span-2">
          {description && (
            <p className="mt-2 mb-4 text-xl leading-relaxed">{description}</p>
          )}
          {author && (
            <AuthorAvatar name={author.name} picture={author.picture} />
          )}
        </div>
      </div>
    </section>
  );
}
