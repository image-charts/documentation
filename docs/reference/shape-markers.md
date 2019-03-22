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
