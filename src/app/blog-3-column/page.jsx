import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import React from 'react';

export const metadata = {
    title: "SJVJ & CO. - Blog 3 Column"
}

const Blog3Column = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="blogs" title="Blog 3 Column">
                <Blog3ColumnContent />
            </LayoutStyle7>
        </>
    );
};

export default Blog3Column;