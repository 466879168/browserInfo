class BrowserInfo {
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
    
  }

  //
}
