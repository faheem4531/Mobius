import { useEffect } from "react";

export default function TrustpilotWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div class="trustpilot-widget" 
            data-locale="en-US" 
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="6597b2fe021710c9f4a6bf6d" 
            data-style-height="52px"
            data-style-width="100%" 
            data-theme="light"
          >
            <a href="https://www.trustpilot.com/review/mobiusstudios.co" target="_blank" rel="noopener">
              Check our Trustpilot reviews
            </a>
          </div>
        `,
      }}
    />
  );
}
