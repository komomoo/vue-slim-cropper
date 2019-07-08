<template>
  <div
    id="app"
    v-loading="loading"
    loading-text="正在上传...">
    <h1>上传多张图片</h1>

    <div class="img-box">
      <div
        v-for="(item, key) in imgList"
        :key="key"
        class="img-item">
        <img :src="getObjectURL(item)" alt="图片">
      </div>
      <button class="add-btn" @click="inputImg()">
        <img src="./assets/img_add@2x.png">
      </button>
    </div>

    <input
      v-show="false"
      ref="input"
      type="file"
      accept="image/*"
      @change="inputImgChange($event)">

    <button
      class="submit-btn"
      :disabled="!imgList.length"
      @click="upload">
      上传
    </button>

    <transition name="slim-fade">
      <div v-show="cropShow" class="crop-wrap">
        <SlimCropper ref="cropper" :src="inputImgUrl"></SlimCropper>
        <div class="btn-box">
          <button @click="hideCrop">取消</button>
          <button @click="submitCrop">使用</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// 将 blob 对象转化为 url
const getObjectURL = (file) => {
  let url
  if (window.createObjectURL) { // basic
    url = window.createObjectURL(file)
  } else if (window.URL) { // mozilla(firefox)
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL) { // webkit or chrome
    url = window.webkitURL.createObjectURL(file)
  }
  return url
}

export default {
  name: 'App',
  data () {
    return {
      imgList: [],
      cropShow: false, // 裁剪弹窗显示
      inputImgUrl: '', // input 选中的图片 url

      getObjectURL,
      loading: false,
    }
  },
  methods: {
    // 选择图片
    async inputImg () {
      this.$refs.input.click()
    },
    // 选择图片变化时显示裁减框
    inputImgChange (e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.inputImgUrl = getObjectURL(files[0])
      this.showCrop()
    },
    // 显示裁剪页
    showCrop () {
      this.cropShow = true
    },
    // 隐藏裁剪页
    hideCrop () {
      this.cropShow = false
      this.$refs.input.value = ''
    },
    // 裁剪页确认
    async submitCrop () {
      this.hideCrop()
      const img = await this.$refs.cropper.getCroppedBlob()
      this.imgList.push(img)
    },
    // 上传
    async upload () {
      this.loading = true
      const formData = new FormData()
      for (let i = 0; i < this.imgList.length; i++) {
        formData.append('files', this.imgList[i], 'images.jpg')
      }
      // 模拟一个异步上传操作
      setTimeout((formData) => {
        this.loading = false
        alert('上传成功')
      }, 2000)
    },
  },
}
</script>

<style lang="stylus">
$headerHeight = 44px;
$baseColor = #409EFF;
$bgColor = #FAFAFA;
* {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: transparent;
}
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;

  > h1 {
    font-size: 24px;
    padding: 0 15px;
    padding-top: 40px;
    padding-bottom: 20px;
    color: $baseColor;
  }

  .img-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 20px;
    margin-top: 40px;

    .img-item, .add-btn {
      width: 150px;
      height: 150px;
      background: #f5f5f5;
      border-radius: 6px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      > img {
        width: 100%;
        height: 100%;
      }
    }

    .add-btn {
      > img {
        width: 24px;
        height: 24px;
      }
    }
  }

  .submit-btn {
    margin: 60px auto;
    display: block;
    width: 70%;
    height: 60px;
    background: $baseColor;
    border-radius: 60px;
    font-size: 20px;
    color: #fff;
    font-weight: 500;

    &:disabled {
      background: #ededed;
      color: #cccccc;
    }
  }

  .crop-wrap {
    z-index: 1;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #000;

    .btn-box {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 50px;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;

      > button {
        width: 60px;
        height: 100%;
        font-size: 16px;
        color: #ffffff;
        text-align: center;
      }
    }
  }

  .slim-fade-enter-active, .slim-fade-leave-active {
    transition: all 0.4s ease;
  }

  .slim-fade-enter, .slim-fade-leave-to {
    opacity: 0;
    transform-origin: top;
    transform: translateY(100%);
  }
}
</style>
