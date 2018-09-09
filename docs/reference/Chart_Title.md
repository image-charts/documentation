You can specify the title text, color, and font size for your chart.

#### Syntax

```
chtt=<chart_title>
chts=<color>,<font_size>
```

`chtt` - Specifies the chart title.

- **`<chart_title>`** Title to show for the chart. You cannot specify where this appears, but you can optionally specify the font size and color. Currently basic latin and latin supplement characters are supported.

`chts` [Optional] - Colors and font size for the chtt parameter.

- **`<color>`** The title color, in [RRGGBB[AA] hexadecimal format](#color-format). Default color is black.
- **`<font_size>`** Font size of the title, in points.

<!-- - **`<opt_alignment>`** [Optional] Alignment of the title. Choose one of the following case-sensitive string values: "l" (left), "c" (centered) "r" (right). Default is "c". -->

Note: Google Image Charts allowed a pipe character ( | ) to indicate line breaks in the chart titles, Image-charts does not support them and silently ignore them.

#### Examples

A chart with a title, using default color and font size. Specify a space with a plus sign (+). `chts` is not specified here.

![chart](https://image-charts.com/chart?cht=bvs&chd=s:YUVmw1,wellow&chco=FF6B6B,C44D58&chs=700x200&chtt=Site+visitors+by+month%7CJanuary+to+July&chbh=22,4)

```
chtt=Site+visitors+by+month+January+to+July
```

A chart with a blue, 20-point title.

![chart](https://image-charts.com/chart?cht=bvs&chd=s:YUVmw1,wellow&chco=4ECDC4,C7F464&chs=700x200&chtt=Site+visitors&chts=556270,20,r&chbh=22,4)


```
chtt=Site+visitors
chts=FF0000,20,r
```
