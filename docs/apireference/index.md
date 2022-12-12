---
displayed_sidebar: apiSidebar
---

# doc with the same level of subfolder level 1

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::caution

Some popular languages like Java, C#, or PHP are not enabled by default.

:::

:::note

Each additional language has to be a valid Prism component name. For example, Prism would map the _language_ `cs` to `csharp`, but only `prism-csharp.js` exists as a _component_, so you need to use `additionalLanguages: ['csharp']`. You can look into `node_modules/prismjs/components` to find all components (languages) available.

:::

:::warning this is a warning

By default, GitHub Pages runs published files through [Jekyll](https://jekyllrb.com/). Since Jekyll will discard any files that begin with `_`, it is recommended that you disable Jekyll by adding an empty file named `.nojekyll` file to your `static` directory.

:::

:::danger this is a danger same format

By default, GitHub Pages runs published files through [Jekyll](https://jekyllrb.com/). Since Jekyll will discard any files that begin with `_`, it is recommended that you disable Jekyll by adding an empty file named `.nojekyll` file to your `static` directory.

:::

:::info this is a info

By default, GitHub Pages runs published files through [Jekyll](https://jekyllrb.com/). Since Jekyll will discard any files that begin with `_`, it is recommended that you disable Jekyll by adding an empty file named `.nojekyll` file to your `static` directory.

:::

:::tip this is a tip

By default, GitHub Pages runs published files through [Jekyll](https://jekyllrb.com/). Since Jekyll will discard any files that begin with `_`, it is recommended that you disable Jekyll by adding an empty file named `.nojekyll` file to your `static` directory.

:::

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="js" label="JavaScript">
```

```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end

  return 'Nothing highlighted';
}
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// highlight-start
String integrationId = "default";
String contextJson = "{}";
this; // implements IServerCallback
// highlight-end
// highlight-next-line
_bc.getBlockchainService().getBlockchainItems(integrationId, contextJson, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
  System.out.print(String.format("Success | %s", jsonData.toString()));
}
// highlight-next-line
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
  System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
```

```mdx-code-block
</TabItem>
<TabItem value="csharp" label="C#">
```

```csharp {3,7,12} showLineNumbers
string integrationId = "default";
string contextJson = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

_bc.BlockchainService.GetBlockchainItems(integrationId, contextJson, successCallback, failureCallback);
```
```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```


<details>

<summary>JSON Response</summary>

```json
{
  "data": {
    "success": true,
    "response": {
      "items": [
        {
          "key": "...........m2",
          "payer": "eosio.nftram",
          "json": {
            "id": 290,
            "mint_date": "2022-10-19T13:03:10",
            "serial_number": 17,
            "token_factory_id": 22
          }
        }
      ]
    }
  },
  "status": 200
}
```

</details>

In this presentation at [Algolia Community Event](https://www.algolia.com/), [Meta Open Source team](https://opensource.facebook.com/) shared a brief walk-through of Docusaurus. They covered how to get started with the project, enable plugins, and set up functionalities like documentation and blogging.

```mdx-code-block
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

<div className="video-container">
  <LiteYouTubeEmbed
    // cSpell:ignore Yhyx Sksg
    id="Yhyx7otSksg"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="Docusaurus: Documentation Made Easya"
    poster="maxresdefault"
    webp
  />
</div>
```