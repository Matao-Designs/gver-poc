[![Netlify Status](https://api.netlify.com/api/v1/badges/07143b67-8878-411e-899c-7b53d88caea0/deploy-status)](https://app.netlify.com/sites/eatsometweets/deploys)

# Preparation
 * Install [node (with npm)](https://nodejs.org/en/download/).
 * Install and enable [EditorConfig](https://editorconfig.org).

# Initialization
Execute `npm run init`. All node packages will be installed so that development may begin. This should typically only need to be done one time unless there are additional node packages you need to install.

# Development
 1. Execute `gulp dev`.
 1. As it builds, wait for it to open the project in your default browser.
 1. Start making changes to the project. Saved changes will automatically build and refresh all browsers accessing the project (using [BrowserSync](https://browsersync.io/)).

# Help
Execute `gulp` or `gulp help`.

![](https://i.imgur.com/JcjunWH.png)

# Nice to have for POC:

* Metrics/Analytics - the full current package used by Lander today.
  * Should it be added via [Snippet Injection](https://www.netlify.com/docs/inject-analytics-snippets/)?
    * If so, I'll need to set up or utilize an existing environment variable to keep prod scripts separate from nonprod scripts.
* Forms/submission
  * Serialize form input and format to match LOS mock data (if necessary).
  * Make sure that it works locally.
    * This may mean defining a [build environment variable](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables), but...
    * It could possibly involve a custom [Netlify form submission](https://www.netlify.com/docs/form-handling/#ajax-form-submissions).

# Questions:

* Do we want to add the `We Want Your Feedback` link to the footer?
* How should we handle page-specific styles? Maybe something that can be set on the page and injected into the head?

# Must have for first live date:

* Styling
  * Update to latest version of Spark.
  * QL and RM use different typefaces. The font stack should be configurable somehow (currently set in twig layout).
  * Set up the real JDP image assets (and the assets for 100 best places, bbb, and EHO).
* General
  * Extract some of the stuff that every twig layout will need so that every new twig layout will have those things, because new layouts shouldn't mean new doctype, for example
* Forms/submission
  * Validation needs some love.
  * Phone number-type fields may need to have formatting stripped before submission.
* CMS integration
  * How do content changes get deployed to nonprod/prod? It shouldn't be too hard - just need to trigger a deploy.
    * [Webhooks?](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables)
  * How do we do QLS-triggered content and pre-build those pages?
* LTC
  * It must exist, and persist!
* QLS
  * It must exist, and persist!
* Macros
  * new: link.* (from Spark)
  * new: link.lockup
    * This is for the special Lander header links (Phone, Chat, FOC link)
      * Will it work with existing customizations to the masthead?
      * Needs to be styled lockups with icons (refer to /l/progpi).
      * Needs to integrate with invoca and live person. (Right now, it's hard-coded garbage.)
  * new: masthead.gver
    * To accommodate for existing customizations to the masthead.
    * It should use the other new macros where appropriate. Nested macros ftw! I hope.
  * new: footer.gver - To accommodate for existing customizations to the footer (hides the big bulky links section that we typically don't need on an LP).
    * It should use the other new macros where appropriate. Nested macros ftw! I hope.
  * new: svg.base - For basic inline svg asset needs.
  * new: gver.panels (still thinking about this as I prioritize work)
    * Allow the next/prev buttons/links to be omitted from a panel, if certain conditions are met (will be nice for auto-advancing wham-style radio-based icon panels).
* Grover panels
  * It doesn't need to be jQuery - and I'm sure we'll need to have this hook in to validation. It was just a quick and dirty implementation.

# Nice to have (some day):

* Forms/submission
  * What if we want to build the LOS object in different ways (without form input, or something)? Will I need to refer to [Netlify docs on AJAX form submission](https://www.netlify.com/docs/form-handling/#ajax-form-submissions) for guidance?
* Metrics/Analytics
  * We should determine the minimum required, in the name of speed and simplification.
* CI/CD:
  * Determine the best way to make sure that SVGs are compiled before the HTML is compiled.
    * This is especially a problem when first setting up a Grover site locally (or when deploying). It needs to work smarter.
    * The temporary solution is to run `gulp svg` before the other gulp commands. I hate this. :(
* Macros (follow Spark naming closely)
  * new: masthead.*
  * new: hboard.*
  * new: asset.image?
  * new: asset.video?
* Allow for better paths to be used when calling SVGs from templates. Right now they're relative.
  * Will this mean moving away from twig? Should I even be using twig anyways? So far, it has been a very useful tool, even if it does feel weird for a JAMstack site.
