// TODO

// import { getSlugs } from "@/api/clients/get-slugs";
import { ArticleSlugsDto } from "@/api/openapi/generated-clients";
import { GetServerSideProps } from "next/types";

function generateSiteMap(slugs: ArticleSlugsDto[] | null) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--Add staticly known urls here-->
    
     ${
       slugs &&
       slugs
         .map(({ slug }: { slug: string }) => {
           return `
       <url>
           <loc>${`${process.env.BASE_URL}/${slug}`}</loc>
       </url>
     `;
         })
         .join("")
     }
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // const slugs = await getSlugs();

  // Generate the XML sitemap dynamically
  // const sitemap = generateSiteMap(slugs);

  // Cache the sitemap for up to 24 hours (86400 seconds)
  // res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  // res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  // res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
