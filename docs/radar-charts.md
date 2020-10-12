---
meta_description: "Generate radar charts as image using Image-charts API. From simple or custom radar charts to series colors, we handle everything!"
---
# Radar Charts

This section describes how to create radar charts using the Image-Chart API.

## Chart Type

#### Syntax

```
cht=r
chxt=r
```

In a radar chart, data points are drawn evenly spaced, clockwise around the chart. The value of the point is represented as the distance from the center of the chart, where the center represents the minimum value, and the chart edge is the maximum value. Each series is drawn as one complete circuit of the chart. <!--The chart connects these points with straight or curved lines, as you specify.--> 

So, a radar chart is essentially a line chart wrapped into a circle, where the y-axis goes from the center of the chart to the perimeter, and the x-axis is the perimeter of the chart, starting and ending at the 12:00 line.

A chart is divided evenly into equal segments; the number of segments is the greater of these two values:

- the number of labels + 1 (as specified by `chxl`, if present)
- the number of data values

For instance, a chart with 8 data points and no labels will have its data points spaced `45` degrees apart (`360 / 8 = 45`).

<!-- If you have multiple series, the series with the most point is counted. The minimum number of segments is four; if you have fewer than four labels or data points, the chart will default to four segments. You need n+1 data points to make a complete circuit of the chart, where n is the number of segments. More data points will increase the granularity of the chart. Your data will never go around the chart more than once. -->

A radar chart can support multiple series. Each series is a line in the chart.

#### Examples

A radar chart where the first and last point of each series is the same:

[![chart](https://image-charts.com/chart?chco=3092de%2C027182&chd=t%3A81%2C65%2C50%2C67%2C59%2C81%7C77%2C67%2C10%2C79%2C65%2C77&chdl=First%7CSecond&chdlp=b&chs=480x480&cht=r&chxt=r&icac=documentation&icretina=1&ichm=7e0df9d21d4ca0c873bf2e843789a6f6128c6378143235ebcfc179ed8cc592cc)](https://editor.image-charts.com/chart?chco=3092de%2C027182&chd=t%3A81%2C65%2C50%2C67%2C59%2C81%7C77%2C67%2C10%2C79%2C65%2C77&chdl=First%7CSecond&chdlp=b&chs=480x480&cht=r&chxt=r&icac=documentation&icretina=1&ichm=7e0df9d21d4ca0c873bf2e843789a6f6128c6378143235ebcfc179ed8cc592cc)

```
cht=r
chxt=r
chd=t:81,65,50,67,59,81|77,67,10,79,65,77
```

A radar chart where the first and last point of each series is **not** the same:

[![chart](https://image-charts.com/chart?chco=3092de%2C027182&chd=t%3A81%2C65%2C50%2C67%2C59%7C77%2C67%2C10%2C79%2C65&chdl=First%7CSecond&chdlp=b&chs=480x480&cht=r&chxt=r&icac=documentation&icretina=1&ichm=c2bf1f35313eeb9b7d3fc2c5e8c123fda711e1de6bf33596a5516899cd3fddd5)](https://editor.image-charts.com/chart?chco=3092de%2C027182&chd=t%3A81%2C65%2C50%2C67%2C59%7C77%2C67%2C10%2C79%2C65&chdl=First%7CSecond&chdlp=b&chs=480x480&cht=r&chxt=r&icac=documentation&icretina=1&ichm=c2bf1f35313eeb9b7d3fc2c5e8c123fda711e1de6bf33596a5516899cd3fddd5)

```
cht=r
chxt=r
chd=t:81,65,50,67,59|77,67,10,79,65
```

!!! info
     Unlike in Google Image Charts, Image-Charts will always connect series points even if first and last point of a series are different so you won't have 

## Series Colors
Optionally specify the colors of the lines using the `chco` parameter.

#### Syntax
```
chco=<color_1>,...,<color_n>
```

- `<color>` Specify one or more line colors in [RRGGBB[AA] hexadecimal format](/reference/color-format) separated by commas. If there are more lines than colors, the extra lines will cycle through the color list from the beginning.
