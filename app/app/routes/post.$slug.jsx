import { PortableText } from "@portabletext/react";

import { useLoaderData } from "@remix-run/react";
import { formatDate } from "~/utils";
import { urlFor } from "~/utils/image";
import { getPost } from "~/utils/sanity";

export const loader = async ({ params }) => {
  const post = await getPost(params.slug);
  return post;
};

export default function PostRoute() {
  const post = useLoaderData();

  console.log(post)

  return (
    <section className="post">
      {post.mainImage ? (
        <img
          className="post__cover"
          src={urlFor(post.mainImage).url()}
          alt="Cover"
        />
      ) : (
        <div className="post__cover--none" />
      )}

      <div className="post__container">
        <h1 className="post__title">{post.title}</h1>
        <p className="post__excerpt">{post.excerpt}</p>
        <p className="post__date">{formatDate(post._createdAt)}</p>
        <div className="post__content">
          <PortableText value={post.body} />
        </div>
      </div>
    </section>
  );
}
