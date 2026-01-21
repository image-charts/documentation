---
title: Background Fill
description: "Learn how to specify a background color or gradient for your chart"
sidebar_position: 13
---

# Background Fill

You can specify fill colors and styles for the chart data area and/or the whole chart background. Fill types include solid color, image and gradients fills. You can specify different fills for different areas (for example, the whole chart area, or just the data area). The chart area fill overwrites the background fill. All fills are specified using the `chf` parameter, and you can mix different fill types (solids, stripes, gradients) in the same chart by separating values with pipe character (` | `). Chart area fills overwrite chart background fills.

### Solid Fills

You can specify a solid fill for the background and/or chart area, or assign a transparency value to the whole chart. You can specify multiple fills using the pipe character (`|`).

#### Syntax

```
chf=<fill_type>,s,<color>|...
```

- **`<fill_type>`** The part of the chart being filled. Specify one of the following values:
  - `bg` - Background fill
  - `c` - Chart area fill. (currently same as `bg`, `bg` as precedence over `c`)
  - `a` - Make the whole chart (including backgrounds) transparent. The first six digits of `<color>` are ignored, and only the last two (the transparency value) are applied to the whole chart and all fills.
  - `b<index>` - Bar solid fills (bar charts only). Replace `<index>` with the series index of the bars to fill with a solid color. The effect is similar to specifying `chco` in a bar chart (note that `chf` has precedence over `chco` for each series). See Bar Chart Series Colors for an example.
- **`s`** Indicates a solid or transparency fill.
- **`<color>`** The fill color, in [RRGGBB[AA] hexadecimal format](/reference/color-format). For transparencies, the first six digits are ignored, but must be included anyway.

#### Examples

This example fills the chart background with pale gray (**EFEFEF**).

![chart](https://image-charts.com/chart?cht=lc&chd=s:pqokeYONOMEBAKPOQVTXZdecaZcglprqxuux393ztpoonkeggjp&chco=FF0000&chls=4.0,3.0,0.0&chs=700x125&chxt=x,y&chxl=0:%7CJun%7CJuly%7CAug%7C1:%7C%7C20%7C30%7C40%7C50&chf=bg,s,EFEFEF)

```
chf=bg,s,EFEFEF
```


This example applies a 50% transparency to the whole chart (80 in hexadecimal is 128, or about 50% transparency). Notice the table cell background showing through the chart.

![chart](https://image-charts.com/chart?cht=bvs&chd=s:pqokeYONOMEPOQVTXZdeca,Zcglprqxuuxztpoonkeggjp&chs=700x125&chxt=x,y&chxl=0:%7CJun%7CJuly%7CAug%7C1:%7C%7C20%7C30%7C40%7C50&chf=a,s,00000080)

```
chf=a,s,00000080
```

This example fills the bar chart with a pale gray (**EFEFEF**). This was implemented for compatibility with Google Image Charts but we recommend you to use `chco` for series colors.

![chart](https://image-charts.com/chart?cht=bvs&chd=t:10,10,40&chs=700x125&chxt=x,y&chxl=0:%7CJun%7CJuly%7CAug%7C1:%7C%7C20%7C30%7C40%7C50&chf=b0,s,EFEFEF)

### Gradient Fills

You can apply one or more gradient fills to chart areas or backgrounds. Gradient fills are fades from a one color to another color. (Pie: background only.)

Each gradient fill specifies an angle, and then two or more colors anchored to a specified location. The color varies as it moves from one anchor to another. You must have at least two colors with different `<color_centerpoint>` values, so that one can fade into the other. Each additional gradient is specified by a `<color>,<color_centerpoint>` pair.

#### Syntax

```
chf=<fill_type>,lg,<angle>,<color_1>,<color_centerpoint_1>
  ,...,
  <color_n>,<color_centerpoint_n>
```

- **`<fill_type>`** The chart area to fill. One of the following:
  - `bg` background fill
  - `c` chart area fill. (currently same as `bg`, `bg` as precedence over `c`)
  - `b<index>` gradient fills (valid in bar, line, pie and bubble charts unlike Google Image Charts which only supported bar charts). Replace `<index>` with the series index of the bars to fill with a gradient. See Bar Chart Series Colors for an example.
    - **`lg`** Specifies a gradient fill.
    - **`<angle>`** a number specifying the angle of the gradient from 0 (horizontal) to 90 (vertical).
    - **`<color>`** the color of the fill, in [RRGGBB[AA] hexadecimal format](/reference/color-format).
    - **`<color_centerpoint>`** specifies the anchor point for the color. The color will start to fade from this point as it approaches another anchor. The value range is from 0.0 (bottom or left edge) to 1.0 (top or right edge), tilted at the angle specified by `<angle>`.
  - `ps<index>-<sliceIndex>` (only valid in pie, polar area and bubble charts) same as `b<index>` but let you specify a gradient per pie slice. For pie charts, `b<index>` has precedence over `ps<index>-<sliceIndex>`, both can't be combined as would not make much sense.

#### Examples

This example displays a chart area with an horizontal linear gradient, specified with an angle of zero degrees (0). The colors are peach (FFE7C6), centered on the left side (position 0.0) and blue (76A4FB) centered on the right side (position 1.0). The chart background is drawn in gray (EFEFEF).

![chart](https://image-charts.com/chart?cht=lc&chd=s:pqokeYONOMEBAKPOQVTXZdecaZcglprqxuux393ztpoonkeggjp&chco=676767&chls=4.0,3.0,0.0&chs=700x125&chxt=x,y&chxl=0:|1|2|3|4|5|1:|0|50|100&chf=c,lg,0,FFE7C6,0,76A4FB,1|bg,s,EFEFEF)

```
chf=
  c,lg,0,
  FFE7C6,0,(peach)
  76A4FB,1 (blue)
```

This example displays a Chart area with a diagonal (bottom left to top right) linear gradient, specified with an angle of forty-five degrees (45).
Peach (FFE7C6) is the first color specified. The bottom left of the chart is pure peach.
Blue (6A4FB) is the second color specified. The top right of the chart is pure blue. Note how we specify an offset of 0.75, to provide a peak of blue that fades away towards the top right corner.
The chart background is drawn in gray (EFEFEF).

![chart](https://image-charts.com/chart?cht=lc&chd=s:pqokeYONOMEBAKPOQVTXZdecaZcglprqxuux393ztpoonkeggjp&chco=676767&chls=4.0,3.0,0.0&chxt=x,y&chxl=0:%7C1%7C2%7C3%7C4%7C5%7C1:%7C0%7C50%7C100&chs=700x125&chf=c,lg,45,FFE7C6,0,76A4FB,0.75%7Cbg,s,EFEFEF)

```
chf=
  c,lg,45,
  FFE7C6,0, (peach)
  76A4FB,0.75 (blue)
```

The example shows how to use gradient fills in chart series.

![chart](https://image-charts.com/chart?cht=bvs&chs=700x180&chd=t:10,40,60,80,30,20&chf=b0,lg,90,03a9f4,0,3f51b5,1&chan)

```
chd=
  t:10,40,60,80,30,20
chf=
  b0,lg,90,03a9f4,0,3f51b5,1
```

### Image fills

You can specify an image url to use as a background for your chart. URL must be completely encoded in order to be handled

#### Syntax

```
chf=bg,img,<image_url>
```

- **`bg`** background fill
- **`img`** an image will be used to fill the background
- **`<image_url>`** image url to use

#### Examples

This example displays a [bar chart](/bar-charts) with semi-transparent bars (`chco=FFFFFF90`) with an abstract image background (`chf=bg,img,https://i.imgur.com/ltXHn7L.png`):

[![chart](https://image-charts.com/chart?chco=FFFFFF90&chd=t1%3A10%2C40%2C60%2C80%2C30%2C20%7C60%2C40%2C50%2C100%2C20%2C30&chf=bg%2Cimg%2Chttps%3A%2F%2Fi.imgur.com%2FltXHn7L.png&chm=D%2C03a9f4%2C1%2C0%2C5%2C1&chs=999x600&cht=bvs&chxl=0%3A%7CJan%7CMar%7CApr%7CMay%7CJun%7CJul&chxs=0%2CFFFFFF%2C15%2C-1%2Clt%2CFFFFFF%2CFFFFFF%7C1%2CFFFFFF%2C15%2C-1%2Clt%2CFFFFFF%2CFFFFFF&chxt=x%2Cy&icac=documentation&icretina=1&ichm=73ddea7c939f95e81123f3e4b26f95b35eb900c9b60cb18275602e9d16f29c1b)](https://editor.image-charts.com/chart?chco=FFFFFF90&chd=t1%3A10%2C40%2C60%2C80%2C30%2C20%7C60%2C40%2C50%2C100%2C20%2C30&chf=bg%2Cimg%2Chttps%3A%2F%2Fi.imgur.com%2FltXHn7L.png&chm=D%2C03a9f4%2C1%2C0%2C5%2C1&chs=999x600&cht=bvs&chxl=0%3A%7CJan%7CMar%7CApr%7CMay%7CJun%7CJul&chxs=0%2CFFFFFF%2C15%2C-1%2Clt%2CFFFFFF%2CFFFFFF%7C1%2CFFFFFF%2C15%2C-1%2Clt%2CFFFFFF%2CFFFFFF&chxt=x%2Cy&icac=documentation&icretina=1&ichm=73ddea7c939f95e81123f3e4b26f95b35eb900c9b60cb18275602e9d16f29c1b
)

```
chf=bg,img,https://i.imgur.com/ltXHn7L.png
chco=FFFFFF90
```

This example displays a [mixed chart](/reference/markers/#creating-a-compound-chart-mixed-charts) with a orange/gold abstract image background:

[![chart](https://image-charts.com/chart?chco=FFFFFF&chd=a1%3A%2C103.7%2C7.23%2C31.02%2C82.22%2C-123.74%2C43.71%2C84.22%2C164.59%2C31.26%2C69.91%2C90.59%2C20.9%2C-51.29%2C-44.29%2C-333.83%2C-452.37%2C35.41%2C24.4%7C1500%2C1603%2C1610%2C1641%2C1723%2C1599%2C1642%2C1726%2C1890%2C1921%2C1990%2C2080%2C2100%2C2048%2C2003%2C1669%2C1216%2C1251%2C1275&chf=bg%2Cimg%2Chttps%3A%2F%2Fi.imgur.com%2F8Gv2GsI.jpg&chg=20%2C50&chlps=textAlign%2Cright%7Calign%2Cbottom%7Cfont.size%2C8&chm=D%2C00AAFF%2C1%2C0%2C5%2C1&chs=800x600&cht=bvs&chxl=0%3A%7C%7C103%7C7%7C31%7C82%7C-124%7C43%7C84%7C164%7C31%7C69%7C90%7C20%7C-52%7C-45%7C-334%7C-453%7C35%7C24&chxr=2%2C-500%2C2500%7C1%2C-500%2C2500%2C100&chxs=1%2C000000%2C0%2C_&chxt=x%2Cy%2Cy&icac=documentation&iclocale=en&icretina=1&ichm=186a950a5a1972f321a5beb25b3c3be31d008c1567680c1485882b435c74cfe5)](https://editor.image-charts.com/chart?chco=FFFFFF&chd=a1%3A%2C103.7%2C7.23%2C31.02%2C82.22%2C-123.74%2C43.71%2C84.22%2C164.59%2C31.26%2C69.91%2C90.59%2C20.9%2C-51.29%2C-44.29%2C-333.83%2C-452.37%2C35.41%2C24.4%7C1500%2C1603%2C1610%2C1641%2C1723%2C1599%2C1642%2C1726%2C1890%2C1921%2C1990%2C2080%2C2100%2C2048%2C2003%2C1669%2C1216%2C1251%2C1275&chf=bg%2Cimg%2Chttps%3A%2F%2Fi.imgur.com%2F8Gv2GsI.jpg&chg=20%2C50&chlps=textAlign%2Cright%7Calign%2Cbottom%7Cfont.size%2C8&chm=D%2C00AAFF%2C1%2C0%2C5%2C1&chs=800x600&cht=bvs&chxl=0%3A%7C%7C103%7C7%7C31%7C82%7C-124%7C43%7C84%7C164%7C31%7C69%7C90%7C20%7C-52%7C-45%7C-334%7C-453%7C35%7C24&chxr=2%2C-500%2C2500%7C1%2C-500%2C2500%2C100&chxs=1%2C000000%2C0%2C_&chxt=x%2Cy%2Cy&icac=documentation&iclocale=en&icretina=1&ichm=186a950a5a1972f321a5beb25b3c3be31d008c1567680c1485882b435c74cfe5)


```
chf=bg,img,https://i.imgur.com/8Gv2GsI.jpg
chco=FFFFFF
```
