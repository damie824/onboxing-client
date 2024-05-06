import { useEffect } from "react";

export default function DisableFooter() {
  useEffect(() => {
    const footer = document.getElementById("footer");
    const footerMenu = document.getElementById("footer-menu");
    footer?.remove();
    footerMenu?.remove();
  });

  return <></>;
}
