# Bookmarklets
Some bookmarklets for crawling your website's markup.

## Markup Pollution Checker

While working with React and other frameworks, I regularly discovered polluted markup in my developer tools. For example, if you want to handle a component’s CSS class property by its parent component and it passes "null" or other JavaScript Primitives to the component which then somehow renders that as a string. It was very annoying for me to find that stuff in the markup and I came up with the idea to write a little bookmarklet to make findings of "polluted DOM" easier. 

Not that this pollution is too harmful. But at the end, it bloats the markup with unnecessary code. And what is really bad, is that you might have mistakes in your JavaScript source code that you can find out that way easier.

Currently the bookmarklet finds the Javascript Primitives undefined, null and NaN, but you can easily extend the Regex for the findings.

[markup-pollution-checker](javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://rawgit.com/accessabilly/bookmarklets/master/markup-pollution-checker.js?v='+(Math.random()*1000);var iframes=document.getElementsByTagName('iframe');for(i=0;i<iframes.length;i++) {iframes[i].contentDocument.body.appendChild(document.createElement('script')).src='https://rawgit.com/accessabilly/bookmarklets/master/markup-pollution-checker.js?v='+(Math.random()*1000);}})();)
