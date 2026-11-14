---
title: Chart Type
description: "Learn how to customize your chart type, from bar chart to qr code."
sidebar_position: 2
---

# Chart Type

Specify the chart type using the `cht` parameter. See the individual chart documentation pages for a list of available chart types.

#### Syntax


```
cht=<type>[:nda]
```

- **`<type>`** one of the chart type values. Full list of supported values [are available in the chart editor](https://editor.image-charts.com).
- **`:nda`** *[Optional, line charts only]* You can add `:nda` after the chart type in line charts to hide the default axes.


#### Example

A vertical bar chart


![chart](https://image-charts.com/chart?cht=bvs&chd=s:theresadifferencebetweenknowingthepathandwalkingthepath&chs=700x200&chxt=y&chf=b0,lg,90,4CA4F5,0.1,C371D3,0.8,EA469E,1&icac=documentation&ichm=62929ea4aea655074674db2b80c8cb3090a86e93c525297e5eae0169406f1700)

```
cht=bvs
```


A pie chart:


![chart](https://image-charts.com/chart?cht=p&chd=t:80,40,10&chs=700x200&chl=Awesome%21%21|Great|Not+bad&icac=documentation&ichm=b09b1576a9050c2981921c60e092914c7546e000fa91b7265f731a886db68f13)

```
cht=p
```

A line chart without default axes:


![chart](https://image-charts.com/chart?cht=ls&chd=s:theresadifferencebetweenknowingthepathandwalkingthepath&chs=700x200&chf=b0,lg,90,03a9f4,0,3f51b5,1&icac=documentation&ichm=3f89e06f3972799be5eeef20cacd7f28b361a7c5900e54bace72017609b69581)

```
cht=ls
```
