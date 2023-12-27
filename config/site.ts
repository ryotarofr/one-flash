import { env } from "@/env.mjs";
import { SiteConfig } from "@/types";


const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "ONE☆FLRASH",
  description:
    "",
  url: site_url,
  ogImage: `${site_url}/og.png`,
  links: {
    twitter: "https://twitter.com/kapucode",
    github: "https://github.com/ryotarofr",
  },
  mailSupport: "support@saas-starter.com"
}
