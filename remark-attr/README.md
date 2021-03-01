# remark-attr

Verify the operation of [remark-attr](https://github.com/arobase-che/remark-attr).

## ATX-style header with inline syntax

Setup and Execution:

```
$ npm install
$ npm run fig1
```

Markdown:

```md
# Header 1 {#header-1}

# Header 2
{#header-2}

# Header 3 **with text** {#header-3}
```

Expected:

```html
<h1 id="header-1">Header 1</h1>
<h1 id="header-2">Header 2</h1>
<h1 id="header-3">Header 3 <strong>with text</strong></h1>
```

Actual:

```html
<h1 id="header-1">Header 1</h1>
<h1 id="header-2">Header 2</h1>
<h1>Header 3 <strong>with text</strong> {#header-3}</h1>
```

`{# header-3}` remains as an attribute.
