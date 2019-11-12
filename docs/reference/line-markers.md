!!! note "Enterprise+ plan only"
    [Compound charts](https://documentation.image-charts.com/reference/compound-charts/) are only enabled in **Enterprise+** subscriptions
    
You can add lines to line or bar charts to highlight trends.

To add multiple lines (or combine this with any other chm markers), separate the chm parameter sets using a pipe ( | ) delimiter. You cannot make a dashed line marker with this parameter.


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

#### Examples

This is an example of drawing a marker line on a bar chart. The z-order is set to 1, so the line is drawn on top of the bars.
This example uses the same data for both the bars and the data line.

![compound chart](https://image-charts.com/chart?ichm=6f6c84084cba074285a396b3a71dd8c66ae78df2a0229edc1e48a1a11d3e8a6e&cht=bvg&chm=D,0033FF,0,0,5,1&chbh=20&chs=700x200&chd=s:1XQbnf4&chco=76A4FB&icac=fgribreau)

```
chm=D,0033FF,0,0,5,1
chd=s:1XQbnf4
```


---

This is the same bar chart, but with an additional data series just for the line. This is an example of a compound chart. Compound charts are drawn by adding additional data series to the chd parameter, plus a value to chd telling the chart to "ignore" the additional data series.

See [Compound Charts](./compound-charts.md) for more information.

![](https://image-charts.com/chart?ichm=b516a6b4c1e98e170fc3c6f2d020fe343d5c155d0800631e37d620cc2352f8ab&cht=bvg&chm=D,0033FF,1,0,5,1&chbh=20&chs=700x200&chd=s1:1XQbnf4,43ksfg6&chco=76A4FB&icac=fgribreau)

```
chm=D,0033FF,1,0,5,1
chd=s1:1XQbnf4,43ksfg6
```
