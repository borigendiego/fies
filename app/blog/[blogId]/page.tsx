
import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Button from '../../../components/commons/homeButton';
import { Blog } from '../../../types';
import getBlog from '../../../api/getBlog';
import Image from 'next/image';

type Params = {
    params: {
        blogId: number
    }
}

export default async function BlogSinglePage({ params: { blogId }}: Params) {

    const blogData = getBlog(blogId);
    const blog: Blog = await blogData;
    
    return(
        <div>
            <main>
                <Button />
                <Header />
                <div className='flex flex-col items-center py-12'>
                    <div className="md:w-[700px] w-full md:h-[380px] h-[300px] relative">
                        <Image src={`${blog.image}`} alt="" objectFit="cover" objectPosition='center center' fill className='rounded-lg' />
                    </div>
                    <div className='border mt-12 w-[1000px] hidden md:block' />
                    <div className='flex flex-col gap-4 max-w-[900px] pt-12 md:mx-auto mx-8'>
                        <h2 className='font-semibold'>{blog.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} className='flex flex-col blog-content'></div>
                    </div>
                </div>
                <Footer />
            </main>
            <footer>

            </footer>
        </div>
    )
}






