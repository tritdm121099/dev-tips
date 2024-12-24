---
title: Correct way to use when use many SQL parameters query
description: Sql params query
sidebar:
  order: 1
---

## Problem

When I loop to create list parameters for `Insert` SQL, it limit 500 parameters.

```javascript
pg.query(
  `
    INSERT INTO testtable (id, name)
    VALUES ($1, $2), ($3, $4), ...
  `,
  [ 1, "Jack", 2, "Jill", ...]
)
```

## Resolve

In these tips, the number of parameters is minimized, requiring only the column size for insert.

```javascript
pg.query(
  "INSERT INTO testtable (id, name) SELECT * FROM UNNEST ($1::int[], $2::text[])",
  [
      [1, 2, 3],
      ["Jack", "John", "Jill"],
  ]
)
```
