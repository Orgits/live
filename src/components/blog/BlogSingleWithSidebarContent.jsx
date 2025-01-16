import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialShare from '../utilities/SocialShare';
import BlogPostComments from './BlogPostComments';
import BlogCommentForm from '../form/BlogCommentForm';
import SearchWidget from '../widgets/SearchWidget';
import RecentPostsWidget from '../widgets/RecentPostsWidget';
import CategoryWidget from '../widgets/CategoryWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import ArchiveWidget from '../widgets/ArchiveWidget';
import FollowWidget from '../widgets/FollowWidget';
import TagsWidget from '../widgets/TagsWidget';
import team2Thumb from '@/assets/img/teams/2.jpg';

const BlogSingleWithSidebarContent = ({ blogInfo }) => {
    const { date, dateIcon, thumbFull, authorIcon, author, title, text, btnText, btnIcon } = blogInfo;

    return (
        <>
            <div className="blog-area single full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <div className="blog-style-two item">
                                    <div className="blog-item-box">
                                        <div className="thumb">
                                            <Link href="#"><Image src={`/assets/img/blog/${thumbFull}`} alt="Thumb" width={1900} height={995} /></Link>
                                        </div>
                                        <div className="info">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link href="#"><i className={dateIcon}></i> {date}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#"><i className={authorIcon}></i> {author}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3>{title}</h3>
                                            <p>{text}</p>
                                            <Link href="#">
                                                <button className="read-more-btn">
                                                    <i className={btnIcon}></i> {btnText}
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="post-author">
                                    <div className="thumb">
                                        <Image src={team2Thumb} alt="Thumb" width={1900} height={995} />
                                    </div>
                                    <div className="info">
                                        <h4><a href="#"></a></h4>
                                        <p>
                                            
                                        </p>
                                    </div>
                                </div> */}
                                <div className="post-tags share">
                                    <div className="tags">
                                        <h4>Tags: </h4>
                                        <a href="#">TAX</a>
                                        <a href="#">
                                            EQUITY
                                        </a>
                                    </div>

                                    <div className="social">
                                        <h4>Share:</h4>
                                        <ul>
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-pagi-area">
                                    <div className="post-previous">
                                        <Link href="#">
                                            <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                                            <div className="nav-title"><h5>Previous Post</h5></div>
                                        </Link>
                                    </div>
                                    <div className="post-next">
                                        <Link href="#">
                                            <div className="nav-title"><h5>Next Post </h5></div>
                                            <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                {/* <div className="blog-comments">
                                    <div className="comments-area">
                                        <div className="comments-title">
                                            <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostsWidget />
                                    <CategoryWidget />
                                    {/* <GalleryWidget /> */}
                                    {/* <ArchiveWidget /> */}
                                    <FollowWidget />
                                    <TagsWidget />
                                </aside>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleWithSidebarContent;