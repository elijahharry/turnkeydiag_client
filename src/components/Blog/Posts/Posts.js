import Post from "./Post/Post";

import { Container, Grid, makeStyles } from "@material-ui/core";

const Posts = ({ posts }) => {
  const classes = useStyles();

  return (
    <section id="blog-posts" className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        {posts.map((post, i) => (
          <Post post={post} i={i} key={post.slug} />
        ))}
      </Container>
    </section>
  );
};

export default Posts;

const useStyles = makeStyles((theme) => ({
  section: {
    position: "relative",
    zIndex: 5,
    paddingBottom: theme.spacing(5),
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap",
    marginTop: -70,
    padding: 0,
  },
}));
