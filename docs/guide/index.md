# ð¨ VRuse æ¯ä»ä¹?

ä¸æ¬¾åè½åãä¸å¡åçç°ä»£åå¿«éå¼å hook ä»åº

# ä»ç»


VRuse æ¯ä¸æ¬¾åºäº Vue [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) å React [Composition API](https://reactjs.org/) ç hook ä»åº. 
å¨ä½¿ç¨ä¹åï¼ä½ éè¦å¯¹ Vue [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) æè React [Composition API](https://reactjs.org/) çåºæ¬ä½¿ç¨æ¹å¼æä¸å®çäºè§£. 

## å®è£

å¦æä½ æ¯ Vue é¡¹ç®ï¼é£ä¹æ§è¡å¦ä¸æä½ï¼
```vue
npm i @vruse/vue
```

å¦æä½ æ¯ React é¡¹ç®ï¼é£ä¹æ§è¡å¦ä¸æä½ï¼
```react
npm i @vruse/react
```

> From v6.0, vruse requires `vue` >= v3.2 or `@vue/composition-api` >= v1.1 <br/> From v6.0, vruse requires `react` >= v16.8

###### Demos

- Vite + Vue 3
- Webpack + Vue 3
- vite + Reat 18
- Creat React App + React 18

## å¿«éå¼å§

> ð© Vue

ä» `@vueuse/vue` ä¸­å¯¼å¥æéçå½æ° 

```vue
<script setup lang="ts">
import { ref } from 'vue-demi'
import { usePick } from './index'

const r = ref<number>(0)
const p = usePick([1, 2, 3, 6, 7, 8, 9, 10], 5, (v) => {
  r.value = v
})

p.run()
</script>

<template>
  <div>{{ p.pickedList }}</div>
  <div>{{ r }}</div>
</template>


```

> ð© React

ä» `@vueuse/react` ä¸­å¯¼å¥æéçå½æ° 

```tsx
import { usePick } from '@vruse/react'
import React, { useEffect, useState } from 'react'

function App() {
  const [r, setR] = useState(0)

  const { run, pickedList } = usePick(
    [1, 2, 3, 6, 7, 8, 9, 10],
    {
      pickCount: 5,
    },
    (v) => {
      setR(v)
    },
  )

  useEffect(() => {
    run()
  }, [])

  return (
    <>
      <div>{pickedList}</div>
      <div>{r}</div>
    </>
  )
}
export default App
```

## æµè§å¨æ¯æ

ç°ä»£æµè§å¨ä»¥åIE10+


