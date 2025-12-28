---
title: setting up SvelteKit to work with Neocities
description: how to set up SvelteKit to work with Neocities
draft: false
authors:
  - gold
tags:
  - svelte
  - neocities
  - technical
---
here's a tutorial for getting [SvelteKit](https://svelte.dev/) sites onto [Neocities](https://neocities.org/)! you don't need any prior experience with SvelteKit or Neocities before following along, but i'm only going to get you started. you'll likely want to take a look at the [SvelteKit documentation](https://svelte.dev/docs) afterwards if you're new here.

shoutout to [iris](https://catstret.ch/) for helping me and [Zodiac](https://zodiacs.pl/#) with this! i took what they told us, stripped out the struggling, and made it public to help anyone else out there who needs it. enjoy!

# prerequisites

## GitHub and Git

> [!info] other Git forges
> this method relies on a GitHub workflow, but it *can* work with other Git forges, such as [Codeberg](https://codeberg.org/) or [GitLab](https://about.gitlab.com/). you'd need to rewrite the deployment file to suit your forge of choice, though. i don't know how to do that, so i'll leave that up to you.

make sure you have a [GitHub](https://github.com) account, and download and install [Git](https://git-scm.com/install/). this should be pretty straightforward.

## Node.js

if you aren't sure whether or not you have Node.js yet, run `npm -v` in a terminal to verify whether or not you do. if you get a version number back, you're all set and can move on to the next step!

if you don't have it yet, the way you get it depends on your operating system:

### Windows

download the prebuilt version from [here](https://nodejs.org/en/download) (.msi) and run the installer. when you get to the custom setup section, choose "npm package manager"\*. run through the rest of the installer.
<br><span class="sgos-note">* i don't know if you actually <em>need</em> to do this?? but <em>i</em> needed to, so. shrug. doesn't hurt, right?</span>

when you're done, open up a new terminal and run `node -v`, which should return a version number. if that works, run `npm -v`.

if `npm -v` doesn't work and instead you get a message like the following:
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system. For
more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
```
run this command:
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
and try again.

if `npm -v` succeeds, you're all set!

### macOS

on macOS, you can do this pretty easily with [Homebrew](https://brew.sh/), if you have that installed, and the command `brew install node`.

run `npm -v` to verify your installation, and if it works, you're all set!

### Linux

on Linux, Node.js is fairly easy to install with a package manager:
- Ubuntu/Debian: `sudo apt install nodejs npm`
- Arch: `sudo pacman -S nodejs npm`

or you can check [here](https://www.geeksforgeeks.org/node-js/installation-of-node-js-on-linux/#) for alternatives.

run `npm -v` to verify your installation, and if it works, you're all set!

# setting up SvelteKit

open a terminal in the folder you want your project folder to go inside of. don't make the project folder for it yet, this command will do that. replace `PROJECT_NAME` with the name of your project, in double quotes if it contains any spaces.

```bash
npx sv create PROJECT_NAME
```

this will run you through the setup:
1. for template, choose "SvelteKit Minimal". you can choose by pressing enter
2. for type checking, choose "Yes, using TypeScript syntax". <span class="sgos-note"> this isn't required, but it *is* helpful. TypeScript is like JavaScript but with more features that makes things easier</span>
3. for add-ons, you can use the arrow keys to move, space to select, and enter when you're done
	- **sveltekit-adapter** is required for use with Neocities
	- i also recommend [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/). they work passively, so you don't need to know what they do or configure them to benefit from them
		- Prettier formats your files to make them look nicer and more readable
		- ESLint checks for problems in your javascript/typescript code
	- [Tailwind](https://tailwindcss.com/) is also good, but you need to know how to use it. it's a css framework, i'd just go look at its site to learn how it works
4. for sveltekit-adapter, choose static
5. for package manager, chose npm

> [!info] what does sveltekit-adapter do?
> choosing the static adapter is what makes SvelteKit work with Neocities. otherwise, SvelteKit would generate what's called a dynamic web page, which is constructed at runtime, which Neocities doesn't support. Neocities requires static web pages, which are constructed and stored before runtime.

then:
```bash
cd PROJECT_NAME
npm install
npm i -D @sveltejs/adapter-static
```

> [!info] packages looking for funding
> note that you'll sometimes see "n packages are looking for funding", you can ignore that, it's not an error or warning or anything. that's telling you which packages are looking for donations, so you can donate to them if you want!

## make it static

change the highlighted lines in these files to the following:
```js title="svelte.config.js" {11-14}
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: "warn",
		},
	}
};

export default config;
```
```html title="src/app.html" {8}
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="false">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
```

create `src/routes/+layout.ts`:
```ts title="src/routes/+layout.ts"
export const prerender = true;
```

# set up Git

in your project folder, run the following commands:

``` bash
git init # create a git repository
git add . # start tracking all the files
git commit -m "first commit" # commit. you can change the message if you want
```

if you don't want to set up GitHub and Neocities yet, you can stop here. otherwise, create a repository on GitHub, and do the following to add it as a remote and push:

```bash
git remote add origin https://github.com/GITHUB_USERNAME/REPO_NAME.git
git push origin
```

# set up Neocities workflow

make sure you have a Neocities account first!

go to [the settings page](https://neocities.org/settings), press "Manage Site Settings", then go to the API tab. press "Generate API Key" and copy the key. as the site says, **anyone with this key can make changes to your site. keep it secret, keep it safe.**

in GitHub, go to your repository's settings. in the sidebar under "Security", go to "Secrets and variables", then "Actions". in there, press "New repository secret". name it "`NEOCITIES_API_KEY`" and paste your API key into the Secret field. press "Add secret".

create `.github/workflows/neocities.yml`:

```yml title=".github/workflows/neocities.yml"
name: Deploy to neocities

on:
  push:
    branches: ["master"] # make sure this matches your branch name!!!
    # if your branch is called "main", change this to reflect that

concurrency:
  group: deploy-to-neocities
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: lts/*
        cache: npm

    - name: Build Svelte site
      run: |
        npm install
        npm run build

    - name: Deploy to neocities
      uses: bcomnes/deploy-to-neocities@v3
      with:
        api_key: ${{ secrets.NEOCITIES_API_KEY }}
        cleanup: false
        neocities_supporter: true
        preview_before_deploy: false
        dist_dir: build
```

and then commit and push.
```bash
git add .
git commit -m "set up workflow"
git push
```

and then you're all set! that should be it. enjoy :D