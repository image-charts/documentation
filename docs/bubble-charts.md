# Bubble Charts

This section describes how to create bubble charts using Image-Chart API.

## Overview

The bubble chart is designed to visually convey three or four dimensions of data. This means your data needs to have at least three fields on your record that you’ll want to convey graphically all at once. This could be a date field (x-axis), a cost figure (y-axis), and the ROI of the project (bubble size).

Each series describe a set of bubbles, and each bubble is defined by a `x` value, `y` value and an optional `r` radius.

## Chart Types

There are a variety of bubble charts that you can create. Specify a bubble chart with the following syntax:

#### Syntax

```
cht=<chart_type>
```

Where `<chart_type>` is the following type:

- `bb` A bubble chart where data points are composed of `x,y[,r]` bubble. Axis lines are not shown by default. To show values on the axis lines, you must specify [visible axes](/reference/chart-axis/#visible-axes) (e.g. `chxt=x,y`).

[![bubble chart](https://image-charts.com/chart?chco=7059EF&chd=t:40,60,10,_,47,40,12,_,10,10,20,_,20,40,40&chma=0,0,20&chs=700x300&cht=bb&chxt=x,y&icac=fgribreau&icretina=1&ichm=f56fc1c2725edfd217ef044cabd866bf526c1d68a1553f7ad8ee7cf2994c45a4)](https://editor.image-charts.com/chart?chco=7059EF&chd=t:40,60,10,_,47,40,12,_,10,10,20,_,20,40,40&chma=0,0,20&chs=700x300&cht=bb&chxt=x,y&icac=fgribreau&icretina=1&ichm=f56fc1c2725edfd217ef044cabd866bf526c1d68a1553f7ad8ee7cf2994c45a4)

```
?cht=bb
&chs=700x300
&chd=t:40,60,10,_,47,40,12,_,10,10,20,_,20,40,40
&chco=7059EF
&chxt=x,y
&chma=0,0,20
```

## Data format

To specify data points in bubble charts, you must specify series of `x,y[,r]`, series must be separated by `|`. For example:

```
cht=bb
chd=a:<serie1_bubble1_x>,<serie1_bubble1_y>[,<serie1_bubble1_r>],_,<serie1_bubble2_x>,<serie1_bubble2_y>[,<serie1_bubble2_r>],_,<serie1_bubble3_x>,<serie1_bubble3_y>[,<serie1_bubble3_r>]|
      <serie2_bubble1_x>,<serie2_bubble1_y>[,<serie2_bubble1_r>],_,<serie2_bubble2_x>,<serie2_bubble2_y>[,<serie2_bubble2_r>],_,<serie2_bubble3_x>,<serie2_bubble3_y>[,<serie2_bubble3_r>]
```

Some thing of note concerning `chd:a:<datasets>`:

- `,_,` delimits a bubble point, `x`, `y` and optionally the radius `r`.
- `|` delimits data series, in other word a group of bubble point.
- when the bubble radius (in pixel) `r` parameter is not defined, a default value of `1` (px) is used.

[![bubble chart](https://image-charts.com/chart?chco=7059EF|0CE858&chd=t:40,60,10,_,47,40,12,_,10,10,20,_,20,40,40|50,30,5,_,5,5,_,20,20,6&chma=0,0,20&chs=700x300&cht=bb&chxt=x,y&icac=fgribreau&icretina=1&ichm=03112ba3d5451e9259c1d14c35621d1dd66e9c35d4620f88f95c9100f56a1a19)](https://editor.image-charts.com/chart?chco=7059EF|0CE858&chd=t:40,60,10,_,47,40,12,_,10,10,20,_,20,40,40|50,30,5,_,5,5,_,20,20,6&chma=0,0,20&chs=700x300&cht=bb&chxt=x,y&icac=fgribreau&icretina=1&ichm=03112ba3d5451e9259c1d14c35621d1dd66e9c35d4620f88f95c9100f56a1a19)

```
&chd=t:40,60,10,_,47,40,12,_,10,10,20,_,20,40,40|50,30,5,_,5,5,_,20,20,6
&chco=7059EF,0CE858
&chxt=x,y
&chma=0,0,20
```

The first series (`40,60,10,_,47,40,12,_,10,10,20,_,20,40,40`) has 4 bubbles:

- x=`40`, y=`60`, r=`10`
- x=`47`, y=`40`, r=`12`
- x=`10`, y=`10`, r=`20`
- x=`20`, y=`40`, r=`40`

The second and last series (`50,30,5,_,5,5,_,20,20,6`) has 3 bubbles:

- x=`50`, y=`30`, r=`5`
- x=`5`, y=`5`, r=`1`, note here `r` was not defined, a default value of `1` was set by Image-Charts
- x=`20`, y=`20`, r=`6`


## Series Colors

!!! tip
    You can specify the colors of individual bubbles, individual series, or multiple series using the `chco` parameter. If you don't specify a different color for each series, all series will have the same color.

#### Syntax

```
chco=<series_1_color>, ..., <series_n_color>
    or
chco=<series_1_bubble_1>|<series_1_bubble_2>|...|<series_1_bubble_n>,<series_2>,...,<series_n>
```

- `<color>`: An [RRGGBB\[AA\] format hexadecimal number](/reference/color-format) to apply to a series or individual bubble. To apply the color to the whole series, it should be comma-delimited. To apply the color to an individual bubble, it should be pipe-delimited. You can mix these two formats. See the table below for examples. Whenever you have fewer color values than data points or series, the colors will cycle through the list again, starting from the first color in that group.

#### Gradient

You can specify fill colors and styles for the chart data area and/or the whole chart background (see [background fill](/reference/background-fill/)).


Each bubble series can also be colored with gradients with `chf` (note that `chf` has precedence over `chco`). In the example below the first bubble series has a linear orange gradient `lg,45,ffeb3b,0.2,f443367C,1` and the second one a blue linear gradient `90,03a9f4,0,3f51b5,1`.

[![bubble chart with gradient](https://image-charts.com/chart?chd=t:40,60,10,_,47,40,12,_,10,10,20,_,20,40,40|50,30,5,_,20,20,6,_,5,5,10,_,15,20,20&chf=b0,lg,45,ffeb3b,0.2,f443367C,1|b1,lg,90,03a9f4,0,3f51b5,1&chl=||hum|WoW!|&chma=0,0,20&chs=700x300&cht=bb&chxt=x,y&icac=fgribreau&icretina=1&ichm=25b0f79bc1e53e77a159bad711c4ff658847ccad617400276659e165c7d909da)](https://editor.image-charts.com/chart?chd=t:40,60,10,_,47,40,12,_,10,10,20,_,20,40,40|50,30,5,_,20,20,6,_,5,5,10,_,15,20,20&chf=b0,lg,45,ffeb3b,0.2,f443367C,1|b1,lg,90,03a9f4,0,3f51b5,1&chl=||hum|WoW!|&chma=0,0,20&chs=700x300&cht=bb&chxt=x,y&icac=fgribreau&icretina=1&ichm=25b0f79bc1e53e77a159bad711c4ff658847ccad617400276659e165c7d909da)

```
&chf=b0,lg,45,ffeb3b,0.2,f443367C,1|b1,lg,90,03a9f4,0,3f51b5,1
```

There are multiple ways to express gradients see [gradients fills](/reference/background-fill/#gradient-fills) section.

## Gif animation

Gif animation also works with bubble charts:

[![animated bubble chart](https://image-charts.com/chart?chan=1500,easeOutBounce&chco=7059EF|0CE858&chd=t:40,60,10,_,47,40,12,_,10,10,20,_,20,40,40|50,30,5,_,20,20,6,_,5,5,10,_,15,20,20&chma=0,0,20&chs=700x300&cht=bb&chxt=x,y&icac=fgribreau&icretina=1&ichm=70f156b87275d635cfcf7f4c5a9f573a5b587c11cc8e749fb99f96901e853295)](https://editor.image-charts.com/chart?cht=bb&chs=700x300&chd=t:40,60,10,_,47,40,12,_,10,10,20,_,20,40,40|50,30,5,_,20,20,6,_,5,5,10,_,15,20,20&chco=7059EF|0CE858&chxt=x,y&chma=0,0,20&chan=1500,easeOutBounce)

```
[...]
&chan=1500,easeOutBounce
```

There are multiple ways to animate a bubble chart, read more about [gif animation here](/reference/animation/).
