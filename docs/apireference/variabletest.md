# mdx test referencing Variable


import config from '@site/docusaurus.config.js';

The website is called:
<>{config.title}</>


```js
var number = 123;
{`${config.title}`}
```

import codeprefix from './commondata.ts';

nothing surround

<>{codeprefix}</>{`${codeprefix}`}



import data from "./newdata.json";

^^to avoid errors, leave an empty line after jsx code

<code>{`const key1V = "${data.key1}";
const key2V = "${data.key2}";
`}</code>

useDocusaurusContext 

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
function getVariable () {
    const {siteConfig} = useDocusaurusContext();
    return siteConfig;
}

<div>{getVariable()?.title}</div>
<div>{getVariable().url}</div>


## Scalar injection
{@inject: scalar}

## Markdown injection
{@inject: markdown}

## HTML injection
{@inject: html}

## test substitute with [remark-variables](https://github.com/mrzmmr/remark-variables)
# {{ title }}

- {{ list[0] }} (string)
- {{ list[1] }} (number)
- {{ list[2] }} (boolean)

> {{ subtitle }}




# %COMPANY

%%COPYRIGHT


the link substitute [this is a link](https://github.com/%COMPANY/remark-variables)