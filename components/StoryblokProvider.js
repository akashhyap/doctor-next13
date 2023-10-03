/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "./Page";
import Article from "./Article";
import Hero from "./Hero";
import Hightlight from "./Hightlight";
import Grid from "./Grid";
import Teaser from "./Teaser";
import Feature from "./Feature";
import FeaturedImage from "./FeaturedImage";
import ImageTextSplit from "./ImageTextSplit";
import Heading from "./Heading";
import RichTextContent from "./RichTextContent";
import Config from "./Config";
import MenuLink from "./MenuLink";
import FooterLink from "./FooterLink";
import SubmenuLink from "./SubmenuLink";
import SimpleContent from "./SimpleContent";
import Section from "./Section";
import AllSymptoms from "./AllSymptoms";
import InguinalHernia from "./InguinalHernia";
import Women from "./Women";
import Treatment from "./Treatment";
import Surgery from "./Surgery";
import ButtonLink from "./ButtonLink";
import TableOfContent from "./TableOfContent";
import ArticleContentArea from "./ArticleContentArea"
import Images from "./Images"

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    article: Article,
    hero: Hero,
    hightlight: Hightlight,
    grid: Grid,
    teaser: Teaser,
    feature: Feature,
    featuredImage: FeaturedImage,
    "image-text-split": ImageTextSplit,
    heading: Heading,
    "rich-text-content": RichTextContent,
    config: Config,
    "menu_link": MenuLink,
    "submenu_link": SubmenuLink,
    "footer_link": FooterLink,
    "simple-content": SimpleContent,
    section: Section,
    "all-symptoms": AllSymptoms,
    "inguinal-hernia": InguinalHernia,
    women: Women,
    treatment: Treatment,
    surgery: Surgery,
    buttonLink: ButtonLink,
    tableOfContent: TableOfContent,
    "article-content-area": ArticleContentArea,
    images: Images,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
