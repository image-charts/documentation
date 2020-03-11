# Markers

## Shape Markers

You can specify graphical markers for all <!-- or individual -->data points on a chart. If two or more markers occupy the same point, the markers are drawn in the order ~~in which they appear in the chm parameter~~ of the data series definition. <!--You can also create text markers on data points, which is covered in Data Point Markers.-->

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
    `chm` parameter can also be used for [line fills](/line-charts/#line-fills) in line charts

!!! info "Enterprise+ subscribers"
    Compound charts are only enabled in **Enterprise+** subscriptions

You can combine several chart types with line markers <!--or candlestick--> to highlight data trends or show variance. When you add line <!--or candlestick--> markers onto bar, scatter, or other chart types, the resulting chart is called a **compound chart**. Some compound charts look like a combination of two chart types—for instance, a bar chart with a tracking line:


[![chart](https://image-charts.com/chart?chbh=5%2C2&chco=4D89F9%2CC6D9FD&chd=s2%3A1XQbnf4%2CEWoQMUB%2C9halxp9&chm=D%2C0033FF%2C2%2C0%2C5%2C1&chs=700x200&cht=bvs&icac=fgribreau&icretina=1&ichm=c60d6466fb050326a113df26d6b472e1da749ee5cae6e6f8999dd8cbd22605a0)](https://editor.image-charts.com/chart?chbh=5%2C2&chco=4D89F9%2CC6D9FD&chd=s2%3A1XQbnf4%2CEWoQMUB%2C9halxp9&chm=D%2C0033FF%2C2%2C0%2C5%2C1&chs=700x200&cht=bvs&icac=fgribreau&icretina=1&ichm=c60d6466fb050326a113df26d6b472e1da749ee5cae6e6f8999dd8cbd22605a0)

```
chd=s2:1XQbnf4,EWoQMUB,9halxp9
chm=D,0033FF,2,0,5,1
```

#### Creating a Compound Chart (Mixed Charts)

All compound charts consist of one or more base chart types (line, scatter, bar, or radar) combined with one or more sets of markers. These markers require data to place them on the chart. Sometimes you can use the same data series as used to draw the bars or points on your chart, but typically you want the markers to have their own independent data sets. If you want your chart to have different data series for the base chart and for markers, you must hide the marker data from the base chart (so that it doesn't try to draw more bars or lines with that data). Here's how to do that:

1. **Add your marker data series to the end of your `chd` parameter**. For example, if your bar chart had data `chd=t:30,10,20`, you could add new data for a line marker like this: `chd=t:30,10,20|60,40,50`.
2. **Hide your extra marker data from the base chart**. If you simply add an extra data series to a bar chart for your tracking line, the chart would show that as a new series of bars. To prevent this, you must hide this extra series. To hide a series, include a single digit after the `chd` format descriptor: for example, `chd=t1:30,10,20|60,40,50`. This `1` digit from `t1` tells the Chart API how many data series to use to draw elements for that base chart type as defined by the cht parameter (bars for bar charts, data points for line charts, and so on). Any additional data series will be ignored by that chart type when drawing the chart. `Note that this is a 1-based number, not 0-based`. So `t1` means "use only the first data series for bars," `t2` means "use only the first two series for bars," etc.
3. **Use the hidden data series to draw <!--candlestick markers,--> line markers, or other markers**. How to draw markers is covered in the section below. Reference the hidden data series as the source for your markers. You can include as many additional hidden data series as you like, and use them for additional chart markers.

[![static chart](https://image-charts.com/chart?chco=224499&chd=t1%3A30%2C10%2C20%7C60%2C40%2C50&chm=D%2C009900%2C1%2C0%2C5%2C1&chs=700x200&cht=bvg&chxt=y&icac=fgribreau&icretina=1&ichm=ed9f636fffe892f6ca0ddd62ed5e1f24071e1b09f7cc4fb7b8927f82ac331394)](https://editor.image-charts.com/chart?chco=224499&chd=t1%3A30%2C10%2C20%7C60%2C40%2C50&chm=D%2C009900%2C1%2C0%2C5%2C1&chs=700x200&cht=bvg&chxt=y&icac=fgribreau&icretina=1&ichm=ed9f636fffe892f6ca0ddd62ed5e1f24071e1b09f7cc4fb7b8927f82ac331394)

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


[![chart api](https://image-charts.com/chart?chbh=5%2C2&chco=224499%2C009900&chd=s2%3A1XQbnf4%2CEWoQMUB%2C9halxp9&chm=D%2C0033FF%2C2%2C0%2C5%2C1&chs=700x200&cht=bvs&chxl=0%3A%7CJan%7CFeb%7CMar%7CApr%7CMay%7CJun%7CJul&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=b3d63a7995a5df2e05e2a90337793e40b17b4bcb0827113dea8f3f159406bc20)](https://editor.image-charts.com/chart?chbh=5%2C2&chco=224499%2C009900&chd=s2%3A1XQbnf4%2CEWoQMUB%2C9halxp9&chm=D%2C0033FF%2C2%2C0%2C5%2C1&chs=700x200&cht=bvs&chxl=0%3A%7CJan%7CFeb%7CMar%7CApr%7CMay%7CJun%7CJul&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=b3d63a7995a5df2e05e2a90337793e40b17b4bcb0827113dea8f3f159406bc20)

```
chm=
  D,0033FF,2,0,5,1
chd=s2:
  1XQbnf4,
  EWoQMUB,
  9halxp9
```

##### Stacked bar chart with an independent line drawn


[![image chart generator](https://image-charts.com/chart?chbh=15%2C10&chco=224499%2C009900&chd=t2%3A0%2C10%2C20%2C30%2C20%2C70%2C80%7C0%2C20%2C10%2C5%2C20%2C30%2C10%7C10%2C0%2C20%2C15%2C60%2C40%2C30&chm=D%2C76A4FB%2C2%2C0%2C3&chs=700x200&cht=bvs&chxl=0%3A%7CJan%7CFeb%7CMar%7CApr%7CMay%7CJun%7CJul&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=602820d04bd16f92ddef4892209effe382d244e4a924b7a51baa663abff58a77)](https://editor.image-charts.com/chart?chbh=15%2C10&chco=224499%2C009900&chd=t2%3A0%2C10%2C20%2C30%2C20%2C70%2C80%7C0%2C20%2C10%2C5%2C20%2C30%2C10%7C10%2C0%2C20%2C15%2C60%2C40%2C30&chm=D%2C76A4FB%2C2%2C0%2C3&chs=700x200&cht=bvs&chxl=0%3A%7CJan%7CFeb%7CMar%7CApr%7CMay%7CJun%7CJul&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=602820d04bd16f92ddef4892209effe382d244e4a924b7a51baa663abff58a77)


```
cht=bvs
chd=t2:
  0,10,20,30,20,70,80|
  0,20,10,5,20,30,10|
  10,0,20,15,60,40,30
chm=D,76A4FB,2,0,3
```

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


[![chart](https://image-charts.com/chart?chco=224499&chd=s:ATSTaVd21981uocA&chm=B,76A4FB,0,0,0&chs=700x125&cht=lc&chxl=0:|Sep|Oct|Nov|Dec|1:||50|100&chxt=x,y&icac=fgribreau&icretina=1&ichm=8d6f8d050e55ac2a1b17c95558615b68433131e541bff6487e6da646aade9e19)](https://editor.image-charts.com/chart?chco=224499&chd=s:ATSTaVd21981uocA&chm=B,76A4FB,0,0,0&chs=700x125&cht=lc&chxl=0:|Sep|Oct|Nov|Dec|1:||50|100&chxt=x,y&icac=fgribreau&icretina=1&ichm=8d6f8d050e55ac2a1b17c95558615b68433131e541bff6487e6da646aade9e19
)

```
chm=B,76A4FB,0,0,0
```

The following example has 3 series, 3 lines and 2 fills. First serie (`0,1`) has an orange color fill (`#fdb45c`), second serie (`1,2`) has a red color fill (`#ff6e6e`):

```
chd=s:cefhjkqwrlgYcfgc,QSSVXXdkfZUMRTUQ,HJJMOOUbVPKDHKLH
chm=b,fdb45c,0,1,0|b,ff6e6e,1,2,0
```

[![chart](https://image-charts.com/chart?chco=ca7002,cc0000,cc0000&chd=s:cefhjkqwrlgYcfgc,QSSVXXdkfZUMRTUQ,HJJMOOUbVPKDHKLH&chls=1,1,0|1,1,0|1,1,0|1,4,0&chm=b,fdb45c,0,1,0|b,ff6e6e,1,2,1&chs=700x300&cht=lc&chxl=1:||50|100|0:|Jan|Feb|Mar|Apr|May|Jun|&chxt=x,y&icac=fgribreau&icretina=1&ichm=bfa859fa30a68a69f9ac90a713b0ccc12f93af7fe1eab3d32f498d134e37e318)](https://editor.image-charts.com/chart?chco=ca7002,cc0000,cc0000&chd=s:cefhjkqwrlgYcfgc,QSSVXXdkfZUMRTUQ,HJJMOOUbVPKDHKLH&chls=1,1,0|1,1,0|1,1,0|1,4,0&chm=b,fdb45c,0,1,0|b,ff6e6e,1,2,1&chs=700x300&cht=lc&chxl=1:||50|100|0:|Jan|Feb|Mar|Apr|May|Jun|&chxt=x,y&icac=fgribreau&icretina=1&ichm=bfa859fa30a68a69f9ac90a713b0ccc12f93af7fe1eab3d32f498d134e37e318)


The following example fills 2 datasets with yellow (consumed) and grey (prevision) colors.

[![chart](https://image-charts.com/chart?chco=ffc107,cccccc&chd=a:1,2,3,4,5,6,7|1,2,3,4,5,6,7,8,9,10,11,12,13&chg=0,20,0,0&chls=3|0&chm=B,ffc107,0,0,0|B,cccccc,1,0,0&chs=700x300&cht=lc&chtt=Power consumption (mW) and prevision&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|Mon|Tue|Wed|Thu|Fri|Sat&chxs=0,676767,11.5,0,t,676767|1,676767,11.5,0,lt,676767&chxt=x,y&icac=fgribreau&icretina=1&ichm=34fff3faa2673187ec7ec9ead0ef5f13ce68b46621b89644017e44e31eb0110b)](https://editor.image-charts.com/chart?chco=ffc107,cccccc&chd=a:1,2,3,4,5,6,7|1,2,3,4,5,6,7,8,9,10,11,12,13&chg=0,20,0,0&chls=3|0&chm=B,ffc107,0,0,0|B,cccccc,1,0,0&chs=700x300&cht=lc&chtt=Power consumption (mW) and prevision&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|Mon|Tue|Wed|Thu|Fri|Sat&chxs=0,676767,11.5,0,t,676767|1,676767,11.5,0,lt,676767&chxt=x,y&icac=fgribreau&icretina=1&ichm=34fff3faa2673187ec7ec9ead0ef5f13ce68b46621b89644017e44e31eb0110b)

```
chd=a:1,2,3,4,5,6,7|1,2,3,4,5,6,7,8,9,10,11,12,13
chm=B,ffc107,0,0,0|B,cccccc,1,0,0
```

## Text and Data Value Markers chm

You can label specific points on your chart with custom text, or with formatted versions of the data at that point.

#### Syntax

```
chm=
  N<formatting_string>,<color>,<series_index>,<which_points>,<width>,<opt_z_order>,<font_family>,<font_style>
```

- **`<formatting_string>`** - The value of the data at this point, with optional formatting. If you do not use the `chds` parameter (custom scaling) it gives the exact encoded value; 
if you do use that parameter with any format type the value will be scaled to the range that you specify. See an example of `chds` with numeric markers below. 

<!-- With this marker type in a [stacked bar chart](/bar-charts), if you specify -1 for *<series_index>* you will get a marker that shows the sum of all values in this stacked bar. -->
The formatting string syntax is as follows:  
`<preceding_text>*<number_type><decimal_places>zs<x or y>*<following_text>`
    - `<preceding_text>` - Text to precede each value.
    - `*...*` - An optional block wrapped in literal asterisks, in which you can specify formatting details for numbers. The following values are supported, and are all optional:
        - `<number_type>` - The number format, for numeric values. Choose one of the following:
            - `f` - *[Default]* Floating point format. Consider specifying precision as well with the <decimal_places> value.
            - `p` - Percentage format. A % sign is appended automatically. Note: When using this format, data values from 0.0 — 1.0 map to 0 — 100% (for example, 0.43 will be shown as 43%).
            - `e` - Scientific notation format.
            - `c*<CUR>*` - Format the number in the currency specified, with the appropriate currency marker. Replace <CUR> with a three-letter currency code. Example: cEUR for Euros. You can find a list of codes on the [ISO web site](http://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=46121), although not all symbols are supported.
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

- **`<opt_placement>`** Not supported yet

- **`<font_family>`** one of the [supported open-source font](/reference/chart-font#supported-open-source-fonts). Don't forget to checkout the [font gallery](https://fonts.google.com/)

- **`<font_style>`** one of `normal` or `italic`. Default value used is `normal`

!!! tip "-1 for *series_index* not implemented yet"
    Do you want this feature ? [Just ask us :angel:](mailto:support@image-charts.com) !  

#### Examples

Here's an example of value labels on a bar chart.

The first chart (N*p0*) specifies a data value marker, with values shown as a percentage, rounded to zero decimal places, in black, on all values, in 11-point text. Note that the data values are all between 0.0 and 1.0, which, in percentage format, are moved up two decimal places.

[![chart](https://image-charts.com/chart?chco=D3F035&chd=a:13,13,10&chg=0,50&chl=12,773,000|12,688,000|10,264,000&chm=N*p0*,000000,0,-1,11&chma=0,0,0,0&chs=744x600&cht=bvg&chtt=iuhss&chxl=0:|Sept|Okt|Nov|1:|Month|3:|Sales&chxs=0,FF0000,28|1,FF0000,28|2N*cIDR0sz*m,FF0000,28|3,FF0000,28&chxt=x,x,y,y&icac=fgribreau&ichm=ae245534e7148ad2ac5690da214b86965f99a1215221e2a84a33caabe127d383)](https://editor.image-charts.com/chart?chco=D3F035&chd=a:13,13,10&chg=0,50&chl=12,773,000|12,688,000|10,264,000&chm=N*p0*,000000,0,-1,11&chma=0,0,0,0&chs=744x600&cht=bvg&chtt=iuhss&chxl=0:|Sept|Okt|Nov|1:|Month|3:|Sales&chxs=0,FF0000,28|1,FF0000,28|2N*cIDR0sz*m,FF0000,28|3,FF0000,28&chxt=x,x,y,y&icac=fgribreau&ichm=ae245534e7148ad2ac5690da214b86965f99a1215221e2a84a33caabe127d383)

```
chm=
  N*p0*,000000,0,-1,11
chd=t:
  0.4356,0.3562,0.4834,0.575,0.673,0.6091
```

The second chart (N*cEUR1*) shows the same values formatted as Euro values, one decimal place, in black, on all values, in 11-point text.

[![chart](https://image-charts.com/chart?chco=D3F035&chd=a:13,13,10&chg=0,50&chl=12,773,000|12,688,000|10,264,000&chm=N*cEUR1*,000000,0,-1,11&chma=0,0,0,0&chs=744x600&cht=bvg&chtt=iuhss&chxl=0:|Sept|Okt|Nov|1:|Month|3:|Sales&chxs=0,FF0000,28|1,FF0000,28|2N*cIDR0sz*m,FF0000,28|3,FF0000,28&chxt=x,x,y,y&icac=fgribreau&ichm=2fb9f7955ae0f5ed237a92c25e72eff1dc08210e6c3504834525dafd126f5909)](https://editor.image-charts.com/chart?chco=D3F035&chd=a:13,13,10&chg=0,50&chl=12,773,000|12,688,000|10,264,000&chm=N*cEUR1*,000000,0,-1,11&chma=0,0,0,0&chs=744x600&cht=bvg&chtt=iuhss&chxl=0:|Sept|Okt|Nov|1:|Month|3:|Sales&chxs=0,FF0000,28|1,FF0000,28|2N*cIDR0sz*m,FF0000,28|3,FF0000,28&chxt=x,x,y,y&icac=fgribreau&ichm=2fb9f7955ae0f5ed237a92c25e72eff1dc08210e6c3504834525dafd126f5909)

```
chm=
  N*cEUR1*,000000,0,-1,11
```

Example with font-family and font-style

[![chart](https://image-charts.com/chart?chco=D3F035&chd=a:13,13,10&chg=0,50&chl=12,773,000|12,688,000|10,264,000&chm=N*cEUR1*,FF0000,0,-1,11,,,Roboto,italic&chma=0,0,0,0&chs=744x600&cht=bvg&chtt=iuhss&chxl=0:|Sept|Okt|Nov|1:|Month|3:|Sales&chxs=0,FF0000,28|1,FF0000,28|2N*cIDR0sz*m,FF0000,28|3,FF0000,28&chxt=x,x,y,y&icac=fgribreau&ichm=dc183de96ceb70f0ed602d5fcf9ffbae10790ae86d9e1764b54af78ec96e564a)](https://editor.image-charts.com/chart?chco=D3F035&chd=a:13,13,10&chg=0,50&chl=12,773,000|12,688,000|10,264,000&chm=N*cEUR1*,FF0000,0,-1,11,,,Roboto,italic&chma=0,0,0,0&chs=744x600&cht=bvg&chtt=iuhss&chxl=0:|Sept|Okt|Nov|1:|Month|3:|Sales&chxs=0,FF0000,28|1,FF0000,28|2N*cIDR0sz*m,FF0000,28|3,FF0000,28&chxt=x,x,y,y&icac=fgribreau&ichm=dc183de96ceb70f0ed602d5fcf9ffbae10790ae86d9e1764b54af78ec96e564a)

```
chm=
  N*cEUR1*,FF0000,0,-1,11,,,Roboto,italic
```
