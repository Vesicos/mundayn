# Architecture rules
- Define public-page metadata in a shared route wrapper using react-helmet-async, with one HelmetProvider at the app root; this keeps page content untouched and makes canonical ownership explicit.
- Keep canonical links out of the static HTML when route-level Helmet owns them, preventing duplicate homepage canonicals on other pages.