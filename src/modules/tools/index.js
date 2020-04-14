/*
  @file: tools 常用的工具函数
  @Author:tree
 */

module.exports =  {
  /**
   * 普通递归 深拷贝
   * @param data: 拷贝的数据
   */
  deepCopyBy: function (data) {
    const t = getType(data);
    let o;
    if (t === 'array') {
      o = [];
    } else if (t === 'object') {
      o = {};
    } else {
      return data;
    }

    if (t === 'array') {
      for (let i = 0; i < data.length; i++) {
        o.push(deepCopyBy(data[i]));
      }
    } else if (t === 'object') {
      for (let i in data) {
        o[i] = deepCopyBy(data[i]);
      }
    }
    return o;
  },

  /**
   * JSON 深拷贝
   * @param data: 拷贝的数据
   * @return data Object 复制后生成的对象
   */
  deepCopy: function (data) {
    return JSON.parse(JSON.stringify(data));
  },

  /**
   * 根据类型返回正则
   * @param str{string}: 检测的内容
   * @param type{string}: 检测类型
   */
  checkType: function (str, type) {
    const regexp = {
      'ip': /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/.test(str),
      'port': /^(\d|[1-5]\d{4}|6[1-4]\d{3}|65[1-4]\d{2}|655[1-2]\d|6553[1-5])$/.test(str),
      'phone': /^1[3|4|5|6|7|8][0-9]{9}$/.test(str), //手机号
      'number': /^[0-9]+$/.test(str), //是否全数字,
      'email': /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str),
      'IDCard': /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str),
      'url': /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str)
    };
    return regexp[type];
  },


  /**
   * 将手机号中间部分替换为星号
   * @param phone{string}: 手机号码
   */
  formatPhone: function (phone) {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
  },


  /**
   * 防抖
   * @param func {*}  执行函数
   * @param wait {*}  节流时间,毫秒
   */
  debounce: (func, wait) => {
    let timeout;
    return function () {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait);
    }
  },

  /**
   * 节流
   * @param func {*}  执行函数
   * @param wait {*}  节流时间,毫秒
   */
  throttle: (func, wait) => {
    let previous = 0;
    return function () {
      let now = Date.now();
      let context = this;
      if (now - previous > wait) {
        func.apply(context, arguments);
        previous = now;
      }
    }
  },

  /**
   * 头字母大写
   * @param str {string}  字符
   */
  firstUpperCase :function (str) {
      return str.charAt(0).toUpperCase() + str.toString().slice(1)
  },

  /**
   * 随机数范围
   * @param min {number}  开始
   * @param max {number}  结束
   */
  random:function (min, max) {
    if (arguments.length === 2) {
      return Math.floor(min + Math.random() * ( (max+1) - min ))
    }else{
      return null;
    }
  },


};

// 类型检测
function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

//浅拷贝
function deepCopy(val) {
  return JSON.parse(JSON.stringify(val));
}
