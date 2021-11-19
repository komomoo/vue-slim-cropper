# vue-slim-cropper

English | [简体中文](./README.zh-CN.md)

## 🌰 Example

<img src="./demo/assets/demo.gif" width="320" style="margin-top: 20px;">

<img src="./demo/assets/qrcode.png" width="200" style="margin-top: 20px;">

[Demo](https://komomoo.github.io/vue-slim-cropper/demo/dist/)

[Demo Source Code](https://github.com/komomoo/vue-slim-cropper/blob/master/demo/App.vue)

## 🚀 QuickStart

1.  Install

```bash
yarn add vue-slim-cropper # OR npm i -S vue-slim-cropper
```

2.  Import

```js
// main.js
import SlimCropper from 'vue-slim-cropper'
Vue.use(SlimCropper)
```

3.  Usage. Please refer to the [Demo Source Code](https://github.com/komomoo/vue-slim-cropper/blob/master/demo/App.vue)

```html
<SlimCropper ref="cropper" :src=""></SlimCropper>
```

## 🔌 API

### Props

| Name           | Description                                                  | Type   | Default   |
| -------------- | ------------------------------------------------------------ | ------ | --------- |
| src            | image URL                                                    | String | undefined |
| aspectRatio    | width / height ratio                                         | Number | 1         |
| cropperOptions | cropperjs options: https://github.com/fengyuanchen/cropperjs | Object | null      |

### Methods

| Name           | Description                       | Parameters                       |
| -------------- | --------------------------------- | -------------------------------- |
| getCroppedBlob | get the cropped image blob object | type = 'image/jpeg', quality = 1 |

---

😉😘 If it is helpful to you，please encourage me with a <b>⭐️<a href="#">Star</a></b> ~

## [Changelog](./CHANGELOG.md)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, komo
