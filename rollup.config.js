
import glob from 'glob'
import visualizer from 'rollup-plugin-visualizer'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

const excludedModules = ['*.stories'].join('|')
const modules = glob.sync(`./src/**/!(${excludedModules}).js`)

export default modules.map(module => {
  const component = module.split('/')[2]

  return {
    input: `src/${component}/${component}.js`,
    output: [
      {
        file: `${component}/index.js`,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: `${component}/index.es.js`,
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      url({ exclude: ['**/*.svg'] }),
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/external-helpers']
      }),
      resolve(),
      commonjs(),
      visualizer({ filename: `docs/${component}.html` }),
    ]
  }
})
