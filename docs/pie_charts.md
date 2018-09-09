# Pie Charts

This section describes how to create pie charts using the Image-Chart API.

## Overview

Pie charts are good for showing simple proportional part-to-whole information. You can create a single series pie chart, where each series is made of multiple slices, or multi-series, concentric charts.

Each series describes one pie, and each data value specifies one slice. When using nested pie charts (described below), use multiple series.

To display the text associated with a slice, you will have to use either pie chart labels or a chart legend. Pie chart labels are text around the chart with lines pointing toward the slice. Legends are text associated by color.

- **Labels**

![chart](https://image-charts.com/chart?cht=p&chd=s:Uf9a&chs=700x200&chl=Jan|Feb|Mar|Apr)

```
chl=January|February|March|April
```

- **Legend**

![chart](https://image-charts.com/chart?cht=pc&chd=s:Uf9a,Uf9a&chs=700x200&chdl=January|February|March|April)

```
chdl=January|February|March|April
```

- **Labels and Legend**

![chart](https://image-charts.com/chart?cht=p&chd=s:Uf9a&chs=700x200&chl=Jan|Feb|Mar|Apr&chdl=30%C2%B0|40%C2%B0|50%C2%B0|60%C2%B0)

```
chl=January|February|March|April
chdl=30°|40°|50°|60°
```


Values are displayed relative to each other: so a chart with values 1,2,3 will look the same as a chart with values 100,200,300. **However**, when using text format data, values greater than 100 are trimmed to 100, so you will need to use text format with custom scaling to display slices greater than 100 properly (use the chds parameter with min/max values of chds=0,<max-slice-size>).

Negative values display as empty slices of the appropriate size.

## Chart Types

Specify a pie chart with the following syntax:

#### Syntax

```
cht=<chart_type>
```

Where `<chart_type>` is one of the the following types:

- **`p`**: Two dimensional pie chart. Supply one data series only; subsequent data series will automatically generate a concentric pie chart **`pc`**.

By default, pie segment colors are interpolated from pink to pale yellow. Specify other colors as described in [Series Colors](#series-colors-3). Specify labels with `chl` as described in Pie chart labels.

<!-- The Image-Charts API calculates the circle's radius from the minimum of width and height specified in the chart size (chs) parameter. If you are including labels, you probably need to specify the size of the width to be twice the size of the height, to ensure that your labels are fully visible. -->

![chart](https://image-charts.com/chart?cht=p&chd=s:Uf9a&chs=700x200&chl=January|February|March|April)

```
cht=p
chs=200x100
```

- **`p3`**: A three-dimensional pie chart. :checkered_flag: this type of chart is not planned to be supported and will automatically falls back to the flat pie chart **`p`** type.

- **`pc`**: A concentric pie chart. Once more than 1 data serie is specified, a concentric chart is automatically selected by Image-Charts, the first serie will be displayed on the border while the last serie will be displayed in the center.

![chart](https://image-charts.com/chart?cht=pc&chd=s:Helo,Wrld&chs=700x200)

```
cht=pc
chd=s:Helo,Wrld
```

- **`pd`**: A doughnut pie chart.


![chart](https://image-charts.com/chart?chtt=Expenses&cht=pd&chd=t:10,40,45&chs=700x300&chdl=Expansion|Payroll|Equipment&chl=10K€|40K€|45K€&chli=95K€&chan)

```
cht=pd
chd=t:10,40,45
chdl=Expansion|Payroll|Equipment
chdil=95K€
chl=10K€|40K€|45K€
```

<!-- Note that for all types, negative numbers in data cause "blank" slices.

![chart](https://image-charts.com/chart?cht=pc&chs=700x200&chd=t:10,-10,10,-10|5,-5,5,-5,5,-5,5,-5,5,-5)

```
cht=pc
chd=t:10,-10,10,-10|5,-5,5,-5,5,-5,5,-5,5,-5
```


Google Image 3D charts and concentric pie chart are not supported and automatically fallback on flat pie chart. -->

## Series Colors

You can specify the colors of all values, each value, or some values using the `chco` parameter.

#### Syntax

```
chco=<slice_1>|<slice_2>|<slice_n>,<series_color_1>,...,<series_color_n>
```

- **`<color>`** Slice colors in [RRGGBB[AA] hexadecimal format](#color-format). Specify a single series color and all slices in that series will be colored in gradations of that color from darkest (first data member) to lightest (last data member). Specify two or more colors delimited by a | to describe individual slice colors. When you have multiple series (that is, a chart with concentric rings), you can specify values for different series by separating values by a comma. When fewer slice/series colors are given than slices/series displayed, then the chart will cycle through from the beginning of the slice list for the series, or the series list for the chart. You cannot specify a distinct gradient for each series in a multi-series chart.


#### Examples

Specify a single color to have gradations from darkest (first slice) to lightest (last slice).

![chart](https://image-charts.com/chart?cht=p3&chs=700x200&chd=s:Hellobla&chco=0000FF)

```
chco=0000FF
```

Defining a gradient; here, from yellow to red.

![chart](https://image-charts.com/chart?cht=p3&chs=700x200&chd=t:10,20,30,40,50&chco=FFFF10,FF2027)

```
chd=t:10,20,30,40,50
chco=FFFF10,FF2027
```


Defining individual slice colors; specify one color per slice.

![chart](https://image-charts.com/chart?cht=p3&chs=700x200&chd=t:10,20,30&chco=EA469E|03A9F4|FFC00C)

```
chd=t:10,20,30
chco=EA469E|03A9F4|FFC00C
```

The following chart has two data series, but specifies a single gradient per series.

![](https://image-charts.com/chart?cht=pc&chd=s:eYY,ORVM&chco=EA469E,03A9F4&chs=700x200&chdl=1|2|3|4|5|6|7)

```
chco=EA469E,03A9F4
```

Finally, here's a concentric chart that includes both series colors and individual slice colors. The chart has two concentric data series. In human-readable form, the colors are chco=blue|yellow|green,blue|pink. The comma breaks this into two series:

- orange|yellow|green - One color defined for each slice.
- blue|pink - Alternating blue and yellow slices.

![](https://image-charts.com/chart?cht=pc&chd=s:eYY,ORVM&chco=FF8008|FFBF0C|11B11B,03A9F4|EA469E&chs=700x200&chdl=1|2|3|4|5|6|7)

```
chd=s:eYY,ORVM
chco=FF8008|FFBF0C|11B11B,03A9F4|EA469E
```

## Inside label

Doughnut charts have a special parameter `chli` that gives you the ability to add an inside label.

#### Syntax

```
chli=<label_value>
```

- **`<label_value>`** A string value to apply to the doughnut inside label.

#### Example

It's always nice to display the overall data summary directly inside the doughnut.

![chart](https://image-charts.com/chart?chtt=Expenses&cht=pd&chd=t:10,40,45&chs=700x300&chdl=Expansion|Payroll|Equipment&chl=10K€|40K€|45K€&chli=95K€)

```
cht=pd
chd=t:10,40,45
chdl=Expansion|Payroll|Equipment
chdil=95K€
chl=10K€|40K€|45K€
```

Now, let's animate it. Note how nicely the `easeOutBounce` animation easing is applied to the inside label!

![chart](https://image-charts.com/chart?chtt=Expenses&cht=pd&chd=t:10,40,45&chs=700x300&chdl=Expansion|Payroll|Equipment&chl=10K€|40K€|45K€&chli=95K€&chan=1500,easeOutBounce)

```
cht=pd
chd=t:10,40,45
chdl=Expansion|Payroll|Equipment
chdil=95K€
chl=10K€|40K€|45K€
chan=1500,easeOutBounce
```
