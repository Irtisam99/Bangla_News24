
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/ShareButtons";

type ArticleBlock = {
  type: "text" | "subheading" | "image";
  text?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string | null;
  altText?: string;
  copyrightHolder?: string;
};

type NewsArticle = {
  id: string;
  title: string;
  description?: {
    blocks?: Array<{
      model?: {
        blocks?: Array<{
          model?: {
            text?: string;
          };
        }>;
      };
    }>;
  };
  imageUrl?: string;
  firstPublished?: string;
  lastPublished?: string;
  byline?: Array<{
    name: string;
    role?: string;
  }>;
  topics?: Array<{
    id: string;
    name: string;
  }>;
  tags?: string[];
  body?: ArticleBlock[];
  text?: string;
  source?: string;
  sourceUrl?: string;
  link?: string;
  wordCount?: number;
};

export default async function NewsDetails({
  params,
}: {
  params: Promise<{ newsid: string }>;
}) {
  const { newsid } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${encodeURIComponent(newsid)}`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) {
    if (res.status === 404) notFound();

    throw new Error("Failed to fetch news article");
  }

  const data = await res.json();
  const news: NewsArticle | undefined = data.data;

  if (!data.success || !news) {
    notFound();
  }

  const description =
    news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text;

  const publishedAt = news.firstPublished || news.lastPublished;

  const formattedDate = publishedAt
    ? new Intl.DateTimeFormat("bn-BD", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "Asia/Dhaka",
      }).format(new Date(publishedAt))
    : null;

  const author = news.byline?.[0];

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-sm text-neutral-500"
        >
          <Link href="/" className="transition hover:text-red-700">
            প্রচ্ছদ
          </Link>

          <span className="mx-2">/</span>

          <span className="text-neutral-800">সংবাদ বিস্তারিত</span>
        </nav>

        <article className="mx-auto max-w-5xl">

          {/* Article heading */}
          <header>
            {news.topics?.[0] && (
              <Link
                href="/"
                className="mb-4 inline-block border-l-4 border-red-700 pl-3 text-sm font-bold text-red-700"
              >
                {news.topics[0].name}
              </Link>
            )}

            <h1 className="text-3xl font-bold leading-relaxed tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.5]">
              {news.title}
            </h1>

            {description && (
              <p className="mt-5 text-lg leading-9 text-neutral-600 sm:text-xl sm:leading-10">
                {description}
              </p>
            )}

            {/* Author and publication information */}
            <div className="mt-6 flex flex-col gap-4 border-y border-neutral-200 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                {author && (
                  <p className="font-semibold text-neutral-900">
                    {author.name}
                  </p>
                )}

                {author?.role && (
                  <p className="mt-1 text-sm text-neutral-500">
                    {author.role}
                  </p>
                )}

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-500">
                  {formattedDate && (
                    <time dateTime={publishedAt}>
                      প্রকাশিত: {formattedDate}
                    </time>
                  )}

                  {news.wordCount && (
                    <span>{news.wordCount} শব্দ</span>
                  )}
                </div>
              </div>

              <ShareButtons title={news.title} />
            </div>
          </header>

          {/* Main image */}
          {news.imageUrl && (
            <figure className="mt-8">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="max-h-[600px] w-full rounded-lg bg-neutral-100 object-cover"
                fetchPriority="high"
              />

              <figcaption className="mt-3 text-sm leading-7 text-neutral-500">
                {news.title}
                {news.source && ` | ছবি ও সংবাদসূত্র: ${news.source}`}
              </figcaption>
            </figure>
          )}

          {/* Article body and sidebar */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_250px]">

            {/* Full article */}
            <div>
              <div className="min-w-0">

                {news.body?.length ? (
                  news.body.map((block, index) => {
                    if (block.type === "subheading" && block.text) {
                      return (
                        <h2
                          key={index}
                          className="mb-4 mt-10 border-l-4 border-red-700 pl-4 text-2xl font-bold leading-relaxed"
                        >
                          {block.text}
                        </h2>
                      );
                    }

                    if (block.type === "image" && block.url) {
                      return (
                        <figure key={index} className="my-8">
                          <img
                            src={block.url}
                            alt={block.altText || ""}
                            width={block.width}
                            height={block.height}
                            loading="lazy"
                            className="h-auto w-full rounded-lg bg-neutral-100"
                          />

                          {(block.caption || block.copyrightHolder) && (
                            <figcaption className="mt-2 text-sm leading-7 text-neutral-500">
                              {block.caption}
                              {block.copyrightHolder &&
                                ` | ছবি: ${block.copyrightHolder}`}
                            </figcaption>
                          )}
                        </figure>
                      );
                    }

                    if (block.type === "text" && block.text) {
                      return (
                        <div
                          key={index}
                          className="mb-6 text-[17px] leading-[2.1] text-neutral-800 sm:text-lg"
                        >
                          {block.text.split(/\n+/).map((paragraph, i) =>
                            paragraph.trim() ? (
                              <p key={i} className="mb-5">
                                {paragraph.trim()}
                              </p>
                            ) : null
                          )}
                        </div>
                      );
                    }

                    return null;
                  })
                ) : (
                  <div className="whitespace-pre-line text-lg leading-[2.1]">
                    {news.text || "এই সংবাদটির বিস্তারিত পাওয়া যায়নি।"}
                  </div>
                )}

              </div>

              {/* Tags */}
              {news.tags && news.tags.length > 0 && (
                <div className="mt-12 border-t border-neutral-200 pt-6">
                  <h2 className="mb-4 text-lg font-bold">বিষয়:</h2>

                  <div className="flex flex-wrap gap-2">
                    {news.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Original source */}
              {(news.sourceUrl || news.link) && (
                <div className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm leading-7 text-neutral-600">
                    এই সংবাদটির মূল প্রকাশনা ও অতিরিক্ত তথ্যের জন্য মূল
                    সূত্রটি দেখুন।
                  </p>

                  <a
                    href={news.sourceUrl || news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex font-semibold text-red-700 hover:underline"
                  >
                    মূল সংবাদ পড়ুন ↗
                  </a>
                </div>
              )}

            </div>

            {/* Desktop sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-6 border-t-2 border-red-700 pt-4">
                <h2 className="mb-4 text-lg font-bold">এই সংবাদ সম্পর্কে</h2>

                {news.source && (
                  <div className="mb-4">
                    <p className="text-sm text-neutral-500">প্রকাশক</p>
                    <p className="mt-1 font-medium">{news.source}</p>
                  </div>
                )}

                {formattedDate && (
                  <div className="mb-4">
                    <p className="text-sm text-neutral-500">প্রকাশের সময়</p>
                    <p className="mt-1 text-sm leading-7">{formattedDate}</p>
                  </div>
                )}

                {news.topics && news.topics.length > 0 && (
                  <div className="mt-6 border-t border-neutral-200 pt-4">
                    <h3 className="mb-3 font-semibold">সম্পর্কিত বিষয়</h3>

                    <ul className="space-y-3">
                      {news.topics.map((topic) => (
                        <li key={topic.id} className="text-sm text-neutral-600">
                          {topic.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>

          </div>

          {/* Back to home */}
          <div className="mt-12 border-t border-neutral-200 py-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold text-red-700 hover:underline"
            >
              <span aria-hidden="true">←</span>
              সব সংবাদে ফিরে যান
            </Link>
          </div>

        </article>
      </div>
    </main>
  );
}
