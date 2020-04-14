### kdutils
> 中后台应用工具库

![Alt text](https://utils-1251306874.cos.ap-chengdu.myqcloud.com/shc-admin-utils/WX20200414-170739%402x.png)
#### 安装说明

 ```
npm install kdutils
```

#### 使用说明

```
//方式一：
 import kdutils from 'kdutils';

// 方式二
import {http, localStorage, tools} from 'kdutils';

// 挂载的方式
Vue.prototype.$axios = kdutils.http;
Vue.prototype.$localStorage= kdutils.localStorage;
Vue.prototype.$tools = kdutils.tools;
```

## 🚀 API 文档

### 1.localStorage

- get: 获取 localstorage

- set: 设置 localstorage

- delete: 删除 localstorage

```
import { localStorage } from 'kdutils';

localStorage.get('token');

localStorage.set('token','32sfdff232');

localStorage.delete('token');

```

### 2.sessionStorage

- get: 获取 sessionStorage

- set: 设置 sessionStorage

- delete: 删除 sessionStorage

```
import { sessionStorage } from 'kdutils';

```

### 3.date 

- formatPassTime：格式化现在的已过时间

```
  date.formatPassTime (1586840260500) 
```

- formatTime：格式化时间戳

```
import { date } from 'kdutils';
date.formatTime (new Date())  // 默认格式 'yyyy-MM-dd hh:mm:ss'
date.formatTime (new Date(),'yyyy:MM:dd')  // 自定义格式 'yyyy.MM.dd'
```

### 4.http
> 基于axios做二次封装

- init: axios 初始化配置 option 

- get：get 请求方式
 
- post：post 请求方式

```
import { http } from 'kdutils';
const option = {
    url: process.env.VUE_APP_URL ,  // 根据不同环节配置初始化baseUrl
}
http.init(option);

export const getList = async (params = {}) => http.get(`/user/list`, { params });

```
### 5.tools 
> 常用函数工具库（防抖、节流、正则类型检测、深浅拷贝等）

- debounce ：防抖

```
import { tools } from 'kdutils';
methods:{
    sumbit: tools.debounce(function(){
          // todo 
     },500),
}
```

- throttle : 节流 

- checkType ：类型检测
> 支持类型有ip、phone(手机号码)、email(邮箱)、IDCard(身份证)、url(网址)、number(数字)

```
  tools.checkType('15919542299','phone') //检测手机
  tools.checkType('shuxin_liu@kingdee.com','email') //检测邮箱
```

- deepCopy ：拷贝

- formatPhone ： 将手机号中间部分替换为星号

```
 tools.formatePhone('15929323412');
```

### 6.sentry 
> 捕获异常信息
 
- 初始化

``` 
 import { sentry } from 'kdutils';
 const option = {dsn:http://753ce3bf82e94ab0aa7b5e62fae16d3c@sentry.***.com:9000/2}
 const Sentry = sentry.getInstance(Vue, option);
 Vue.prototype.$sentry = sentry;
```

- 主动上报

```
 this.$sentry.log('test');
```
