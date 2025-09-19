---
transition: view-transition
level: 2
---

# Custom Properties {.inline-block.view-transition-title}

The `custom-properties` property is a CSS property that allows you to define custom properties.

### Syntax

```css
custom-properties: --primary-color: #000;
```

### Baseline

<BaselineChecker feature-name="custom-properties" />


---
layout: two-cols
layoutClass: gap-16
---

## Custom Properties {.inline-block.view-transition-title}

Also known as CSS Variables.

###  Usage

```css {*|2|6|*}
:root {
  --primary-color: #000;
}

.container {
  background-color: var(--primary-color);
}
```

<template v-slot:right>
  <div class="bg-red-500 w-full h-full">
    
  </div>
</template>