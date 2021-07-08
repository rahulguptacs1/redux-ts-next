import * as postApi from "@apiClient/posts";

import Link from "next/link";
function Posts({ posts = null }: { posts: any }) {
  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <p>{post.title}</p>
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
export async function getStaticProps(context: any) {
  const response = await postApi.fetchPosts();
  //   console.log(posts);
  return {
    props: { posts: response.data }, // will be passed to the page component as props
  };
}
