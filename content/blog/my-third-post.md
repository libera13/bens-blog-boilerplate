---
title: Typescripts features to check
date: 2020-05-24T21:50:21
excerpt: Hello from number 3!
---


Parameters `<type>` 

How this is working? 


```
import {MikroORM} from "@mikro-orm/core"
export default  {
    entities: [Post],
    dbName: 'versatile',
    type : 'postgresql',
    debug: !PROD,
    user: 'postgres',
    password: 'postgres'
} as Parameters<typeof MikroORM.init>[0];
```

[typescript docs](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)


