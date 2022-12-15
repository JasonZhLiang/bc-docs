const visit = require('unist-util-visit');
var unified = require('unified');
var parser = require('remark-parse');
var compiler = require('remark-stringify');
var variables = require('remark-variables');
// var reporter = require('vfile-reporter');
var toVfile = require('to-vfile');

// const plugin = (options) => {
//     const transformer = async (ast) => {
//         let number = 1;
//         visit(ast, 'heading', (node) => {
//             if (node.depth === 2 && node.children.length > 0) {
//                 node.children.unshift({
//                     type: 'text',
//                     value: `Section ${number}. `,
//                 });
//                 number++;
//             }
//         });
//     };
//     return transformer;
// };

// const plugin = (options) => {
//     const transformer = async (ast, vfile) => {
//         ast.children.unshift({
//             type: 'text',
//             value: `The current file path is ${vfile.path}`,
//         });
//     };
//     return transformer;
// };

const plugin = (options) => {
    const transformer = async (ast, vfile) => {
        ast.children.map(() => {
            // find each md file
            var markdown = toVfile(vfile.path);
            // Set the processor
            var processor = unified()
                .use(parser)
                .use(compiler)
                .use(variables)

            // Add some data
            processor = processor()
                .data('title', 'Example')
                .data('subtitle', 'Variables in markdown!')
                .data('list', ['other text', 0, true])

            // And process
            processor().process(markdown, function (err, file) {
                // console.error(reporter(err || file))
                console.log(markdown.path)
            })
        })
    };
    return transformer;
};

module.exports = plugin;