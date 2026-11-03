---
title: Radar Charts
description: "Generate radar charts as image using Image-charts API. From simple or custom radar charts to series colors, we handle everything!"
sidebar_position: 6
---

# Radar Charts

This section describes how to create radar charts using the Image-Chart API.

## Chart Type

#### Syntax

```
cht=r
chxt=r
```

In a radar chart, data points are drawn evenly spaced, clockwise around the chart. The value of the point is represented as the distance from the center of the chart, where the center represents the minimum value, and the chart edge is the maximum value. Each series is drawn as one complete circuit of the chart.

So, a radar chart is essentially a line chart wrapped into a circle, where the y-axis goes from the center of the chart to the perimeter, and the x-axis is the perimeter of the chart, starting and ending at the 12:00 line.

A chart is divided evenly into equal segments; the number of segments is the greater of these two values:

- the number of labels + 1 (as specified by `chxl`, if present)
- the number of data values

For instance, a chart with 8 data points and no labels will have its data points spaced `45` degrees apart (`360 / 8 = 45`).

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

:::info
Unlike in Google Image Charts, Image-Charts will always connect series points even if first and last point of a series are different so you won't have
:::

## Series Colors
Optionally specify the colors of the lines using the `chco` parameter.

#### Syntax
```
chco=<color_1>,...,<color_n>
```

- `<color>` Specify one or more line colors in [RRGGBB[AA] hexadecimal format](/reference/color-format) separated by commas. If there are more lines than colors, the extra lines will cycle through the color list from the beginning.

## Limits

A radar chart draws one ring per label of [`chxl`](/reference/chart-axis#custom-axis-labels). The labels are completed with blanks up to the longest `chd` series minus its last value. A short `chxl` with a long series therefore draws as many rings as the series has points, minus one.

A spoke is one `chl` label. Without `chl`, it is one value of the longest series, minus the last one.

The chart draws at most 1,000 rings, and at most 100,000 corners. The corners are the rings times the spokes. A chart over a limit is rejected with a `400` HTTP status code and the `IS_VALIDATION_ERROR` [error code](/errors#error-codes) in the `x-ic-error-code` response header.

The `x-ic-error-validation` header names the limit that the chart crosses. With 1,001 `chxl` labels, it reads:

```
The scale axis would draw 1001 rings, more than 1000. The rings are its chxl labels, completed with blanks up to the longest chd series minus its last value. Send fewer chxl labels or chd values.
```

With 318 values in `chd`, no `chl` and two `chxl` labels, the chart draws 317 spokes and 317 rings. The header then reads:

```
The scale axis would draw 100489 corners, more than 100000, with 317 spokes and 317 rings. The rings are its chxl labels, completed with blanks up to the longest chd series minus its last value. Send fewer chl labels, chxl labels or chd values.
```

To stay under the limits, send fewer `chxl` labels, `chl` labels or `chd` values.

Labels that repeat are accepted, blanks included. For instance, `chxl=0:||b` draws a radar chart.
