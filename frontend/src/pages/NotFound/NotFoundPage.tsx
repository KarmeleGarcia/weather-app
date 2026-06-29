import { useTranslation } from "react-i18next";

import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <Heading as="h1" size="2xl">
        {t("error.404")}
      </Heading>
      <Text as="p" size="lg">
        {t("error.page_not_found")}
      </Text>
    </div>
  );
}
