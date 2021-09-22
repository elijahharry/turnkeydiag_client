import * as wp from "@lib/wpgraphql";

import Posts from "@components/Blog/Posts/Posts";
import Hero from "@components/Hero/Hero";
import Heading from "@components/Heading/Heading";
import MainWrap from "@components/MainWrap/MainWrap";

const BlogPage = ({ posts }) => {
  return (
    <>
      <Heading
        title="Blog"
        desc="Read up on latest news from Turnkey Diagnostics, scientific advancements & more."
      />
      <MainWrap>
        <Hero
          content={{
            id: "blog-hero",
            overline: "Get news, info & more",
            title: "Our Latest <span>Blog Posts</span>",
          }}
          background={{
            vid: {
              src: "blog.mp4",
              blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAUACAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAACP/EABwQAAIDAAMBAAAAAAAAAAAAAAECAwQFABESBv/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAeEQEAAAUFAAAAAAAAAAAAAAABAAMSQWECBBExUf/aAAwDAQACEQMRAD8Aqull7639f7HCt4GbrZOKssFgZEpLraiWeysgSwgf1PDE6nrtfJHZLFi4447ummagHRY8IPllWnlzfMf/2Q==",
              fit: "center",
            },
          }}
          button1={{ link: "/", text: "Home" }}
          button2={{ link: "#blog-posts", text: "Read more" }}
        />
        <Posts posts={posts} />
      </MainWrap>
    </>
  );
};

export default BlogPage;

export async function getStaticProps({ params }) {
  const { posts } = await wp.fetchPosts();
  return { props: { posts: posts }, revalidate: 60 };
}
