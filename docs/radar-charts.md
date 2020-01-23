# Radar Charts

This section describes how to create radar charts using the Image-Chart API.

## Overview

In a radar chart, data points are drawn evenly spaced, clockwise around the chart. The value of the point is represented as the distance from the center of the chart, where the center represents the minimum value, and the chart edge is the maximum value. Each series is drawn as one complete circuit of the chart. <!--The chart connects these points with straight or curved lines, as you specify.--> So, a radar chart is essentially a line chart wrapped into a circle, where the y-axis goes from the center of the chart to the perimeter, and the x-axis is the perimeter of the chart, starting and ending at the 12:00 line.

A chart is divided evenly into equal segments; the number of segments is the greater of these two values:

- the number of labels + 1 (as specified by chxl, if present), or
- the number of data values.

So, for instance, if you have a chart with eight data points and no labels, the data points will be spaced 45 degrees apart (360 / 8).

<!-- If you have multiple series, the series with the most point is counted. The minimum number of segments is four; if you have fewer than four labels or data points, the chart will default to four segments. You need n+1 data points to make a complete circuit of the chart, where n is the number of segments. More data points will increase the granularity of the chart. Your data will never go around the chart more than once. -->

A radar chart can support multiple series. Each series is a line on the chart.

!!! missing
     With Google Image Charts, if first and last point of a series are different, you should have a non connected radar chart.  
     We don't have this behavior. The last and first point of a series must be the same to render a correct radar chart 
     
**Examples**

First and last point are the same  

[![chart](https://image-charts.com/chart?chco=3092de,027182&chd=t:81,65,50,67,59,81|77,67,10,79,65,77&chdl=First|Second&chdlp=b&chs=480x480&cht=r&chxt=r&icac=fgribreau&ichm=9233dc9ca3dbe19687a491815edaf62b10df71e0c899a62de06624645a523d90)](https://editor.image-charts.com/chart?chco=3092de,027182&chd=t:81,65,50,67,59,81|77,67,10,79,65,77&chdl=First|Second&chdlp=b&chs=480x480&cht=r&chxt=r&icac=fgribreau&ichm=9233dc9ca3dbe19687a491815edaf62b10df71e0c899a62de06624645a523d90)
```
chd=t:81,65,50,67,59,81|77,67,10,79,65,77
```

First and last point aren't the same  

[![chart](https://image-charts.com/chart?chco=3092de,027182&chd=t:81,65,50,67,59|77,67,10,79,65&chdl=First|Second&chdlp=b&chs=480x480&cht=r&chxt=r&icac=fgribreau&ichm=c4c5aca580bd46287df9d801f17773ca8c11baface7d9acc76bdb3b941657edf)](https://editor.image-charts.com/chart?chco=3092de,027182&chd=t:81,65,50,67,59|77,67,10,79,65&chdl=First|Second&chdlp=b&chs=480x480&cht=r&chxt=r&icac=fgribreau&ichm=c4c5aca580bd46287df9d801f17773ca8c11baface7d9acc76bdb3b941657edf)
```
chd=t:81,65,50,67,59|77,67,10,79,65
```

## Series Colors
Optionally specify the colors of the lines using the `chco` parameter.

**Syntax**
```
chco=<color_1>,...,<color_n>
```

- `<color>` Specify one or more line colors in [RRGGBB[AA] hexadecimal format](/reference/color-format) separated by commas. If there are more lines than colors, the extra lines will cycle through the color list from the beginning.
