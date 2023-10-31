import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../../stitches.config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Developer, dev, developer ui, ui, ux, html, js, css, twitter, instagram, frontend webdeveloper, frontend webdeveloper windsor, windsor, whs, web, webdeveloper, designs, "
        />

        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: getCssText() }}
          id="stitches"
        />
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#171717" />
        <meta name="msapplication-TileColor" content="#171717" />
        <meta name="theme-color" content="#171717" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
