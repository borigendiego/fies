
import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import { Blog } from '../../types';
import getAllBlogs from '../../api/getAllBlogs';
import BlogPageComponent from '../../components/blogPageComponent';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Blog',
    description: 'SPEKTRUM - Blog',
}


const BlogPage = async () => {
    const blogsData: Blog[] = await getAllBlogs();
    return(
        <div>
            <main>
                <Button />
                <Header />
                <BlogPageComponent blogsData={blogsData} />
                <Footer />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default BlogPage;