export default function getScreenSizeAsync() {
    return new Promise((resolve, reject) => {
      resolve(getScreenSizeAsync());

        // reject(new Error('getScreenSizeAsync() failed'));
    });
}