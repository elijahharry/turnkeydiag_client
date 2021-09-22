import { Typography, Container } from "@material-ui/core";
import useStyles from "./styles";
import PanelBlobs from "@components/PanelBlobs/PanelBlobs";
const PostContent = ({ post }) => {
  const classes = useStyles();
  return (
    <section className={classes.blog + " grey"}>
      <Container maxWidth="lg" style={{ padding: 0 }}>
        <div className={classes.holder}>
          <div
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </Container>
    </section>
  );
};

export default PostContent;
