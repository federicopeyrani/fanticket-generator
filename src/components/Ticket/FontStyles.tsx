import readBlobAsBase64 from "@/utills/readBlobAsBase64";
import dynamic from "next/dynamic";

const downloadFont = async (fontURL: string) => {
  const response = await fetch(fontURL);
  const responseBlob = await response.blob();
  return readBlobAsBase64(responseBlob);
};

export const PacificStandardLight = "__PacificStandardLight";

export const CarnovaNarrow = "__CarnovaNarrow";

export const CarnovaNarrowSemibold = "__CarnovaNarrowSemibold";

const FontStyles = async () => {
  const pacificStandardLight = await downloadFont(
    "/ticket/fonts/Pacific Standard Light.ttf"
  );
  const carnovaNarrow = await downloadFont("/ticket/fonts/Carnova Narrow.otf");
  const carnovaNarrowSemibold = await downloadFont(
    "/ticket/fonts/Carnova Narrow Semibold.otf"
  );

  return (
    <style>
      {`
    @font-face {
        font-family: '${PacificStandardLight}';
        src: url(${pacificStandardLight});
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: '${CarnovaNarrow}';
        src: url(${carnovaNarrow});
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: '${CarnovaNarrowSemibold}';
        src: url(${carnovaNarrowSemibold});
        font-weight: normal;
        font-style: normal;
    }
    `}
    </style>
  );
};

export default dynamic(async () => FontStyles, { ssr: false });
