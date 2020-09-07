# Polar Area Charts

This section describes how to create polar area charts using the Image-Chart API.

## Overview

Polar area charts are good for showing proportional part-to-whole information. You can create a single series polar chart, where each series is made of multiple slices, or multi-series, polar charts.

Each series describes one pie, and each data value specifies one slice. When using overlayed polar charts (described below), use multiple series.

To display the text associated with a slice, you will have to use a chart legend. The legend will be a text associated by color.

#### Simple

[![static polar chart](https://image-charts.com/chart?chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chs=700x200&cht=pa&icac=documentation&icretina=1&ichm=8db5a5da53185816953cacb1eefa71298393aadff9b353bb2b3b606896381f33)](https://editor.image-charts.com/chart?chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chs=700x200&cht=pa&icac=documentation&icretina=1&ichm=8db5a5da53185816953cacb1eefa71298393aadff9b353bb2b3b606896381f33)

```
cht=pa
chd=t:60,40,20
chdl=Image|Charts|Rocks
chxt=x
chco=FF00007F,00FF007F,0000FF7F
```

Values are displayed relative to each other: so a chart with values 1,2,3 will look the same as a chart with values 100,200,300.

Negative values display as empty slices of the appropriate size.

Values are displayed relative to each other: so a chart with values 1,2,3 will look the same as a chart with values 100,200,300.

Negative values display as empty slices of the appropriate size.

#### Slice gradient fill

It also possible to use [gradient fill](/reference/background-fill/#gradient-fills) `chf=ps<index>-<sliceIndex>` to specify a gradient per pie slice.

[![polar chart image](https://image-charts.com/chart?chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf44336%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C009688%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F4%2C1&chs=700x200&cht=pa&icac=documentation&icretina=1&ichm=016dd83420df423b45996ec1ef2f3a5ab5808a80d3699bcee3c48b14c720ba92)](https://editor.image-charts.com/chart?chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf44336%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C009688%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F4%2C1&chs=700x200&cht=pa&icac=documentation&icretina=1&ichm=016dd83420df423b45996ec1ef2f3a5ab5808a80d3699bcee3c48b14c720ba92)

```
cht=pa
chd=t:60,40,20
chdl=Image|Charts|Rocks
chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1|ps0-2,lg,45,EA469E,0.2,03A9F4,1
```

#### Display axis labels

Because axis labels are behind pie slices, leverage [serie color transparency](/reference/color-format) to let the value visible.

[![polar chart](https://image-charts.com/chart?chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1&chs=700x200&cht=pa&chxt=x%2Cy&icac=documentation&icretina=1&ichm=0714cbfaa55e7ab49888ee16b2047a3bc00c58f75273fb045ed51e043b43c2b8)](https://editor.image-charts.com/chart?chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1&chs=700x200&cht=pa&chxt=x%2Cy&icac=documentation&icretina=1&ichm=0714cbfaa55e7ab49888ee16b2047a3bc00c58f75273fb045ed51e043b43c2b8)

```
cht=pa
chxt=x,y
chd=t:60,40,20
chdl=Image|Charts|Rocks
chf=ps0-0,lg,45,ffeb3b,0.2,f443367C,1|ps0-1,lg,45,8bc34a,0.2,0096887C,1|ps0-2,lg,45,EA469E,0.2,03A9F47C,1
```

#### Chart animation

Just like the previous example but with `&chan`, see [gif animations](/reference/animation/) for deeper configuration.

[![animated pie chart](https://image-charts.com/chart?chan&chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1&chs=700x200&cht=pa&chxt=x%2Cy&icac=documentation&icretina=1&ichm=0e3d216ea7cffd4a1391de962b13d67f7bd24507e4423ffd62d4e93530065ef1)](https://editor.image-charts.com/chart?chan&chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1&chs=700x200&cht=pa&chxt=x%2Cy&icac=documentation&icretina=1&ichm=0e3d216ea7cffd4a1391de962b13d67f7bd24507e4423ffd62d4e93530065ef1)

```
chan
```

#### Slice labels

[Chart labels](/reference/chart-label) also work with polar area charts.

[![animated pie slice](https://image-charts.com/chart?chan&chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1&chl=2018%7C2017%7C2015&chs=700x300&cht=pa&chxt=x%2Cy&icac=documentation&icretina=1&ichm=83b5dbf20882973ca97722534a31ff8ec256169180c6abf4544a0a7fb36389a6)](https://editor.image-charts.com/chart?chan&chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1&chl=2018%7C2017%7C2015&chs=700x300&cht=pa&chxt=x%2Cy&icac=documentation&icretina=1&ichm=83b5dbf20882973ca97722534a31ff8ec256169180c6abf4544a0a7fb36389a6)

```
chl=2018|2017|2015
```

## Chart Types

Specify a pie chart with the following syntax:

#### Syntax

```
cht=<chart_type>
```

Where `<chart_type>` is one of the the following types:

- **`pa`**: Two dimensional polar chart. Supply one or more data serie. Subsequent data series will automatically overlay previous ones.

By default, pie segment colors are interpolated from pink to pale yellow. Specify other colors as described in [Series Colors](#series-colors). Specify serie legends with `chdl` as described in [Chart Legend Text and Style](/reference/legend-text-and-style).

[![pie chart segment](https://image-charts.com/chart?chd=s%3AUf9a&chdl=January%7CFebruary%7CMarch%7CApril&chs=700x200&cht=pa&icac=documentation&icretina=1&ichm=1bb8da74168a75b186b57e5982954dda93746b61b824bc7a9938f0e8288f3c4f)](https://editor.image-charts.com/chart?chd=s%3AUf9a&chdl=January%7CFebruary%7CMarch%7CApril&chs=700x200&cht=pa&icac=documentation&icretina=1&ichm=1bb8da74168a75b186b57e5982954dda93746b61b824bc7a9938f0e8288f3c4f)

```
cht=pa
chs=700x200
```

## Series Colors

You can specify the colors of all values, each value, or some values using the `chco` parameter.

#### Syntax

```
chco=<slice_1>|<slice_2>|<slice_n>,<series_color_1>,...,<series_color_n>
```

- **`<color>`** Slice colors in [RRGGBB[AA] hexadecimal format](/reference/color-format). Specify a single series color and all slices in that series will be colored in gradations of that color from darkest (first data member) to lightest (last data member). Specify two or more colors delimited by a | to describe individual slice colors. When you have multiple series (that is, a chart with concentric rings), you can specify values for different series by separating values by a comma. When fewer slice/series colors are given than slices/series displayed, then the chart will cycle through from the beginning of the slice list for the series, or the series list for the chart. You cannot specify a distinct gradient for each series in a multi-series chart.


#### Examples

Specify a single color to have gradations from darkest (first slice) to lightest (last slice).

[![transparent pie chart](https://image-charts.com/chart?chco=FF00007F&chd=s%3AHellobla&chs=700x200&cht=pa&icac=documentation&icretina=1&ichm=58e610d80d377c7cbf4ef250cd69b943a735f0200234344b33adf05c55e4d33d)](https://editor.image-charts.com/chart?chco=FF00007F&chd=s%3AHellobla&chs=700x200&cht=pa&icac=documentation&icretina=1&ichm=58e610d80d377c7cbf4ef250cd69b943a735f0200234344b33adf05c55e4d33d)

```
chco=FF00007F
```

Defining a gradient; here, from yellow to red.

[![pie chart with gradient](https://image-charts.com/chart?chco=FFFF10%2CFF2027&chd=t%3A10%2C20%2C30%2C40%2C50&chs=700x200&cht=pa&icac=documentation&icretina=1&ichm=dccdfe5809f319f327267778e0b4e68f077d82a0d28712fa154a1097d45bc99f)](https://editor.image-charts.com/chart?chco=FFFF10%2CFF2027&chd=t%3A10%2C20%2C30%2C40%2C50&chs=700x200&cht=pa&icac=documentation&icretina=1&ichm=dccdfe5809f319f327267778e0b4e68f077d82a0d28712fa154a1097d45bc99f)

```
chd=t:10,20,30,40,50
chco=FFFF10,FF2027
```


Defining individual slice colors; specify one color per slice.

[![pie chart with individual slice color](https://image-charts.com/chart?chco=EA469E7C%7C03A9F47C%7CFFC00C7C&chd=t%3A10%2C20%2C30&chs=700x200&cht=pa&chxt=x&icac=documentation&icretina=1&ichm=a0ffea9f3aa158e3dc9ff7ce6e7c820b85860b4976c125ac7c296a153474e477)](https://editor.image-charts.com/chart?chco=EA469E7C%7C03A9F47C%7CFFC00C7C&chd=t%3A10%2C20%2C30&chs=700x200&cht=pa&chxt=x&icac=documentation&icretina=1&ichm=a0ffea9f3aa158e3dc9ff7ce6e7c820b85860b4976c125ac7c296a153474e477)

```
chd=t:10,20,30
chxt=x
chco=EA469E|03A9F4|FFC00C
```


<!--Finally, here's a overlayed polar chart that includes both series colors and individual slice colors. The chart has two concentric data series. In human-readable form, the colors are chco=blue|yellow|green,blue|pink. The comma breaks this into two series:

- orange|yellow|green - One color defined for each slice.
- blue|pink - Alternating blue and yellow slices.

[![](https://image-charts.com/https://image-charts.com/chart?chco=FF80087C%7CFFBF0C7C%7C11B11B7C%2C03A9F47C%7CEA469E7C&chd=s%3AeYY%2CORVM&chdl=1%7C2%7C3%7C4%7C5%7C6%7C7&chs=700x200&cht=pa&icac=documentation&icretina=1&ichm=55bdd654be23e776658ee4e5a93029df4bd3d7ff9668dcc138e9cbc3582235c4)](https://editor.image-charts.com/chart?chco=FF80087C%7CFFBF0C7C%7C11B11B7C%2C03A9F47C%7CEA469E7C&chd=s%3AeYY%2CORVM&chdl=1%7C2%7C3%7C4%7C5%7C6%7C7&chs=700x200&cht=pa&icac=documentation&icretina=1&ichm=55bdd654be23e776658ee4e5a93029df4bd3d7ff9668dcc138e9cbc3582235c4)

```
chd=s:eYY,ORVM
chco=FF8008|FFBF0C|11B11B,03A9F4|EA469E
```-->


## Legend

You can display a legend for each individual polar chart slices using the `chdl` parameter, one legend entry per slice.

!!! note
    Only URL-safe characters are permitted in label strings. To be safe, you should URL-encode any strings containing characters not in the character set `0-9a-zA-Z`.

#### Syntax

```
chdl=
  <legend_value>|
    ...
  <legend_value>
```

- **`<legend_value>`** A string value to apply to a slice. Legend labels in polar chart are applied consecutively to the data points in `chd`. If you have multiple series (for a concentric pie chart, for example), labels are applied to all points in all sequences, in the order specified in `chd`. Use a pipe delimiter ( `|` ) between each label. Specify a missing intervening value by using two consecutive pipe characters with no space between them: `||` . You do not need to label all slices.

Note: unlike Google Image Charts you won't need to [anticipate how much room your need to display labels entirely](https://developers.google.com/chart/image/docs/gallery/pie_charts#pie_chart_label). Image-charts automatically scale the graph to display labels.

#### Examples

Let specify legends for a simple animated polar chart.

[![chart](https://image-charts.com/chart?cht=pa&chs=700x200&chd=t:20,20,30,40,50&chdl=20°|20°|30°|40°|50°&chxt=x&chco=FF80087C&chan)](https://editor.image-charts.com/chart?cht=pa&chs=700x200&chd=t:20,20,30,40,50&chdl=20°|20°|30°|40°|50°&chxt=x&chco=FF80087C&chan)

```
cht=pa
chd=t:20,20,30,40,50
chdl=20°|20°|30°|40°|50°
```
