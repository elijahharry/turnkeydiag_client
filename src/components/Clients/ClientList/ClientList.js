import Image from "next/image";

import { Container, Typography } from "@material-ui/core";
import Checklist from "@components/ContentBlocks/Checklist/Checklist";
import useStyles from "./styles";

const ClientList = () => {
  const classes = useStyles();

  let clients = [];
  for (let i = 1; i <= 22; i++) {
    clients.push(
      <div className={classes.client}>
        <Image
          src={`/img/client-${i}.png`}
          width={170}
          height={100}
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    );
  }

  return (
    <section id="#client-list" className="padding">
      <Container maxWidth="lg" className={classes.container}>
        <Typography
          variant="overline"
          color="primary"
          align="center"
          gutterBottom
        >
          Trusted by many
        </Typography>
        <Typography variant="h3" align="center" gutterBottom>
          Some of Our Happy Clients
        </Typography>
        <Typography
          variant="body2"
          align="center"
          className={classes.desc}
          gutterBottom
        >
          Currently have an extensive clientbase and experience in a wide
          variety of industries. The following are just a few:
        </Typography>
        <div className={classes.clients}>
          {clients}
          <Typography variant="h6">...and many more!</Typography>
        </div>
      </Container>
    </section>
  );
};

export default ClientList;
