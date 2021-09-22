import Heading from "@components/Heading/Heading";
import MainWrap from "@components/MainWrap/MainWrap";
import Hero from "@components/Hero/Hero";
import PostContent from "@components/Blog/PostContent/PostContent";
import Author from "@components/Blog/Author/Author";
import * as wp from "@lib/wpgraphql";

const BlogPost = ({ post }) => {
  return (
    <>
      <Heading title={`${post.title} | Blog`} desc={post.excerpt} />
      <MainWrap title>
        <Hero
          content={{
            id: post.slug + "-hero",
            overline: `${post.date} / <a href="#author">${post.author.node.firstName} ${post.author.node.lastName}</a>`,
            title: post.title,
          }}
          background={{
            img: {
              src: post?.featuredImage?.node?.sourceUrl
                ? post.featuredImage.node.sourceUrl
                : "/img/scientists-testing.jpg",
            },
          }}
          type="blog"
          style={{ size: "sm", paddingTop: 90 }}
        />
        <PostContent post={post} />
        <Author author={post.author.node} />
      </MainWrap>
    </>
  );
};

export default BlogPost;

export async function getStaticProps({ params }) {
  const post = await wp.fetchPost(params.slug);
  if (post === null) {
    return { notFound: true };
  }
  return { revalidate: 10, props: { post: post } };
}

export async function getStaticPaths() {
  const { slugs } = await wp.fetchPosts();
  const paths = slugs.map((slug) => ({
    params: {
      slug: slug,
    },
  }));
  return { paths, fallback: false };
}
