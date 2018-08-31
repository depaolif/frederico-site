### Frederico De Paoli's Personal Website

### Notes for re-deployment:

1. Run `npm run reploy` to deploy the project to frederico-site
2. Contrary to what you're supposed to do for gh-pages, this 'package.json' needs "https://depaolif.github.io" not "https://depaolif.github.io/frederico-site"
  1. "frederico-de-paoli.com" is already pointing to "depaolif.github.io/frederico-site", so we do not want to add in a page path into "homepage", otherwise it will go to "frederico-de-paoli.com/frederico-site"
3. CNAME should now be building into root path of repo's 'gh-pages' branch because it's included in the `public/` folder of the 'master' branch.
4. "process.env.PUBLIC_URL" must be added to the `path` for every Route as the constructed root URL is different from the local root one