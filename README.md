```astro
---
import type { DetailsType } from '@/env'
import LayoutProduct from '@/layouts/LayoutProd.astro'
export const details: DetailsType = {
  title: '',
  description:
    '',
  image: 'elga.webp',
  // url con la direccion del archivo actual en base a astro
}
---

<LayoutProduct title={details.title}>
  <main>
    <h1>{details.title}</h1>
      <img
      src={`/prods/${details.image}`}
      alt={details.title}
      transition:name={`image-${details.image}`}
    />
  </main>
</LayoutProduct>

```
