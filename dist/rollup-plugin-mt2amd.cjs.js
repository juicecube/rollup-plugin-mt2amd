'use strict';

var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var Vinyl = require('vinyl');
var mt2amd = require('@mlz/gulp-mt2amd');
var utils = require('@rollup/pluginutils');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var Vinyl__default = /*#__PURE__*/_interopDefaultLegacy(Vinyl);
var mt2amd__default = /*#__PURE__*/_interopDefaultLegacy(mt2amd);
var utils__default = /*#__PURE__*/_interopDefaultLegacy(utils);

function rollupMt2amd(options) {
  options = options || {};
  var filter = utils__default['default'].createFilter(options.include, options.exclude);

  return {
    name: 'mt2amd',

    transform: function transform(content, id) {return _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee() {var file;return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                /\.(tpl\.html|less|sass|css|png|jpg|jpeg|gif|svg|json)$/.test(id)) {_context.next = 2;break;}return _context.abrupt("return",
                null);case 2:if (

                filter(id)) {_context.next = 4;break;}return _context.abrupt("return",
                null);case 4:


                file = new Vinyl__default['default']({
                  base: process.cwd(),
                  cwd: process.cwd(),
                  path: id,
                  contents: Buffer.from(content) });_context.next = 7;return (


                  mt2amd__default['default'].compile(file, {
                    babel: options.babel,
                    strictMode: options.strictMode,
                    dataInjection: options.dataInjection,
                    esModule: true,
                    beautify: true }));case 7:file = _context.sent;return _context.abrupt("return",


                { code: file.contents.toString(), map: { mappings: '' } });case 9:case "end":return _context.stop();}}}, _callee);}))();
    } };

}

module.exports = rollupMt2amd;
