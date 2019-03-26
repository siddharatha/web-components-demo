# Product Detail Page

## Target SE developer

- Top Section (Business Categories)
- Container
  - Product Image
  - Product Description
  - Specifications
- Similar Products

## Target Customer

- website
- header
- content
  - left pane
  - center pane
  - right pane
    - First section
    - second section (SE Product selector)
- footer

## How will the customer implement

```html
<script type="module">
  import "https://unpckg.com/@sewebcomponents/collection/product-selector-0.2";
</script>

<div class="second section">
  <se-product-selector id="seselector">
    <se-title>Rexel SE Product selector</se-title>
  </se-product-selector>
</div>
```

## How can i control it

```html
<script>
  document.querySelector("se-product-selector").calculateAgain();
</script>
```
