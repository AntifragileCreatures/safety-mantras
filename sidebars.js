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

  //developmentSidebar: [{type: 'autogenerated', dirName: 'development'}],

  //mantrasSidebar: [{type: 'autogenerated', dirName: 'safety-mantras'}],

  // You can also create a sidebar manually as follows:

  mySidebar: [
    {
      type: 'category',
      label: 'Poetry',
      items: ['safety-mantras/english-poetry', 'safety-mantras/hindi-poetry'],
    },
  ],

};

module.exports = sidebars;
