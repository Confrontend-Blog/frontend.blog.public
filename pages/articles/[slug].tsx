import { ArticleContent } from "@/components/article/article-content/article-content";
import { GetServerSideProps } from "next";

interface SlugPageProps {
  data: string;
}

export default function SlugPage({ data }: SlugPageProps) {
  // You can use the fetched data to render the page
  // ...

  const text = `
It is not possible to add an ellipsis (...) after a certain number of lines using only CSS. However, you can use JavaScript to achieve this effect.

Here is an example of how you can use JavaScript to add an ellipsis after a certain number of lines:

\`\`\`
function addEllipsis(element, maxLines) {
  const lineHeight = parseInt(getComputedStyle(element).lineHeight);
  const maxHeight = maxLines * lineHeight;
  let text = element.textContent;

  while (element.scrollHeight > maxHeight) {
    text = text.slice(0, -1);
    element.textContent = text + '...';
  }
}
\`\`\`

const myElement = document.querySelector('.my-element');
addEllipsis(myElement, 3);
In this example, we define a addEllipsis function that takes two arguments: element and maxLines. The element argument is the DOM element that contains the text you want to add an ellipsis to. The maxLines argument is the maximum number of lines you want to display before adding an ellipsis.

The function calculates the maximum height of the element based on the maxLines argument and the computed lineHeight of the element. It then uses a while loop to remove characters from the end of the element’s text content until its scrollHeight is less than or equal to the maximum height. At each iteration of the loop, it adds an ellipsis to the end of the text to indicate that there is more content.

After defining this function, you can call it and pass in a DOM element and a maximum number of lines as arguments. In the example above, we call the addEllipsis function and pass in a DOM element with the class .my-element and a maximum number of lines of 3. This will add an ellipsis after 3 lines of text in the .my-element element.

Is there anything else you would like to know?

`;

  return (
    <div>
      <ArticleContent
        title={"title"}
        author={"Hamed Fatehi"}
        category={"Frontend"}
        date={"2022-10-15"}
      >
        {text}
      </ArticleContent>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<SlugPageProps> = async (
  context
) => {
  const { slug } = context.params!;

  const data = slug?.toString() || "";

  return {
    props: {
      data,
    },
  };
};
