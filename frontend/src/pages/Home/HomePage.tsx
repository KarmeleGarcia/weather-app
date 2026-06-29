import { useTranslation } from "react-i18next";
import { Heading } from "@/components/atoms/Heading";
// import { useNavigate } from "react-router-dom";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <section className="home">
      <Heading as="h1" size="2xl" align="center">
        { t('home.greeting') }
      </Heading>
    </section>
  );
}
