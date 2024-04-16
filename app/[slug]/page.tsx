import Image from "next/image";
import { loadPostDetails, loadPostsPath } from "@/apiService/apiService";
import { IPost } from "@/models/models";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import imageUrl from "@/utils/generate-image-url";

type Props = {
  params: { slug: string };
};

export default async function PostDetails({ params }: Props) {
  const postDetails: IPost = await loadPostDetails(params?.slug);

  return (
    <div className="container mt-5">
      <div className="content">
        <Image
          src={imageUrl(postDetails?.attributes?.image?.data?.attributes?.url)}
          alt={"post details"}
          width={600}
          height={400}
        />
        <h1>{postDetails?.attributes?.title}</h1>
        <BlocksRenderer content={postDetails?.attributes?.content} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const postsPath = await loadPostsPath();
  return postsPath?.map((post: any) => ({
    slug: post?.attributes?.slug,
  }));
}
export const revalidate = 60;
