import Script from "next/script";
import Calendly from "./components/calendly";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                {/*<meta property="og:title" content="Azarkian Architecture P.C."/>*/}
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1"
                />
                <link rel="author" href="Azark Inc" />
                {/* <link rel="canonical" href="https://aapc.nyc/"/> */}
                <link rel="icon" type="image/x-icon" href="favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FFDC32" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css"
                />
                <link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css"
                />
            </head>
            <GoogleTagManager gtmId="GTM-PWN93Q9K" />
            <GoogleAnalytics gaId="G-EEM468BVXR" />
            {/*test*/}
            <body id="root">
                {children}
                <Calendly />
                <Script src="https://cdn.userway.org/widget.js" data-account="Oa0aO0cYPl" />
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" />
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
                <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/js/bootstrap.min.js" />
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js" />
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js" />
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.js" />
                <Script src="/js/project-details.js" />
            </body>

        </html>
    );
}
