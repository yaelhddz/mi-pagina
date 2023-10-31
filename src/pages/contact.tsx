import Head from "next/head";
import { styled, theme } from "../../stitches.config";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedText from "../components/AnimatedText";
import { TitleWrapper } from "../components/CommonPageStyles";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from "../components/Icons";
import { GITHUB, INSTAGRAM, LINKEDIN, TWITTER } from "../utils/constants";

const SocialList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  gap: 25,
  fontSize: "$schmedium",

  li: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    color: "$primary300",

    "> svg": {
      width: 30,
      height: 30,
    },
  },
});

export default function Contact() {
  return (
    <AnimatedPage>
      <Head>
        <title>yael — contact</title>
        <meta
          name="description"
          content="contact me through any of my socials"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleWrapper>
        <AnimatedText element="h1" text="Contact" />
      </TitleWrapper>

      <SocialList>
        <li>
          <TwitterIcon />
          <a href={TWITTER} target="_blank" rel="noreferrer">
            @yaelhdxz
          </a>
        </li>
        <li>
          <GitHubIcon fill={theme.colors.primary300.toString()} />
          <a href={GITHUB} target="_blank" rel="noreferrer">
            @yaelhdxz
          </a>
        </li>
        <li>
          <LinkedInIcon />
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            @yaelhdez
          </a>
        </li>
        <li>
          <InstagramIcon />
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">
            @yaelhddz
          </a>
        </li>
        <li>
          <MailIcon /> contact@yael.es
        </li>
      </SocialList>
    </AnimatedPage>
  );
}
