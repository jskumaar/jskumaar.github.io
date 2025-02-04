---
layout: page
permalink: /publications/
title: Publications
description: For a detailed list of publications, check my <a href="https://scholar.google.com/citations?user=8H5KVN8AAAAJ&hl=en"> google scholar page </a>.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
