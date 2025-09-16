---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: CSS is FUN
info: |
  ## CSS is fun in 2025
  
  By [Sandeep Ramgolam](https://github.com/MrSunshyne)
  Blog at [sandeep.ramgolam.com](https://sandeep.ramgolam.com)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
seoMeta:
  # By default, Slidev will use ./og-image.png if it exists,
  # or generate one from the first slide if not found.
  ogImage: auto
  # ogImage: https://cover.sli.dev
---

# CSS is awesome

An overview of the latest features of CSS you might not know about.

A presentation by [Sandeep Ramgolam](https://github.com/MrSunshyne)

<div class="flex justify-center text-xs">
  <ul class="flex gap-4 list-style-none">
    <li class="list-style-none">
      <a href="https://github.com/MrSunshyne" target="_blank" class="slidev-icon-btn">
        <carbon:logo-github />
      </a>
      <span>MrSunshyne</span>
    </li>
    <li class="list-style-none">
      <a href="https://sandeep.ramgolam.com" target="_blank" class="slidev-icon-btn">
        <carbon:logo-linkedin />
      </a>
      <span>Sandeep Ramgolam</span>
    </li>
  </ul>
</div>


<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
src: ./pages/intro/speaker-introduction.md
hide: false
---

---
src: ./pages/intro/speaker-find-me.md
hide: false
---

---
src: ./pages/content/plan.md
hide: false
---

---
src: ./pages/reference/imported-slides.md
hide: false
---

---
src: ./pages/reference/slidev-example-reference.md
hide: false
---