import Heading from "@components/Heading/Heading";
import Hero from "@components/Hero/Hero";
import MainWrap from "@components/MainWrap/MainWrap";
import TextImg from "@components/ContentBlocks/TextImg/TextImg";
import Checklist from "@components/ContentBlocks/Checklist/Checklist";
import Certifications from "@components/Certifications/Certifications/Certifications";

export default function About() {
  return (
    <MainWrap>
      <Heading />
      <Hero
        content={{
          id: "about",
          overline: "Who we are / about us",
          title:
            "Nationwide Partnerships All Through One Trusted Source to Benefit You</span>",
        }}
        background={{
          vid: {
            src: "diag-generic.mp4",
            blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAoAEgMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABQcG/8QALhAAAAQDBQQLAAAAAAAAAAAAAgMEBQABBhESEyIxByMyYhQVISRBQlFSYZGS/8QAFgEBAQEAAAAAAAAAAAAAAAAABQME/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECAxNBYf/aAAwDAQACEQMRAD8AtbksfE1GurihfF/XoO6oCUinn47lz2XIh7Ig201PVrVh1+8NSJETce07gTvjgHZx5B8Y/JyRVNlIZGsqFwNlIarGP34u0z9awyrsYy2tcoLHMJuCPOGdgvvWGLe+h9E3OxN8M+Y0GYgrtZqwytnZKespekEIUwx9GKzi4A+PxBEtJGjGJ//Z",
            fit: "center",
          },
        }}
        button1={{ link: "/contact", text: "Contact" }}
        button2={{ link: "/panels", text: "Offerings" }}
      />
      <TextImg
        id="marketplace"
        overline="What is turnkey diagnostics?"
        title="Labratory Testing Marketplace"
        img={{
          src: "marketplace-scientists.png",
          type: "transparent",
          folder: "main",
        }}
        desc={[
          "Our company and executives having over a decade of experience in healthcare and diagnostics have partnered with a handful of the nations best labs across the united States to be bale to serve every population’s businesses and consumers.",
          "From fastest turn around times, to extended panels only found in hospital settings, over the top wrap around care and customer service we are able to partner you with your exact ideal needs for a vendor and long time relationship.",
        ]}
        padding="min-top"
        color="secondary_light"
        cta={{ text: "Contact us today", link: "/contact" }}
        border={true}
      />
      <Certifications />
      <TextImg
        id="full-service"
        overline="Primary offerings at no cost to you"
        title="Full Service, In-House Testing"
        img={{
          src: "inhouse.jpg",
          folder: "main",
        }}
        desc={[
          "What we provide is no-cost, in-house, full service testing. We are able to partner with you and work with your patients insurance, the tests you run, the turn around times you want and the customer service you need and deserve.",
          "We run fully-independent, boutique national labs to service and partner with you to rely on. We help you deliver seamlessly for your clients in order to help you retain and grow your business.",
          "While traditional labs have to send a portion of their diagnostic testing out of house across the street to a local hospital, it adds another 12-24 hours to the turnaround time. At Turnkey Diagnostics, we perform all of our testing in-house, which allows our turnaround times to be faster than other labs.",
        ]}
        flipped={true}
        cta={{ text: "Switch to a single provider", link: "/contact" }}
        color="primary"
        padding="min-top"
      />
      <TextImg
        id="collectors"
        overline="We do the work for you"
        title="In-Person Support & Collectors"
        img={{
          src: "support-flipped.png",
          type: "transparent",
          folder: "main",
        }}
        desc={[
          "We'll send our collectors into your facilities so your staff aren’t boggled down by testing. We understand now more than ever how high the burnout rate. Our collectors will be the bridge between your facility and our lab. We understand their role being valuable not only for taking the testing off your hands so that way your staff can focus on what they do best which is patient care but also to have amazing work ethic and warm personality on the floor.",
          "Our collectors are normally placed either part time or full time as anchors in practices and facilities, helping them out. This is not a 9-5 mindset for us as we understand the commitment people make in healthcare.",
        ]}
        cta={{ text: "What do your collectors help with?" }}
        border={true}
        color="secondary_light"
      />
      <Checklist
        overline="What we can do for you"
        title="Collector's Scope of Work"
        desc="Our collectors come in an assist with a variety of diagnostics-related tasks. The following are just a few of the things we'll take off your hands:"
        checklist={[
          "Billing",
          "Shipping",
          "Printing",
          "Administration of tests",
          "Reporting of results",
          "Communication with yours staff regarding patient testing and care",
          "Collecting and handling of all patient demographic information",
          "Requisition form handling",
          "Labeling",
        ]}
        color="secondary"
      />
    </MainWrap>
  );
}
