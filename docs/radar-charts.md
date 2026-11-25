---
title: Radar Chart API, radar (spider) chart images from a URL
sidebar_label: Radar Charts
description: "Create a radar chart image (spider or star chart) from one URL with cht=r: axis labels with chl, 0-100 scale with chxr, filled areas with chm=B, several series and colors. PNG or GIF, examples included."
sidebar_position: 6
---

# Radar charts: radar chart images from a URL

A radar chart (also called spider chart, web chart or star plot) draws several values around a circle, one spoke per value, so you can compare profiles such as product features, skills or survey scores. With Image-Charts you describe the radar chart in a URL and get back a PNG image that you can put in an `<img>` tag, an email, a Slack message or a PDF.

## How do I make a radar chart image?

Set `cht=r`, put the values in `chd` and one label per value in `chl`:

```
https://image-charts.com/chart?cht=r&chs=480x480&chd=t:81,65,50,67,59&chl=Speed|Power|Range|Price|Comfort&chxt=r&chxr=0,0,100
```

![Radar chart image with five labelled axes, Speed, Power, Range, Price and Comfort, and one series](/img/docs/radar-chart-labels.png)

The image above was made with the same parameters, without `chxr` (the scale then starts at the smallest value, see [scale](#scale-and-axis-range)).

Two series, filled and with a legend:

```
cht=r
chs=480x480
chxt=r
chxr=0,0,100
chd=t:81,65,50,67,59|60,70,80,40,50
chl=Speed|Power|Range|Price|Comfort
chco=3092de,e8710a
chm=B,3092de66,0,0,0|B,e8710a66,1,0,0
chdl=Model A|Model B
chdlp=b
```

![Filled radar chart comparing Model A in blue and Model B in orange on Speed, Power, Range, Price and Comfort, scale 0 to 100](/img/docs/radar-chart-filled-labels.png)

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
Unlike in Google Image Charts, Image-Charts always connects the last point of a series to the first one, even when they are different, so you do not have to repeat the first value at the end of `chd`.
:::

## Series Colors
Optionally specify the colors of the lines using the `chco` parameter.

#### Syntax
```
chco=<color_1>,...,<color_n>
```

- `<color>` Specify one or more line colors in [RRGGBB[AA] hexadecimal format](/reference/color-format) separated by commas. If there are more lines than colors, the extra lines will cycle through the color list from the beginning.

## Axis labels

Name each spoke with `chl`, one label per data value, separated by `|`:

```
chl=Speed|Power|Range|Price|Comfort
```

Labels are written around the chart, clockwise from the top, in the same order as the values in `chd`. URL-encode labels that contain spaces or special characters (`Top%20speed`).

## Scale and axis range

`chxt=r` shows the scale on the radial axis. By default the scale starts at the smallest value of your data, which can exaggerate small differences. To start at zero, set the range of axis `0` with `chxr`:

```
chxt=r
chxr=0,0,100
```

Here the scale goes from `0` to `100`. See [axis range](/reference/chart-axis#axis-range) for the full syntax.

## Filled radar chart

Fill the area of a series with a `B` marker in `chm`:

```
chm=B,<color>,<series_index>,0,0
```

- `<color>`: fill color in `RRGGBBAA`; add transparency (for example `3092de66`) so that overlapping series stay readable.
- `<series_index>`: `0` for the first series of `chd`, `1` for the second, and so on.

Separate the markers of several series with `|`: `chm=B,3092de66,0,0,0|B,e8710a66,1,0,0`.

## Legend

Name each series with `chdl` and place the legend with `chdlp` (`b` for bottom):

```
chdl=Model A|Model B
chdlp=b
```

See [legend text and style](/reference/legend-text-and-style).

## Animated radar chart

Add `&chan` to the URL to get an animated GIF where the series grow from the center. See [animation](/reference/animation).

## Coming from Google Image Charts?

Google Image Charts used the same `cht=r` chart type and has been shut down. Change the host of your URLs to `image-charts.com` (see [migrating from Google Image Charts](https://www.image-charts.com/migrating-from-google-image-charts)). One difference: Image-Charts closes each series on its own, see the note above.

## FAQ

### What is a radar chart?

A chart that places several values on spokes around a center, one spoke per variable, and joins them into a polygon. The further a point is from the center, the higher the value. It works best for comparing 2 or 3 profiles on 4 to 10 variables.

### What is the difference between a radar chart and a spider chart?

There is none. Spider chart, web chart, star chart and star plot are other names for the radar chart.

### How do I get a radar chart as a PNG image?

Use a URL such as `https://image-charts.com/chart?cht=r&chs=480x480&chd=t:81,65,50,67,59&chl=Speed|Power|Range|Price|Comfort`. The response is a PNG image; save it or use the URL as the `src` of an `<img>` tag.

### How do I make the scale start at 0?

Add `chxt=r&chxr=0,0,100` (replace `100` with your maximum). Without it, the scale starts at the smallest value of the data.

### How many series can a radar chart have?

Several. Separate them with `|` in `chd`, give each a color in `chco` and a name in `chdl`. Beyond 3 series the polygons overlap and the chart gets hard to read.

### Can I make a polar area chart instead?

Yes, see [polar area charts](/polar-charts) (`cht=pa`), where each value is a slice whose radius shows the value.
