export default class ScreenSizr {
  static getScreenSize(): { width: number, height: number } {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return { width, height };
  }

  static async getScreenSizeAsync(): Promise<{ width: number, height: number }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const size = ScreenSizr.getScreenSize();
        resolve(size);
      }, 1000);
    });
  }
}