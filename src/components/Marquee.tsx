import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface Headlines{
    id:string,
    title:string
}
const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json()
    const headlines:Headlines[] = data.data
    console.log(headlines)
    return (
        <div className="bg-red-700 text-white mt-3">
            <div className="flex container mx-auto">
                <div className="bg-red-800 py-1 text-white px-4 font-bold">
                    সর্বশেষ
                </div>
                <MarqueeText direction="right" duration={10} className="py-1">
                    {
                        headlines.map((h) => {
                            return (
                                <span key={h.id}>
                                    <span>{h.title}</span>
                                    <span className="mx-4">•</span>
                                </span>

                            )
                        })
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;