---
meta_description: "Learn how to customize your chart markers, from color, size to all or individual data points."
---
# Markers

## Shape Markers

You can specify graphical markers for all or individual data points on a chart. If two or more markers occupy the same point, the markers are drawn in the order <!--in which they appear in the chm parameter--> of the data series definition. <!--You can also create text markers on data points, which is covered in Data Point Markers.-->

You can combine shape markers with any other `chm` parameters using a pipe character (` | `) to separate the `chm` parameters.


#### Syntax

Specify one set of the following parameters for each series that should be marked. To mark multiple series, create additional parameter sets, delimited by a pipe character. You do not need to mark up all series. If you do not assign markers to a data series, it will not get any markers.

<!-- Shape markers behave slightly differently in scatter charts. See that documentation for more information. -->

<!--
```
chm=
  [@]<marker_type>,<color>,<series_index>,<opt_which_points>,<size>,<opt_z_order>,<opt_offset>
    |...|
  [@]<marker_type>,<color>,<series_index>,<opt_which_points>,<size>,<opt_z_order>,<opt_offset>
```
-->

```
chm=
  <marker_type>,<color>,<series_index>,<size>
    |...|
  <marker_type>,<color>,<series_index>,<size>
```

- **`<marker_type>`** The type of marker to use. Specify one of the following types:
    <!-- - `a` - Arrow -->
    - `c` - Cross
    - `C` - Rectangle. If a rectangle marker, you must have at least two data series, where series 0 specifies the bottom edge and series 1 specifies the top edge. <size> specifies the width of the rectangle, in pixels.
    - `d` - Diamond
    <!-- - `E` - Error-bar marker (  ) This marker requires two data series to create, one value for the bottom, and the corresponding point in the second series for the top. It also exposes an extended <size> syntax: line_thickness[:top_and_bottom_width] where top_and_bottom_width is optional. See the examples below. -->
    <!-- - `h` - Horizontal line across the chart at a specified height. (The only valid format for <opt_which_points> parameter is n.d.) -->
    <!-- - `H` - Horizontal line through the specified data marker. This supports an extended <size> syntax that lets you specify an exact line length: line_thickness[:length] where :length is optional, and defaults to the full chart area width. -->
    - `o` - Circle
    - `s` - Square
    <!-- - `v` - Vertical line from the x-axis to the data point -->
    <!-- - `V` - Vertical line of adjustable length. This supports an extended <size> value syntax that lets you specify an exact line length: line_thickness[:length] where :length is optional, and defaults to the full chart area height. The marker is centered on the data point. -->
    - `x` - An X

- **`<color>`** The color of the markers for this series, in RRGGBB hexadecimal format.
- **`<series_index>`** The zero-based index of the data series on which to draw the markers. Ignored for h markers and markers that specify location by x/y position (start with the @ character). You can use hidden data series as a source for markers; see Compound Charts for more information. Grouped vertical bar charts support a special extended syntax to align markers with specific bars.

- **`<size>`** The size of the marker, in pixels. <!-- Most take a single number value for this parameter; the V, H, and S markers support the syntax <size>[:width] where the optional second part specifies the line or marker length. -->

#### Examples

Here's an example using diamonds for one data series, and circles for the other data series.

![shape markers](https://image-charts.com/chart?cht=lc&chd=s:Hello,world&chs=700x200&chm=o,ff9900,0,-1,15.0|d,ff0000,1,-1,10.0&chco=ff9900|ff0000&chma=0,15,0,0&chxt=x,y&chxs=1N*cUSD0sz*Mil,dddddd|0N**,dddddd)

```
chm=o,ff9900,0,-1,15.0|d,ff0000,1,-1,10.0
```

This second example square diamond markers on data point as well as under the line filling:

![diamond shape markers](https://image-charts.com/chart?chs=700x200&cht=lc&chd=t:0,20,20,50,40,70,70,90,85,45,40,50,50,40,70,70,90,85,45,40,50&chxt=x,y&chxs=0N*f0z*,000000,10|1N*f0z*,000000,10&chm=s,E4061C,0,-1,15.0|B,FCECF4,0,0,0&chco=E4061C)

```
chm=s,E4061C,0,-1,15.0|B,FCECF4,0,0,0
```

## Line Markers

!!! info "Looking for line fills?"
    `chm` parameter can also be used for [line fills](#line-fills) in line charts

!!! info "Enterprise+ subscribers"
    Compound charts are only enabled in **Enterprise+** subscriptions

You can combine several chart types with line markers <!--or candlestick--> to highlight data trends or show variance. When you add line <!--or candlestick--> markers onto bar, scatter, or other chart types, the resulting chart is called a **compound chart**. Some compound charts look like a combination of two chart types—for instance, a bar chart with a tracking line:


[![chart](https://image-charts.com/chart?chbh=5%2C2&chco=4D89F9%2CC6D9FD&chd=s2%3A1XQbnf4%2CEWoQMUB%2C9halxp9&chm=D%2C0033FF%2C2%2C0%2C5%2C1&chs=700x200&cht=bvs&icac=documentation&icretina=1&ichm=7ff6491f8d1f793aa20714709d714989e9fdd344497e2775270b96e1985f7b5f)](https://editor.image-charts.com/chart?chbh=5%2C2&chco=4D89F9%2CC6D9FD&chd=s2%3A1XQbnf4%2CEWoQMUB%2C9halxp9&chm=D%2C0033FF%2C2%2C0%2C5%2C1&chs=700x200&cht=bvs&icac=documentation&icretina=1&ichm=7ff6491f8d1f793aa20714709d714989e9fdd344497e2775270b96e1985f7b5f)

```
chd=s2:1XQbnf4,EWoQMUB,9halxp9
chm=D,0033FF,2,0,5,1
```

#### Creating a Compound Chart (Mixed Charts)

All compound charts consist of one or more base chart types (line, scatter, bar, or radar) combined with one or more sets of markers. These markers require data to place them on the chart. Sometimes you can use the same data series as used to draw the bars or points on your chart, but typically you want the markers to have their own independent data sets. If you want your chart to have different data series for the base chart and for markers, you must hide the marker data from the base chart (so that it doesn't try to draw more bars or lines with that data). Here's how to do that:

1. **Add your marker data series to the end of your `chd` parameter**. For example, if your bar chart had data `chd=t:30,10,20`, you could add new data for a line marker like this: `chd=t:30,10,20|60,40,50`.
2. **Hide your extra marker data from the base chart**. If you simply add an extra data series to a bar chart for your tracking line, the chart would show that as a new series of bars. To prevent this, you must hide this extra series. To hide a series, include a single digit after the `chd` format descriptor: for example, `chd=t1:30,10,20|60,40,50`. This `1` digit from `t1` tells the Chart API how many data series to use to draw elements for that base chart type as defined by the cht parameter (bars for bar charts, data points for line charts, and so on). Any additional data series will be ignored by that chart type when drawing the chart. `Note that this is a 1-based number, not 0-based`. So `t1` means "use only the first data series for bars," `t2` means "use only the first two series for bars," etc.
3. **Use the hidden data series to draw <!--candlestick markers,--> line markers, or other markers**. How to draw markers is covered in the section below. Reference the hidden data series as the source for your markers. You can include as many additional hidden data series as you like, and use them for additional chart markers.

[![static chart](https://image-charts.com/chart?chco=224499&chd=t1%3A30%2C10%2C20%7C60%2C40%2C50&chm=D%2C009900%2C1%2C0%2C5%2C1&chs=700x200&cht=bvg&chxt=y&icac=documentation&icretina=1&ichm=8e137fdfde48996d03aa32b72a608d083372b083faf9ba5269ab633bbab1720f)](https://editor.image-charts.com/chart?chco=224499&chd=t1%3A30%2C10%2C20%7C60%2C40%2C50&chm=D%2C009900%2C1%2C0%2C5%2C1&chs=700x200&cht=bvg&chxt=y&icac=documentation&icretina=1&ichm=8e137fdfde48996d03aa32b72a608d083372b083faf9ba5269ab633bbab1720f)

```
cht=bvg
chd=t1:30,10,20|60,40,50
chm=D,0033FF,1,0,5,1
```

#### Syntax
```
chm=
  D,<color>,<series_index>,<which_points>,<width>,<opt_z_order>,<opt_axis_index>
```

- **`D`** Indicates that this is a line chart on top of the current chart.
- **`<color>`** The color of the line, in RRGGBB hexadecimal format.
- **`<series_index>`** The index of the data series used to draw the line. The data series index is 0 for the first data series, 1 for the second data series, and so on.
- **`<which_points>`** Which points in a series to use to draw the line. Use one of the following values:
    - `0` - Use all the points in the series.
    - `start:end` - Use a specific range of points in the series, from the start to end, inclusive (zero-based index). You can also use floating point values to specify intermediate points, or leave start or end blank to indicate the first or last data point, respectively. start and end can be negative, as a reverse index from the last value. If both start and end are negative, be sure to write them in increasing value (for example, -6:-1).
- **`<width>`** The width of the line in pixels.
- **`<opt_z_order>`** [Optional] unsupported for now, set it to `0`
- **`<opt_axis_index>`** [Optional] Which axis to use for this line chart labels to. This is an index into the [chxt](/reference/chart-axis/#axis-range) parameter array. For example, if you have `chxt=x,x,y,y` then index 0 would be the first x-axis, 1 would be the second x-axis.

To add multiple lines (or combine this with any other `chm` markers), separate the `chm` parameter sets using a pipe ( | ) delimiter. You cannot make a dashed line marker with this parameter.

#### Examples


This is an example of drawing a marker line on a bar chart. The z-order is set to 1, so the line is drawn on top of the bars.
This example uses the same data for both the bars and the data line.

![compound chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3A1XQbnf4&chm=D%2C0033FF%2C0%2C0%2C5%2C1&chs=700x200&cht=bvs&icac=documentation&ichm=4aaabbf58279da59cc8022df4c367835ab3b958b396582e920ec2c721a8d8e54)

```
chm=D,0033FF,0,0,5,1
chd=s:1XQbnf4
```


---

This is the same bar chart, but with an additional data series just for the line. This is an example of a compound chart. Compound charts are drawn by adding additional data series to the chd parameter, plus a value to chd telling the chart to "ignore" the additional data series.

![](https://image-charts.com/chart?chco=76A4FB&chd=s1%3A1XQbnf4%2C43ksfg6&chm=D%2C0033FF%2C1%2C0%2C5%2C1&chs=700x200&cht=bvs&icac=documentation&ichm=5799cf6ef734765d933a238c523829b0d1a95269f417daf9eef1652a1935731d)

```
chm=D,0033FF,1,0,5,1
chd=s1:1XQbnf4,43ksfg6
```


##### Bar line with line serie

Here is a bar chart with a trace line. The first two data series are used for the stacked bars, and the remaining series is used for the line. chd=s2 indicates that the chart should use only the first two series for bars. The line uses the third series for its data.

- `chd=s2:1XQbnf4,EWoQMUB,9halxp9` - Simple encoding, where the first two series are used to draw the bars, and the last series is used for the line.
- `chm=D,0033FF,2,0,5,1` - Trace line (D), blue, data from series index 2, all points (0), line is 5 pixels wide, and has a z-order of 1.


[![chart api](https://image-charts.com/chart?chbh=5%2C2&chco=224499%2C009900&chd=s2%3A1XQbnf4%2CEWoQMUB%2C9halxp9&chm=D%2C0033FF%2C2%2C0%2C5%2C1&chs=700x200&cht=bvs&chxl=0%3A%7CJan%7CFeb%7CMar%7CApr%7CMay%7CJun%7CJul&chxt=x%2Cy&icac=documentation&icretina=1&ichm=46d00c212caa483692cc9216ef906f000d9a622df45168adb2d7eab785117ee9)](https://editor.image-charts.com/chart?chbh=5%2C2&chco=224499%2C009900&chd=s2%3A1XQbnf4%2CEWoQMUB%2C9halxp9&chm=D%2C0033FF%2C2%2C0%2C5%2C1&chs=700x200&cht=bvs&chxl=0%3A%7CJan%7CFeb%7CMar%7CApr%7CMay%7CJun%7CJul&chxt=x%2Cy&icac=documentation&icretina=1&ichm=46d00c212caa483692cc9216ef906f000d9a622df45168adb2d7eab785117ee9)

```
chm=
  D,0033FF,2,0,5,1
chd=s2:
  1XQbnf4,
  EWoQMUB,
  9halxp9
```

##### Stacked bar chart with an independent line drawn


[![image chart generator](https://image-charts.com/chart?chbh=15%2C10&chco=224499%2C009900&chd=t2%3A0%2C10%2C20%2C30%2C20%2C70%2C80%7C0%2C20%2C10%2C5%2C20%2C30%2C10%7C10%2C0%2C20%2C15%2C60%2C40%2C30&chm=D%2C76A4FB%2C2%2C0%2C3&chs=700x200&cht=bvs&chxl=0%3A%7CJan%7CFeb%7CMar%7CApr%7CMay%7CJun%7CJul&chxt=x%2Cy&icac=documentation&icretina=1&ichm=9dcd7bd4fbd9c72b2cc9d47153b4d0cce90588f5fdf565656447f101c4e0e5d9)](https://editor.image-charts.com/chart?chbh=15%2C10&chco=224499%2C009900&chd=t2%3A0%2C10%2C20%2C30%2C20%2C70%2C80%7C0%2C20%2C10%2C5%2C20%2C30%2C10%7C10%2C0%2C20%2C15%2C60%2C40%2C30&chm=D%2C76A4FB%2C2%2C0%2C3&chs=700x200&cht=bvs&chxl=0%3A%7CJan%7CFeb%7CMar%7CApr%7CMay%7CJun%7CJul&chxt=x%2Cy&icac=documentation&icretina=1&ichm=9dcd7bd4fbd9c72b2cc9d47153b4d0cce90588f5fdf565656447f101c4e0e5d9)


```
cht=bvs
chd=t2:
  0,10,20,30,20,70,80|
  0,20,10,5,20,30,10|
  10,0,20,15,60,40,30
chm=D,76A4FB,2,0,3
```
  
##### Bar chart with multiple reference lines
  
[![bar chart with multiple reference lines](https://image-charts.com/chart?chbr=8&chd=a1%3A503%2C627%2C1052%2C1371%2C460%2C562%2C957%2C1395%2C549%2C627%2C869%2C1098%2C475%2C581%2C654%2C795%2C368%2C540%2C742%2C829%2C408%2C627%2C790%2C1036%2C329%2C459%2C733%2C857%2C360%2C492%2C311%7C7.65%2C7.88%2C8.63%2C8.33%2C7.88%2C7.01%2C8.64%2C8.81%2C8.02%2C7.85%2C7.73%2C8.26%2C8.26%2C6.85%2C7.69%2C8.28%2C8.09%2C7.64%2C9.15%2C8.64%2C7.12%2C7.61%2C8.81%2C9.18%2C6.69%2C7.46%2C7.87%2C8.63%2C7.66%2C6.88%2C7.08%7C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6&chf=b0%2Clg%2C90%2C05B142%2C1%2C0CE858%2C0.2&chm=D%2C0033FF%2C1%2C0%2C5%2C1%2C0%2C2%7CD%2C3DC9F9%2C2%2C0%2C5%2C3%2C0%2C3&chma=0%2C0%2C10%2C10&chs=700x450&cht=bvs&chxl=0%3A%7C1%2F25%7C%7C%7C1%2F26%7C%7C%7C1%2F27%7C%7C%7C1%2F28%7C%7C%7C1%2F29%7C%7C%7C1%2F30%7C%7C%7C1%2F31%7C%7C%7C2%2F1%7C%7C%7C&chxr=2%2C0%2C10%7C3%2C0%2C10&chxs=3%2C000000%2C0&chxt=x%2Cy%2Cr%2Cr&icac=documentation&iclocale=en&icretina=1&ichm=8777d02a12ac60fd56146a81271e1b03e04855e4ad2e714dbd03ea14cd2c04f9)](https://editor.image-charts.com/chart?chbr=8&chd=a1%3A503%2C627%2C1052%2C1371%2C460%2C562%2C957%2C1395%2C549%2C627%2C869%2C1098%2C475%2C581%2C654%2C795%2C368%2C540%2C742%2C829%2C408%2C627%2C790%2C1036%2C329%2C459%2C733%2C857%2C360%2C492%2C311%7C7.65%2C7.88%2C8.63%2C8.33%2C7.88%2C7.01%2C8.64%2C8.81%2C8.02%2C7.85%2C7.73%2C8.26%2C8.26%2C6.85%2C7.69%2C8.28%2C8.09%2C7.64%2C9.15%2C8.64%2C7.12%2C7.61%2C8.81%2C9.18%2C6.69%2C7.46%2C7.87%2C8.63%2C7.66%2C6.88%2C7.08%7C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6&chf=b0%2Clg%2C90%2C05B142%2C1%2C0CE858%2C0.2&chm=D%2C0033FF%2C1%2C0%2C5%2C1%2C0%2C2%7CD%2C3DC9F9%2C2%2C0%2C5%2C3%2C0%2C3&chma=0%2C0%2C10%2C10&chs=700x450&cht=bvs&chxl=0%3A%7C1%2F25%7C%7C%7C1%2F26%7C%7C%7C1%2F27%7C%7C%7C1%2F28%7C%7C%7C1%2F29%7C%7C%7C1%2F30%7C%7C%7C1%2F31%7C%7C%7C2%2F1%7C%7C%7C&chxr=2%2C0%2C10%7C3%2C0%2C10&chxs=3%2C000000%2C0&chxt=x%2Cy%2Cr%2Cr&icac=documentation&iclocale=en&icretina=1&ichm=8777d02a12ac60fd56146a81271e1b03e04855e4ad2e714dbd03ea14cd2c04f9)

The important points are:
  
- Chart data `chd` parameter is `a1:503,627,1052,1371,460,562,957,1395,549,627,869,1098,475,581,654,795,368,540,742,829,408,627,790,1036,329,459,733,857,360,492,311|7.65,7.88,8.63,8.33,7.88,7.01,8.64,8.81,8.02,7.85,7.73,8.26,8.26,6.85,7.69,8.28,8.09,7.64,9.15,8.64,7.12,7.61,8.81,9.18,6.69,7.46,7.87,8.63,7.66,6.88,7.08|6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6`. `a1` means "only use the first data serie (delimited with `|`) for the bar chart, every other data series can be used as line markers.
- `chxt=x,y,r,r` means "display a chart with a `x` axis, a `y` axis and two `r` right axis"
- `chm=D,0033FF,1,0,5,1,0,2|D,3DC9F9,2,0,5,1,0,3` the two [line Markers](#line-markers) use the first (1) and second (2) data-serie. Also note that ",2" and ",3" means use the first right axis and the second axis defined in `chxt`

If we stop there we get the chart below:
  
[![bar chart with multiple reference lines](https://image-charts.com/chart?chbr=8&chd=a1%3A503%2C627%2C1052%2C1371%2C460%2C562%2C957%2C1395%2C549%2C627%2C869%2C1098%2C475%2C581%2C654%2C795%2C368%2C540%2C742%2C829%2C408%2C627%2C790%2C1036%2C329%2C459%2C733%2C857%2C360%2C492%2C311%7C7.65%2C7.88%2C8.63%2C8.33%2C7.88%2C7.01%2C8.64%2C8.81%2C8.02%2C7.85%2C7.73%2C8.26%2C8.26%2C6.85%2C7.69%2C8.28%2C8.09%2C7.64%2C9.15%2C8.64%2C7.12%2C7.61%2C8.81%2C9.18%2C6.69%2C7.46%2C7.87%2C8.63%2C7.66%2C6.88%2C7.08%7C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6&chf=b0%2Clg%2C90%2C05B142%2C1%2C0CE858%2C0.2&chm=D%2C0033FF%2C1%2C0%2C5%2C1%2C0%2C2%7CD%2C3DC9F9%2C2%2C0%2C5%2C3%2C0%2C3&chma=0%2C0%2C10%2C10&chs=700x450&cht=bvs&chxl=0%3A%7C1%2F25%7C%7C%7C1%2F26%7C%7C%7C1%2F27%7C%7C%7C1%2F28%7C%7C%7C1%2F29%7C%7C%7C1%2F30%7C%7C%7C1%2F31%7C%7C%7C2%2F1%7C%7C%7C&chxr=2%2C0%2C10&chxt=x%2Cy%2Cr%2Cr&icac=documentation&iclocale=en&icretina=1&ichm=f4a9dd60e227a371462a387ea623bd55c05c3e994639ca907ae483577ab8a799)](https://editor.image-charts.com/chart?chbr=8&chd=a1%3A503%2C627%2C1052%2C1371%2C460%2C562%2C957%2C1395%2C549%2C627%2C869%2C1098%2C475%2C581%2C654%2C795%2C368%2C540%2C742%2C829%2C408%2C627%2C790%2C1036%2C329%2C459%2C733%2C857%2C360%2C492%2C311%7C7.65%2C7.88%2C8.63%2C8.33%2C7.88%2C7.01%2C8.64%2C8.81%2C8.02%2C7.85%2C7.73%2C8.26%2C8.26%2C6.85%2C7.69%2C8.28%2C8.09%2C7.64%2C9.15%2C8.64%2C7.12%2C7.61%2C8.81%2C9.18%2C6.69%2C7.46%2C7.87%2C8.63%2C7.66%2C6.88%2C7.08%7C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6&chf=b0%2Clg%2C90%2C05B142%2C1%2C0CE858%2C0.2&chm=D%2C0033FF%2C1%2C0%2C5%2C1%2C0%2C2%7CD%2C3DC9F9%2C2%2C0%2C5%2C3%2C0%2C3&chma=0%2C0%2C10%2C10&chs=700x450&cht=bvs&chxl=0%3A%7C1%2F25%7C%7C%7C1%2F26%7C%7C%7C1%2F27%7C%7C%7C1%2F28%7C%7C%7C1%2F29%7C%7C%7C1%2F30%7C%7C%7C1%2F31%7C%7C%7C2%2F1%7C%7C%7C&chxr=2%2C0%2C10&chxt=x%2Cy%2Cr%2Cr&icac=documentation&iclocale=en&icretina=1&ichm=f4a9dd60e227a371462a387ea623bd55c05c3e994639ca907ae483577ab8a799)

Note how the fourth axis (the second `r` right axis) from `chxt` is visible but with thr same data range as the first `y` axis while we would like it to have the same data-range as the first `r` right axis from 0 to 10. Current [aXis data Range](/reference/chart-axis/#axis-range) `chxr` is set for the first `r` axis with :
  
- `chxr=2,0,10` it means "on the second axis defined in `chxt`. Counting from 0, set the data range from `0`to `10`"
  
Let's add another data range for our last right axis:
  
- `chxr=2,0,10|3,0,10` the newly added part means "on the third axis defined in `chxt` (the last right axis). Counting from 0, set the data range from `0`to `10`"

Image-Charts then renders:
  
[![bar chart with multiple reference lines and two right axis](https://image-charts.com/chart?chbr=8&chd=a1%3A503%2C627%2C1052%2C1371%2C460%2C562%2C957%2C1395%2C549%2C627%2C869%2C1098%2C475%2C581%2C654%2C795%2C368%2C540%2C742%2C829%2C408%2C627%2C790%2C1036%2C329%2C459%2C733%2C857%2C360%2C492%2C311%7C7.65%2C7.88%2C8.63%2C8.33%2C7.88%2C7.01%2C8.64%2C8.81%2C8.02%2C7.85%2C7.73%2C8.26%2C8.26%2C6.85%2C7.69%2C8.28%2C8.09%2C7.64%2C9.15%2C8.64%2C7.12%2C7.61%2C8.81%2C9.18%2C6.69%2C7.46%2C7.87%2C8.63%2C7.66%2C6.88%2C7.08%7C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6&chf=b0%2Clg%2C90%2C05B142%2C1%2C0CE858%2C0.2&chm=D%2C0033FF%2C1%2C0%2C5%2C1%2C0%2C2%7CD%2C3DC9F9%2C2%2C0%2C5%2C3%2C0%2C3&chma=0%2C0%2C10%2C10&chs=700x450&cht=bvs&chxl=0%3A%7C1%2F25%7C%7C%7C1%2F26%7C%7C%7C1%2F27%7C%7C%7C1%2F28%7C%7C%7C1%2F29%7C%7C%7C1%2F30%7C%7C%7C1%2F31%7C%7C%7C2%2F1%7C%7C%7C&chxr=2%2C0%2C10%7C3%2C0%2C10&chxt=x%2Cy%2Cr%2Cr&icac=documentation&iclocale=en&icretina=1&ichm=99ae7f7a67fd5aa8ada5352358e96889d3eb2e89d1a8e6aea23b6f00f077e0b5)](https://editor.image-charts.com/chart?chbr=8&chd=a1%3A503%2C627%2C1052%2C1371%2C460%2C562%2C957%2C1395%2C549%2C627%2C869%2C1098%2C475%2C581%2C654%2C795%2C368%2C540%2C742%2C829%2C408%2C627%2C790%2C1036%2C329%2C459%2C733%2C857%2C360%2C492%2C311%7C7.65%2C7.88%2C8.63%2C8.33%2C7.88%2C7.01%2C8.64%2C8.81%2C8.02%2C7.85%2C7.73%2C8.26%2C8.26%2C6.85%2C7.69%2C8.28%2C8.09%2C7.64%2C9.15%2C8.64%2C7.12%2C7.61%2C8.81%2C9.18%2C6.69%2C7.46%2C7.87%2C8.63%2C7.66%2C6.88%2C7.08%7C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6&chf=b0%2Clg%2C90%2C05B142%2C1%2C0CE858%2C0.2&chm=D%2C0033FF%2C1%2C0%2C5%2C1%2C0%2C2%7CD%2C3DC9F9%2C2%2C0%2C5%2C3%2C0%2C3&chma=0%2C0%2C10%2C10&chs=700x450&cht=bvs&chxl=0%3A%7C1%2F25%7C%7C%7C1%2F26%7C%7C%7C1%2F27%7C%7C%7C1%2F28%7C%7C%7C1%2F29%7C%7C%7C1%2F30%7C%7C%7C1%2F31%7C%7C%7C2%2F1%7C%7C%7C&chxr=2%2C0%2C10%7C3%2C0%2C10&chxt=x%2Cy%2Cr%2Cr&icac=documentation&iclocale=en&icretina=1&ichm=99ae7f7a67fd5aa8ada5352358e96889d3eb2e89d1a8e6aea23b6f00f077e0b5)

For esthetic purpose, let's hide the last right axis. To do that we will use [aXis Style]() `chxs` parameter.
  
- `chxs=3,000000,0` it means "counting from 0, for the third declared axis in `chxt` parameter, set the font color to `000000` and the font-size to `0`px so it hides completly the axis"
  
This last change finally renders:

[![bar chart with multiple reference lines from chart api](https://image-charts.com/chart?chbr=8&chd=a1%3A503%2C627%2C1052%2C1371%2C460%2C562%2C957%2C1395%2C549%2C627%2C869%2C1098%2C475%2C581%2C654%2C795%2C368%2C540%2C742%2C829%2C408%2C627%2C790%2C1036%2C329%2C459%2C733%2C857%2C360%2C492%2C311%7C7.65%2C7.88%2C8.63%2C8.33%2C7.88%2C7.01%2C8.64%2C8.81%2C8.02%2C7.85%2C7.73%2C8.26%2C8.26%2C6.85%2C7.69%2C8.28%2C8.09%2C7.64%2C9.15%2C8.64%2C7.12%2C7.61%2C8.81%2C9.18%2C6.69%2C7.46%2C7.87%2C8.63%2C7.66%2C6.88%2C7.08%7C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6&chf=b0%2Clg%2C90%2C05B142%2C1%2C0CE858%2C0.2&chm=D%2C0033FF%2C1%2C0%2C5%2C1%2C0%2C2%7CD%2C3DC9F9%2C2%2C0%2C5%2C3%2C0%2C3&chma=0%2C0%2C10%2C10&chs=700x450&cht=bvs&chxl=0%3A%7C1%2F25%7C%7C%7C1%2F26%7C%7C%7C1%2F27%7C%7C%7C1%2F28%7C%7C%7C1%2F29%7C%7C%7C1%2F30%7C%7C%7C1%2F31%7C%7C%7C2%2F1%7C%7C%7C&chxr=2%2C0%2C10%7C3%2C0%2C10&chxs=3%2C000000%2C0&chxt=x%2Cy%2Cr%2Cr&icac=documentation&iclocale=en&icretina=1&ichm=8777d02a12ac60fd56146a81271e1b03e04855e4ad2e714dbd03ea14cd2c04f9)](https://editor.image-charts.com/chart?chbr=8&chd=a1%3A503%2C627%2C1052%2C1371%2C460%2C562%2C957%2C1395%2C549%2C627%2C869%2C1098%2C475%2C581%2C654%2C795%2C368%2C540%2C742%2C829%2C408%2C627%2C790%2C1036%2C329%2C459%2C733%2C857%2C360%2C492%2C311%7C7.65%2C7.88%2C8.63%2C8.33%2C7.88%2C7.01%2C8.64%2C8.81%2C8.02%2C7.85%2C7.73%2C8.26%2C8.26%2C6.85%2C7.69%2C8.28%2C8.09%2C7.64%2C9.15%2C8.64%2C7.12%2C7.61%2C8.81%2C9.18%2C6.69%2C7.46%2C7.87%2C8.63%2C7.66%2C6.88%2C7.08%7C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6%2C6&chf=b0%2Clg%2C90%2C05B142%2C1%2C0CE858%2C0.2&chm=D%2C0033FF%2C1%2C0%2C5%2C1%2C0%2C2%7CD%2C3DC9F9%2C2%2C0%2C5%2C3%2C0%2C3&chma=0%2C0%2C10%2C10&chs=700x450&cht=bvs&chxl=0%3A%7C1%2F25%7C%7C%7C1%2F26%7C%7C%7C1%2F27%7C%7C%7C1%2F28%7C%7C%7C1%2F29%7C%7C%7C1%2F30%7C%7C%7C1%2F31%7C%7C%7C2%2F1%7C%7C%7C&chxr=2%2C0%2C10%7C3%2C0%2C10&chxs=3%2C000000%2C0&chxt=x%2Cy%2Cr%2Cr&icac=documentation&iclocale=en&icretina=1&ichm=8777d02a12ac60fd56146a81271e1b03e04855e4ad2e714dbd03ea14cd2c04f9)
  
  
## Line Fills

You can fill the area below a data line with a solid color.

You can combine line fills with any other `chm` parameters using a pipe character ( `|` ) to separate the chm parameters.

#### Syntax

```
chm=
  <b_or_B>,<color>,<start_line_index>,<end_line_index>,<0>
    |...|
  <b_or_B>,<color>,<start_line_index>,<end_line_index>,<0>
```

- **`<b_or_B>`**
  Whether to fill to the bottom of the chart, or just to the next lower line.
    - B - Fill from `<start_line_index>` to the bottom of the chart. ~~`<end_line_index>` supports a special syntax to let you fill a segment of the chart. This is easiest if you have a chart with a single line that you want to fill.~~
    - b - Fill between two lines in a multi-line chart. Start and end lines are indicated by `<start_line_index>` and `<end_line_index>`.
- **`<color>`** An [RRGGBB format hexadecimal](/reference/color-format) number of the fill color
- **`<start_line_index>`** The index of the line at which the fill starts. The first data series specified in chd has an index of zero (0), the second data series has an index of 1, and so on.
- **`<end_line_index>`**
    - Fill type 'b' - The line at which to stop the fill. This line must be below the current line.
    - Fill type 'B' - One of the following choices:
        - *any value* - Any single number in this parameter is ignored, and the fill will go from the specified line to the base of the chart
        - ~~start:end - To fill a vertical slice below the chart, specify start:end, where these are data point indices describing where to start and stop the fill. Both values are optional, and default to first_point:last_point. (See example below.)~~
- **<0>** Reserved — must be zero.

#### Examples

The following example fills the entire area under the line.


[![chart](https://image-charts.com/chart?chco=224499&chd=s%3AATSTaVd21981uocA&chm=B%2C76A4FB%2C0%2C0%2C0&chs=700x125&cht=lc&chxl=0%3A%7CSep%7COct%7CNov%7CDec%7C1%3A%7C%7C50%7C100&chxt=x%2Cy&icac=documentation&icretina=1&ichm=5508a726d1315b21df6c07930bff71a4607ebe7b2bed423d3dda2f42422d5e31)](https://editor.image-charts.com/chart?chco=224499&chd=s%3AATSTaVd21981uocA&chm=B%2C76A4FB%2C0%2C0%2C0&chs=700x125&cht=lc&chxl=0%3A%7CSep%7COct%7CNov%7CDec%7C1%3A%7C%7C50%7C100&chxt=x%2Cy&icac=documentation&icretina=1&ichm=5508a726d1315b21df6c07930bff71a4607ebe7b2bed423d3dda2f42422d5e31
)

```
chm=B,76A4FB,0,0,0
```

The following example has 3 series, 3 lines and 2 fills. First serie (`0,1`) has an orange color fill (`#fdb45c`), second serie (`1,2`) has a red color fill (`#ff6e6e`):

```
chd=s:cefhjkqwrlgYcfgc,QSSVXXdkfZUMRTUQ,HJJMOOUbVPKDHKLH
chm=b,fdb45c,0,1,0|b,ff6e6e,1,2,0
```

[![chart](https://image-charts.com/chart?chco=ca7002%2Ccc0000%2Ccc0000&chd=s%3AcefhjkqwrlgYcfgc%2CQSSVXXdkfZUMRTUQ%2CHJJMOOUbVPKDHKLH&chls=1%2C1%2C0%7C1%2C1%2C0%7C1%2C1%2C0%7C1%2C4%2C0&chm=b%2Cfdb45c%2C0%2C1%2C0%7Cb%2Cff6e6e%2C1%2C2%2C1&chs=700x300&cht=lc&chxl=1%3A%7C%7C50%7C100%7C0%3A%7CJan%7CFeb%7CMar%7CApr%7CMay%7CJun%7C&chxt=x%2Cy&icac=documentation&icretina=1&ichm=0f213bd2155dc07a239c5a64a9a26028c1ee2bd9ee9a522fe19fc851d3afe1a3)](https://editor.image-charts.com/chart?chco=ca7002%2Ccc0000%2Ccc0000&chd=s%3AcefhjkqwrlgYcfgc%2CQSSVXXdkfZUMRTUQ%2CHJJMOOUbVPKDHKLH&chls=1%2C1%2C0%7C1%2C1%2C0%7C1%2C1%2C0%7C1%2C4%2C0&chm=b%2Cfdb45c%2C0%2C1%2C0%7Cb%2Cff6e6e%2C1%2C2%2C1&chs=700x300&cht=lc&chxl=1%3A%7C%7C50%7C100%7C0%3A%7CJan%7CFeb%7CMar%7CApr%7CMay%7CJun%7C&chxt=x%2Cy&icac=documentation&icretina=1&ichm=0f213bd2155dc07a239c5a64a9a26028c1ee2bd9ee9a522fe19fc851d3afe1a3)


The following example fills 2 datasets with yellow (consumed) and grey (prevision) colors.

[![chart](https://image-charts.com/chart?chco=ffc107%2Ccccccc&chd=a%3A1%2C2%2C3%2C4%2C5%2C6%2C7%7C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13&chg=0%2C20%2C0%2C0&chls=3%7C0&chm=B%2Cffc107%2C0%2C0%2C0%7CB%2Ccccccc%2C1%2C0%2C0&chs=700x300&cht=lc&chtt=Power%20consumption%20%28mW%29%20and%20prevision&chxl=0%3A%7CMon%7CTue%7CWed%7CThu%7CFri%7CSat%7CSun%7CMon%7CTue%7CWed%7CThu%7CFri%7CSat&chxs=0%2C676767%2C11.5%2C0%2Ct%2C676767%7C1%2C676767%2C11.5%2C0%2Clt%2C676767&chxt=x%2Cy&icac=documentation&icretina=1&ichm=1497a07b86ed6d3e9a690a62b9b5f1bdd3853ab6afae55711e920b55d2d1536a)](https://editor.image-charts.com/chart?chco=ffc107%2Ccccccc&chd=a%3A1%2C2%2C3%2C4%2C5%2C6%2C7%7C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13&chg=0%2C20%2C0%2C0&chls=3%7C0&chm=B%2Cffc107%2C0%2C0%2C0%7CB%2Ccccccc%2C1%2C0%2C0&chs=700x300&cht=lc&chtt=Power%20consumption%20%28mW%29%20and%20prevision&chxl=0%3A%7CMon%7CTue%7CWed%7CThu%7CFri%7CSat%7CSun%7CMon%7CTue%7CWed%7CThu%7CFri%7CSat&chxs=0%2C676767%2C11.5%2C0%2Ct%2C676767%7C1%2C676767%2C11.5%2C0%2Clt%2C676767&chxt=x%2Cy&icac=documentation&icretina=1&ichm=1497a07b86ed6d3e9a690a62b9b5f1bdd3853ab6afae55711e920b55d2d1536a)

```
chd=a:1,2,3,4,5,6,7|1,2,3,4,5,6,7,8,9,10,11,12,13
chm=B,ffc107,0,0,0|B,cccccc,1,0,0
```

## Text and Data Value Markers chm

You can label specific points on your chart with custom text, or with formatted versions of the data at that point.

#### Syntax

```
chm=
  N<formatting_string>,<color>,<series_index>,<opt_which_points>,<size>,<opt_z_order>,<opt_placement>,<opt_font_family>,<opt_font_style>
```

- **`<formatting_string>`** - The value of the data at this point, with optional formatting. If you do not use the `chds` parameter (custom scaling) it gives the exact encoded value;
    if you do use that parameter with any format type the value will be scaled to the range that you specify. See an example of `chds` with numeric markers below.
    The formatting string syntax is as follows:
    `<preceding_text>*<number_type><decimal_places>zs<x or y>*<following_text>`
    - `<preceding_text>` - Text to precede each value.
    - `*...*` - An optional block wrapped in literal asterisks, in which you can specify formatting details for numbers. The following values are supported, and are all optional:
        - `<number_type>` - The number format, for numeric values. Choose one of the following:
            - `f` - *[Default]* Floating point format. Consider specifying precision as well with the <decimal_places> value.
            - `p` - Percentage format. A % sign is appended automatically. Note: When using this format, data values from 0.0 — 1.0 map to 0 — 100% (for example, 0.43 will be shown as 43%).
            - `e` - Scientific notation format.
            - `c*<CUR>*` - Format the number in the currency specified, with the appropriate currency marker. Replace <CUR> with a three-letter currency code. Example: cEUR for Euros. You can find a list of codes on the [ISO 4217 wikipedia page](https://en.wikipedia.org/wiki/ISO_4217#Active_codes), although not all symbols are supported.
        - `<decimal_places>` - An integer specifying how many decimal places to show. The value is rounded (not truncated) to this length. *Default is 2*.
        - `z` -  Display trailing zeros. *Default is no*.
        - `s` -  Display group separators. *Default is no*.
        - `x` or `y` -  Display the data from the x- or y-coordinate, as specified. The meaning of x data varies by chart type: experiment with your chart to determine what it means. *Default is 'y'*.
    - `<following_text>` - Text to follow each value.

- **`<color>`** The color of the markers for this series, in [RRGGBB format hexadecimal](/reference/color-format).
- **`<series_index>`** The zero-based index of the data series on which to draw the markers. Ignored for h markers and markers that specify location by x/y position (start with the @ character). You can use hidden data series as a source for markers; see Compound Charts for more information. Grouped vertical bar charts support a special extended syntax to align markers with specific bars.

- **`<opt_which_points>`**  
*[Optional]* Which point(s) to draw markers on. Default is all markers. Use one of the following values:
     <!-- - n.d - Which data point to draw the marker on, where n.d is the zero-based index in the series. If you specify a non-integer value, then the fraction indicates a calculated intermediate point. For example, 3.5 means halfway between point 3 and point 4. -->

    - `start:end`<!--:n--> - Draw a marker on every <!--n-th--> data point in a range, from start to end index values, inclusive. All parameters are optional (may be absent), so 3: would be from the fourth element to the last, <!--step 1,--> and omitting this parameter entirely would default to first:last<!--:1-->. All values can be floating point numbers. start and end can be negative, to count backward from the last value. If both start and end are negative, be sure that they are listed in increasing value (for example, -6:-1<!--:1-->). <!--If the n step value is less than 1, it will calculate additional data points by interpolating the data values given. Default values are first:last:1-->

    - -1 - Draw a marker on all data points. You can also leave this parameter empty to draw on all data points.
    <!-- - -n - Draw a marker on every n-th data point. -->
    <!-- - `x:y` - [Not supported for N-type markers] Draw a marker at a specific x/y point on the chart. This point does not have to be on a line. Add the at character (@) before the marker type to use this option. Specify the coordinates as floating point values, where 0:0 is the bottom left corner of the chart, 0.5:0.5 is the center of the chart, and 1:1 is the top right corner of the chart. For example, to add a red, 15-pixel diamond to the center of a chart, use @d,FF0000,0,0.5:0.5,15. -->

- **`<size>`** The size of the marker, in pixels. <!-- Most take a single number value for this parameter; the V, H, and S markers support the syntax <size>[:width] where the optional second part specifies the line or marker length. -->

- **`<opt_z_order>`** Not supported yet

- **`<opt_placement>`** [Optional] Additional placement details describing where to put this marker, in relation to the data point.
    - Bar-relative placement [[Bar charts only]](/bar-charts): 's', 'c', 'e' - Base, center, or top of a bar. For stacked charts, this is relative to the section of the bar for each series, not for the whole bar. If the series index given is -1 (stack total) it is in relation to the whole bar. Default value is 'c'.

- **`<opt_font_family>`** [Optional] one of the [supported open-source font](/reference/chart-font#supported-open-source-fonts). Don't forget to checkout the [font gallery](https://fonts.google.com/)

- **`<opt_font_style>`** [Optional] one of `normal` or `italic`. Default value used is `normal`

!!! tip "-1 for *series_index* not implemented yet"
    Do you want this feature ? [Just ask us :angel:](mailto:support@image-charts.com) !  

#### Examples

Here's an example of value labels on a bar chart.

The first chart (N*p0*) specifies a data value marker, with values shown as a percentage, rounded to zero decimal places, in white, on all values, in 13-point text. Note that the data values are all between 0.0 and 1.0, which, in percentage format, are moved up two decimal places.

[![chart](https://image-charts.com/chart?chd=t%3A0.7%2C0.25%2C0.18%2C0.15%2C0.115%2C0.100%2C0.30&chf=b0%2Clg%2C90%2C5d62b5%2C0.5%2CA7CDF2%2C1&chm=N%2Ap0%2A%2CFFFFFF%2C0%2C-1%2C13&chma=10%2C10%2C10%2C10&chs=700x300&cht=bvs&chxl=0%3A%7CIreland%7CSaudi%7CCanada%7CIran%7CFrance%7CUS%7CUK%7C1%3A%7CCountry%7C3%3A%7CPercent%7C&chxr=2%2C0%2C1&chxs=2N%2Ap0%2A%2C828080%2C12%7C0%2C828080%2C12&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=f1922365fa0b0605835c1cdc2b89ac126541f7343b615869249098ff8a81cce4)](https://editor.image-charts.com/chart?chd=t%3A0.7%2C0.25%2C0.18%2C0.15%2C0.115%2C0.100%2C0.30&chf=b0%2Clg%2C90%2C5d62b5%2C0.5%2CA7CDF2%2C1&chm=N%2Ap0%2A%2CFFFFFF%2C0%2C-1%2C13&chma=10%2C10%2C10%2C10&chs=700x300&cht=bvs&chxl=0%3A%7CIreland%7CSaudi%7CCanada%7CIran%7CFrance%7CUS%7CUK%7C1%3A%7CCountry%7C3%3A%7CPercent%7C&chxr=2%2C0%2C1&chxs=2N%2Ap0%2A%2C828080%2C12%7C0%2C828080%2C12&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=f1922365fa0b0605835c1cdc2b89ac126541f7343b615869249098ff8a81cce4)

```
chm=
  N*p0*,FFFFFF,0,-1,13
chd=t:
  0.7,0.25,0.18,0.15,0.115,0.100,0.30
```

The second chart (N*cUSD1*) shows values formatted as Dollar, in white, on all values, in 13-point text.

[![chart](https://image-charts.com/chart?chd=a%3A290%2C250%2C180%2C140%2C115%2C100%2C30&chf=b0%2Clg%2C90%2C76A4FB%2C0.5%2CA7CDF2%2C1&chm=N%2AcUSD1%2A%2CFFFFFF%2C0%2C-1%2C13&chma=10%2C10%2C10%2C10&chs=700x300&cht=bvs&chxl=0%3A%7CIreland%7CSaudi%7CCanada%7CIran%7CFrance%7CUS%7CUK%7C1%3A%7CCountry%7C3%3A%7CAmount%7C&chxs=2N%2AcUSD0sz%2A%2C828080%2C12%7C0%2C828080%2C12&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=b646e1f7267344bce0353d1c1a78da4c4aa7c616c4129c0e9c9076f58f00cf85)](https://editor.image-charts.com/chart?chd=a%3A290%2C250%2C180%2C140%2C115%2C100%2C30&chf=b0%2Clg%2C90%2C76A4FB%2C0.5%2CA7CDF2%2C1&chm=N%2AcUSD1%2A%2CFFFFFF%2C0%2C-1%2C13&chma=10%2C10%2C10%2C10&chs=700x300&cht=bvs&chxl=0%3A%7CIreland%7CSaudi%7CCanada%7CIran%7CFrance%7CUS%7CUK%7C1%3A%7CCountry%7C3%3A%7CAmount%7C&chxs=2N%2AcUSD0sz%2A%2C828080%2C12%7C0%2C828080%2C12&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=b646e1f7267344bce0353d1c1a78da4c4aa7c616c4129c0e9c9076f58f00cf85)

```
chm=
  N*cUSD1*,FFFFFF,0,-1,13
```

Example with font-family and font-style

[![chart](https://image-charts.com/chart?chd=a%3A290%2C250%2C180%2C140%2C115%2C100%2C30&chf=b0%2Clg%2C90%2C76A4FB%2C0.5%2CA7CDF2%2C1&chm=N%2AcUSD1%2A%2C4e5399%2C0%2C-1%2C13%2C%2C%2CEconomica%2Citalic&chma=10%2C10%2C10%2C10&chs=700x300&cht=bvs&chxl=0%3A%7CIreland%7CSaudi%7CCanada%7CIran%7CFrance%7CUS%7CUK%7C1%3A%7CCountry%7C3%3A%7CAmount%7C&chxs=2N%2AcUSD0sz%2A%2C828080%2C12%7C0%2C828080%2C12&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=d46ed7db01cf82da27ff154a6a9148b53e0c335f85a684d051196132dcf29769)](https://editor.image-charts.com/chart?chd=a%3A290%2C250%2C180%2C140%2C115%2C100%2C30&chf=b0%2Clg%2C90%2C76A4FB%2C0.5%2CA7CDF2%2C1&chm=N%2AcUSD1%2A%2C4e5399%2C0%2C-1%2C13%2C%2C%2CEconomica%2Citalic&chma=10%2C10%2C10%2C10&chs=700x300&cht=bvs&chxl=0%3A%7CIreland%7CSaudi%7CCanada%7CIran%7CFrance%7CUS%7CUK%7C1%3A%7CCountry%7C3%3A%7CAmount%7C&chxs=2N%2AcUSD0sz%2A%2C828080%2C12%7C0%2C828080%2C12&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=d46ed7db01cf82da27ff154a6a9148b53e0c335f85a684d051196132dcf29769)

```
chm=
  N*cUSD1*,4e5399,0,-1,13,,,Economica,italic
```

Stacked-chart with labels positioned at the center

[![chart](https://image-charts.com/chart?chbh=20&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C-1%2C10%2C%2Cc%7CN%2C000000%2C1%2C-1%2C10%2C%2Cc%7CN%2C000000%2C2%2C-1%2C10%2C%2Cc&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvs&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=documentation&icretina=1&ichm=f3f3cd1ae037a79bc760c9dc4fab48821a4fd259a3d6731235adc9fe7d86eb10)](https://editor.image-charts.com/chart?chbh=20&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C-1%2C10%2C%2Cc%7CN%2C000000%2C1%2C-1%2C10%2C%2Cc%7CN%2C000000%2C2%2C-1%2C10%2C%2Cc&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvs&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=documentation&icretina=1&ichm=f3f3cd1ae037a79bc760c9dc4fab48821a4fd259a3d6731235adc9fe7d86eb10)

```
chm=
  N,000000,0,-1,10,,c|N,000000,1,-1,10,,c|N,000000,2,-1,10,,c
```

Bar-chart with labels positioned at the top

[![chart](https://image-charts.com/chart?chbh=20&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C-1%2C10%2C%2Ce%7CN%2C000000%2C1%2C-1%2C10%2C%2Ce%7CN%2C000000%2C2%2C-1%2C10%2C%2Ce&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvs&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=documentation&icretina=1&ichm=92ff89cdfbbd04bb5dd3be010b2fa23cf51bdfa2545e2f3acfd4e1676b42049a)](https://editor.image-charts.com/chart?chbh=20&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C-1%2C10%2C%2Ce%7CN%2C000000%2C1%2C-1%2C10%2C%2Ce%7CN%2C000000%2C2%2C-1%2C10%2C%2Ce&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvs&chxs=0%2C000000%2C0%2C0%2C_&chxt=y&icac=documentation&icretina=1&ichm=92ff89cdfbbd04bb5dd3be010b2fa23cf51bdfa2545e2f3acfd4e1676b42049a)

```
chm=
  N,000000,0,-1,10,,e|N,000000,1,-1,10,,e|N,000000,2,-1,10,,e
```

Bar-chart with labels positioned at the bottom

[![chart](https://image-charts.com/chart?chd=a%3A290%2C250%2C180%2C140%2C115%2C100%2C30&chf=b0%2Clg%2C90%2C76A4FB%2C0.5%2CA7CDF2%2C1&chm=N%2AcUSD1%2A%2CFFFFFF%2C0%2C-1%2C13%2C%2Cs&chma=10%2C10%2C10%2C10&chs=700x300&cht=bvs&chxl=0%3A%7CIreland%7CSaudi%7CCanada%7CIran%7CFrance%7CUS%7CUK%7C1%3A%7CCountry%7C3%3A%7CAmount%7C&chxs=2N%2AcUSD0sz%2A%2C828080%2C12%7C0%2C828080%2C12&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=f44b88c7b3e4f011d224c9aacb55bcaa724e573d59c2ef305a22fa61900bb94a)](https://editor.image-charts.com/chart?chd=a%3A290%2C250%2C180%2C140%2C115%2C100%2C30&chf=b0%2Clg%2C90%2C76A4FB%2C0.5%2CA7CDF2%2C1&chm=N%2AcUSD1%2A%2CFFFFFF%2C0%2C-1%2C13%2C%2Cs&chma=10%2C10%2C10%2C10&chs=700x300&cht=bvs&chxl=0%3A%7CIreland%7CSaudi%7CCanada%7CIran%7CFrance%7CUS%7CUK%7C1%3A%7CCountry%7C3%3A%7CAmount%7C&chxs=2N%2AcUSD0sz%2A%2C828080%2C12%7C0%2C828080%2C12&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=f44b88c7b3e4f011d224c9aacb55bcaa724e573d59c2ef305a22fa61900bb94a)

```
chm=
  N*cUSD1*,FFFFFF,0,-1,13,,s
```
