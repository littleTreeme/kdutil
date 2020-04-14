/*
*  @author:tree
*  @version: 1.0.0
*  createBy:@2020.03.02
*  shc-admin-utils : SHC 工具库
*/

let utils = {};
let haveDefault = ['http','sentry'];

const modules = require.context('./modules/', true, /.js$/);

modules.keys().forEach(modulesKey => {
  let attr = modulesKey.replace('./', '').replace('.js', '').replace('/index', '');
  if (haveDefault.includes(attr)) {
    utils[attr] = modules(modulesKey).default;
  }else {
    utils[attr] = modules(modulesKey);
  }
});

module.exports = utils;
