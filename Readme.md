# Basics of web-components

4 key features , Custom Elements, Shadow Dom, HTML imports, CSS

# Libraries

- lit-html (lightweight , easy to use, no setup)
- unpkg.com is a CDN sponsered by google to provide all libraries hosted on npm to be directly available without any bundling.

# How to use it

- importing html files in javascript

```html
<script type="module">
  import "your-webcomponent-collection";
</script>
```

# Lets import some existing web components to our page

```html
<script type="module">
  import "https://unpkg.com/wired-elements@0.9.0-1/dist/wired-elements.bundled.js";
</script>
```

## Lets use it now

```html
<wired-input></wired-input>
```

and may be we want to add components from a different library like polymer

```html
<paper-button raised>Click me</paper-button>
```

simple
we just import and use it

```html
<script type="module">
  import "https://unpkg.com/@polymer/paper-button@3.0.1/paper-button.js?module";
</script>
```

# Co-existence

In the below sample , we have components built using 2 different libraries which follow the web standard specification. Polymer and Wired .

Still we have the ability to make them coexist without adding any additional library.

```html
<wired-card elevation="2">
  <wired-input placeholder="Enter name"></wired-input>
  <paper-button raised class="indigo">Click Me</paper-button>
</wired-card>
```

```quote
Lets create our own element and see how it can be used within this app
```

# Schneider Hello World

# Rest API

# GraphQL Element
