---
meta_description: "Image-charts API offers several types of charts such as bar charts. This documentation shows you how to use the API url parameters to generate a chart."
---
# Bar Charts

<!-- :wrench: we are currently implementing this feature. -->

This section describes the various types of bar charts that you can create using the Image Chart API.

## Overview

There are a variety of bar charts that you can create, including vertical, horizontal, grouped, stacked versions of each.

Bar charts are good for side-by-side comparison and spotting trends in a small number of discrete data points. They're a good alternative to line charts when you have only a few data points in a series.

There are three general ways to show multiple series in a bar chart:

- **Grouped vertically** `bvg`

[![chart](https://image-charts.com/chart?chbh=a&chbr=10&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C%2C10%7CN%2C000000%2C1%2C%2C10%7CN%2C000000%2C2%2C%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvg&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=documentation&ichm=3fa8d7369abab97a6ee3662823b428cbc67e6be9f45c96cbafff7e8b66bfbc09)](https://editor.image-charts.com/chart?chbh=a&chbr=10&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C%2C10%7CN%2C000000%2C1%2C%2C10%7CN%2C000000%2C2%2C%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvg&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=documentation&ichm=3fa8d7369abab97a6ee3662823b428cbc67e6be9f45c96cbafff7e8b66bfbc09)

```
cht=bvg
chd=t:5,5,5|10,10,10|15,15,15
```

- **Grouped horizontally** `bhg`

[![chart](https://image-charts.com/chart?chbh=a&chbr=5&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C%2C10%7CN%2C000000%2C1%2C%2C10%7CN%2C000000%2C2%2C%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bhg&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=documentation&ichm=0ba28a3357b017919eef59ebe54954c063c095bbed34e781f7181c84f508aa90)](https://editor.image-charts.com/chart?chbh=a&chbr=5&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C%2C10%7CN%2C000000%2C1%2C%2C10%7CN%2C000000%2C2%2C%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bhg&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=documentation&ichm=0ba28a3357b017919eef59ebe54954c063c095bbed34e781f7181c84f508aa90)

```
cht=bhg
chd=t:5,5,5|10,10,10|15,15,15
```

- **Stacked vertically** `bvs`

[![chart](https://image-charts.com/chart?chbh=20&chbr=5&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C0%2C10%7CN%2C000000%2C0%2C1%2C10%7CN%2C000000%2C0%2C2%2C10%7CN%2C000000%2C1%2C0%2C10%7CN%2C000000%2C1%2C1%2C10%7CN%2C000000%2C1%2C2%2C10%7CN%2C000000%2C2%2C0%2C10%7CN%2C000000%2C2%2C1%2C10%7CN%2C000000%2C2%2C2%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvs&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=documentation&icretina=1&ichm=c58c2d9996f0a810391cce72161f07fc4d3eaed000dc6d7a5f2e71cf6ff17d79)](https://editor.image-charts.com/chart?chbh=20&chbr=5&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C0%2C10%7CN%2C000000%2C0%2C1%2C10%7CN%2C000000%2C0%2C2%2C10%7CN%2C000000%2C1%2C0%2C10%7CN%2C000000%2C1%2C1%2C10%7CN%2C000000%2C1%2C2%2C10%7CN%2C000000%2C2%2C0%2C10%7CN%2C000000%2C2%2C1%2C10%7CN%2C000000%2C2%2C2%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvs&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=documentation&icretina=1&ichm=c58c2d9996f0a810391cce72161f07fc4d3eaed000dc6d7a5f2e71cf6ff17d79)

```
cht=bvs
chd=t:5,5,5|10,10,10|15,15,15
```

- **Stacked horizontally** `bhs`

[![chart](https://image-charts.com/chart?chbh=20&chbr=4&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C0%2C10%7CN%2C000000%2C0%2C1%2C10%7CN%2C000000%2C0%2C2%2C10%7CN%2C000000%2C1%2C0%2C10%7CN%2C000000%2C1%2C1%2C10%7CN%2C000000%2C1%2C2%2C10%7CN%2C000000%2C2%2C0%2C10%7CN%2C000000%2C2%2C1%2C10%7CN%2C000000%2C2%2C2%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bhs&chxr=1%2C0%2C50&chxt=y%2Cx&icac=documentation&icretina=1&ichm=1f9d46796b933431b670deaf336e859aa5b44e2db317d54b992fe274bb71d479)](https://editor.image-charts.com/chart?chbh=20&chbr=4&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C0%2C10%7CN%2C000000%2C0%2C1%2C10%7CN%2C000000%2C0%2C2%2C10%7CN%2C000000%2C1%2C0%2C10%7CN%2C000000%2C1%2C1%2C10%7CN%2C000000%2C1%2C2%2C10%7CN%2C000000%2C2%2C0%2C10%7CN%2C000000%2C2%2C1%2C10%7CN%2C000000%2C2%2C2%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bhs&chxr=1%2C0%2C50&chxt=y%2Cx&icac=documentation&icretina=1&ichm=1f9d46796b933431b670deaf336e859aa5b44e2db317d54b992fe274bb71d479)

```
cht=bhs
chd=t:5,5,5|10,10,10|15,15,15
```

!!! missing
    Google Image Charts supported the `bvo` chart type in which vertical bars were stacked in front of one another. This type of chart is not planned to be supported and will automatically falls back to the **`bvs`** type.

## Rounded Bar

It's always nice to display bar charts with rounded corner. Specify a corner radius (in pixel) with the `chbr` query parameter.


```
chbr=10
```

[![rounded bar chart](https://image-charts.com/chart?chbr=10&chd=t%3A10%2C40%2C60%2C80%2C30%2C20&chf=b0%2Clg%2C0%2Cfdb45c%2C0%2Ced7e30%2C1&chs=700x125&cht=bvs&chxt=y%2Cx&icac=documentation&icretina=1&ichm=d5be2514b0279bb7e108ddb6610aacfa9effddde28a08d6940ea3b0a6bdf2fe9)](https://editor.image-charts.com/chart?chbr=10&chd=t%3A10%2C40%2C60%2C80%2C30%2C20&chf=b0%2Clg%2C0%2Cfdb45c%2C0%2Ced7e30%2C1&chs=700x125&cht=bvs&chxt=y%2Cx&icac=documentation&icretina=1&ichm=d5be2514b0279bb7e108ddb6610aacfa9effddde28a08d6940ea3b0a6bdf2fe9)

```
chbr=20
```

[![chart](https://image-charts.com/chart?chbh=20&chbr=20&chco=CFECF7%2C27c9c2&chd=a%3A10000%2C50000%2C60000%2C80000%2C40000%7C50000%2C60000%2C100000%2C40000%2C20000&chdl=N%7CN-1&chdlp=r&chl=10%7C50%7C60%7C80%7C40%7C50%7C60%7C100%7C40%7C20&chs=700x300&cht=bvs&chtt=Revenue%20per%20month&chxl=0%3A%7CJan%7CFev%7CMar%7CAvr%7CMay&chxs=1N%2AcUSD0sz%2A%2C000000%2C14&chxt=x%2Cy&icac=documentation&iclocale=en&icretina=1&ichm=1fe61ad26d1d022f51772e8c806986161c8ea537b5dcd9a3f1346be6edf5a86d)](https://editor.image-charts.com/chart?chbh=20&chbr=20&chco=CFECF7%2C27c9c2&chd=a%3A10000%2C50000%2C60000%2C80000%2C40000%7C50000%2C60000%2C100000%2C40000%2C20000&chdl=N%7CN-1&chdlp=r&chl=10%7C50%7C60%7C80%7C40%7C50%7C60%7C100%7C40%7C20&chs=700x300&cht=bvs&chtt=Revenue%20per%20month&chxl=0%3A%7CJan%7CFev%7CMar%7CAvr%7CMay&chxs=1N%2AcUSD0sz%2A%2C000000%2C14&chxt=x%2Cy&icac=documentation&iclocale=en&icretina=1&ichm=1fe61ad26d1d022f51772e8c806986161c8ea537b5dcd9a3f1346be6edf5a86d)

## Series Colors

!!! tip
    You can specify the colors of individual bars, individual series, or multiple series using the chco parameter. If you don't specify a different color for each series, all series will have the same color.

#### Syntax

```
chco=<series_1_color>, ..., <series_n_color>
    or
chco=<series_1_bar_1>|<series_1_bar_2>|...|<series_1_bar_n>,<series_2>,...,<series_n>
```

- `<color>`: An [RRGGBB\[AA\] format hexadecimal number](/reference/color-format) to apply to a series or individual bar. To apply the color to the whole series, it should be comma-delimited. To apply the color to an individual bar, it should be pipe-delimited. You can mix these two formats. See the table below for examples. Whenever you have fewer color values than data points or series, the colors will cycle through the list again, starting from the first color in that group.

#### Examples

One color per series, with comma-delimited colors. 

[![chart](https://image-charts.com/chart?chbh=20&chco=CFECF7%2C27c9c2&chd=a%3A10000%2C50000%2C60000%2C80000%2C40000%7C50000%2C60000%2C100000%2C40000%2C20000&chdl=N%7CN-1&chdlp=r&chl=10%7C50%7C60%7C80%7C40%7C50%7C60%7C100%7C40%7C20&chs=700x300&cht=bvs&chtt=Revenue%20per%20month&chxl=0%3A%7CJan%7CFev%7CMar%7CAvr%7CMay&chxs=1N%2AcUSD0sz%2A%2C000000%2C14&chxt=x%2Cy&icac=documentation&ichm=0d7d8ee03dc72403c3a1884405869e17a26e6df6f76f1558518db58fc5ef39f4)](https://editor.image-charts.com/chart?chbh=20&chco=CFECF7%2C27c9c2&chd=a%3A10000%2C50000%2C60000%2C80000%2C40000%7C50000%2C60000%2C100000%2C40000%2C20000&chdl=N%7CN-1&chdlp=r&chl=10%7C50%7C60%7C80%7C40%7C50%7C60%7C100%7C40%7C20&chs=700x300&cht=bvs&chtt=Revenue%20per%20month&chxl=0%3A%7CJan%7CFev%7CMar%7CAvr%7CMay&chxs=1N%2AcUSD0sz%2A%2C000000%2C14&chxt=x%2Cy&icac=documentation&ichm=0d7d8ee03dc72403c3a1884405869e17a26e6df6f76f1558518db58fc5ef39f4)

```
cht=bvs
chco=CFECF7,27c9c2
```

One color per value, with pipe-delimited colors.  

[![chart](https://image-charts.com/chart?chbh=20&chco=FFC6A5%7CFFFF42%7CDEF3BD%7C00A5C6%7CDEBDDE&chd=a%3A10%2C50%2C60%2C80%2C40&chs=700x125&cht=bvs&chxt=y&icac=documentation&icretina=1&ichm=60e5de46e2dca57e7bd3dd9b3cab089cdd59cdf6c4085405d12d2774bd32e0b8)](https://editor.image-charts.com/?tab_viewer=image&tab_editor=form#https:/image-charts.com/chart?chbh=20&chco=FFC6A5%7CFFFF42%7CDEF3BD%7C00A5C6%7CDEBDDE&chd=a%3A10%2C50%2C60%2C80%2C40&chs=700x125&cht=bvs&chxt=y&icac=documentation&icretina=1&ichm=60e5de46e2dca57e7bd3dd9b3cab089cdd59cdf6c4085405d12d2774bd32e0b8)

```
cht=bvs
chco=FFC6A5|FFFF42|DEF3BD|00A5C6|DEBDDE
```

A combination of series colors and individual bar colors.

This example shows a bar chart with two series. The first series all black (000000,) and comma-delimited. The second series is pipe-delimited, and assigns a different color for each point (FF0000|00FF00|0000FF).

[![chart](https://image-charts.com/chart?chbr=3&chco=000000%2C8AC1E7%7C7f3f98%7Cfdb45c&chd=s%3AFOE%2Celo&chs=700x125&cht=bvs&chxl=0%3A%7CDec%7CNov%7COct%7C1%3A%7C20K%7C60K%7C100K%7C&chxt=x%2Cy&icac=documentation&icretina=1&ichm=9bf51b87167739834e6a252bbd7c36173b9ebd020b0d0e119f14298235ad4d9f)](https://editor.image-charts.com/chart?chbr=3&chco=000000%2C8AC1E7%7C7f3f98%7Cfdb45c&chd=s%3AFOE%2Celo&chs=700x125&cht=bvs&chxl=0%3A%7CDec%7CNov%7COct%7C1%3A%7C20K%7C60K%7C100K%7C&chxt=x%2Cy&icac=documentation&icretina=1&ichm=9bf51b87167739834e6a252bbd7c36173b9ebd020b0d0e119f14298235ad4d9f)

```
chco=000000,8AC1E7|7f3f98|fdb45c
chd=s:FOE,elo
```


This example demonstrates setting different colors for every bar in a multi-series chart.

[![chart](https://image-charts.com/chart?chbr=3&chco=000000%2C8AC1E7%7C7f3f98%7Cfdb45c&chd=s%3AFOE%2Celo&chs=700x125&cht=bvs&chxl=0%3A%7CDec%7CNov%7COct%7C1%3A%7C20K%7C60K%7C100K%7C&chxt=x%2Cy&icac=documentation&icretina=1&ichm=9bf51b87167739834e6a252bbd7c36173b9ebd020b0d0e119f14298235ad4d9f)](https://editor.image-charts.com/chart?chbr=3&chco=000000%2C8AC1E7%7C7f3f98%7Cfdb45c&chd=s%3AFOE%2Celo&chs=700x125&cht=bvs&chxl=0%3A%7CDec%7CNov%7COct%7C1%3A%7C20K%7C60K%7C100K%7C&chxt=x%2Cy&icac=documentation&icretina=1&ichm=9bf51b87167739834e6a252bbd7c36173b9ebd020b0d0e119f14298235ad4d9f)

You can also specify fills to color a series with solid or gradient colors. [Solid fills](/reference/background-fill/#solid-fills) look the same as using chco, but [gradients](/reference/background-fill/#gradient-fills) (`chf=b<index>,lg,...`) create unique effects.

Gradient fills:

[![chart](https://image-charts.com/chart?chbr=5&chd=t%3A10%2C40%2C60%2C80%2C30%2C20&chf=b0%2Clg%2C0%2Cfdb45c%2C0%2Ced7e30%2C1&chs=700x125&cht=bvs&chxt=y%2Cx&icac=documentation&icretina=1&ichm=04fe1b59e409980fc40002a7fd3cfef4c1ff19b0b2b82f91d1fd17a49cd2ceca)](https://editor.image-charts.com/chart?chbr=5&chd=t%3A10%2C40%2C60%2C80%2C30%2C20&chf=b0%2Clg%2C0%2Cfdb45c%2C0%2Ced7e30%2C1&chs=700x125&cht=bvs&chxt=y%2Cx&icac=documentation&icretina=1&ichm=04fe1b59e409980fc40002a7fd3cfef4c1ff19b0b2b82f91d1fd17a49cd2ceca)

```
chd=t:10,40,60,80,30,20
chf=b0,lg,0,fdb45c,0,ed7e30,1
```

Solid fills:

[![chart](https://image-charts.com/chart?chbh=15%2C5%2C15&chd=t%3A40%2C40%2C60%2C80%7C30%2C50%2C55%2C86&chf=b0%2Cls%2C0%2C72BD60%2C.3%2C517D47%2C.1%7Cb1%2Cls%2C0%2C2F5627%2C.3%2CE67233%2C.1&chs=700x125&cht=bvg&icac=documentation&icretina=1&ichm=38dc4be4bccecc24303e0ec1340f3697c8d79701cc3378f88032953ec5199ab7)](https://editor.image-charts.com/?tab_viewer=image&tab_editor=form#https:/image-charts.com/chart?chbh=15%2C5%2C15&chd=t%3A40%2C40%2C60%2C80%7C30%2C50%2C55%2C86&chf=b0%2Cls%2C0%2C72BD60%2C.3%2C517D47%2C.1%7Cb1%2Cls%2C0%2C2F5627%2C.3%2CE67233%2C.1&chs=700x125&cht=bvg&icac=documentation&icretina=1&ichm=38dc4be4bccecc24303e0ec1340f3697c8d79701cc3378f88032953ec5199ab7)

```
chd=t:40,40,60,80|30,50,55,86
chf=b0,ls,0,72BD60,.3,517D47,.1|b1,ls,0,2F5627,.3,E67233,.1
```

There are a variety of bar charts that you can create, including vertical, horizontal, grouped, stacked versions of each.

