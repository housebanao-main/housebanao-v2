import React from 'react';
import BlogCard from './BlogCard';
import FeaturedBlogCard from './FeaturedBlogCard';
import Wrapper from '@/components/Wrapper';

const blogData = [
    {
        title: 'New Home Construction | Build Your Perfect Home',
        excerpt: 'A practical guide to costs, financing, and the latest trends in building a new home from the ground up.',
        image: '/blog/blog1/blog1.png',
        date: '01 June, 2024',
        category: 'Construction',
        readTime: '6 min read',
        link: '/blog/new-home-construction'
    },
    {
        title: 'Finding the Best Construction Company in Gurgaon: A Complete Guide',
        excerpt: 'What to look for, what to avoid, and the questions that separate a great builder from a risky one.',
        image: '/blog/blog1/building.png',
        date: '02 June, 2024',
        category: 'Guides',
        readTime: '7 min read',
        link: '/blog/best-construction-company-gurgaon'
    },
    {
        title: 'Home Interior Design, Interior Design Services, House Interior Design',
        excerpt: 'Ideas and inspiration for turning a freshly built house into a home that truly feels like yours.',
        image: '/blog/blog1/home.png',
        date: '03 June, 2024',
        category: 'Interiors',
        readTime: '5 min read',
        link: '/blog/home-interior-design'
    },
    {
        title: 'Selection of the Correct Construction Company in Delhi NCR',
        excerpt: 'A step-by-step checklist for vetting builders and contractors before you sign on the dotted line.',
        image: '/blog/blog1/construction.png',
        date: '04 June, 2024',
        category: 'Guides',
        readTime: '6 min read',
        link: '/blog/selection-correct-company'
    }
];

const topics = ['Construction', 'Interiors', 'Guides', 'Renovation', 'Trends'];

const Blogs = ({ numberOfItems = blogData.length }) => {
    const [featured, ...rest] = blogData.slice(0, numberOfItems);

    return (
        <section className='bg-white py-10 md:py-20 border-b border-[#e8e4df]'>
            <Wrapper className='w-full lg:w-[90%] mx-auto'>
                <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#e8e4df]' data-aos='fade-up'>
                    <div>
                        <p className='text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-3'>
                            Latest Articles
                        </p>
                        <h2 className='text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight'>
                            From Our Blog
                        </h2>
                    </div>
                    <p className='text-[#666] text-lg max-w-sm leading-relaxed'>
                        Tips, trends, and honest advice on construction and interior design — straight from our team.
                    </p>
                </div>

                {/* Popular topics */}
                <div className='flex flex-wrap items-center gap-3 mb-14' data-aos='fade-up'>
                    <span className='text-[#666] text-sm font-semibold uppercase tracking-widest mr-1'>
                        Popular Topics:
                    </span>
                    {topics.map((topic) => (
                        <span
                            key={topic}
                            className='text-sm text-[#0f0f0f] border border-[#e8e4df] rounded-full px-4 py-1.5 hover:border-[#c9a07a] hover:text-[#c9a07a] transition-colors duration-300 cursor-default'
                        >
                            {topic}
                        </span>
                    ))}
                </div>

                {/* Featured post */}
                {featured && (
                    <div className='mb-14'>
                        <FeaturedBlogCard {...featured} />
                    </div>
                )}

                {/* Remaining posts */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {rest.map((blog, index) => (
                        <BlogCard
                            key={index}
                            title={blog.title}
                            excerpt={blog.excerpt}
                            image={blog.image}
                            date={blog.date}
                            category={blog.category}
                            readTime={blog.readTime}
                            link={blog.link}
                            index={index}
                        />
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Blogs;
