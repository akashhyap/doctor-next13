import Image from "next/image";
import Link from "next/link";
// import { render } from "storyblok-rich-text-react-renderer";

// International Date formatter
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const ArticleCard = ({ article, slug, category }) => {
  // console.log("article card", article);
  const isPageComponent = article?.component == "page";
  let date = !isPageComponent && new Date(article?.date?.split(" ")[0]);

  return (
    <>
      {!isPageComponent && (
        <div className="blog_teaser flex flex-col w-full group bg-gray-100 p-5 rounded-xl transition duration-500 ease-in-out">
          {article?.body[0]?.body?.map((item) => {
            console.log(item);
            switch (item.component) {
              case "featuredImage":
                return (
                  <figure
                    key={item._uid}
                    className="relative order-1 aspect-w-16 aspect-h-9"
                  >
                    <Link href={`/${slug}`}>
                      <Image
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
                        src={item?.image?.filename}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={item?.image?.filename}
                      />
                    </Link>
                  </figure>
                );
                break;
              case "heading":
                return (
                  <div key={item._uid} className="order-2">
                    <h2 className="exclude-index font-poppins mb-0 mt-4 text-2xl text-eerie font-semibold leading-8 tracking-tighter">
                      <Link href={`/${slug}`} legacyBehavior>
                        <a>{item.name}</a>
                      </Link>
                    </h2>
                  </div>
                );
                break;
              default:
                break;
            }
          })}
        </div>
      )}
    </>
  );
};
export default ArticleCard;
