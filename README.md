![kindling](https://user-images.githubusercontent.com/10165959/52365396-49bdea00-2a3f-11e9-866c-9dc4d7cc8d04.png)


# Kindling

## Introduction

This repo was created out of my desire to have an up-to-date basic static React based frontend that I can play around with when I have projects to create on the weekend. What I don't want to do on the weekend is worry about setting a front end project up for the n-th time.

I had been trying to use services that provide boilerplate static apps, like Gatsby, but I found the majority of them to be too opinionated, too bloated, and too specific in their use cases. I don't need indexable content.

To that end, I made myself this starter app, named it Kindling, and have used it as the basis for my website and several personal projects.

## In the box
Kindling provides setup so that, after download, you can run your the app immediately after installation.

To install, run this command from the terminal in your the repo's root directory:

`make bootstrap`

To start the dev server, run:

`make watch`

To build the bundle for production, run:

`make build`

To run tests, run:

`make test`

To initiate your own git history and eject from kindling, run:

`make eject`

### Decisions made

This app is a `webpack` + `react` app.

`react` is the front end framework I am most familiar with. You could use preact, but react is always coming out with new fun features.

`webpack` allows us to bundle in dependencies (with import statements or requires) and write modern Javascript that will be transpiled via Babel plugins into ES5.

`babel` transpiles our modern JS code into safe-for-ancient-browsers ES5.

`make` to make running the app easier without obfusicating what I'm doing under the hood (if you've never used Makefiles before, they're really class)

`npm` is being used instead of yarn because npm is good again?

`nvm` instead of system node so that I can specify version.

#### Routing

I'm using `space-router`, a really excellent front end routing library written and maintained by [Karolis Narkevičius](https://github.com/KidkArolis). Routing in the app is handled in the `index.js` file in the src directory.

#### State management

`tiny-atom` is a state managment framework, also written by Karolis. You can see it's setup in the `src/state` folder, and you can see it in action in both the `src/views/App` view and the `src/views/FourOhFour` view.

Check out it's fantastic docs site here:

https://qubitproducts.github.io/tiny-atom/

Why not `redux`? I dislike using `redux`. It bloats so much and makes something that should be intuitive (state managment) abstract and hard to reason about.

#### Linting

I use `standard` for linting, not because it is the best or because I agree with every decision it makes, but because it makes everything `standard`.

Check out the docs here:

https://standardjs.com/rules.html

#### Dist folder

the bundle is built and put in the `dist` foler, which contains an `index.html` file and a `_redirects` file. The redirects file is for Netlify only, and ensures that your `index.html` will always be served regardless of the path in the href. The `index.html` file then in turn requires in the app `bundle.js`.

#### Deployment

I made this repo to be used explicitly with Netlify (mentioned above), but you can use whatever deployment method you would like.

The reason I use netlify is because it does a lot for you out of the box - it'll watch the repo you have your app in and run you `build` command for you, which means CI is as easy as doing a `git push origin master` or merging in a pull request. It also does fancy stuff like allowing you to deploy branches to your website as subdomains, or to deploy different repos to different subdomains (https://kindling.samthomas.io/ is an example of the latter).

Check out Netlify here, and it's getting started docs here:

https://www.netlify.com/docs/
