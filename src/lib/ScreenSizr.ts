interface ScreenSize {
  width: number;
  height: number;
}

function getScreenSize(): ScreenSize {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }

  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return { width, height };
}

async function getScreenSizeAsync(): Promise<ScreenSize> {
  return new Promise<ScreenSize>((resolve) => {
    const checkSize = () => {
      const { width, height } = getScreenSize();
      if (width && height) {
        resolve({ width, height });
      } else {
        setTimeout(checkSize, 50);
      }
    };
    checkSize();
  });
}

export default {
  getScreenSize,
  getScreenSizeAsync,
  ScreenSizr: {
    getScreenSize,
    getScreenSizeAsync,
  },
};

export {
  getScreenSize,
  getScreenSizeAsync,
};
