import getAllBlogs from '../../../api/getAllBlogs';
import BlogSliderClient from './BlogSliderClient';

export default async function BlogSlider() {
    const blogs = await getAllBlogs();
    return <BlogSliderClient blogs={blogs} />;
}
