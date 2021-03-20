---
title: Cool, maybe useful functions
date: 2021-03-20T21:50:21
excerpt: ;)
---

####From libraries:

[date-fns](https://date-fns.org/): 

* [formatRelative](https://date-fns.org/v2.19.0/docs/formatRelative)

```
formatRelative(subDays(new Date(), 3), new Date())
//=> "last Friday at 7:26 p.m."
```
| Distance to the base date | Result                  |
|---------------------------|-------------------------|
| Previous 6 days           | last Sunday at 04:30 AM |
| Last day                  | yesterday at 04:30 AM   |
| Same day                  | today at 04:30 AM       |
| Next day                  | tomorrow at 04:30 AM    |
| Next 6 days               | Sunday at 04:30 AM      |
| Other                     | 12/31/2017              |
