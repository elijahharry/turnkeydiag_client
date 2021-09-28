import { useState, useEffect } from "react";

import Heading from "@components/Heading/Heading";
import Brand from "@components/Landing/Brand/Brand";
import FormGrid from "@components/Landing/FormGrid/FormGrid";
import Results from "@components/Landing/Results/Results";
import Testimonials from "@components/Landing/Testimonials/Testimonials";
import Footer from "@components/Landing/Footer/Footer";

export default function Index() {
  const [success, setSuccess] = useState(false);
  const [calendlyPrefill, setCalendlyPrefill] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    state: "",
  });

  useEffect(() => {
    if (success) {
      window.onbeforeunload = function () {
        return null;
      };
    }
  }, [success]);

  return (
    <>
      <Heading title="Free Consult" />
      <main>
        <Brand />
        {success ? (
          <Results prefill={calendlyPrefill} />
        ) : (
          <FormGrid
            setCalendly={setCalendlyPrefill}
            success={success}
            saveSuccess={setSuccess}
          />
        )}
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
