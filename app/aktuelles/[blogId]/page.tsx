
import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Button from '../../../components/commons/homeButton';
import { Blog } from '../../../types';
import getBlog from '../../../api/getBlog';
import SingleBlogComponent from '../../../components/blogIndividuaEntry';

type Params = {
    params: {
        blogId: number
    }
}

export default async function BlogSinglePage({ params: { blogId }}: Params) {
    const blogData = getBlog(blogId);
    const blog: Blog = await blogData;

    return (
        <main>
            <Button />
            <Header />
            <SingleBlogComponent blog={blog} />
            <Footer />
        </main>
    )
}
