const date = require('../../../src/modules/date');

describe('date 模块', () => {
  test('formatTime()默认格式，返回时间格式是否正常', () => {
    expect(date.formatTime(1586934316925)).toBe('2020-04-15 15:05:16');
  })
  test('formatTime()传参数，返回时间格式是否正常', () => {
    expect(date.formatTime(1586934316925,'yyyy.MM.dd')).toBe('2020.04.15');
  })
});
