[Deploy this repo to Netlify (as Fork)](https://app.netlify.com/start/deploy?repository=https://github.com/erikwoods-netlify-sites/poc)

# TODO for POC

* CMS integration
  * How do changes get deployed? (Nonprod and Prod)
* Forms/Submission
* QLS
* Metrics/Analytics
* LTC
* Wham

# TODO

* CMS integration
  * Can we have it programatically fetch json data based on page name or something? that'd be dope af.
* Allow for better paths to be used when calling SVGs from templates. Right now they're relative.
  * Will this mean moving away from twig? Should I even be using twig anyways? Probably not.
* Determine the best way to make sure that SVGs are compiled before the HTML is compiled.
  * This is especially a problem when first initializing the project (or deploying it). It needs to work smarter.
  * The temporary solution is to run `gulp svg` before the other gulp commands.
* Header links (Phone, Chat, FOC) need to actually rely on invoca and live person. Right now, it's hard-coded garbage.
* Header links (Phone, Chat, FOC) need to be styled lockups with icons (refer to /l/progpi).
* {% if siteType == "rm" %} (Rocket Mortgage), the Spark font stack should be used. Else, it should be the old font stack.
* Set up the real JDP image assets (and the assets for 100 best places, bbb, and EHO).
* Add "We Want Your Feedback" link to footer(?)
* Improve the experience of initializing a new Tostii site by giving it a GUI and additional features.
  * Configurable options
  * Different types of starting points for different types of sites
* When `gulp dev` notices a change for html, it builds all files. Do I really need that? That could become a problem with larger sites.
  * Figure out if I truly need it to do this -- this may change, if I move away from twig.
  * If I don't need it, it would be a nice to have. Until it becomes a huge problem. But it may only really slow down the dev process, not the deploy process.
