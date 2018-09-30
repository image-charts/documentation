# Bar Charts

<!-- :wrench: we are currently implementing this feature. -->

This section describes the various types of bar charts that you can create using the Image Chart API.

## Overview

There are a variety of bar charts that you can create, including vertical, horizontal, grouped, stacked versions of each.

Bar charts are good for side-by-side comparison and spotting trends in a small number of discrete data points. They're a good alternative to line charts when you have only a few data points in a series.

There are three general ways to show multiple series in a bar chart:

- **Grouped vertically** `bvg`

![chart](https://image-charts.com/chart?cht=bvg&chs=700x100&chd=t:5,5,5|10,10,10|15,15,15&chds=0,120&chco=4d89f9,c6d9fd,00B88A&chbh=a&chxs=0,000000,0,0,_&chxt=y&chm=N,000000,0,,10|N,000000,1,,10|N,000000,2,,10)
```
cht=bvg
chd=t:5,5,5|10,10,10|15,15,15
```

- **Grouped horizontally** `bhg`

![chart](https://image-charts.com/chart?cht=bhg&chs=700x100&chd=t:5,5,5|10,10,10|15,15,15&chds=0,120&chco=4d89f9,c6d9fd,00B88A&chbh=a&chxs=0,000000,0,0,_&chxt=y&chm=N,000000,0,,10|N,000000,1,,10|N,000000,2,,10)
```
cht=bhg
chd=t:5,5,5|10,10,10|15,15,15
```

- **Stacked vertically** `bvs`

![chart](https://image-charts.com/chart?cht=bvs&chs=700x100&chd=t:5,5,5|10,10,10|15,15,15&chds=0,120&chco=4d89f9,c6d9fd,00B88A&chbh=20&chm=N,000000,0,0,10|N,000000,0,1,10|N,000000,0,2,10|N,000000,1,0,10|N,000000,1,1,10|N,000000,1,2,10|N,000000,2,0,10|N,000000,2,1,10|N,000000,2,2,10&chxs=0,000000,0,0,_&chxt=y)
<!-- ![chart](https://image-charts.com/chart?cht=bvs&chs=100x75&chd=t:5,5,5|10,10,10|15,15,15&chds=0,120&chco=4d89f9,c6d9fd,00B88A&chbh=20&chds=0,40&chm=N,000000,0,0,10|N,000000,0,1,10|N,000000,0,2,10|N,000000,1,0,10|N,000000,1,1,10|N,000000,1,2,10|N,000000,2,0,10|N,000000,2,1,10|N,000000,2,2,10&chxs=0,000000,0,0,_&chxt=y) -->

```
cht=bvs
chd=t:5,5,5|10,10,10|15,15,15
```

- **Stacked horizontally** `bhs`

![chart](https://image-charts.com/chart?cht=bhs&chs=700x100&chd=t:5,5,5|10,10,10|15,15,15&chds=0,120&chco=4d89f9,c6d9fd,00B88A&chbh=20&chm=N,000000,0,0,10|N,000000,0,1,10|N,000000,0,2,10|N,000000,1,0,10|N,000000,1,1,10|N,000000,1,2,10|N,000000,2,0,10|N,000000,2,1,10|N,000000,2,2,10&chxs=0,000000,0,0,_&chxt=y)

```
cht=bhs
chd=t:5,5,5|10,10,10|15,15,15
```

!!! missing
    Google Image Charts supported the `bvo` chart type in which vertical bars were stacked in front of one another. This type of chart is not planned to be supported and will automatically falls back to the **`bvs`** type.


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

One color per series, with comma-delimited colors. ![chart](https://image-charts.com/chart?cht=bvs&chs=700x125&chd=t:10,50,60,80,40|50,60,100,40,20&chco=4d89f9,c6d9fd&chbh=20&chds=0,160)

```
cht=bvs
chco=4D89F9,C6D9FD
```

One color per value, with pipe-delimited colors.  

![chart](https://image-charts.com/chart?cht=bvs&chs=700x125&chd=t:10,50,60,80,40&chco=FFC6A5%7CFFFF42%7CDEF3BD%7C00A5C6%7CDEBDDE&chbh=20&chds=0,160)

```
cht=bvs
chco=FFC6A5|FFFF42|DEF3BD|00A5C6|DEBDDE
```

A combination of series colors and individual bar colors.

This example shows a bar chart with two series. The first series all black (000000,) and comma-delimited. The second series is pipe-delimited, and assigns a different color for each point (FF0000|00FF00|0000FF).

![chart](https://image-charts.com/chart?cht=bvs&chco=000000,FF0000|00FF00|0000FF&chs=700x125&chd=s:FOE,elo&chxt=x,y&chxl=1:|Dec|Nov|Oct|0:||20K||60K||100K|)

```
chco=000000,FF0000|00FF00|0000FF
chd=s:FOE,elo
```


This example demonstrates setting different colors for every bar in a multi-series chart.

[![chart](https://image-charts.com/chart?cht=bvs&chco=FF0000|00FF00|0000FF,FFC6A5|DEF3BD|C6EFF7&chs=700x125&chd=s:FOE,elo&chxt=x,y&chxl=1:|Dec|Nov|Oct|0:||20K||60K||100K|)](https://image-charts.com/chart?cht=bvs&chco=FF0000|00FF00|0000FF,FFC6A5|DEF3BD|C6EFF7&chs=700x125&chd=s:FOE,elo&chxt=x,y&chxl=1:|Dec|Nov|Oct|0:||20K||60K||100K|)

You can also specify fills to color a series with solid, striped, or gradient colors. Solid fills look the same as using chco, but stripes or gradients create unique effects.

[![chart](https://image-charts.com/chart?cht=bvs&chs=700x125&chd=t:10,40,60,80,30,20&chf=b0,lg,0,4ECDC4,0,556270,1&chxt=y,x)](https://image-charts.com/chart?cht=bvs&chs=700x125&chd=t:10,40,60,80,30,20&chf=b0,lg,0,4ECDC4,0,556270,1&chxt=y,x)

```
chd=t:10,40,60,80,30,20
chf=b0,lg,0,FFE7C6,0,76A4FB,1
```

![chart](https://image-charts.com/chart?cht=bvg&chs=700x125&chd=t:40,40,60,80|30,50,55,86&chf=b0,ls,0,FFE7C6,.3,76A4FB,.1|b1,ls,0,FF0000,.3,FFBFBF,.1&chbh=15,5,15)

```
chd=t:40,40,60,80|30,50,55,86
chf=b0,ls,0,FFE7C6,.3,76A4FB,.1|b1,ls,0,FF0000,.3,FFBFBF,.1
```
