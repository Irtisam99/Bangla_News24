
const Marquee = async() => {
    const res=await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data=await res.json()
    
    return (
        <div>
            
        </div>
    );
};

export default Marquee;