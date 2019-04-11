[![Netlify Status](https://api.netlify.com/api/v1/badges/07143b67-8878-411e-899c-7b53d88caea0/deploy-status)](https://app.netlify.com/sites/eatsometweets/deploys)

[Deploy this repo to Netlify (as Fork)](https://app.netlify.com/start/deploy?repository=https://github.com/erikwoods-netlify-sites/poc)

# Must have for POC:

* LTC
  * Is this just part of the metrics story? Figure out how this is sent downstream today (in Lander).
* Metrics/Analytics - the full current package used by Lander today.
  * Should it be added via [Snippet Injection](https://www.netlify.com/docs/inject-analytics-snippets/)?
    * If so, I'll need to set up or utilize an existing environment variable to keep prod scripts separate from nonprod scripts.
* QLS
  * Recognize parameter and change cms mock data?
* Introduce a `wham`-inspired flavor (CSS, breh).

# Nice to have for POC:

* Slide deck for presentation.
* Live demo driven by another TM.
* Another `wham`-inspired flavor with some custom 3D art? Maybe try to do it live or something crazy?
* Forms/submission
  * Serialize form input and format to match LOS mock data (if necessary).
  * Make sure that it works locally.
    * This may mean defining a [build environment variable](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables), but...
    * It could possibly involve a custom [Netlify form submission](https://www.netlify.com/docs/form-handling/#ajax-form-submissions).

# Questions:

* Do we want to add the `We Want Your Feedback` link to the footer?
* Should we find a way to easily distribute some of the CSS amongst all Grover sites?
  * If so, that would likely mean taking macros and distributing them as real web components, opening up a whole new set of problems to solve (whether worthwhile or not is to be determined).
  * That'd be some hot shit, but is it really necessary? At that point, why not have Spark distribute that stuff?

# Must have for first live date:

* Styling
  * QL and RM use different typefaces. The font stack should be configurable somehow (currently set in twig layout).
  * Set up the real JDP image assets (and the assets for 100 best places, bbb, and EHO).
* General
  * Extract some of the stuff that every twig layout will need so that every new twig layout will have those things, because new layouts shouldn't mean new doctype, for example
* Forms/submission
  * Validation needs some love.
  * Phone number-type fields may need to have formatting stripped before submission.
  * Do we need to really submit to LOS in local environment? Probably.
  * Do we even want to store submissions on Netlify? We don't really need to.
* CMS integration
  * How do content changes get deployed to nonprod/prod? It shouldn't be too hard - just need to trigger a deploy.
    * [Webhooks?](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables)
  * Can/should Grover programmatically fetch json data based on page name or something?
* QLS
  * It must exist, and persist!
  * Could impact the fetching of json data from the CMS. Somehow. I think? May need to discuss with external TMs.
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
* Macros
  * edit: button.* - Needs "disabled" attribute as param (maybe actually just a param for any attributes?)
  * new: masthead.*
  * new: hboard.*
  * new: asset.image?
  * new: asset.video?
* Allow for better paths to be used when calling SVGs from templates. Right now they're relative.
  * Will this mean moving away from twig? Should I even be using twig anyways? So far, it has been a very useful tool, even if it does feel weird for a JAMstack site.
* General
  * GUI-based Grover tools for creation of pages, editing of content and site properties, as well as other improvements for DX and workflow (CI/CD).
  * Different starting points for different types of sites.
