/*
 * 处理http返回的错误码等信息
 * @Author: tree
 */
export default {
  SUCCESS: {
    'resultCode': '0',
    'resultDesc': '处理成功'
  },
  UNKNOW_ERROR: {
    'resultCode': '-1',
    'resultDesc': '系统异常，请稍后再试'
  },
  NET_ERROR: {
    'resultCode': '-99999',
    'resultDesc': '网络异常'
  },
  TOKEN_INVALID: {
    'resultCode': '4201',
    'resultDesc': '权限已过期，请重新登录'
  }
}
