import Head from "next/head";
import { useRouter } from "next/router";
import { MetaSeo } from "types";

const URL = "https://aaproperty.vercel.app";

export const metaDefaults = {
  title: "AA Property Services UK",
  description:
    "A leading real estate company serving Central and North-west London with several years of experience in sales, lettings, and property management.",
  image: `${URL}/images/aaproperty.png`,
  feed: `${URL}/search`,
  keywords: [
    "aaproperty",
    "property",
    "real estate",
    "flats",
    "apartments",
    "london homes",
    "birmingham",
    "tenant",
    "lease",
    "landlord  ",
  ],
  author: {
    name: "Kelechi Odom",
  },
  social: {
    twitter: "Kelechi_odom",
    github: "KelechiOdom10",
  },
};

const Meta = ({ meta: pageMeta }: { meta?: Partial<MetaSeo> }) => {
  const router = useRouter();
  const meta = {
    ...metaDefaults,
    ...pageMeta,
  };

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link rel="icon" href="/favicon.ico" />
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta content={meta.keywords.join(", ")} name="keywords" />
      {/** OpenGraph Metadata */}
      <meta property="og:url" content={`${URL}${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Hacker Hunt" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      {/** End OpenGraph Metadata */}
      {/** Twitter Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Kelechi_odom" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {/** End Twitter Metadata */}
    </Head>
  );
};

export default Meta;
