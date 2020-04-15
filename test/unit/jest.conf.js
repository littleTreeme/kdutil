const path = require('path');

module.exports = {
  verbose: true,
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
  ],
  testMatch: [ // 匹配测试用例的文件
    '<rootDir>/test/unit/specs/*.test.js',
  ],
  transformIgnorePatterns: ['/node_modules/'],
};


//语句覆盖率（statement coverage）
//分支覆盖率（branch coverage）
//函数覆盖率（function coverage）
// 行覆盖率（line coverage
