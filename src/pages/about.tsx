import Head from "next/head";
import { styled } from "../../stitches.config";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedText from "../components/AnimatedText";
import { TitleWrapper } from "../components/CommonPageStyles";

export default function About() {
    return (
        <AnimatedPage>
            <Head>
                <title>yael — about</title>
                <meta
                    name="description"
                    content="hey, i'm yael, an 18-year-old software developer and designer based in Spain. I strive to build unique and polished web interfaces for both consumer and business ends. I'm currently working on Telefónica Spain."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TitleWrapper>
                <AnimatedText element="h1" text="About" />
            </TitleWrapper>
            <p>
                Hey, I'm Yael, an 18-year-old software developer and designer based in Spain.
                I strive to build unique and polished web interfaces for both consumer and business ends.
                <br />
                <br />
                Currently working on{" "}
                <a href="https://www.telefonica.es/es/" target="_blank" rel="noreferrer">
                    Telefónica
                </a>
            </p>
        </AnimatedPage>
    );
}
