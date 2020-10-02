---
meta_description: "Generate bubble charts as image and embed them inside your email or pdf reports"
---
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

[![bubble chart](https://image-charts.com/chart?chco=7059EF&chd=t%3A40%2C60%2C10%2C_%2C47%2C40%2C12%2C_%2C10%2C10%2C20%2C_%2C20%2C40%2C40&chma=0%2C0%2C20&chs=700x300&cht=bb&chxt=x%2Cy&icac=documentation&icretina=1&ichm=df94752201bc81440a169ddf8bdb86d342aa79f786d49eed345a76211b0e5510)](https://editor.image-charts.com/chart?chco=7059EF&chd=t%3A40%2C60%2C10%2C_%2C47%2C40%2C12%2C_%2C10%2C10%2C20%2C_%2C20%2C40%2C40&chma=0%2C0%2C20&chs=700x300&cht=bb&chxt=x%2Cy&icac=documentation&icretina=1&ichm=df94752201bc81440a169ddf8bdb86d342aa79f786d49eed345a76211b0e5510)

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

[![bubble chart](https://image-charts.com/chart?chco=7059EF%7C0CE858&chd=t%3A40%2C60%2C10%2C_%2C47%2C40%2C12%2C_%2C10%2C10%2C20%2C_%2C20%2C40%2C40%7C50%2C30%2C5%2C_%2C5%2C5%2C_%2C20%2C20%2C6&chma=0%2C0%2C20&chs=700x300&cht=bb&chxt=x%2Cy&icac=documentation&icretina=1&ichm=c4884761c4a885f4f70fd6b2dafca29362cae9fe2845bb2a1c2120a06bff2e8f)](https://editor.image-charts.com/chart?chco=7059EF%7C0CE858&chd=t%3A40%2C60%2C10%2C_%2C47%2C40%2C12%2C_%2C10%2C10%2C20%2C_%2C20%2C40%2C40%7C50%2C30%2C5%2C_%2C5%2C5%2C_%2C20%2C20%2C6&chma=0%2C0%2C20&chs=700x300&cht=bb&chxt=x%2Cy&icac=documentation&icretina=1&ichm=c4884761c4a885f4f70fd6b2dafca29362cae9fe2845bb2a1c2120a06bff2e8f)

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

[![bubble chart with gradient](https://image-charts.com/chart?chd=t%3A40%2C60%2C10%2C_%2C47%2C40%2C12%2C_%2C10%2C10%2C20%2C_%2C20%2C40%2C40%7C50%2C30%2C5%2C_%2C20%2C20%2C6%2C_%2C5%2C5%2C10%2C_%2C15%2C20%2C20&chf=b0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cb1%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&chl=%7C%7Chum%7CWoW%21%7C&chma=0%2C0%2C20&chs=700x300&cht=bb&chxt=x%2Cy&icac=documentation&icretina=1&ichm=a718ee055dc24211371a21f5d4915a37329904569c974922f7f80c0c3ddaa219)](https://editor.image-charts.com/chart?chd=t%3A40%2C60%2C10%2C_%2C47%2C40%2C12%2C_%2C10%2C10%2C20%2C_%2C20%2C40%2C40%7C50%2C30%2C5%2C_%2C20%2C20%2C6%2C_%2C5%2C5%2C10%2C_%2C15%2C20%2C20&chf=b0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cb1%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&chl=%7C%7Chum%7CWoW%21%7C&chma=0%2C0%2C20&chs=700x300&cht=bb&chxt=x%2Cy&icac=documentation&icretina=1&ichm=a718ee055dc24211371a21f5d4915a37329904569c974922f7f80c0c3ddaa219)

```
&chf=b0,lg,45,ffeb3b,0.2,f443367C,1|b1,lg,90,03a9f4,0,3f51b5,1
```

There are multiple ways to express gradients see [gradients fills](/reference/background-fill/#gradient-fills) section.

## Gif animation

Gif animation also works with bubble charts:

[![animated bubble chart](https://image-charts.com/chart?chan=1500%2CeaseOutBounce&chco=7059EF%7C0CE858&chd=t%3A40%2C60%2C10%2C_%2C47%2C40%2C12%2C_%2C10%2C10%2C20%2C_%2C20%2C40%2C40%7C50%2C30%2C5%2C_%2C20%2C20%2C6%2C_%2C5%2C5%2C10%2C_%2C15%2C20%2C20&chma=0%2C0%2C20&chs=700x300&cht=bb&chxt=x%2Cy&icac=documentation&ichm=39a81279e88bdb8e46953b301664dcc5279f17ae23ed8364b68cc697dbfc8b73)](https://editor.image-charts.com/chart?chan=1500%2CeaseOutBounce&chco=7059EF%7C0CE858&chd=t%3A40%2C60%2C10%2C_%2C47%2C40%2C12%2C_%2C10%2C10%2C20%2C_%2C20%2C40%2C40%7C50%2C30%2C5%2C_%2C20%2C20%2C6%2C_%2C5%2C5%2C10%2C_%2C15%2C20%2C20&chma=0%2C0%2C20&chs=700x300&cht=bb&chxt=x%2Cy&icac=documentation&ichm=39a81279e88bdb8e46953b301664dcc5279f17ae23ed8364b68cc697dbfc8b73)

```
[...]
&chan=1500,easeOutBounce
```

There are multiple ways to animate a bubble chart, read more about [gif animation here](/reference/animation/).
