/*
  @file: sessionStorage 会话存储
  @Author: tree
 */

module.exports =  {

  get: function (name) {
    if (!name) return;
    return window.sessionStorage.getItem(name);
  },

  set: function (name, content) {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    return sessionStorage.setItem(name, content);
  },

  delete: function (name) {
    if (!name) return;
    sessionStorage.removeItem(name);
  }

};

