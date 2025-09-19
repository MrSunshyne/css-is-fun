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

```css
:root {
  --primary-color: #000;
}
```

```css
.container {
  background-color: var(--primary-color);
}
```