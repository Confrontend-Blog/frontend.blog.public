import { GetServerSideProps, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const Imprint = () => {
  return (
    <>
      <b>Impressum</b> <br />
      <p>
        Dies ist ein Bildungsblog, der von Hamed Fatehi betrieben wird und
        verschiedene technologiebezogene Themen behandelt. Unser Ziel ist es,
        unseren Lesern wertvolle Informationen und Einblicke in die neuesten
        Trends der Branche zu bieten. Wir sammeln keine persönlichen Daten von
        unseren Lesern, und alle von ihnen bereitgestellten Informationen werden
        streng vertraulich behandelt. Bitte beachten Sie jedoch, dass unsere
        Website auf der Google Cloud Platform (GCP) gehostet wird und somit alle
        von GCP gesammelten Daten den jeweiligen Bedingungen und Richtlinien von
        GCP unterliegen können. Darüber hinaus können wir Links zu anderen
        Websites oder Ressourcen im Web bereitstellen. Bitte beachten Sie, dass
        wir nicht für den Inhalt, die Datenschutzrichtlinien oder die Praktiken
        von Websites oder Diensten Dritter verantwortlich sind. Wenn Sie Fragen
        oder Bedenken zu unserem Blog oder dieser Impressum-Seite haben, zögern
        Sie bitte nicht, uns unter hamed.sign[at]gmail.com zu kontaktieren.
        Vielen Dank für Ihren Besuch auf unserem Blog.
      </p>
      <b>Imprint</b> <br />
      <p>
        This is an educational blog maintained by Hamed Fatehi, covering various
        technology-related topics. Our goal is to provide our readers with
        valuable information and insights on the latest trends in the industry.
        We do not collect any personal data from our readers, and all
        information provided by them is kept strictly confidential. Please note,
        however, that our website is hosted on Google Cloud Platform (GCP), and
        thus any data collected by GCP may be subject to their terms and
        policies. Additionally, we may provide links to other websites or
        resources on the web. Please note that we are not responsible for the
        content, privacy policies, or practices of any third-party websites or
        services. Should you have any questions or concerns about our blog or
        this Imprint page, please do not hesitate to contact us at
        hamed.sign[at]gmail.com. Thank you for visiting our blog.
      </p>
    </>
  );
};

export default Imprint;
