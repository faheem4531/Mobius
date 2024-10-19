"use client";

import Script from "next/script";
import HomePage from "./homePage/page";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* Tawk.to Live Chat Widget */}
      <Script id="tawkto" strategy="afterInteractive">
        {`
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function() {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/XXXXXX/default'; 
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
          })();
        `}
      </Script>
      {/* Meta Pixel Code */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/sdk.js');
          fbq('init', 'XXXXXXXX'); // Replace with your Pixel ID
          fbq('track', 'PageView');
        `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=XXXXXXXX&ev=PageView&noscript=1"
        />
      </noscript>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=XXXXXXXX`}
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'XXXXXXXX');
        `}
      </Script>
      <Script id="tiktok-pixel" strategy="afterInteractive">
        {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject = t;
            var ttq = w[t] = w[t] || [];
            ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
            ttq.setAndDefer = function (t, e) {
              t[e] = function () {
                t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
              }
            };
            for (var i = 0; i < ttq.methods.length; i++) {
              ttq.setAndDefer(ttq, ttq.methods[i])
            }
            ttq.instance = function (t) {
              for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) {
                ttq.setAndDefer(e, ttq.methods[n])
              }
              return e
            };
            ttq.load = function (e, n) {
              var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
              ttq._i = ttq._i || {};
              ttq._i[e] = [];
              ttq._i[e]._u = i;
              ttq._t = ttq._t || {};
              ttq._t[e] = +new Date;
              ttq._o = ttq._o || {};
              ttq._o[e] = n || {};
              var o = document.createElement("script");
              o.type = "text/javascript";
              o.async = !0;
              o.src = i + "?sdkid=" + e + "&lib=" + t;
              var a = document.getElementsByTagName("script")[0];
              a.parentNode.insertBefore(o, a)
            };
            ttq.load('XXXXXXXX');
            ttq.page();
          }(window, document, 'ttq');
        `}
      </Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "XXXXXXX");
        `}
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
      />

      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'XXXXXXXXX');
          `}
      </Script>
      <HomePage />
    </>
  );
}
