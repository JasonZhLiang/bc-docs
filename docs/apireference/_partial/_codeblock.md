```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
```

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```
<CodeBlock>
{props.csharp}
</CodeBlock>

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```
```cpp this will not work
{props.cpp}
```
```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

{props.objectivec}

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

{props.java}

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

{props.javascript}

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

{props.cfscript}

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

{props.r}

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```