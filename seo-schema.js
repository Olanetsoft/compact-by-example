// Enrich the JSON-LD structured data that Mintlify auto-generates.
// Mintlify already emits Organization, WebSite, WebPage, BreadcrumbList, and
// TechArticle nodes per page; this adds the properties it does not populate:
// sameAs profile links on the Organization node and an author on the page's
// TechArticle node. Nodes reuse Mintlify's exact @id values so structured-data
// consumers merge them into the existing graph.
(function () {
  var MARKER_ID = "cbe-schema-enrichment";
  if (document.getElementById(MARKER_ID)) return;

  var origin = "https://compact-by-example.org";
  var path = window.location.pathname.replace(/\/$/, "");
  var pageUrl = origin + path;

  var graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": origin + "/#organization",
        "name": "Compact by Example",
        "url": origin,
        "sameAs": ["https://github.com/Olanetsoft/compact-by-example"]
      },
      {
        "@type": ["Article", "TechArticle"],
        "@id": pageUrl + "#article",
        "author": {
          "@type": "Person",
          "name": "Idris Olubisi",
          "url": "https://github.com/Olanetsoft"
        },
        "inLanguage": "en",
        "isAccessibleForFree": true
      }
    ]
  };

  var script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = MARKER_ID;
  script.textContent = JSON.stringify(graph);
  document.head.appendChild(script);
})();
