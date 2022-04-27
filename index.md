---
title: Lastest Post
---

{%- if site.posts.size > 0 -%}
  <h2 class="post-list-heading">{{ page.title }}</h2>
  {% assign post = site.posts | first %}
  {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
  <span class="post-meta">{{ post.date | date: date_format }}</span>
  <a class="post-link" href="{{ post.url | relative_url }}">
    {{ post.title | escape }}
  </a>
  {{ post.content }}
{% endif %}


