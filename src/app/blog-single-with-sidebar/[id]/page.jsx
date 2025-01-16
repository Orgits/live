import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import BlogSingleWithSidebarContent from '@/components/blog/BlogSingleWithSidebarContent';
import blogData from '@/assets/jsonData/blog/BlogData.json';
import React from 'react';

export const metadata = {
    title: "SJVJ & CO. - Blog Single With Sidebar"
};

const BlogSingleWithSidebar = ({ params }) => {
    const { id } = params;
    const data = blogData.find(blog => blog.id === parseInt(id));

    if (!data) {
        return <div>Blog post not found.</div>;
    }

    return (
        <>
            <LayoutStyle7 
                breadCrumb={data.title} 
                title="Blogs"
            >
                <BlogSingleWithSidebarContent blogInfo={data} />
            </LayoutStyle7>
        </>
    );
};

export default BlogSingleWithSidebar;