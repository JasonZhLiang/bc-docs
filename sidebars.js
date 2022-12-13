/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: './tutorial-basics' }],
  // apiSidebar: [{ type: 'autogenerated', dirName: './apireference1' }],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tutorial',
      items: [{ type: 'autogenerated', dirName: 'tutorial-basics' }],
    },
  ],
  apiSidebar: [
    {
      type: 'category',
      label: 'API Reference',
      link: { type: "doc", id: 'apireference-index' },
      // link: {
      //   type: 'generated-index',
      //   title: 'Docusaurus Guides',
      //   description: 'Learn about the most important Docusaurus concepts!',
      //   slug: '/category/docusaurus-guides',
      //   keywords: ['guides'],
      //   // image: '/img/docusaurus.png',
      // },
      items: [{ type: 'autogenerated', dirName: 'apireference' }],
    },
  ],
};

module.exports = sidebars;