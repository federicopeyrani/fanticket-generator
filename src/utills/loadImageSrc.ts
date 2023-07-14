const loadImageSrc = (img: HTMLImageElement, src: string): Promise<void> =>
  new Promise((resolve, reject) => {
    img.onload = () => {
      resolve();
    };
    img.onerror = (error) => {
      reject(error);
    };
    img.src = src;
  });

export default loadImageSrc;
