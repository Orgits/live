import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import AboutStyle1 from '@/components/about/AboutStyle1';
import BannerStyle1 from '@/components/banner/BannerStyle1';
import BlogStyle1 from '@/components/blog/BlogStyle1';
import ChooseStyle1 from '@/components/choose/ChooseStyle1';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import ProjectStyle1 from '@/components/project/ProjectStyle1';
import RequestCallStyle1 from '@/components/request/RequestCallStyle1';
import ServicesStyle1 from '@/components/services/ServicesStyle1';
import TeamStyle1 from '@/components/team/TeamStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import Head from 'next/head';
import React from 'react';

export const metadata = {
    title: "SJVJ & COMPANY - Best Accounting Firm in India",
    description: "Welcome to SJVJ & COMPANY, the leading accounting firm in India. Explore our expert services in accounting, tax planning, financial advisory, and more. Our experienced team is dedicated to providing top-notch solutions tailored to your business needs.",
    keywords: "SJVJ & COMPANY, Accounting Firm India, Best Accounting Services, Tax Planning, Financial Advisory, Business Solutions, Top Accounting Firms, Professional Accounting Team, India Accounting Experts",
    author: "SJVJ & COMPANY",
    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow",
    og: {
        title: "SJVJ & COMPANY - Best Accounting Firm in India",
        description: "Welcome to SJVJ & COMPANY, the leading accounting firm in India. Explore our expert services in accounting, tax planning, financial advisory, and more.",
        image: "[Provide the URL to the banner or relevant image]",
        url: "https://sjvj.in",
        type: "website",
    },
};

const Home1 = () => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta name="author" content={metadata.author} />
                <meta name="viewport" content={metadata.viewport} />
                <meta name="robots" content={metadata.robots} />

                <meta property="og:title" content={metadata.og.title} />
                <meta property="og:description" content={metadata.og.description} />
                <meta property="og:image" content={metadata.og.image} />
                <meta property="og:url" content={metadata.og.url} />
                <meta property="og:type" content={metadata.og.type} />
            </Head>

            <LayoutStyle7>
                <BannerStyle1 />
                <AboutStyle1 />
                <ServicesStyle1 />
                {/* <ProcessStyle1 /> */}
                <ChooseStyle1 />
                {/* <PartnerStyle1 sectionClass="default-padding" /> */}
                <TeamStyle1 sectionClass="bg-gray" teamTitle={true} />
                <ProjectStyle1 />
                <RequestCallStyle1 />
                {/* <TestimonialStyle1 /> */}
                <BlogStyle1 sectionClass="bg-gray" />
            </LayoutStyle7>
        </>
    );
};

export default Home1;