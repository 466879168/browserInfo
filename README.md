## 获取操作系统和浏览器系统  
在博客里提交评论的时候将navigator.userAgent传进来然后获取操作系统和浏览器  
### 使用方法  
```javascript
import getBrowserInfo from "dylan-browser-info"  
let item=getBrowserInfo("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36") 
/*
*@params {string} navigator.userAgent
*@return {Object}
*{
*browserEnName: "Chrome"
*browserName: "Chrome"
*browserVersion: "80.0"
*systemName: "Windows 10"
*}
*/
```
