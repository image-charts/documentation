!!! info Looking for line fills?
    `chm` parameter can also be used for [line fills](/line-charts/#line-fills) in line charts

!!! note "Enterprise+ plan only"
    Compound charts are only enabled in **Enterprise+** subscriptions

You can combine several chart types with line markers <!--or candlestick--> to highlight data trends or show variance. When you add line <!--or candlestick--> markers onto bar, scatter, or other chart types, the resulting chart is called a **compound chart**. Some compound charts look like a combination of two chart types—for instance, a bar chart with a tracking line:


![chart](https://image-charts.com/chart?ichm=603295ccdd64d1c07fccc0e98bdd1ed9e7daba065b274f14168b0a6214d153c0&cht=bvs&chbh=5,2&chm=D,0033FF,2,0,5,1&chs=700x200&chd=s2:1XQbnf4,EWoQMUB,9halxp9&chco=4D89F9,C6D9FD&icac=fgribreau)

```
chd=s2:1XQbnf4,EWoQMUB,9halxp9
chm=D,0033FF,2,0,5,1
```

#### Creating a Compound Chart

All compound charts consist of one or more base chart types (line, scatter, bar, or radar) combined with one or more sets of markers. These markers require data to place them on the chart. Sometimes you can use the same data series as used to draw the bars or points on your chart, but typically you want the markers to have their own independent data sets. If you want your chart to have different data series for the base chart and for markers, you must hide the marker data from the base chart (so that it doesn't try to draw more bars or lines with that data). Here's how to do that:

1. **Add your marker data series to the end of your `chd` parameter**. For example, if your bar chart had data `chd=t:30,10,20`, you could add new data for a line marker like this: `chd=t:30,10,20|60,40,50`.
2. **Hide your extra marker data from the base chart**. If you simply add an extra data series to a bar chart for your tracking line, the chart would show that as a new series of bars. To prevent this, you must hide this extra series. To hide a series, include a single digit after the `chd` format descriptor: for example, `chd=t1:30,10,20|60,40,50`. This `1` digit from `t1` tells the Chart API how many data series to use to draw elements for that base chart type as defined by the cht parameter (bars for bar charts, data points for line charts, and so on). Any additional data series will be ignored by that chart type when drawing the chart. `Note that this is a 1-based number, not 0-based`. So `t1` means "use only the first data series for bars," `t2` means "use only the first two series for bars," etc.
3. **Use the hidden data series to draw <!--candlestick markers,--> line markers, or other markers**. How to draw markers is covered in the section below. Reference the hidden data series as the source for your markers. You can include as many additional hidden data series as you like, and use them for additional chart markers.

![](https://image-charts.com/chart?ichm=d13ef0147274251cf72c1814e32339b7e6a8f59a8716e5186664763d86de90ba&cht=bvg&chm=D,009900,1,0,5,1&chs=700x200&chd=t1:30,10,20|60,40,50&chxt=y&chco=224499&icac=fgribreau)

```
cht=bvg
chd=t1:30,10,20|60,40,50
chm=D,0033FF,1,0,5,1
```

#### Syntax

```
chm=
  D,<color>,<series_index>,<which_points>,<width>,<opt_z_order>
```

- **`D`** Indicates that this is a line marker.
- **`<color>`** The color of the line, in RRGGBB hexadecimal format.
- **`<series_index>`** The index of the data series used to draw the line. The data series index is 0 for the first data series, 1 for the second data series, and so on.
- **`<which_points>`** Which points in a series to use to draw the line. Use one of the following values:
    - `0` - Use all the points in the series.
    - `start:end` - Use a specific range of points in the series, from the start to end, inclusive (zero-based index). You can also use floating point values to specify intermediate points, or leave start or end blank to indicate the first or last data point, respectively. start and end can be negative, as a reverse index from the last value. If both start and end are negative, be sure to write them in increasing value (for example, -6:-1).
- **`<size>`** The width of the line in pixels.
<!--- **`<opt_z_order>`** [Optional] The layer on which to draw the marker, compared to other markers and all other chart elements. This is a floating point number from -1.0 to 1.0, inclusive, where -1.0 is the bottom and 1.0 is the top. Chart elements (lines and bars) are just lower than zero. If two markers have the same value, they are drawn in the order given by the URL. Default value is 0.0 (just above the chart elements).-->

To add multiple lines (or combine this with any other `chm` markers), separate the `chm` parameter sets using a pipe ( | ) delimiter. You cannot make a dashed line marker with this parameter.

#### Examples

##### Bar line with line serie

Here is a bar chart with a trace line. The first two data series are used for the stacked bars, and the remaining series is used for the line. chd=s2 indicates that the chart should use only the first two series for bars. The line uses the third series for its data.

- `chd=s2:1XQbnf4,EWoQMUB,9halxp9` - Simple encoding, where the first two series are used to draw the bars, and the last series is used for the line.
- `chm=D,0033FF,2,0,5,1` - Trace line (D), blue, data from series index 2, all points (0), line is 5 pixels wide, and has a z-order of 1.


![](https://image-charts.com/chart?ichm=ad2e1cf9533712eb2c76593bc1e48cd5caab6b56f350d0a16e08ac3b50edf8ab&cht=bvs&chbh=5,2&chm=D,0033FF,2,0,5,1&chs=700x200&chd=s2:1XQbnf4,EWoQMUB,9halxp9&chco=224499,009900&chxt=x,y&chxl=0:|Jan|Feb|Mar|Apr|May|Jun|Jul&icac=fgribreau)

```
chm=
  D,0033FF,2,0,5,1
chd=s2:
  1XQbnf4,
  EWoQMUB,
  9halxp9
```

##### Stacked bar chart with an independent line drawn


![](https://image-charts.com/chart?ichm=52a3cb35f5b6f08934e7d3244d74778f2afa7f06a33187a0335381a911b7264c&cht=bvs&chs=700x200&chbh=15,10&chd=t2:0,10,20,30,20,70,80|0,20,10,5,20,30,10|10,0,20,15,60,40,30&chco=224499,009900&chxt=x,y&chm=D,76A4FB,2,0,3&chxl=0:|Jan|Feb|Mar|Apr|May|Jun|Jul&icac=fgribreau)


```
cht=bvs
chd=t2:
  0,10,20,30,20,70,80|
  0,20,10,5,20,30,10|
  10,0,20,15,60,40,30
chm=D,76A4FB,2,0,3
```
