import React from "react";
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

function page() {
  const postMetadata = getPostMetadata("posts");
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <section className="mt-10">
      <div className="grid gap-10">{postPreviews}</div>
    </section>
  );
}

export default page;
