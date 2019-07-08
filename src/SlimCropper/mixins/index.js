import pkg from '../../../package.json'
const pre = pkg.name

export default {
  methods: {
    // 生成 css class
    c (className) {
      return className ? `${pre}${className}` : `${pre}`
    },
  },
}
