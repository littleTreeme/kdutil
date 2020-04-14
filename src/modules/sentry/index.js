/*
 * 异常上报日志监控类
 * @Author:tree,
 * @Date  2019-12-08 20:20:51
 * 常用配置 option：https://docs.sentry.io/clients/javascript/config/
 * 1.自动捕获vue组件内异常
 * 2.自动捕获promise内的异常
 * 3.自动捕获没有被catch的运行异常
 */

import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

class Report {
  constructor(Vue, options = {}) {
    if (process.env.NODE_ENV !== 'development') {
      // todo
    }
    this.vue = Vue;
    this.options = options;
  }

  static getInstance(Vue, Option) {
    if (!(this.instance instanceof this)) {
      this.instance = new this(Vue, Option);
      this.instance.install();
    }
    return this.instance;
  }

  install() {
    if (process.env.NODE_ENV !== 'development') {
      Raven.config(this.options.dsn, {
        environment: process.env.NODE_ENV,
      }).addPlugin(RavenVue, this.Vue).install();
      // raven内置了vue插件，会通过vue.config.errorHandler来捕获vue组件内错误并上报sentry服务

      // 记录用户信息
      Raven.setUserContext({user: this.options.user || ''});

      // 设置全局tag标签
      Raven.setTagsContext({environment: this.options.env || ''});
    }
  }

  /**
   * 主动上报
   * type: 'info','warning','error'
   */
  log(data = null, type = 'error', options = {}) {
    // 添加面包屑
    Raven.captureBreadcrumb({
      message: data,
      category: 'manual message',
    });
    // 异常上报
    if (data instanceof Error) {
      Raven.captureException(data, {
        level: type,
        logger: 'manual exception',
        tags: {options},
      });
    } else {
      Raven.captureException('error', {
        level: type,
        logger: 'manual data',
        extra: {
          data,
          options: this.options,
          date: new Date(),
        },
      });
    }
  }
}

export default Report;
