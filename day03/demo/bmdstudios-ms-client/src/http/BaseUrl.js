/** src/http/BaseUrl.js  
  * 暴露出请求资源路径的前缀即可 */
const URLENV = {  
  DEV: {  // 开发环境
    BMDURL : 'http://localhost:3010',
    UPLOADURL:'http://localhost:9000'
  },
  PRO: {  // 生产环境
    BMDURL : 'https://web.codeboy.com/bmdapi',
    UPLOADURL:'https://web.codeboy.com/bmduploadapi'
  }
}
export default URLENV.DEV
