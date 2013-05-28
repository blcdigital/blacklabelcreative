---
layout: post
category: code
tags:
    - javascript
    - plugins
    - projects
title: "The hero player of a thousand versions"
---

Let me start by saying that maybe a thousand is a bit of an exaggeration. But that's definitely how it feels.

Over the course of the last few years I've written what feels like the same hero player/featured content viewer/carousel/whatever over and over again. Yes they all look different, some have extra functions to hide and show some text before and after an animation, some have a direct navigation, some have the option to step through one at a time, but one thing remains the same for a large part – the underlying javascript. I'm ashamed to say that it took me a while to realise that, I even spent some time copy and pasting the code and tweaking tiny parts of it! Those were dark days.

The first time I did this I was a bit pushed for time and spent most train journeys for a week trying to make one plugin that worked in the majority of cases. I'm pleased to say that worked, but to me it wasn't perfect. I thought I could make it a bit more efficient, a bit lighter and a bit more useful. It's been a while since that was made and looking at it recently when I used it on another project I noticed it looks largely the same as when it was finished. So here I am, picking it up again and making an attempt to improve it.

This time round I'm going to take a better approach in its development with proper version numbers, documentation, a to-do list and even it's own repo on GitHub ([which you can find here](https://github.com/donofkarma/hero-player) – go ahead and fork it if you want!). It's also the perfect small project to test out how I'm going to show code on black label creative and how I'll manage the demos that will no doubt be needed for this and future projects, tests and experiments.

Progress so far has been good with the code tidied up and some minor improvements made. One major set of additions will be for touch devices where I want to add swipe events and also tweak the animation to work with CSS transitions where supported. It's a big challenge for me as I am yet to dive into the world of touch gestures, but it's definitely something that must be learnt. On that note, if anyone want to donate an Android device or an iPad you know where to find me!

I'll update this post when the code has its own section, until then there's a version history on GitHub with my progress so far.

Watch this space!