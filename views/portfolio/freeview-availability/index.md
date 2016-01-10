---
layout: portfolio-item
title: "Freeview Availablity Checker"
---

![Freeview Availablity Checker](/assets/images/portfolio/freeview/freeview-coverage-checker-large.png){: .main-image}

- **Client:** FullSIX London/Freeview
- **URL:** [www.freeview.co.uk/availability](http://www.freeview.co.uk/availability){: target="_blank"}
- **Technology:** NodeJS API, PHP, Wordpress, HTML, CSS, Javascript
{: .portfolio-item-meta}

The task for this project was to update the aging coverage checker, which was both slow to perform the check and difficult to maintain. Additionally the new service had to integrate with the current Wordpress build of the site. As such the project was split into two parts.

First was a new REST API which performed the check and returned a cleaned set of results back to the main Freeview site. This was built in NodeJS as it needed to handle a lot of requests simultaneously from one of the busiest parts of the site. The second was the Wordpress integration which performed the call to the REST API and dealt with the display of the response.

By having two separate parts it allowed us to manage imagery and content differently to the way the results were found meaning one could be updated without affecting the other. This also meant that the new API could be used on other Freeview properties cutting down the cost of future development.
