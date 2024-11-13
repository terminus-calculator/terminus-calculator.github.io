import { getPostData, getAllPostIds } from '@/lib/posts';
import { Metadata } from 'next';
import { PostData } from '@/types/post';
import Breadcrumb from '@/components/Breadcrumb';
import { Clock, Laptop } from 'lucide-react';
import { siteUrl } from '@/meta.config';
import Image from 'next/image';

type Props = {
    params: {
        id: string;
    };
}

// 生成静态路径
export async function generateStaticParams() {
    const posts = getAllPostIds();
    return posts;
}

// 生成元数据
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const postData = await getPostData(params.id);
    return {
        title: postData.title,
        description: postData.description || `Article about ${postData.title}`,
        keywords: "",
        alternates: {
            canonical: `${siteUrl}/guides/${params.id}`
        }
    };
}

export default async function Post({ params }: Props) {
    const postData: PostData = await getPostData(params.id);

    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            <Breadcrumb
                items={[
                    { label: 'Guides', href: '/guides' },
                    { label: postData.title }
                ]}
            />
            {/* Article Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {postData.title}
                </h1>
                <div className="flex items-center gap-6 text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{postData.readTime} read</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Laptop className="w-4 h-4" />
                        <span>{new Date(postData.date).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>

            {/* Article Image */}
            <div className='relative w-full aspect-video mb-8'>
                <Image
                    src={postData.image}
                    alt={postData.title}
                    fill
                    className="aspect-video" />
            </div>

            {/* Article Content */}
            <div
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                className="markdown-content prose prose-lg max-w-none"
            />
        </article>
    );
}