import NewsCard from '@/components/NewsCard';
import { notFound } from 'next/navigation';
import React from 'react';

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string
}


const CategoryNews = async ({ params }: { params: { categoryid: string } }) => {
    const { categoryid } = await params

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryid}`)
    const data = await res.json()
    const categoryNews: News[] = data.data

    if (!data.success || !categoryNews) {
        notFound();
    }

    return (
        <div className='mt-6'>
            <h1 className='text-3xl font-bold border-b-2 border-red-700 mb-5'>{data.title}</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    categoryNews.map((cn) => {
                        return (
                            <NewsCard key={cn.id} news={cn}></NewsCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CategoryNews;