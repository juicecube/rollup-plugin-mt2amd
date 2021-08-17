const rollup = require('rollup')
const { babel } = require('@rollup/plugin-babel')
const pkg = require('../package.json')

module.exports = async function build() {
  try {
    const bundle = await rollup.rollup({
      input: 'src/index.js',
      plugins: [babel({ babelHelpers: 'runtime' })],
      external(id) {
        if (/@babel\/runtime\/.*/i.test(id)) {
          return true
        }
        return Object.keys(pkg.dependencies).indexOf(id) > -1
      },
    })

    await bundle.write({ format: 'cjs', file: pkg.main })
    await bundle.write({ format: 'es', file: pkg.module })
    await bundle.close()
  } catch (e) {
    console.error(e)
  }
}
