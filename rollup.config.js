import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import commonjs from "rollup-plugin-commonjs";
import babel from 'rollup-plugin-babel';
import requireContext from 'rollup-plugin-require-context';

/* format:
  cjs: node.js 环境
  iife: 浏览器环境
  umd: 兼容环境, 同时支持 node.js 和浏览器
 */
export default {
  input: 'src/main.js',
  format: 'umd', //我们的类库既能被nodejs直接使用，又能在浏览器中使用，那么我们就使用umd的配置项
  output: {
    name:'kdutil',
    file: 'dist/kdutil.min.js',
    format: 'umd',
  },
  external: ['axios'],
  plugins: [
    resolve(), //rollup-plugin-node-resolve 插件可以告诉 Rollup 如何查找外部模块
    json(),
    requireContext(),
    commonjs(),//插件就是用来将 CommonJS 转换成 ES2015 模块的。
    babel({
      exclude: 'node_modules/**',
    }),
  ]
}
