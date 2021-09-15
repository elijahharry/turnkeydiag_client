import Head from "next/head";

const Heading = ({ title, desc, keywords }) => {
  return (
    <Head>
      {title ? (
        <title>{title} | TurnKey Diagnostics</title>
      ) : (
        <title>
          TurnKey Diagnostics | Full-Service Diagnostics with Extended Panels
        </title>
      )}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {desc ? (
        <meta name="description" content={desc} />
      ) : (
        <meta
          name="description"
          content="Our innovative approach to diagnostic services bridges the gap between labs, patients and physicians."
        />
      )}
      {keywords ? (
        <meta name="keywords" content={keywords} />
      ) : (
        <meta
          name="keywords"
          content="Diagnostics, Testing, Lab, Health, COVID-19, Influenza, Blood Testing"
        />
      )}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/fav/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav/favicon-16x16.png"
      />
      <link rel="manifest" href="/fav/site.webmanifest" />
      <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#968263" />
      <link rel="shortcut icon" href="/fav/favicon.ico" />
      <meta name="msapplication-TileColor" content="#6ca3f3" />
      <meta name="msapplication-config" content="/fav/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Heading;
