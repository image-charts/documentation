---
meta_description: "Generate pie charts as image using Image-charts API. From basic or pie charts to labels or legend, we handle everything!"
---
# Pie Charts

This section describes how to create pie charts using the Image-Chart API.

## Overview

Pie charts are good for showing simple proportional part-to-whole information. You can create a single series pie chart, where each series is made of multiple slices, or multi-series, concentric charts.

Each series describes one pie, and each data value specifies one slice. When using nested pie charts (described below), use multiple series.

To display the text associated with a slice, you will have to use either pie chart labels or a chart legend. Pie chart labels are text around the chart with lines pointing toward the slice. Legends are text associated by color.

- **Labels**

[![chart](https://image-charts.com/chart?chd=s%3AUf9a&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1%7Cps0-3%2Clg%2C45%2C03a9f4%2C0.2%2C03A9F47C%2C1&chl=Jan%7CFeb%7CMar%7CApr&chs=700x200&cht=p&icac=documentation&icretina=1&ichm=46b30a54540b9a9db1931ed3c2a7164ead57df5f11ebc2e376ce9340ac95a364)](https://editor.image-charts.com/chart?chd=s%3AUf9a&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1%7Cps0-3%2Clg%2C45%2C03a9f4%2C0.2%2C03A9F47C%2C1&chl=Jan%7CFeb%7CMar%7CApr&chs=700x200&cht=p&icac=documentation&icretina=1&ichm=46b30a54540b9a9db1931ed3c2a7164ead57df5f11ebc2e376ce9340ac95a364)

```
chl=January|February|March|April
```

- **Legend**

[![chart](https://image-charts.com/chart?chd=s%3AUf9a%2CUf9a&chdl=January%7CFebruary%7CMarch%7CApril&chs=700x200&cht=pc&icac=documentation&icretina=1&ichm=6a071bb15e503d6f4b6e54f3706c43aa2a374e4faa8a702a8306f3dde74109cb)](https://editor.image-charts.com/chart?chd=s%3AUf9a%2CUf9a&chdl=January%7CFebruary%7CMarch%7CApril&chs=700x200&cht=pc&icac=documentation&icretina=1&ichm=6a071bb15e503d6f4b6e54f3706c43aa2a374e4faa8a702a8306f3dde74109cb)

```
chdl=January|February|March|April
```

- **Labels and Legend**

[![chart](https://image-charts.com/chart?chd=s%3AUf9a&chdl=30%C2%B0%7C40%C2%B0%7C50%C2%B0%7C60%C2%B0&chf=b0%2Clg%2C45%2C87ed42%2C0%2Cafff96%2C1&chl=Jan%7CFeb%7CMar%7CApr&chs=700x200&cht=p&icac=documentation&icretina=1&ichm=bb633a272256bdb35079e9ca799a1c5abb779765d237aebe7dd6b7ecfc9ebe28)](https://editor.image-charts.com/chart?chd=s%3AUf9a&chdl=30%C2%B0%7C40%C2%B0%7C50%C2%B0%7C60%C2%B0&chf=b0%2Clg%2C45%2C87ed42%2C0%2Cafff96%2C1&chl=Jan%7CFeb%7CMar%7CApr&chs=700x200&cht=p&icac=documentation&icretina=1&ichm=bb633a272256bdb35079e9ca799a1c5abb779765d237aebe7dd6b7ecfc9ebe28)

```
chl=January|February|March|April
chdl=30°|40°|50°|60°
```


Values are displayed relative to each other: so a chart with values 1,2,3 will look the same as a chart with values 100,200,300. **However**, when using text format data, values greater than 100 are trimmed to 100, so you will need to use text format with custom scaling to display slices greater than 100 properly (use the chds parameter with min/max values of chds=0,<max-slice-size>).

Negative values display as empty slices of the appropriate size.

## Chart Types

Specify a pie chart with the following syntax:

#### Syntax

##### Pie

```
cht=<chart_type>
```

Where `<chart_type>` is one of the the following types:

- **`p`**: Two dimensional pie chart. Supply one data series only; subsequent data series will automatically generate a concentric pie chart **`pc`**.

By default, pie segment colors are interpolated from pink to pale yellow. Specify other colors as described in [Series Colors](#series-colors). Specify labels with `chl` as described in Pie chart labels.

<!-- The Image-Charts API calculates the circle's radius from the minimum of width and height specified in the chart size (chs) parameter. If you are including labels, you probably need to specify the size of the width to be twice the size of the height, to ensure that your labels are fully visible. -->

[![chart](https://image-charts.com/chart?chd=s%3AUf9a&chf=b0%2Clg%2C0%2Cffeb3b%2C0.2%2Cf443367C%2C0.8&chl=Jan%7CFeb%7CMar%7CApr&chs=700x200&cht=p&icac=documentation&icretina=1&ichm=8bbb5f86962fd92be437bf898965d41fbcf8a5201135b3c6e02a87714965cd80)](https://editor.image-charts.com/chart?chd=s%3AUf9a&chf=b0%2Clg%2C0%2Cffeb3b%2C0.2%2Cf443367C%2C0.8&chl=Jan%7CFeb%7CMar%7CApr&chs=700x200&cht=p&icac=documentation&icretina=1&ichm=8bbb5f86962fd92be437bf898965d41fbcf8a5201135b3c6e02a87714965cd80)

```
cht=p
chs=200x100
```

- **`p3`**: A three-dimensional pie chart. :checkered_flag: this type of chart is not planned to be supported and will automatically falls back to the flat pie chart **`p`** type.

- **`pc`**: A concentric pie chart. Once more than 1 data serie is specified, a concentric chart is automatically selected by Image-Charts, the first serie will be displayed on the border while the last serie will be displayed in the center.

[![chart](https://image-charts.com/chart?chd=s%3AHelo%2CWrld&chs=700x200&cht=pc&icac=documentation&icretina=1&ichm=f189ee981b08f785d69200a5f5c6e1e1aef7f96ff034876ff8158396f8b9ee08)](https://editor.image-charts.com/chart?chd=s%3AHelo%2CWrld&chs=700x200&cht=pc&icac=documentation&icretina=1&ichm=f189ee981b08f785d69200a5f5c6e1e1aef7f96ff034876ff8158396f8b9ee08)

```
cht=pc
chd=s:Helo,Wrld
```

##### Doughnut

- **`pd`**: A doughnut pie chart is a good option when you need to display data at its center.


[![chart](https://image-charts.com/chart?chan=1200&chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chdlp=b&chf=b0%2Clg%2C90%2C68cefd%2C0%2C96a6ff%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K&chli=95K%E2%82%AC&chma=0%2C0%2C0%2C10&chs=700x300&cht=pd&chtt=Expenses&icac=documentation&icretina=1&ichm=94ea33795e5ea142ee704b8a073c87903b52e3d0431afb5170ba5584b8ed33c0)](https://editor.image-charts.com/?tab_editor=form&tab_viewer=image#https:/image-charts.comchart?chan=1200&chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chdlp=b&chf=b0%2Clg%2C90%2C68cefd%2C0%2C96a6ff%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K&chli=95K%E2%82%AC&chma=0%2C0%2C0%2C10&chs=700x300&cht=pd&chtt=Expenses&icac=documentation&icretina=1&ichm=94ea33795e5ea142ee704b8a073c87903b52e3d0431afb5170ba5584b8ed33c0)

```
cht=pd
chd=t:10,40,45
chdl=Expansion|Payroll|Equipment
chli=95K€
chl=10K€|40K€|45K€
```

<!-- Note that for all types, negative numbers in data cause "blank" slices.

[![chart](https://image-charts.com/chart?chd=t%3A10%2C-10%2C10%2C-10%7C5%2C-5%2C5%2C-5%2C5%2C-5%2C5%2C-5%2C5%2C-5&chs=700x200&cht=pc&icac=documentation&icretina=1&ichm=23981c65558c975c4c477d174320f52e44e82da70661b32807a8c1d101161a2c)](https://editor.image-charts.com/chart?chd=t%3A10%2C-10%2C10%2C-10%7C5%2C-5%2C5%2C-5%2C5%2C-5%2C5%2C-5%2C5%2C-5&chs=700x200&cht=pc&icac=documentation&icretina=1&ichm=23981c65558c975c4c477d174320f52e44e82da70661b32807a8c1d101161a2c)

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

[![chart](https://image-charts.com/chart?chco=0000FF&chd=s%3AHellobla&chs=700x200&cht=p3&icac=documentation&ichm=eb39e39f5bf0f50aba6773514de2622365af442c381159e1e087b441a1cedc24)](https://editor.image-charts.com/chart?chco=0000FF&chd=s%3AHellobla&chs=700x200&cht=p3&icac=documentation&ichm=eb39e39f5bf0f50aba6773514de2622365af442c381159e1e087b441a1cedc24)

```
chco=0000FF
```

Defining a gradient; here, from yellow to red.

[![chart](https://image-charts.com/chart?chco=FFFF10%2CFF2027&chd=t%3A10%2C20%2C30%2C40%2C50&chs=700x200&cht=p3&icac=documentation&icretina=1&ichm=5fb1bd4a6bf0ff717bb5f14d164fef96499ed4bb3c4c51c40a8713a5cd003905)](https://editor.image-charts.com/chart?chco=FFFF10%2CFF2027&chd=t%3A10%2C20%2C30%2C40%2C50&chs=700x200&cht=p3&icac=documentation&icretina=1&ichm=5fb1bd4a6bf0ff717bb5f14d164fef96499ed4bb3c4c51c40a8713a5cd003905)

```
chd=t:10,20,30,40,50
chco=FFFF10,FF2027
```


Defining individual slice colors; specify one color per slice.

[![chart](https://image-charts.com/chart?chco=EA469E%7C03A9F4%7CFFC00C&chd=t%3A10%2C20%2C30&chs=700x200&cht=p3&icac=documentation&icretina=1&ichm=99b6ab5593f9f3faa1ffe371f7e4eebb232a9da2ca6fdf794fcca4fe7aa5cdc0)](https://editor.image-charts.com/chart?chco=EA469E%7C03A9F4%7CFFC00C&chd=t%3A10%2C20%2C30&chs=700x200&cht=p3&icac=documentation&icretina=1&ichm=99b6ab5593f9f3faa1ffe371f7e4eebb232a9da2ca6fdf794fcca4fe7aa5cdc0)

```
chd=t:10,20,30
chco=EA469E|03A9F4|FFC00C
```

The following chart has two data series, but specifies a single gradient per series.

[![](https://image-charts.com/chart?chco=EA469E%2C03A9F4&chd=s%3AeYY%2CORVM&chdl=1%7C2%7C3%7C4%7C5%7C6%7C7&chs=700x200&cht=pc&icac=documentation&icretina=1&ichm=3cc96c81480f2f756b3946d37cecdb2c4d13e5578590a5e51f3e68fd23399b57)](https://editor.image-charts.com/chart?chco=EA469E%2C03A9F4&chd=s%3AeYY%2CORVM&chdl=1%7C2%7C3%7C4%7C5%7C6%7C7&chs=700x200&cht=pc&icac=documentation&icretina=1&ichm=3cc96c81480f2f756b3946d37cecdb2c4d13e5578590a5e51f3e68fd23399b57)

```
chco=EA469E,03A9F4
```

Finally, here's a concentric chart that includes both series colors and individual slice colors. The chart has two concentric data series. In human-readable form, the colors are chco=blue|yellow|green,blue|pink. The comma breaks this into two series:

- orange|yellow|green - One color defined for each slice.
- blue|pink - Alternating blue and yellow slices.

[![](https://image-charts.com/chart?chco=FF8008%7CFFBF0C%7C11B11B%2C03A9F4%7CEA469E&chd=s%3AeYY%2CORVM&chdl=1%7C2%7C3%7C4%7C5%7C6%7C7&chs=700x200&cht=pc&icac=documentation&icretina=1&ichm=d976e7cc843f8db592b8eb2454cf622d010e46837aca76faae72c977e8a623e4)](https://editor.image-charts.com/chart?chco=FF8008%7CFFBF0C%7C11B11B%2C03A9F4%7CEA469E&chd=s%3AeYY%2CORVM&chdl=1%7C2%7C3%7C4%7C5%7C6%7C7&chs=700x200&cht=pc&icac=documentation&icretina=1&ichm=d976e7cc843f8db592b8eb2454cf622d010e46837aca76faae72c977e8a623e4)

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

[![chart](https://image-charts.com/chart?chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chf=b0%2Clg%2C45%2Cf5c4c4%2C0%2Cf57676%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K%E2%82%AC&chli=95K%E2%82%AC&chs=700x300&cht=pd&chtt=Expenses&icac=documentation&icretina=1&ichm=fc1cc660fba509049394437b2706f91db3f44b6a654b6e3f60be91757c4af26a)](https://editor.image-charts.com/chart?chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chf=b0%2Clg%2C45%2Cf5c4c4%2C0%2Cf57676%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K%E2%82%AC&chli=95K%E2%82%AC&chs=700x300&cht=pd&chtt=Expenses&icac=documentation&icretina=1&ichm=fc1cc660fba509049394437b2706f91db3f44b6a654b6e3f60be91757c4af26a)

```
cht=pd
chd=t:10,40,45
chdl=Expansion|Payroll|Equipment
chli=95K€
chl=10K€|40K€|45K€
```

Now, let's animate it. Note how nicely the `easeOutBounce` animation easing is applied to the inside label!

[![chart](https://image-charts.com/chart?chan=1500%2CeaseOutBounce&chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chf=b0%2Clg%2C90%2C68cefd%2C0%2C96a6ff%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K%E2%82%AC&chli=95K%E2%82%AC&chs=700x300&cht=pd&chtt=Expenses&icac=documentation&icretina=1&ichm=4b74970b9927cb89b3d4637e375aa5fd1ec29a263616a52b12315045f336f478)](https://editor.image-charts.com/chart?chan=1500%2CeaseOutBounce&chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chf=b0%2Clg%2C90%2C68cefd%2C0%2C96a6ff%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K%E2%82%AC&chli=95K%E2%82%AC&chs=700x300&cht=pd&chtt=Expenses&icac=documentation&icretina=1&ichm=4b74970b9927cb89b3d4637e375aa5fd1ec29a263616a52b12315045f336f478)

```
cht=pd
chd=t:10,40,45
chdl=Expansion|Payroll|Equipment
chli=95K€
chl=10K€|40K€|45K€
chan=1500,easeOutBounce
```
