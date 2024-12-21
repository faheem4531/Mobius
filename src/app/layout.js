import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobius Studios | 3d animation & CGI videos in USA",
  description:
    "Mobius Studios, a USA-based 3D animation & CGI video agency, creates stunning animations to enhance your brand’s social media, ads, and digital marketing presence",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.mobiusstudios.co/" />

        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WHTLHHQK');
              `,
          }}
        />

        {/* <!-- TrustBox script --> */}
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
        {/* <!-- End TrustBox script --> */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHTLHHQK"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <div>
          {children}
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
