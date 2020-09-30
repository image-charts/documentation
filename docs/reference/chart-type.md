---
meta_description: "Image-charts API propose to customize your graphics as for example with chart type. This documentation shows you how to use the API url parameters to generate a chart."
---
Specify the chart type using the `cht` parameter. See the individual chart documentation pages for a list of available chart types.

#### Syntax


```
cht=<type>[:nda]
```

- **`<type>`** one of the chart type values. Full list of supported values [are available in the chart editor](https://editor.image-charts.com).
- **`:nda`** *[Optional, line charts only]* You can add `:nda` after the chart type in line charts to hide the default axes.


#### Example

A vertical bar chart


![chart](https://image-charts.com/chart?cht=bvs&chd=s:theresadifferencebetweenknowingthepathandwalkingthepath&chs=700x200&chxt=y&chf=b0,lg,90,4CA4F5,0.1,C371D3,0.8,EA469E,1)

```
cht=bvs
```


A pie chart:


![chart](https://image-charts.com/chart?cht=p&chd=t:80,40,10&chs=700x200&chl=Awesome%21%21|Great|Not+bad)

```
cht=p
```

A line chart without default axes:


![chart](https://image-charts.com/chart?cht=ls&chd=s:theresadifferencebetweenknowingthepathandwalkingthepath&chs=700x200&chf=b0,lg,90,03a9f4,0,3f51b5,1)

```
cht=ls
```
