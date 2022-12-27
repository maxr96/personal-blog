---
title: 'Moving Blog from Next.js to Astro'
excerpt: 'Recently I heard a lot of praise comments about Astro. How easy it is to use it for static websites and how performant it can be due to the Zero JS by default. I decided to give it a try and share my learnings here 📘.'
coverImage: 'migratingNextToAstro'
date: '2022-12-27T23:33:00.001Z'
tags: 'Learning, Front End'
---

A few years ago I tried to set up my blog with **Gatsby**, but I soon got lost in its complexity. Having to define my GraphQL API was a bit of an overkill and it was difficult to navigate all the extensions that were provided by it. A few months ago I created my blog site with the **Next.JS** framework.

This time around I decided to give **Astro** a go. I heard a lot of praise about it and since it was already more than 3 months since its initial release I was convinced it should be ready for prime time.

In this blog post, I would like to go through some of the unique features that I liked in **Astro** and some of the pitfalls that I stumbled upon. I will be comparing it mostly with **Next.JS** since it is the framework I had the most experience with and I will do a side-by-side comparison of the **Next.JS** and **Astro** versions of my blog.

## Initial Setup and Getting Started

I enjoyed the simplicity of Astro right from the get-go. To start building my blog with Astro all I have to do is to run:

```bash
npm create astro@latest
```

Astro provides a great CLI that explicitly shows what is being created and later on when you want to add any integrations all the changes are always highlighted. That puts you in the driver's seat.

Starting Astro locally is easy as well:

```bash
npm run dev
```

If you want to build a blog on your own with Astro I highly recommend following [this guide](https://docs.astro.build/en/tutorial/0-introduction/) from their docs page. Overall, whenever you struggle with something just look for it in the [docs](https://docs.astro.build/en/getting-started/), and 99% of the time the answer is there.

## Zero JS by default 🚆

The main and biggest difference between **Astro** and **Next.JS** is the way the pages are served. By default **Next.JS** will load the basic HTML on the first load of the website and for each route in your app will only load JS needed to hydrate the initial page. In contrast, **Astro** follows a more classical **MPA** approach. Each route is a completely separate HTML page. When you navigate the route by default you only load the HTML page with the stylesheet and any assets defined on the page. Most importantly, you get Zero JS loaded by default.

Now if we look at it from the user perspective, when transitioning from Next.JS to Astro when you are navigating from one page to another you need to load a new page. This means you are losing the SPA feeling that Next.JS gives you as you can see the navigation bar and footer flickering when loading the new page. What you gain though is an extra small bundle. My **Next.JS** blog loaded 327 kB (153kB gzipped) of data, and **Astro** fits in just 86kB (74kB gzipped). Here I must also mention that I used a trick to load Preact Compat instead of React to squeeze an even smaller bundle size. Still, the numbers speak for themselves, Astro's initial bundle is 2x smaller when comparing the transferred size over the wire.

## 100 Score in Performance 🚀

One of the probably most exciting outcomes that you get from using Astro is how easy it is to get a perfect 100 Performance score even on mobile. One piece of the puzzle is of course smaller bundle, but another is no JS so no logic to run on the client. Even an underpowered phone can run your page easily in the browser with Astro.

Now let's dive into some actual results for 2 pages. I will be running side by side comparison using [PageSpeed Insights](https://pagespeed.web.dev) and concentrating on the mobile part as it is the one that reflects more challenging conditions. In fact, on the Desktop both frameworks perform well, so there is no point to compare that one.

If you want to do your own comparison Next.JS version of my blog is available at https://maxdev.blog and Astro at https://my-astro-site-flame.vercel.app.

First, let's look at the **Main Page**. It is a pretty simple page with a navigation header, footer, theme toggle (which we will talk a bit later about), and 2 images - bigger for the post and smaller for the logo.

![Main Page with Next.js](/assets/blog/migrating-next-to-astro/main_next.webp "Main Page with Next.js")_Main Page with Next.js_
![Main Page with Astro](/assets/blog/migrating-next-to-astro/main_astro.webp "Main Page with Astro")_Main Page with Astro_

Based on the results you can see that Astro was able to perform slightly better in terms of an overall performance score. If we look at the Performance details the biggest difference is in the Largest Contentful Paint (LCP) metric. This metric is one of the key metrics as it marks the point in the page timeline when the main content has loaded. LCP is 2 times faster with Astro than with Next.JS. Please, ignore the Accessibility score, I did a few changes in that regard to the Astro application, but that doesn't affect Performance.

The second page is an **About Me** page. Here we are using a different font that is being retrieved from the server, we also load quite a few SVG images and an image of myself. This page is a bit heavier than the previous one, but still, we can get a perfect 100 with Astro.

![About Me Page with Next.js](/assets/blog/migrating-next-to-astro/about_me_next.webp "About Me Page with Next.js")_About Me Page with Next.js_
![About Me Page with Astro](/assets/blog/migrating-next-to-astro/about_me_astro.webp "About Me Page with Astro")_About Me Page with Astro_

The performance difference is even more obvious in this one. The score with Next.JS is now down to the yellow category, while with Astro we still get a perfect 100. The difference in LCP is even bigger now, the site becomes interactive in only 1.1s and there is no blocking time with Astro.

I believe that gives you a pretty good overview of why you may want to adopt Astro. But again performance is not everything and as I mentioned before this is more of an extreme case with a slower smartphone on a slower internet, with a normal internet on a desktop both web pages load very fast.

## Closer to WEB standards

Next.JS tries to hide away and abstract most of the details about how it is building your pages. For example, your classical `<head>` tag is defined inside the Document component provided by Next.JS and if you want to do any kind of modifications you will need to extend it. Unfortunately, it is only possible to extend it once for the whole web app. On the contrary, Astro lets you build a separate header for each page if you want. This is again related to the differences between MPA and SPA.

When writing Astro components you will be using a JSX template, but still having conventional HTML tags so you can copy any HTML part from the web and it will be a valid JSX for Astro. When compared to Next.JS since it uses React it provides abstractions that are a bit different, like the infamous `className` instead of the conventional `class`.

Another interesting thing is how each Astro component is defined. You have your front matter first - the code that will be executed on the server, <script> part, a <styles> part, and finally your actual content. This idea was borrowed from Vue. It has its drawbacks and benefits. Personally, since I use Tailwind I don't even need to specify the <styles> part, but if you want you to have the option.

## Easy to write code executed on the server

Astro provides a very simple mental model on how to make code run on the server instead of on the client. All you have to do is write it in the frontmatter of your component. That's it! For example, this is how I can retrieve the list of my blog posts:

```js
import type { MarkdownInstance } from 'astro'
import type Post from '../types/post'

// Use Astro.glob() to fetch all posts, and then sort them by date.
const posts = (
  (await Astro.glob) <
  MarkdownInstance <
  Post >> './posts/*.{md,mdx}'
)
  .sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
  )
  .map((post) => {
    return { ...post.frontmatter, slug: post.url }
  })
```

You can see I am using `Astro.glob` to retrieve the list of my posts. All I have to do is specify where it is located and what file types I am expecting.

In Next.JS I can do the same with the following code.

```js
import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  return (
    slugs
      .map((slug) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPosts }
  }
}
```

While in both cases it is not rocket science to understand what is being executed. In the first example, it is much easier as `Astro.glob` abstracts all the complexity of going through the file system and reading the necessary directory. Plus you don't have to put the result into a `getStaticProps` method, all you need to do is just write the content inside the frontmatter of your component and it will be served statically by default. Of course, the way Next.JS does it gives you a bit more flexibility, especially if writing a more complex web app, but for a blog post you anyway should serve statically generated pages to ensure the best user experience.

## Markdown, RSS, Tailwind out of the box

Astro provides plenty of different official integrations. The ones I already used in my blog are RSS, Sitemap, and TailwindCSS. It allows one to quickly start using it and is impressive how big the ecosystem got in so little time. Astro even provides SSR adapters for different platforms like Vercel and Deno. However, if you would like to use SSR you would probably be better with Next.JS as the support of it is much better right now. What I am most excited to try next is the Integrations for UI frameworks available. This brings me to my next point.

## No Vendor Lock-In 🏝️

Astro provides you with plenty of options using pure Astro components. But if this is not enough for you, you can bring any UI framework/library. So far Astro supports React, Preact, Svelte, Vue, Solid, AlpineJS, and Lit. That is plenty of great options, if you are fancy you can even combine different frameworks on the same page (or if you like your user to struggle and load all this JS 😆). Comparing to Next.JS or Gatsby, where you are locked to React this provides a set of options to develop your website. You have the flexibility to use different frameworks on different pages. Or you can use a lighter framework than React to make your website bundle smaller and loading times faster.

This is all possible due to Astro's island architecture. As mentioned before Astro ships with Zero JS by default, but if you need interactivity you can opt-in and only load the necessary JS when the user scrolls into the island. All the islands are isolated, which is why you can have your React component in the header, and your Solid component in the footer. And all of them will load in parallel.

Moreover, you can specify when exactly your interactive component should be loaded. This is done by [Client Direcives](https://docs.astro.build/en/reference/directives-reference/#client-directives). You can force the component to load immediately, load on idle, load when the component is visible, or even load based on the media query.

## Pitfalls when using Astro

One of the issues I stumbled upon during setting up Astro is that the official `@astrojs/image` integration was not able to work with JPG and WEBP images. I had to use a plain `<img>` tag and specify the width and height manually. It is a bummer since the `<Image>` component provided by Next.JS works great and I don't need to compress and figure out the width and height of the images on my own.

Some other issue I noticed during the development is that hot reload doesn't always work. Sometimes during hot reload I got a broken UI that I couldn't figure out how it was built. I spent a good hour trying to understand what is wrong until I just accidentally restarted the Astro script and voila everything worked. I never had this issue with Next.JS.

A few smaller issues were how to load the fonts and icons. For both of these, I found an easy solution. For fonts, I used fontsource, which works by simply installing your font as an NPM package and importing it on the page you need. For the icons I used astro-icon integration, the setup was very simple - install the NPM package and start using it by importing an Icon component.

Another thing I had to deal with was the implementation of the dark mode toggle. This is something that you got out of the box with Tailwind, but you want to provide the user with a way to turn it on/off. For the website that uses Next.JS, I first used a short code that I wrote with React, but then I had an issue with the theme flickering before the rendering and I decided to use a library that solves it called `next-themes`. For the Astro however, I didn't want to load a whole UI library, being React or Preact just to have a simple logic for a dark mode toggle. So I had to build it with plain JS. By the way, it was the perfect use case for using the `<script>` tag in the component as the logic is closely tied to the toggle itself. Here is what I came up with.

```js
let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

// Change the icons inside the button based on previous settings
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  themeToggleLightIcon?.classList.remove('hidden')
  document.documentElement.classList.add('dark')
} else {
  themeToggleDarkIcon?.classList.remove('hidden')
  document.documentElement.classList.remove('dark')
}

let themeToggleBtn = document.getElementById('theme-toggle-button')

themeToggleBtn?.addEventListener('click', function () {
  // toggle icons inside button
  themeToggleDarkIcon?.classList.toggle('hidden')
  themeToggleLightIcon?.classList.toggle('hidden')

  // if set via local storage previously
  if (localStorage.theme) {
    if (localStorage.theme === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }
})
```

I must say it is not the code that I am most proud of, but it does the job for me, even if it looks uglier than what I could have achieved with a UI library like **React**. It loads initially either a dark or light theme based on the theme set in the local storage or color scheme of the user. By default, it will use the light theme. Next, we add an event listener to the button that changes the SVG icon if it was clicked and applies the theme to the website by adding dark to the class list. Since this JS snippet loads immediately I don't have any flickering when initially loading the page.

## Final Words

In my opinion, **Astro** combines the pure simplicity of tools like **Hugo** or **Jekyll**, while providing the power of building well-structured component-based frameworks like **Next.JS** with the additional benefit of not being tied to a specific UI library like **React**. That is why when I decide to bring something more interactive to my website, I will for sure give Solid a try. I believe Astro has a bright future and most importantly they know their target audience and focus their efforts on it.

On the other hand, I am still not fully decided on what technology to continue using for my blog. On one side faster first load of the web page, but on the other re-renders are a bit less user-friendly as you have the header and footer reloading and the Next.JS ecosystem is definitely more mature so some things might be lacking.

Overall, I am happy that I rebuilt my blog in another framework. It taught me a lot about how web pages are being served under the hood and how can I achieve the best performance for my website.