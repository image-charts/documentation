---
title: Legend Text and Style
description: "Learn how to customize your chart legend, from format to positionning."
sidebar_position: 14
---

# Legend Text and Style

The legend is a side section of the chart that gives a small text description of each series. You can specify the text associated with each series in this legend, and specify where on the chart it should appear.

:::note A Note on String Values
Only URL-safe characters are permitted in label strings. To be safe, you should URL-encode any strings containing characters not in the character set `0-9a-zA-Z`.
:::

#### Syntax

```
chdl=<data_series_1_label>|...|<data_series_n_label>
chdlp=<opt_position>|<opt_label_order>
chdls=<color>,<size>
```

`chdl` - The text for each series, to display in the legend.

- **`<data_series_label>`** The text for the legend entries. Each label applies to the corresponding series in the chd array. Use a + mark for a space. If you do not specify this parameter, the chart will not get a legend. There is no way to specify a line break in a label. The legend will typically expand to hold your legend text, and the chart area will shrink to accommodate the legend.

The limits on the length of the legend texts are in [Chart complexity limits](/limits-and-quotas#get-and-post-chart).

`chdlp` [Optional] The position of the legend, and order of the legend entries. You can specify *`<position>`* and/or *`<label_order>`*. If you specify both, separate them with a bar character. You can add an 's' to any value if you want empty legend entries in `chdl` to be skipped in the legend. Examples: `chdlp=bv`, `chdlp=r`, `chdlp=bv|r`, `chdlp=bvs|r`

- **`<opt_position>`** [Optional] Specifies the position of the legend on the chart (partially supported). To specify additional padding between the legend and the chart area or the image border, use the chma parameter.
  Choose one of the following values:
    - `b` - Legend at the bottom of the chart, legend entries in a horizontal row.
    - `t` - Legend at the top of the chart, legend entries in a horizontal row.
    - `r` - [Default] Legend to the right of the chart, legend entries in a vertical column.
    - `l` - Legend to the left of the chart, legend entries in a vertical column.

- **`<opt_label_order>`** [Optional] The order in which the labels are shown in the legend.
  Choose one of the following value:
    - `l` - [Default for vertical legends] Display labels in the order given to chdl.
    - `r` - Display labels in the reverse order as given to chdl. This is useful in stacked bar charts to show the legend in the same order as the bars appear.
    - `0,1,2`... - Custom label order. This is a list of zero-based label indexes from chdl, separated by commas.

`chdls` - [Optional] Specifies the color and font size of the legend text.

- **`<color>`** The legend text color, in [RRGGBB[AA] hexadecimal format](/reference/color-format).
- **`<size>`** The point size of the legend text.


#### Examples

How to specify legend text in the same order as your data series:

![chart](https://image-charts.com/chart?cht=ls&chd=t:0,30,60,70,90,95,100\|20,30,40,50,60,70,80\|10,30,40,45,52&chco=2196F3,FF5722,9c27b0&chs=700x150&chdl=NASDAQ|FTSE100|DOW&icac=documentation&ichm=e9bbb1ae46e3eaa0d4155b2cc7d4616bdb9606d5b3aacb784b5c07ca051a34e8)

```
chdl=NASDAQ|FTSE100|DOW
chco=FF0000,00FF00,0000FF
```

![chart](https://image-charts.com/chart?cht=p&chs=700x200&chd=t:100,20,20&chdl=First%7CSecond%7CThird&chco=2196F3,FF5722,9c27b0&icac=documentation&ichm=901dbb37f75a153cab66fc5df43eddd91b0a5c5c203b677f3e410bbae141b558)

```
chdl=First|Second|Third
chco=2196F3,FF5722,9c27b0
```

How to change legend font color and size:


![chart](https://image-charts.com/chart?cht=p&chs=700x200&chd=t:100,20,20&chdl=First\|Second\|Third&chco=2196F3,FF5722,9c27b0&chdls=9e9e9e,17&icac=documentation&ichm=079ab180ede37adb55242e5321a73cb5adb01cc687441f22ebbfdaa39e046f5a)


```
chdls=9e9e9e,17
```

Here is how to specify a chart with a right legend position:

![a](https://image-charts.com/chart?cht=ls&chd=t:0,30,60,70,90,95,100|20,30,40,50,60,70,80|10,30,40,45,52&chco=2196F3,FF5722,9c27b0&chs=700x150&chdl=NASDAQ|FTSE100|DOW&chdlp=r&chma=0,0,10&icac=documentation&ichm=43d1065325fa8cc86a86fac32d8b82674b2e7882bb29441c142c292243dc9905)

```
chdlp=r
```

Here is how to specify a chart with a left legend position:

![a](https://image-charts.com/chart?cht=ls&chd=t:0,30,60,70,90,95,100|20,30,40,50,60,70,80|10,30,40,45,52&chco=2196F3,FF5722,9c27b0&chs=700x150&chdl=NASDAQ|FTSE100|DOW&chdlp=l&chma=10,0,10&icac=documentation&ichm=c176bcf6de5e1b341cafb3595c5faf7dc40a2a3ba837f377df71de29e3246cc4)

```
chdlp=l
```

Here is how to specify a chart with a bottom legend position:

![a](https://image-charts.com/chart?cht=ls&chd=t:0,30,60,70,90,95,100|20,30,40,50,60,70,80|10,30,40,45,52&chco=2196F3,FF5722,9c27b0&chs=700x150&chdl=NASDAQ|FTSE100|DOW&chdlp=b&icac=documentation&ichm=39b8d3b9e416eea25dab003de96d5543310598b1b44cd71dca1c9ca09888ed4f)

```
chdlp=b
```

Here is how to specify a chart with a top legend position:

![a](https://image-charts.com/chart?cht=ls&chd=t:0,30,60,70,90,95,100|20,30,40,50,60,70,80|10,30,40,45,52&chco=2196F3,FF5722,9c27b0&chs=700x150&chdl=NASDAQ|FTSE100|DOW&chdlp=t&icac=documentation&ichm=482ff55ba095b4d642706c7db82697110e03fafb20e9518e9b6f1e664fbddcf9)

```
chdlp=t
```
