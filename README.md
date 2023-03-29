[![NPM](https://nodei.co/npm/moonlink.js.png)](\[https:/nodei.co/npm/moonlink.js) 

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/7dd9288acdc94dacaa11ad80f36a9bd3)](https://www.codacy.com/gh/1Lucas1apk/moonlink.js/dashboard?utm\_source=github.com\&utm\_medium=referral\&utm\_content=1Lucas1apk/moonlink.js\&utm\_campaign=Badge\_Grade) [![Downloads](https://img.shields.io/npm/dt/moonlink.js.svg?color=3884FF)](https://www.npmjs.com/package/moonlink.js) [![Version](https://img.shields.io/npm/v/moonlink.js.svg?color=3884FF\&label=version)](https://www.npmjs.com/package/moonlink.js) [![install size](https://packagephobia.com/badge?p=moonlink.js)](https://packagephobia.com/result?p=moonlink.js) ![vulnabilites](https://img.shields.io/snyk/vulnerabilities/npm/moonlink.js) ![node](https://img.shields.io/node/v/moonlink.js)

# Basic Information.

This package is a simple package that allows you to track the screensize / get the screensize of a device. (this package is made for web / frontend we do not guarantee that this package will work in backend)


## Choose Readme type.

<details>
  <summary style="font-size: 20px; font-weight: bold; cursor: pointer; background: opacity: 0.5; color: #fff; padding: 10px; border: 1px solid #fff; border-radius: 5px; margin-top: 10px;">
  📘 - React
  </summary>
  
  ## Get Started.
  
  ### Installation.

#### NPM
```bash
npm i screen-sizr
```

#### Yarn
```bash
yarn add screen-sizr
```


### Usage.

#### Importing.
```js
import ScreenSizr from 'screen-sizr';
```

#### Getting the screensize (normal).
```js
import ScreenSizr from 'screen-sizr';

const screensize = ScreenSizr.getScreenSize();
```

#### Getting the screensize (async).
```js
import ScreenSizr from 'screen-sizr';

const screensize = await ScreenSizr.getScreenSizeAsync();
```

#### Getting the screensize (async / promise).
```js
import ScreenSizr from 'screen-sizr';

ScreenSizr.getScreenSizeAsync().then(screensize => {
    console.log(screensize.width, screensize.height);
});
```

#### Getting the screensize (async / await).
```js
import ScreenSizr from 'screen-sizr';

const screensize = await ScreenSizr.getScreenSizeAsync();
```

### Examples.

#### Example.
```js
import ScreenSizr from 'screen-sizr';

const screensize = ScreenSizr.getScreenSize();

console.log(screensize.width, screensize.height);
```

#### Example (async).
```js
import ScreenSizr from 'screen-sizr';

const screensize = await ScreenSizr.getScreenSizeAsync();

console.log(screensize.width, screensize.height);
```

#### Example (async / promise).
```js
import ScreenSizr from 'screen-sizr';

ScreenSizr.getScreenSizeAsync().then(screensize => {
    console.log(screensize.width, screensize.height);
});
```
</details>

<div style="margin-top: 200px;" />

### License.

This package is licensed under the MIT License. See the [LICENSE](https://github.com/Stoneclane-Development/screen-sizr/blob/main/LICENSE) file for more information.

### Support.

If you need support, please join our [Discord Server](https://discord.gg/kUakk4DbhF) and ask your question in the [#support](https://discord.com/channels/1074756286496919612/1074961473882816542) channel.

### Issues.

If you have any issues, please open an issue on our [GitHub Repository](https://github.com/Stoneclane-Development/screen-sizr/issues).

### Developers.
<table>
   <tr>
      <td align="center"><a href="https://github.com/JanjyTapYT">
        <img src="https://github.com/JanjyTapYT.png?size=100" width="100px;" alt=""/>
        <br />
        <sub><b>JanjyTapYT</b></sub></a><br />
     </td>
      <td align="center"><a href="https://github.com/Stoneclane-Development">
        <img src="https://github.com/Stoneclane-Development.png?size=100" width="100px;" alt=""/>
        <br />
        <sub><b>Stoneclane Development</b></sub></a><br />
     </td>
   </tr>
</table>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<div align="center" style="font-size: 20px; font-weight: bold;">
  <sub>Developed with ❤️ by <a href="https://sdevs.org">Stoneclane Development</a></sub>
</div>
