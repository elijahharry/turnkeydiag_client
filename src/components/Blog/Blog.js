import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import PanelBlobs from "@components/PanelBlobs/PanelBlobs";
const Blog = () => {
  const classes = useStyles();
  return (
    <section className={classes.blog + " grey"}>
      <Typography variant="h2" gutterBottom>
        Blog is coming soon...
      </Typography>
      <Typography variant="body1">
        In the meantime, read up on our tests:
      </Typography>

      <PanelBlobs />
    </section>
  );
};

export default Blog;
