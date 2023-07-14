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

  // modify `xlink:href` values so they contain base64-encoded data using the fetch API
  await Promise.all(
    Array.from(svg.querySelectorAll("[*|href]")).map(async (element) => {
      const url = element.getAttribute("xlink:href") as string;
      const response = await fetch(url);
      const data = await response.blob();
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
        reader.onerror = () => {
          throw new Error("ciao");
        };
        reader.readAsDataURL(data);
      });

      element.setAttribute("xlink:href", base64);
    })
  );

  const svgData = new XMLSerializer().serializeToString(svg);
  const [width, height] = svg
    .getAttribute("viewBox")
    ?.split(" ")
    .slice(2)
    .map((it) => +it) as [number, number];

  const scaleWidth = width * scale;
  const scaleHeight = height * scale;
  const img = new Image(scaleWidth, scaleHeight);

  canvas.width = scaleWidth;
  canvas.height = scaleHeight;

  const promise = new Promise((resolve, reject) => {
    img.onload = () => {
      ctx.drawImage(img, 0, 0, scaleWidth, scaleHeight);

      const png = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = fileName;
      downloadLink.href = png;
      downloadLink.click();
      resolve(undefined);
    };

    img.onerror = (e) => {
      reject(e);
    };
  });

  const encodedString = Buffer.from(svgData).toString("base64");
  img.src = `data:image/svg+xml;base64,${encodedString}`;
  await promise;
};

export default downloadSVGasPNG;
