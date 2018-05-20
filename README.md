# Bookmarklets
Some bookmarklets for crawling your website's markup.

## Markup Pollution Checker

While working with React and other frameworks, I regularly discovered polluted markup in my developer tools. For example, if you want to handle a component’s CSS class property by its parent component and it passes "null" or other JavaScript Primitives to the component which then somehow renders that as a string. 

### JSX Source
```jsx
<div cssClass={myCssClass}"></div>
```
that accidentially became

### HTML Output
```html
<div class="null"></div>
```

Not that this pollution is too harmful. But you might have mistakes in your JavaScript source code that you can find easier that way.

Currently the bookmarklet finds the Javascript Primitives *undefined, null and NaN* but you can easily extend the Regex for the findings.

[Markup Pollution Checker](https://accessabilly.com/bookmarklet-markup-pollution-checker)
