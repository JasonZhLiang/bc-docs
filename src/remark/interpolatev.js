const { Remarkable } = require('remarkable');
const { Plugin: Embed } = require('remarkable-embed');

// Our custom remarkable plugin factory.
const createVariableInjectionPlugin = variables => {
    // `let` binding used to initialize the `Embed` plugin only once for efficiency.
    // See `if` statement below.
    let initializedPlugin;
    const md = new Remarkable();
    const embed = new Embed();

    embed.register({
        // Call the render method to process the corresponding variable with
        // the passed Remarkable instance.
        // -> the Markdown markup in the variable will be converted to HTML.
        inject: key => initializedPlugin.render(variables[key])
    });

    return (md, options) => {
        if (!initializedPlugin) {
            initializedPlugin = {
                render: md.render.bind(md),
                hook: embed.hook(md, options)
            };
        }

        return initializedPlugin.hook;
    };
};

const siteVariables = {
    scalar: 'https://example.com',
    // Since the variables are processed by Docusaurus's Markdown converter,
    // this will become a nice syntax-highlighted code block.
    markdown: [
        '```javascript',
        'const highlighted = true;',
        '```',
    ].join('\n'),
    // We can use HTML directly too as HTML is valid Markdown.
    html: [
        '<details>',
        '  <summary>More details</summary>',
        '  <pre>Some details</pre>',
        '</details>'
    ].join('\n')
};

const markdownPlugins = createVariableInjectionPlugin(siteVariables);

module.exports = markdownPlugins;