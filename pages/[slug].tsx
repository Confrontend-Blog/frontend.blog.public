import { GetServerSideProps } from "next";

interface SlugPageProps {
  data: string;
}

export default function SlugPage({ data }: SlugPageProps) {
  // You can use the fetched data to render the page
  // ...

  return (
    <div>
      <h1>Slug Page: {data}</h1>
      {/* Render page content here */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<SlugPageProps> = async (
  context
) => {
  const { slug } = context.params!;

  // You can use the value of slug to fetch data for the page
  const data = `data: ${slug}`

  return {
    props: {
      data,
    },
  };
};
