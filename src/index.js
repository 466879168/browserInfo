class BrowserInfo{
  constructor(){

  }
  init(){

  }
  //获取系统版本号
  getSysName(){
    //replace替换字符串
    this.agent.replace(/^[a-z]+\/\d+\.\d+\s?\(([a-z\d\s:;\.\/_-]+)\)/i, (match, $1) => {
      let result = {}
      try {
        if (/^Windows\s(?!p)/i.test($1)) {
          const [, _version] = $1.match(/NT\s(\d+\.\d+)/)
          result.systemName = 'Windows'
          switch (_version) {
            case '6.3':
              result.systemVersion = '8.1'
              break
            case '6.2':
              result.systemVersion = '8'
              break
            case '6.1':
              result.systemVersion = '7'
              break
            case '5.2':
            case '5.1':
              result.systemVersion = 'XP'
              break
            default:
              result.systemVersion = _version
          }
        } else if (/^Macintosh/i.test($1)) {
          const [, _version] = $1.match(/X\s((\d+(_|\.))+\d+)/)
          result.systemName = 'Mac'
          result.systemVersion = _version.replace(/_/g, '.')
        } else if (/^iPhone/i.test($1)) {
          const [, _version] = $1.match(/((\d+_)+\d+)/)
          result.systemName = 'iPhone'
          result.systemVersion = _version.replace(/_/g, '.')
        } else if ($1.indexOf('Android') !== -1) {
          const [, _version] = $1.match(/Android\s((\d+\.?)+\d?)/)
          result.systemName = 'Android'
          result.systemVersion = _version
        } else if (/Linux\s[a-z\d_]+/.test($1)) {
          result.systemName = 'Linux'
          result.systemVersion = 'Unknown'
        } else {
          result.systemName = 'Unknown'
          result.systemVersion = 'Unknown'
        }
      } catch (error) {
        console.log(`[getBrowserInfo Error] ${error}`)
        result.systemName = 'Unknown'
        result.systemVersion = 'Unknown'
      }
      this.result = {
        ...this.result,
        ...result
      }
    })
  }
  //获取浏览器名字
  getBrowserName(){
    
  }
}


///a-z/