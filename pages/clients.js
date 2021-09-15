import MainWrap from "@components/MainWrap/MainWrap";
import Hero from "@components/Hero/Hero";
import Heading from "@components/Heading/Heading";
import Testimonials from "@components/Clients/Testimonials/Testimonials";
import ClientList from "@components/Clients/ClientList/ClientList";
import Checklist from "@components/ContentBlocks/Checklist/Checklist";

const ClientsPage = () => {
  return (
    <>
      <Heading
        title="Our Clients"
        desc="Happy clients in a wide variety of industries."
      />
      <MainWrap>
        <Hero
          content={{
            id: "clients",
            overline: "Trusted across the country",
            title: "Learn About Our <span>Clients</span>",
            desc: "Our innovative approach bridges the gap between labs, patients and physicians.",
          }}
          background={{
            vid: {
              src: "clients.mp4",
              blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAUACAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABv/EAB0QAAIBBQEBAAAAAAAAAAAAAAECAwAEBQYSBxH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBf/EABwRAAICAgMAAAAAAAAAAAAAAAEDAhEAsQQhMf/aAAwDAQACEQMRAD8Av/VmfxDbcpptiV2LFbPjb+7u48wvTKqiBRGrRccgC5YLz85WOMAfQzMpSqaeOpkLkL93hsexc6ia6Ghn/9k=",
              fit: "center",
            },
          }}
          button1={{ link: "/panels", text: "All Tests" }}
          button2={{ link: "/contact", text: "Contact" }}
        />
        <Testimonials />
        <ClientList />
        <Checklist
          overline="Experience in Multiple Settings"
          title="Industries We Work With"
          desc="Populations we commonly serve include, but are not limited to:"
          checklist={[
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
          ]}
          color="secondary"
          backdrop={{ backdrop: "secondary", opacity: 0.03 }}
        />
      </MainWrap>
    </>
  );
};

export default ClientsPage;
