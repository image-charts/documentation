# Pie Charts

This section describes how to create pie charts using the Image-Chart API.

## Overview

Pie charts are good for showing simple proportional part-to-whole information. You can create a single series pie chart, where each series is made of multiple slices, or multi-series, concentric charts.

Each series describes one pie, and each data value specifies one slice. When using nested pie charts (described below), use multiple series.

To display the text associated with a slice, you will have to use either pie chart labels or a chart legend. Pie chart labels are text around the chart with lines pointing toward the slice. Legends are text associated by color.

- **Labels**

[![chart](https://image-charts.com/chart?chd=s%3AUf9a&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1%7Cps0-3%2Clg%2C45%2C03a9f4%2C0.2%2C03A9F47C%2C1&chl=Jan%7CFeb%7CMar%7CApr&chs=700x200&cht=p&icac=fgribreau&icretina=1&ichm=45bbdbb3ba033f340fd0d41a2ae451e35eedc8e215d4f7cec0021361eb399c1b)](https://editor.image-charts.com/chart?chd=s%3AUf9a&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1%7Cps0-3%2Clg%2C45%2C03a9f4%2C0.2%2C03A9F47C%2C1&chl=Jan%7CFeb%7CMar%7CApr&chs=700x200&cht=p&icac=fgribreau&icretina=1&ichm=45bbdbb3ba033f340fd0d41a2ae451e35eedc8e215d4f7cec0021361eb399c1b)

```
chl=January|February|March|April
```

- **Legend**

[![chart](https://image-charts.com/chart?chd=s%3AUf9a%2CUf9a&chdl=January%7CFebruary%7CMarch%7CApril&chs=700x200&cht=pc&icac=fgribreau&icretina=1&ichm=182416c0106e15dc9bcf75a55cfed55ea746adda54366edc97df3915d160a289)](https://editor.image-charts.com/chart?chd=s%3AUf9a%2CUf9a&chdl=January%7CFebruary%7CMarch%7CApril&chs=700x200&cht=pc&icac=fgribreau&icretina=1&ichm=182416c0106e15dc9bcf75a55cfed55ea746adda54366edc97df3915d160a289)

```
chdl=January|February|March|April
```

- **Labels and Legend**

[![chart](https://image-charts.com/chart?chd=s%3AUf9a&chdl=30%C2%B0%7C40%C2%B0%7C50%C2%B0%7C60%C2%B0&chf=b0%2Clg%2C45%2C87ed42%2C0%2Cafff96%2C1&chl=Jan%7CFeb%7CMar%7CApr&chs=700x200&cht=p&icac=fgribreau&icretina=1&ichm=e58b40eb41e53fdc799c899892ae9f11cab630b6e232bce4843ad06dd9559307)](https://editor.image-charts.com/chart?chd=s%3AUf9a&chdl=30%C2%B0%7C40%C2%B0%7C50%C2%B0%7C60%C2%B0&chf=b0%2Clg%2C45%2C87ed42%2C0%2Cafff96%2C1&chl=Jan%7CFeb%7CMar%7CApr&chs=700x200&cht=p&icac=fgribreau&icretina=1&ichm=e58b40eb41e53fdc799c899892ae9f11cab630b6e232bce4843ad06dd9559307)

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

By default, pie segment colors are interpolated from pink to pale yellow. Specify other colors as described in [Series Colors](#series-colors). Specify labels with `chl` as described in Pie chart labels.

<!-- The Image-Charts API calculates the circle's radius from the minimum of width and height specified in the chart size (chs) parameter. If you are including labels, you probably need to specify the size of the width to be twice the size of the height, to ensure that your labels are fully visible. -->

[![chart](https://image-charts.com/chart?chd=s%3AUf9a&chf=b0%2Clg%2C0%2Cffeb3b%2C0.2%2Cf443367C%2C0.8&chl=Jan%7CFeb%7CMar%7CApr&chs=700x200&cht=p&icac=fgribreau&icretina=1&ichm=74599668ade10cf41e83b9a0750d8b8f31b4f238bcce9b85aa83f2ca9a673a70)](https://editor.image-charts.com/chart?chd=s%3AUf9a&chf=b0%2Clg%2C0%2Cffeb3b%2C0.2%2Cf443367C%2C0.8&chl=Jan%7CFeb%7CMar%7CApr&chs=700x200&cht=p&icac=fgribreau&icretina=1&ichm=74599668ade10cf41e83b9a0750d8b8f31b4f238bcce9b85aa83f2ca9a673a70)

```
cht=p
chs=200x100
```

- **`p3`**: A three-dimensional pie chart. :checkered_flag: this type of chart is not planned to be supported and will automatically falls back to the flat pie chart **`p`** type.

- **`pc`**: A concentric pie chart. Once more than 1 data serie is specified, a concentric chart is automatically selected by Image-Charts, the first serie will be displayed on the border while the last serie will be displayed in the center.

[![chart](https://image-charts.com/chart?chd=s%3AHelo%2CWrld&chs=700x200&cht=pc&icac=fgribreau&icretina=1&ichm=fe16b535e1432e0df2056d5913ef62b4bfb9609af432f4e31565a1b4b067827c)](https://editor.image-charts.com/chart?chd=s%3AHelo%2CWrld&chs=700x200&cht=pc&icac=fgribreau&icretina=1&ichm=fe16b535e1432e0df2056d5913ef62b4bfb9609af432f4e31565a1b4b067827c)

```
cht=pc
chd=s:Helo,Wrld
```

- **`pd`**: A doughnut pie chart.


[![chart](https://image-charts.com/chart?chan=1200&chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chdlp=b&chf=b0%2Clg%2C90%2C68cefd%2C0%2C96a6ff%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K%E2%82%AC&chli=95K%E2%82%AC&chma=0%2C0%2C0%2C10&chs=700x300&cht=pd&chtt=Expenses&icac=fgribreau&icretina=1&ichm=e9111219b5a00167e5eb659567baa297f9143e7a1e4231f210c99c30596f0a40)](https://image-charts.com/chart?chan=1200&chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chdlp=b&chf=b0%2Clg%2C90%2C68cefd%2C0%2C96a6ff%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K%E2%82%AC&chli=95K%E2%82%AC&chma=0%2C0%2C0%2C10&chs=700x300&cht=pd&chtt=Expenses&icac=fgribreau&icretina=1&ichm=e9111219b5a00167e5eb659567baa297f9143e7a1e4231f210c99c30596f0a40)

```
cht=pd
chd=t:10,40,45
chdl=Expansion|Payroll|Equipment
chli=95K€
chl=10K€|40K€|45K€
```

<!-- Note that for all types, negative numbers in data cause "blank" slices.

[![chart](https://image-charts.com/chart?chd=t%3A10%2C-10%2C10%2C-10%7C5%2C-5%2C5%2C-5%2C5%2C-5%2C5%2C-5%2C5%2C-5&chs=700x200&cht=pc&icac=fgribreau&icretina=1&ichm=b4cc9c860d948de02400328ca06f32189e463a42fb3bcc3c6009293f232443f5)](https://editor.image-charts.com/chart?chd=t%3A10%2C-10%2C10%2C-10%7C5%2C-5%2C5%2C-5%2C5%2C-5%2C5%2C-5%2C5%2C-5&chs=700x200&cht=pc&icac=fgribreau&icretina=1&ichm=b4cc9c860d948de02400328ca06f32189e463a42fb3bcc3c6009293f232443f5)

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

- **`<color>`** Slice colors in [RRGGBB[AA] hexadecimal format](/reference/color-format). Specify a single series color and all slices in that series will be colored in gradations of that color from darkest (first data member) to lightest (last data member). Specify two or more colors delimited by a | to describe individual slice colors. When you have multiple series (that is, a chart with concentric rings), you can specify values for different series by separating values by a comma. When fewer slice/series colors are given than slices/series displayed, then the chart will cycle through from the beginning of the slice list for the series, or the series list for the chart. You cannot specify a distinct gradient for each series in a multi-series chart.


#### Examples

Specify a single color to have gradations from darkest (first slice) to lightest (last slice).

[![chart](https://image-charts.com/chart?chco=0000FF&chd=s%3AHellobla&chs=700x200&cht=p3&icac=fgribreau&icretina=1&ichm=8a1c5a6c1e25ce9c5b698870d7c134462188295dcf5d91eb2aaeb576cf48dcbd)](https://editor.image-charts.com/chart?chco=0000FF&chd=s%3AHellobla&chs=700x200&cht=p3&icac=fgribreau&icretina=1&ichm=8a1c5a6c1e25ce9c5b698870d7c134462188295dcf5d91eb2aaeb576cf48dcbd)

```
chco=0000FF
```

Defining a gradient; here, from yellow to red.

[![chart](https://image-charts.com/chart?chco=FFFF10%2CFF2027&chd=t%3A10%2C20%2C30%2C40%2C50&chs=700x200&cht=p3&icac=fgribreau&icretina=1&ichm=1c233aa4369cccf14c0c49ca4d011e3100db8dccae6c1c5bae96c1c2f19829cd)](https://editor.image-charts.com/chart?chco=FFFF10%2CFF2027&chd=t%3A10%2C20%2C30%2C40%2C50&chs=700x200&cht=p3&icac=fgribreau&icretina=1&ichm=1c233aa4369cccf14c0c49ca4d011e3100db8dccae6c1c5bae96c1c2f19829cd)

```
chd=t:10,20,30,40,50
chco=FFFF10,FF2027
```


Defining individual slice colors; specify one color per slice.

[![chart](https://image-charts.com/chart?chco=EA469E%7C03A9F4%7CFFC00C&chd=t%3A10%2C20%2C30&chs=700x200&cht=p3&icac=fgribreau&icretina=1&ichm=dd386847e31a80a987f3180022865fca2f246494b2f4bf29b7abb2f480a99ed0)](https://editor.image-charts.com/chart?chco=EA469E%7C03A9F4%7CFFC00C&chd=t%3A10%2C20%2C30&chs=700x200&cht=p3&icac=fgribreau&icretina=1&ichm=dd386847e31a80a987f3180022865fca2f246494b2f4bf29b7abb2f480a99ed0)

```
chd=t:10,20,30
chco=EA469E|03A9F4|FFC00C
```

The following chart has two data series, but specifies a single gradient per series.

[![](https://image-charts.com/chart?chco=EA469E%2C03A9F4&chd=s%3AeYY%2CORVM&chdl=1%7C2%7C3%7C4%7C5%7C6%7C7&chs=700x200&cht=pc&icac=fgribreau&icretina=1&ichm=bb11ba9c8c1c13f468cfb389651878f03ee16c8e7bbbd98b94b07fed4575c263)](https://editor.image-charts.com/chart?chco=EA469E%2C03A9F4&chd=s%3AeYY%2CORVM&chdl=1%7C2%7C3%7C4%7C5%7C6%7C7&chs=700x200&cht=pc&icac=fgribreau&icretina=1&ichm=bb11ba9c8c1c13f468cfb389651878f03ee16c8e7bbbd98b94b07fed4575c263)

```
chco=EA469E,03A9F4
```

Finally, here's a concentric chart that includes both series colors and individual slice colors. The chart has two concentric data series. In human-readable form, the colors are chco=blue|yellow|green,blue|pink. The comma breaks this into two series:

- orange|yellow|green - One color defined for each slice.
- blue|pink - Alternating blue and yellow slices.

[![](https://image-charts.com/chart?chco=FF8008%7CFFBF0C%7C11B11B%2C03A9F4%7CEA469E&chd=s%3AeYY%2CORVM&chdl=1%7C2%7C3%7C4%7C5%7C6%7C7&chs=700x200&cht=pc&icac=fgribreau&icretina=1&ichm=5628ecd925d1664e0dde3b4ba71622819513c07a260dc7f8ae424a5096474a64)](https://editor.image-charts.com/chart?chco=FF8008%7CFFBF0C%7C11B11B%2C03A9F4%7CEA469E&chd=s%3AeYY%2CORVM&chdl=1%7C2%7C3%7C4%7C5%7C6%7C7&chs=700x200&cht=pc&icac=fgribreau&icretina=1&ichm=5628ecd925d1664e0dde3b4ba71622819513c07a260dc7f8ae424a5096474a64)

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

[![chart](https://image-charts.com/chart?chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chf=b0%2Clg%2C45%2Cf5c4c4%2C0%2Cf57676%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K%E2%82%AC&chli=95K%E2%82%AC&chs=700x300&cht=pd&chtt=Expenses&icac=fgribreau&icretina=1&ichm=ae92433e2fd5f3df697db7ca4edf613137275b427eabc537cd28f9ebfa381119)](https://editor.image-charts.com/chart?chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chf=b0%2Clg%2C45%2Cf5c4c4%2C0%2Cf57676%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K%E2%82%AC&chli=95K%E2%82%AC&chs=700x300&cht=pd&chtt=Expenses&icac=fgribreau&icretina=1&ichm=ae92433e2fd5f3df697db7ca4edf613137275b427eabc537cd28f9ebfa381119)

```
cht=pd
chd=t:10,40,45
chdl=Expansion|Payroll|Equipment
chli=95K€
chl=10K€|40K€|45K€
```

Now, let's animate it. Note how nicely the `easeOutBounce` animation easing is applied to the inside label!

[![chart](https://image-charts.com/chart?chan=1500%2CeaseOutBounce&chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chf=b0%2Clg%2C90%2C68cefd%2C0%2C96a6ff%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K%E2%82%AC&chli=95K%E2%82%AC&chs=700x300&cht=pd&chtt=Expenses&icac=fgribreau&icretina=1&ichm=e5dd327e64b4dcc94b6112fe0996ea38de1188813fc0321ed794d370b868dc7c)](https://editor.image-charts.com/chart?chan=1500%2CeaseOutBounce&chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chf=b0%2Clg%2C90%2C68cefd%2C0%2C96a6ff%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K%E2%82%AC&chli=95K%E2%82%AC&chs=700x300&cht=pd&chtt=Expenses&icac=fgribreau&icretina=1&ichm=e5dd327e64b4dcc94b6112fe0996ea38de1188813fc0321ed794d370b868dc7c)

```
cht=pd
chd=t:10,40,45
chdl=Expansion|Payroll|Equipment
chli=95K€
chl=10K€|40K€|45K€
chan=1500,easeOutBounce
```
