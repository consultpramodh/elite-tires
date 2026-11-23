# Elite Tires & Auto Services

Static HTML and CSS. The complete deployable site is in `dist/`.
Serve locally with `python3 -m http.server 8000 --directory dist`.

## Update business information

- **Hours:** Once confirmed, add the weekly schedule by the location, in the footer and near the header. Keep the visible schedule and the JSON-LD `openingHoursSpecification` in sync. If implementing open/closed status, use America/Toronto and account for holiday overrides.
- **Reviews:** Add only approved, verbatim quotes with a first name or initial and month/year. Use a confirmed direct Google reviews link. Update the displayed rating and count only when verified.
- **Seasonal banner:** Add `hidden` to the `section#seasonal` element in `dist/index.html` to switch it off. Remove the attribute to show it.
- **Quote requests:** The quote section currently links to the shop phone. Add a form only after a submission endpoint and recipient are confirmed. Use a standard HTML POST, a honeypot, accessible errors, and a success screen after successful delivery. Update the privacy page before collecting data.

## Deploy

1. Publish the contents of `dist/` at the host root. No build command is needed. For ChatGPT Sites, `.openai/hosting.json` declares `dist` as the publish folder.
2. Configure the host to serve `404.html` with HTTP status 404 for unknown paths if it does not do so automatically.
3. If moving to a new domain, update the absolute social image URLs, structured data URL, robots and sitemap URLs. Add a canonical page URL and Open Graph page URL once the final domain is confirmed.
4. Verify phone links, Maps links, narrow layouts, light and dark colours, and the 404 status on the deployed URL.
