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
};

const Home1 = () => {
    return (
        <>
            <Head>
                <title>SJVJ & COMPANY - Best Accounting Firm in India</title>
                <meta name="description" content="Welcome to SJVJ & COMPANY, the leading accounting firm in India. Explore our expert services in accounting, tax planning, financial advisory, and more. Our experienced team is dedicated to providing top-notch solutions tailored to your business needs." />
                <meta name="keywords" content="SJVJ & COMPANY, Accounting Firm India, Best Accounting Services, Tax Planning, Financial Advisory, Business Solutions, Top Accounting Firms, Professional Accounting Team, India Accounting Experts" />
                <meta name="author" content="SJVJ & COMPANY" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="SJVJ & COMPANY - Best Accounting Firm in India" />
                <meta property="og:description" content="Welcome to SJVJ & COMPANY, the leading accounting firm in India. Explore our expert services in accounting, tax planning, financial advisory, and more." />
                <meta property="og:image" content="[Provide the URL to the banner or relevant image]" />
                <meta property="og:url" content="https://sjvj.in" />
                <meta property="og:type" content="website" />

            
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
