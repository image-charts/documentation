# Bar Charts

<!-- :wrench: we are currently implementing this feature. -->

This section describes the various types of bar charts that you can create using the Image Chart API.

## Overview

There are a variety of bar charts that you can create, including vertical, horizontal, grouped, stacked versions of each.

Bar charts are good for side-by-side comparison and spotting trends in a small number of discrete data points. They're a good alternative to line charts when you have only a few data points in a series.

There are three general ways to show multiple series in a bar chart:

- **Grouped vertically** `bvg`

[![chart](https://image-charts.com/chart?chbh=a&chbr=10&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C%2C10%7CN%2C000000%2C1%2C%2C10%7CN%2C000000%2C2%2C%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvg&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=fgribreau&icretina=1&ichm=56b9845e7bedf23a1325d9267ae47ed6b6525ebbbf15294ba3c7064ceb27d64b)](https://editor.image-charts.com/chart?chbh=a&chbr=10&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C%2C10%7CN%2C000000%2C1%2C%2C10%7CN%2C000000%2C2%2C%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvg&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=fgribreau&icretina=1&ichm=56b9845e7bedf23a1325d9267ae47ed6b6525ebbbf15294ba3c7064ceb27d64b)

```
cht=bvg
chd=t:5,5,5|10,10,10|15,15,15
```

- **Grouped horizontally** `bhg`

[![chart](https://image-charts.com/chart?chbh=a&chbr=5&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C%2C10%7CN%2C000000%2C1%2C%2C10%7CN%2C000000%2C2%2C%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bhg&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=fgribreau&icretina=1&ichm=78c7d39bbe0360dfa95e0db59776eaebcb45f0082eeb26415e7c03e7ed634593)](https://editor.image-charts.com/chart?chbh=a&chbr=5&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C%2C10%7CN%2C000000%2C1%2C%2C10%7CN%2C000000%2C2%2C%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bhg&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=fgribreau&icretina=1&ichm=78c7d39bbe0360dfa95e0db59776eaebcb45f0082eeb26415e7c03e7ed634593)

```
cht=bhg
chd=t:5,5,5|10,10,10|15,15,15
```

- **Stacked vertically** `bvs`

[![chart](https://image-charts.com/chart?chbh=20&chbr=5&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C0%2C10%7CN%2C000000%2C0%2C1%2C10%7CN%2C000000%2C0%2C2%2C10%7CN%2C000000%2C1%2C0%2C10%7CN%2C000000%2C1%2C1%2C10%7CN%2C000000%2C1%2C2%2C10%7CN%2C000000%2C2%2C0%2C10%7CN%2C000000%2C2%2C1%2C10%7CN%2C000000%2C2%2C2%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvs&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=fgribreau&icretina=1&ichm=8bae6af5f958a70b9d0f9395b519805cff9224059c98a11a86aaaa87b8352fbd)](https://editor.image-charts.com/chart?chbh=20&chbr=5&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C0%2C10%7CN%2C000000%2C0%2C1%2C10%7CN%2C000000%2C0%2C2%2C10%7CN%2C000000%2C1%2C0%2C10%7CN%2C000000%2C1%2C1%2C10%7CN%2C000000%2C1%2C2%2C10%7CN%2C000000%2C2%2C0%2C10%7CN%2C000000%2C2%2C1%2C10%7CN%2C000000%2C2%2C2%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvs&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=fgribreau&icretina=1&ichm=8bae6af5f958a70b9d0f9395b519805cff9224059c98a11a86aaaa87b8352fbd)

```
cht=bvs
chd=t:5,5,5|10,10,10|15,15,15
```

- **Stacked horizontally** `bhs`

[![chart](https://image-charts.com/chart?chbh=20&chbr=4&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C0%2C10%7CN%2C000000%2C0%2C1%2C10%7CN%2C000000%2C0%2C2%2C10%7CN%2C000000%2C1%2C0%2C10%7CN%2C000000%2C1%2C1%2C10%7CN%2C000000%2C1%2C2%2C10%7CN%2C000000%2C2%2C0%2C10%7CN%2C000000%2C2%2C1%2C10%7CN%2C000000%2C2%2C2%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bhs&chxr=1%2C0%2C50&chxt=y%2Cx&icac=fgribreau&icretina=1&ichm=c8f0bb4ed939dd322d288f702d1f9dab5c7669f1095a3381e30711809a589212)](https://editor.image-charts.com/chart?chbh=20&chbr=4&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C0%2C10%7CN%2C000000%2C0%2C1%2C10%7CN%2C000000%2C0%2C2%2C10%7CN%2C000000%2C1%2C0%2C10%7CN%2C000000%2C1%2C1%2C10%7CN%2C000000%2C1%2C2%2C10%7CN%2C000000%2C2%2C0%2C10%7CN%2C000000%2C2%2C1%2C10%7CN%2C000000%2C2%2C2%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bhs&chxr=1%2C0%2C50&chxt=y%2Cx&icac=fgribreau&icretina=1&ichm=c8f0bb4ed939dd322d288f702d1f9dab5c7669f1095a3381e30711809a589212)

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

[![rounded bar chart](https://image-charts.com/chart?chbr=10&chd=t%3A10%2C40%2C60%2C80%2C30%2C20&chf=b0%2Clg%2C0%2Cfdb45c%2C0%2Ced7e30%2C1&chs=700x125&cht=bvs&chxt=y%2Cx&icac=fgribreau&icretina=1&ichm=32462fe6397843dedeeb25a08643f89146e38660d54f5c3cf692b2a33979038a)](https://editor.image-charts.com/chart?chbr=10&chd=t%3A10%2C40%2C60%2C80%2C30%2C20&chf=b0%2Clg%2C0%2Cfdb45c%2C0%2Ced7e30%2C1&chs=700x125&cht=bvs&chxt=y%2Cx&icac=fgribreau&icretina=1&ichm=32462fe6397843dedeeb25a08643f89146e38660d54f5c3cf692b2a33979038a)

```
chbr=20
```

[![chart](https://image-charts.com/chart?chbh=20&chbr=20&chco=CFECF7%2C27c9c2&chd=a%3A10000%2C50000%2C60000%2C80000%2C40000%7C50000%2C60000%2C100000%2C40000%2C20000&chdl=N%7CN-1&chdlp=r&chl=10%7C50%7C60%7C80%7C40%7C50%7C60%7C100%7C40%7C20&chs=700x300&cht=bvs&chtt=Revenue%20per%20month&chxl=0%3A%7CJan%7CFev%7CMar%7CAvr%7CMay&chxs=1N%2AcUSD0sz%2A%2C000000%2C14&chxt=x%2Cy&icac=fgribreau&iclocale=en&icretina=1&ichm=ebb2c1cb976c7cd45881bc35cf663a7283e99a01c32cf2aa3c7db0e309ee2864)](https://editor.image-charts.com/chart?chbh=20&chbr=20&chco=CFECF7%2C27c9c2&chd=a%3A10000%2C50000%2C60000%2C80000%2C40000%7C50000%2C60000%2C100000%2C40000%2C20000&chdl=N%7CN-1&chdlp=r&chl=10%7C50%7C60%7C80%7C40%7C50%7C60%7C100%7C40%7C20&chs=700x300&cht=bvs&chtt=Revenue%20per%20month&chxl=0%3A%7CJan%7CFev%7CMar%7CAvr%7CMay&chxs=1N%2AcUSD0sz%2A%2C000000%2C14&chxt=x%2Cy&icac=fgribreau&iclocale=en&icretina=1&ichm=ebb2c1cb976c7cd45881bc35cf663a7283e99a01c32cf2aa3c7db0e309ee2864)

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

[![chart](https://image-charts.com/chart?chbh=20&chco=CFECF7%2C27c9c2&chd=a%3A10000%2C50000%2C60000%2C80000%2C40000%7C50000%2C60000%2C100000%2C40000%2C20000&chdl=N%7CN-1&chdlp=r&chl=10%7C50%7C60%7C80%7C40%7C50%7C60%7C100%7C40%7C20&chs=700x300&cht=bvs&chtt=Revenue%20per%20month&chxl=0%3A%7CJan%7CFev%7CMar%7CAvr%7CMay&chxs=1N%2AcUSD0sz%2A%2C000000%2C14&chxt=x%2Cy&icac=fgribreau&iclocale=en&icretina=1&ichm=7646a23a777abf0e3b8605227c3f0dbba0f85895075cc578f58830440acdf918)](https://editor.image-charts.com/?tab_editor=form&tab_viewer=image#https:/image-charts.com/chart?chbh=20&chco=CFECF7,27c9c2&chd=a:10000,50000,60000,80000,40000|50000,60000,100000,40000,20000&chdl=N|N-1&chdlp=r&chl=10|50|60|80|40|50|60|100|40|20&chs=700x300&cht=bvs&chtt=Revenue%20per%20month&chxl=0:|Jan|Fev|Mar|Avr|May&chxs=1N*cUSD0sz*,000000,14&chxt=x,y)

```
cht=bvs
chco=CFECF7,27c9c2
```

One color per value, with pipe-delimited colors.  

[![chart](https://image-charts.com/chart?chbh=20&chco=FFC6A5%7CFFFF42%7CDEF3BD%7C00A5C6%7CDEBDDE&chd=a%3A10%2C50%2C60%2C80%2C40&chs=700x125&cht=bvs&chxt=y&icac=fgribreau&icretina=1&ichm=aa90339985f9e4ec749d5911eb62a8188438fd4f7c59ee36580f5cbc0f71dcc9)](https://editor.image-charts.com/?tab_viewer=image&tab_editor=form#https:/image-charts.com/chart?chbh=20&chco=FFC6A5%7CFFFF42%7CDEF3BD%7C00A5C6%7CDEBDDE&chd=a%3A10%2C50%2C60%2C80%2C40&chs=700x125&cht=bvs&chxt=y&icac=fgribreau&icretina=1&ichm=aa90339985f9e4ec749d5911eb62a8188438fd4f7c59ee36580f5cbc0f71dcc9)

```
cht=bvs
chco=FFC6A5|FFFF42|DEF3BD|00A5C6|DEBDDE
```

A combination of series colors and individual bar colors.

This example shows a bar chart with two series. The first series all black (000000,) and comma-delimited. The second series is pipe-delimited, and assigns a different color for each point (FF0000|00FF00|0000FF).

[![chart](https://image-charts.com/chart?chbr=3&chco=000000%2C8AC1E7%7C7f3f98%7Cfdb45c&chd=s%3AFOE%2Celo&chs=700x125&cht=bvs&chxl=0%3A%7CDec%7CNov%7COct%7C1%3A%7C20K%7C60K%7C100K%7C&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=0bf480edfb474ea8ed81ef0d46197f68e4a85546d5959bcf534a6f74bafed66d)](https://editor.image-charts.com/chart?chbr=3&chco=000000%2C8AC1E7%7C7f3f98%7Cfdb45c&chd=s%3AFOE%2Celo&chs=700x125&cht=bvs&chxl=0%3A%7CDec%7CNov%7COct%7C1%3A%7C20K%7C60K%7C100K%7C&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=0bf480edfb474ea8ed81ef0d46197f68e4a85546d5959bcf534a6f74bafed66d)

```
chco=000000,8AC1E7|7f3f98|fdb45c
chd=s:FOE,elo
```


This example demonstrates setting different colors for every bar in a multi-series chart.

[![chart](https://image-charts.com/chart?chbr=2&chco=FF0000%7C00FF00%7C0000FF%2CFFC6A5%7CDEF3BD%7CC6EFF7&chd=s%3AFOE%2Celo&chs=700x125&cht=bvs&chxl=0%3A%7CDec%7CNov%7COct%7C1%3A%7C20K%7C60K%7C100K&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=0e64b37d2ef25ba2da91a7ab90621794df550f9f0700f623cafb7f39b2d78e66)](https://editor.image-charts.com/chart?chbr=2&chco=FF0000%7C00FF00%7C0000FF%2CFFC6A5%7CDEF3BD%7CC6EFF7&chd=s%3AFOE%2Celo&chs=700x125&cht=bvs&chxl=0%3A%7CDec%7CNov%7COct%7C1%3A%7C20K%7C60K%7C100K&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=0e64b37d2ef25ba2da91a7ab90621794df550f9f0700f623cafb7f39b2d78e66)

You can also specify fills to color a series with solid or gradient colors. [Solid fills](/reference/background-fill/#solid-fills) look the same as using chco, but [gradients](/reference/background-fill/#gradient-fills) (`chf=b<index>,lg,...`) create unique effects.

Gradient fills:

[![chart](https://image-charts.com/chart?chbr=5&chd=t%3A10%2C40%2C60%2C80%2C30%2C20&chf=b0%2Clg%2C0%2Cfdb45c%2C0%2Ced7e30%2C1&chs=700x125&cht=bvs&chxt=y%2Cx&icac=fgribreau&icretina=1&ichm=e60e1b75afd598dd7925062e6662cd684df102a35f15ac2ee38b86189338d489)](https://editor.image-charts.com/chart?chbr=5&chd=t%3A10%2C40%2C60%2C80%2C30%2C20&chf=b0%2Clg%2C0%2Cfdb45c%2C0%2Ced7e30%2C1&chs=700x125&cht=bvs&chxt=y%2Cx&icac=fgribreau&icretina=1&ichm=e60e1b75afd598dd7925062e6662cd684df102a35f15ac2ee38b86189338d489)

```
chd=t:10,40,60,80,30,20
chf=b0,lg,0,fdb45c,0,ed7e30,1
```

Solid fills:

[![chart](https://image-charts.com/chart?chbh=15%2C5%2C15&chd=t%3A40%2C40%2C60%2C80%7C30%2C50%2C55%2C86&chf=b0%2Cls%2C0%2C72BD60%2C.3%2C517D47%2C.1%7Cb1%2Cls%2C0%2C2F5627%2C.3%2CE67233%2C.1&chs=700x125&cht=bvg&icac=fgribreau&icretina=1&ichm=8dd8d41c06c3a6edcc393b340d023cecad63f0bfcebf9d8b67102f3105f453e4)](https://editor.image-charts.com/?tab_viewer=image&tab_editor=form#https:/image-charts.com/chart?chbh=15%2C5%2C15&chd=t%3A40%2C40%2C60%2C80%7C30%2C50%2C55%2C86&chf=b0%2Cls%2C0%2C72BD60%2C.3%2C517D47%2C.1%7Cb1%2Cls%2C0%2C2F5627%2C.3%2CE67233%2C.1&chs=700x125&cht=bvg&icac=fgribreau&icretina=1&ichm=8dd8d41c06c3a6edcc393b340d023cecad63f0bfcebf9d8b67102f3105f453e4)

```
chd=t:40,40,60,80|30,50,55,86
chf=b0,ls,0,72BD60,.3,517D47,.1|b1,ls,0,2F5627,.3,E67233,.1
```

There are a variety of bar charts that you can create, including vertical, horizontal, grouped, stacked versions of each.

