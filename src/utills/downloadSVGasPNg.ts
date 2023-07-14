import readBlobAsBase64 from "@/utills/readBlobAsBase64";
import loadImageSrc from "@/utills/loadImageSrc";

const downloadSVGasPNG = async (
  svgElement: SVGSVGElement,
  fileName: string = "ticket.png",
  scale: number = 1
) => {
  const svg = svgElement.cloneNode(true) as SVGSVGElement;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Something went wrong");
  }

  for (const img of Array.from(svg.querySelectorAll("image"))) {
    const response = await fetch(img.href.baseVal);
    const data = await response.blob();
    img.href.baseVal = await readBlobAsBase64(data);
  }

  const svgData = new XMLSerializer().serializeToString(svg);
  const [width, height] = svg
    .getAttribute("viewBox")
    ?.split(" ")
    .slice(2)
    .map((it) => +it) as [number, number];

  const scaleWidth = width * scale;
  const scaleHeight = height * scale;
  const img = new Image(scaleWidth, scaleHeight);

  const encodedString = Buffer.from(svgData).toString("base64");
  await loadImageSrc(img, `data:image/svg+xml;base64,${encodedString}`);

  canvas.width = scaleWidth;
  canvas.height = scaleHeight;
  ctx.drawImage(img, 0, 0, scaleWidth, scaleHeight);

  const png = canvas.toDataURL("image/png");
  const downloadLink = document.createElement("a");
  downloadLink.download = fileName;
  downloadLink.href = png;
  downloadLink.click();
};

export default downloadSVGasPNG;
