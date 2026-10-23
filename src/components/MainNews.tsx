import Image from "next/image";

interface News {
    id:string,
    title:string,
    description:string,
    category:string,
    imageUrl:string,
    imageAlt:string

}


const MainNews = ({ news }:{news:News[]}) => {
    const [firstNews, ...otherNews] = news
    // const otherNews=news.slice(1)


    return (
        <div className="flex gap-2">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        height={600}
                        width={600}
                        src={firstNews.imageUrl}
                        alt={firstNews.imageAlt} />
                </figure>
                <div className="card-body">
                    <p className="text-red-600 font-semibold">{firstNews.category}</p>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>

                </div>
            </div>

            <div className="grid gap-2">
                {otherNews.slice(0, 4).map((otherNew) => {
                    return (
                        <div className="card bg-base-100 border border-gray-300 p-5" key={otherNew.id}>
                            <div>
                                <p className="text-red-600 font-semibold">{firstNews.category}</p>
                                {otherNew.title}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MainNews;