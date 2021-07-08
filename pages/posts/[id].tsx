import { useDispatch, useSelector } from "react-redux";
import * as postApi from "@apiClient/posts";

function Post({ post }: any) {
  return <div>{post?.title}</div>;
}

export default Post;
export const getStaticPaths = async () => {
  const response = await postApi.fetchPosts();
  const posts = response.data;
  const postPaths: any[] = [];
  posts.forEach((post: any) => {
    postPaths.push({
      params: {
        id: `${post.id}`,
      },
    });
  });

  return {
    paths: postPaths,
    fallback: false,
  };
};
export const getStaticProps = async (context: any) => {
  const postId = context.params.id;
  const response = await postApi.fetchPost(postId);
  return {
    props: {
      post: response.data,
    },
  };
};
