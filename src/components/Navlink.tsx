import Link from "next/link";
interface Navs{
      slug:string,
      title: string,
      topicId: string | null,
      url: string,
      scrapable: boolean
}
const Navlink = async() => {
    const res=await fetch('https://news-api-v2.vercel.app/api/categories')
    const data=await res.json()
    const nav:Navs[]=data.data
    console.log(nav)
    const filtertedNavs=nav.filter((n)=>{
        return n.scrapable
    })
    return (
        <div className="flex gap-5 justify-center mt-5">
            <Link href={'/'}>হোম</Link>

            {
                filtertedNavs.map((n,ind)=>{
                   return <Link key={ind} href={n.slug}>{n.title}</Link>
                })
            }
        </div>
    );
};

export default Navlink;