---
layout: post
category: css
title: "Lobotomized Owls and Grids"
---

There was a great article on A List Apart recently titled "[Axiomatic CSS and Lobotomized Owls](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls)". It was about using a powerful selector (which resembles an owl's vacant stare) to style arbitrary content and reduce bloat.

{% highlight css %}
* + *
{% endhighlight %}

The ideas was that by using the selector with margins you could efficiently space elements adjacent to each other without having to rely on things like `:first-child` or `:last-child` selectors or even have to be specific about which elements you were even targetting.

This got me thinking about the traditional grid systems we all have used and whether it was possible to use the owl to make this process more efficient. I created a quick pen on CodePen ([Fluid owl grid](http://codepen.io/donofkarma/pen/mybXMm)) which uses the principles outlined in the article and it seemed to work quite well, even though I've used class names as the adjacent selectors instead of the `*`.

There's a generic `.column` container which has a float applied to it and then the owl to make sure all adjacent columns have a 3% spacing. The outer `.row` container clears the floats and has an `overflow: auto;` to stop the container collapsing. It also uses the owl to add 10px spacing between them. The remaining CSS sets the width of each column size. The result is this:

![Final grid layout](/assets/images/posts/lobotomized-owls-and-grids/fluid-owl-grid.png)
