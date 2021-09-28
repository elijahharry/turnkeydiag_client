import Image from "next/image";

import useStyles from "./styles";

const Certifications = ({ count }) => {
  const classes = useStyles();

  let certs = [];
  for (let i = 1; i <= count; i++) {
    certs.push(
      <div className={classes.cert} key={"cert-" + i}>
        <Image
          src={`/img/cert-${i}.png`}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    );
  }
  return (
    <aside id="certifications" className={classes.certifications}>
      {certs}
    </aside>
  );
};

export default Certifications;
