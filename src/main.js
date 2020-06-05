class systemAndBrowserInfo {
  constructor(userAgent) {
    this.agent=userAgent
    this.result={}
    this.init()

    return this.result
  }
  init(){
    this.getSystemName()
    this.getBrowserName()
  }

  //获取系统版本
  getSystemName(){
    let systemName=""
    if (this.agent.indexOf("Windows NT 10.0")!== -1){
      systemName="Windows 10"
    }else if(this.agent.indexOf("Windows NT 6.2")!== -1){
      systemName="Windows 8"
    }else if(this.agent.indexOf("Windows NT 6.1")!== -1){
      systemName="Windows 7"
    }else if(this.agent.indexOf("Windows NT 6.0")!== -1){
      systemName="Windows Vista"
    }else if(this.agent.indexOf("Windows NT 5.1")!== -1){
      systemName="Windows XP"
    }else if(this.agent.indexOf("Windows NT 5.0")!== -1){
      systemName="Windows 2000"
    }else if(this.agent.indexOf("Mac")!== -1){
      systemName="Mac"
    }else if(this.agent.indexOf("X11")!== -1){
      systemName="UNIX"
    }else if(this.agent.indexOf("Linux")!== -1){
      systemName="Linux"
    }else if(this.agent.indexOf("iPhone")!== -1){
      systemName="iPhone"
    }else if(this.agent.indexOf("Android")!== -1){
      systemName="Android"
    }else{
      systemName = "other";
    }
    this.result.systemName=systemName
  }

  //浏览器系统版本
  getBrowserName(){
    // 需要匹配的浏览器名称
    const browserNameList = ['MicroMessenger', 'QQBrowser', 'UCBrowser', 'Edge', 'OPR', 'Vivaldi', 'Firefox', 'Chrome', 'Safari']
    const regexp = browserNameList.map(name => new RegExp(`${name}\\/(\\d+\\.)+\\d+`))
    // 过滤浏览器信息
    let browser = this.agent.match(/[a-z]+\/(\d+\.)+\d+/ig).filter(_ => regexp.findIndex(v => v.test(_)) !== -1)
    // 如果最后一项不是Safari并且结果长度大于1取最后一项为当前浏览器信息
    browser = browser.length > 1 && !/^Safari/.test(browser[browser.length - 1]) ? browser.reverse() : browser
    this.result = {
      ...this.result,
      ...this.browserVersionFormat(browser[0])
    }
  }
  browserVersionFormat(str){
    if (!str){
      return {
        browserName: 'Unknown',
        browserVersion: 'Unknown'
      }
    }
    const BROWSER_NAMES = {
      QQBrowser: 'QQ浏览器',
      UCBrowser: 'UC浏览器',
      MicroMessenger: '微信',
      Edge: 'Edge',
      OPR: 'Opera',
      Vivaldi: 'Vivaldi',
      Firefox: 'Firefox',
      Chrome: 'Chrome',
      Safari: 'Safari'
    }
    try {
      const [, name, version] = str.match(/([a-z]+)\/(\d+\.\d+)/i)
      return {
        browserName: BROWSER_NAMES[name],
        browserVersion: version,
        browserEnName: name
      }
    } catch (error) {
      console.log(`[getBrowserInfo Error] ${error}`)
    }
  }

}

export default agent =>new systemAndBrowserInfo(agent)
