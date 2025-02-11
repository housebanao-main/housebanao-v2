import React from 'react';
import BlogCard from './BlogCard';
import Wrapper from '@/components/Wrapper';

const blogData = [
    {
        title: 'New Home Construction | Build Your Perfect Home',
        image: '/blog/blog1/blog1.png', // Direct path (No import needed)
        date: '01 June, 2024'
    },
    {
        title: 'Finding the Best Construction Company in Gurgaon: A Complete Guide',
        image: '/blog/blog1/building.png',
        date: '02 June, 2024'
    },
    {
        title: 'Home Interior Design, Interior Design Services, House Interior Design',
        image: '/blog/blog1/home.png',
        date: '03 June, 2024'
    }
];

const Blogs = ({ numberOfItems = blogData.length }) => {
    return (
        <Wrapper className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full lg:w-[90%] mx-auto'>
            {blogData.slice(0, numberOfItems).map((blog, index) => (
                <BlogCard key={index} title={blog.title} image={blog.image} date={blog.date} />
            ))}
        </Wrapper>
    );
};

export default Blogs;
