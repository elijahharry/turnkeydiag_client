import Heading from "@components/Heading/Heading";
import Hero from "@components/Hero/Hero";
import PanelsCTA from "@components/CTA/PanelsCTA/PanelsCTA";
import MainWrap from "@components/MainWrap/MainWrap";
import BouncyCTA from "@components/CTA/BouncyCTA/BouncyCTA";
import PanelBlobs from "@components/PanelBlobs/PanelBlobs";
import PanelCards from "@components/PanelCards/PanelCards";
import TextImg from "@components/ContentBlocks/TextImg/TextImg";
import Checklist from "@components/ContentBlocks/Checklist/Checklist";

export default function Index() {
  return (
    <MainWrap>
      <Heading />
      <Hero
        content={{
          id: "homepage",
          overline: "All Diagnostic Needs Through One Trusted Source",
          title:
            "Providing a <span>turnkey solution</span> for diagnostic services",
          desc: "Our innovative approach bridges the gap between labs, patients and physicians.",
        }}
        background={{
          vid: {
            src: "diag-montage.mp4",
            blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAgADgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAAB//EACEQAAEDAgcBAAAAAAAAAAAAAAEDBBEAAgUGBxIhMUET/8QAFQEBAQAAAAAAAAAAAAAAAAAABgf/xAAdEQACAgEFAAAAAAAAAAAAAAABAgADBBETITE0/9oADAMBAAIRAxEAPwCdaR6qpZeYb39qliJR+iAAj6QY78HFwn0gio3qziGC4vmt5mNNg0cu3Sm1S5xDlMCJi2RE9c8nye5UotjVJXezqNCZS/Rijc56n//Z",
            fit: "center",
          },
        }}
        style={{ size: "lg" }}
        button1={{ link: "#intro", text: "Learn more" }}
        button2={{ link: "/panels", text: "Our tests" }}
      />
      <PanelsCTA
        color="secondary"
        backdrop={{ backdrop: "primary", opacity: 0.1 }}
      />
      <TextImg
        id="bridging"
        overline="Innovative Approach to Diagnostic Testing"
        title="Bridging the Gap Between Labs, Patients & Physicians"
        img={{
          src: "bridge.png",
          type: "transparent",
          folder: "main",
        }}
        desc="Our effective approach bridges the gap between labs, patients and physicians. Regardless of state, test type, or insurance we can cover your needs."
        padding="min-top"
        color="primary"
        cta={{ text: "About us", link: "/about" }}
        lg={true}
        flipped={true}
        backdrop={{ backdrop: "primary", opacity: 0.1 }}
      />
      <TextImg
        id="industries"
        overline="Experience in multiple areas"
        title="Populations We Serve"
        img={{
          src: "doc-patients.png",
          type: "transparent",
          folder: "main",
        }}
        desc={[
          "Some of the industries we currently work with include, but are by no means limited to:",
          [
            "Assisted Living",
            "Behavioral Health Facilities",
            "Family Medicine",
            "Hospice and Home Health",
            "Hospitals",
            "Independent Living",
            "Internal Medicine",
            "Memory Care",
            "Mental Health Treatment",
            "Nephrologists",
            "OBGYN Clinics",
            "Oncologist",
            "Pediatricians",
            "Primary Care Physician’s",
            "Psychiatry",
            "Skilled Nursing Facilities",
            "Surgical Centers",
            "Wound Care Clinics",
          ],
        ]}
        padding="min-top"
        ul_flex="sm"
        color="secondary_light"
        cta={{ text: "Can we help you?", link: "/contact" }}
        lg={true}
      />
      <TextImg
        id="collectors"
        overline="Innovative Approach to Diagnostic Testing"
        title="We Come to You for All Your Diagnostic Needs"
        img={{
          src: "testingservices.png",
          type: "transparent",
          folder: "main",
        }}
        desc="Avoid employee burn out by allowing our staff to handle: Collection, Requisition Forms, Administration, Reporting, Supplies, EMR Integration, and more."
        padding="min-top"
        color="primary"
        cta={{ text: "Learn more", link: "/about#collectors" }}
        lg={true}
        flipped={true}
        backdrop={{ backdrop: "primary", opacity: 0.08 }}
      />
      <PanelCards
        overline="Everything you need"
        title="Full Suite of Services for All Testing"
        desc="We proudly offer tests & panels that should meet all of your diagnostic needs. No more managing results through multiple providers. Click on a panel below to learn more about that specific offering."
        size="lg"
      />
      <TextImg
        id="healthcare"
        overline="Praised across the U.S.A"
        title="Healthcare’s Favorite Partnership for Diagnostics"
        img={{
          src: "healthworkers.png",
          type: "transparent",
          folder: "main",
        }}
        desc="Higher Quality Testing, Faster Turn Around Times, Accountability, and Best Customer Service - guaranteed."
        padding="min-top"
        color="primary"
        cta={{ text: "Testimonials", link: "/clients" }}
        lg={true}
      />

      <Checklist
        overline="CHAMPIONS OF SERVICE & PRICE"
        title="Better Service, More Savings"
        desc="The things that seperate us from our competition are the things that ultimately save you countless hours and dollars. Including, but not limited to:"
        checklist={[
          "We do not bill the facility nor the patients",
          "100% transparency",
          "Guarantee at least 80% adjudication",
          "Assured medical necessity",
          "Patient-centric billing",
          "Proven methodology",
          "Hands-on clinician owners",
          "Clinical training to ensure market success",
          "Compliant agreements and timely payments",
          "In-house collection",
          "Guaranteed seamless transition and onboarding of accounts",
        ]}
        color="secondary"
        size="lg"
        backdrop={{ backdrop: "secondary", opacity: 0.06 }}
      />
    </MainWrap>
  );
}
