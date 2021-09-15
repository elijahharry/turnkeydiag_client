import MainWrap from "@components/MainWrap/MainWrap";
import Hero from "@components/Hero/Hero";
import Heading from "@components/Heading/Heading";
import panels from "@constants/panels";

import GenericCTA from "@components/CTA/GenericCTA/GenericCTA";
import QuickContact from "@components/CTA/QuickContact/QuickContact";
import PanelsList from "@components/PanelsList/PanelsList";

// Page blocks
import Glance from "@components/ContentBlocks/Glance/Glance";
import TextImg from "@components/ContentBlocks/TextImg/TextImg";
import Faq from "@components/ContentBlocks/Faq/Faq";
import Checklist from "@components/ContentBlocks/Checklist/Checklist";

import { Grid, Container } from "@material-ui/core";

const Panel = ({ panel }) => {
  let components = [];
  panel?.components &&
    panel.components.map((component) => {
      switch (component.type) {
        case "feature":
          components.push(
            <Feature
              content={component.content}
              style={component.style}
              media={component.media}
            />
          );
          break;
        case "Glance":
          components.push(
            <Glance
              title={component.title}
              desc={component.desc}
              benefits={component.benefits}
              backdrop={
                component?.backdrop
                  ? component.backdrop
                  : { backdrop: "grey", opacity: 0.04 }
              }
            />
          );
          break;
        case "TextImg":
          components.push(
            <TextImg
              id={component.id}
              overline={component.overline}
              title={component.title}
              desc={component.desc}
              cta={component?.cta}
              color={component.color}
              backdrop={component?.backdrop}
              flipped={component?.flipped}
              border={component?.border}
              img={component?.img}
              ul_flex={component?.ul_flex}
              ul_height={component?.ul_height}
            />
          );
          break;
        case "Faq":
          components.push(
            <Faq
              id={component.id}
              questions={component.questions}
              overline={component?.overline}
              title={component?.title}
              desc={component?.desc}
              color={component.color}
              backdrop={component?.backdrop}
            />
          );
          break;
        case "Checklist":
          components.push(
            <Checklist
              id={component.id}
              overline={component?.overline}
              title={component?.title}
              desc={component?.desc}
              color={component.color}
              backdrop={component?.backdrop}
              size={component?.size}
              checklist={component?.checklist}
            />
          );
          break;
      }
    });
  return (
    <>
      <Heading
        title={panel.title}
        desc={panel.desc}
        keywords={panel.keywords}
      />
      <MainWrap>
        <Hero
          content={{
            id: panel.slug,
            overline: panel?.turnaround
              ? `${panel.turnaround} turnaround time`
              : `Contact us for turnaround`,
            title: panel.title,
            desc: panel.desc,
            subtitle: panel?.subtitle ? panel.subtitle : false,
          }}
          background={{
            vid: {
              src: panel.vid.src,
              blur: panel.vid.blur,
              fit: "center",
            },
          }}
          button1={{ link: "#quick-contact", text: "Contact us" }}
          button2={{ link: "/panels", text: "Back to all" }}
        />
        <GenericCTA
          title={panel.desc}
          desc={`In urgent need of ${panel.short} Testing? Click the arrow to use our quick contact form.`}
          img={{ ...panel.img, src: `panels/${panel.img.src}` }}
          backdrop={{ backdrop: "grey", opacity: 0.04 }}
          link="#quick-contact"
          icon="panel"
        />
        {components}
        <QuickContact panel={`${panel.short} Testing`} img={panel.img} />
      </MainWrap>
    </>
  );
};

export default Panel;

export async function getStaticPaths({ params }) {
  const paths = panels.map((panel) => ({
    params: { panel: panel.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filtered = panels.filter((panel) => panel.slug === params.panel);
  const panel = filtered[0];
  if (!panel) {
    return {
      notFound: true,
    };
  }
  return { props: { panel: panel } };
}

{
  /* <Feature
        content={{
          id: `${panel.slug}-hero`,
          overline: "One-stop shop for all your needs",
          title: panel.title,
          desc: panel.desc,
          cta: "Learn more",
          link: "#contact",
        }}
        media={{
          feature: {
            vid: {
              src: "diag-generic.mp4",
              fit: "right",
              blur64:
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAoAEgMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABQcG/8QALhAAAAQDBQQLAAAAAAAAAAAAAgMEBQABBhESEyIxByMyYhQVISRBQlFSYZGS/8QAFgEBAQEAAAAAAAAAAAAAAAAABQME/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECAxNBYf/aAAwDAQACEQMRAD8AtbksfE1GurihfF/XoO6oCUinn47lz2XIh7Ig201PVrVh1+8NSJETce07gTvjgHZx5B8Y/JyRVNlIZGsqFwNlIarGP34u0z9awyrsYy2tcoLHMJuCPOGdgvvWGLe+h9E3OxN8M+Y0GYgrtZqwytnZKespekEIUwx9GKzi4A+PxBEtJGjGJ//Z",
            },
          },
          background: {
            vid: {
              src: "diag-generic.mp4",
              blur64:
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAoAEgMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABQcG/8QALhAAAAQDBQQLAAAAAAAAAAAAAgMEBQABBhESEyIxByMyYhQVISRBQlFSYZGS/8QAFgEBAQEAAAAAAAAAAAAAAAAABQME/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECAxNBYf/aAAwDAQACEQMRAD8AtbksfE1GurihfF/XoO6oCUinn47lz2XIh7Ig201PVrVh1+8NSJETce07gTvjgHZx5B8Y/JyRVNlIZGsqFwNlIarGP34u0z9awyrsYy2tcoLHMJuCPOGdgvvWGLe+h9E3OxN8M+Y0GYgrtZqwytnZKespekEIUwx9GKzi4A+PxBEtJGjGJ//Z",
              fit: "center",
            },
          },
        }}
        style={{
          variant: "light",
          color: "secondary_light",
          size: "medium",
          even_padding: true,
          size: "large",
          text: {
            width: 6,
          },
          blobs: {
            behind: "text",
            sm: {
              gradient: "secondary_vert",
              opacity: 1,
            },
            xs: {
              gradient: "secondary_vert",
              opacity: 1,
            },
            feature_vid: {
              gradient: "secondary_vert",
              opacity: 1,
              extras: true,
            },
          },
          overlay: { gradient: "primary_light", opacity: 0.85 },
        }}
      /> */
}
