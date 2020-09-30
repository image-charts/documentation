---
meta_description: "Image-charts API propose to customize your graphics as for example with chart title. This documentation shows you how to use the API url parameters to generate a chart."
---
You can specify the title text, color, and font size for your chart.

#### Syntax

```
chtt=<chart_title>
chts=<font_color>,<font_size>[,<opt_alignment>,<opt_font_family>,<opt_font_style>]
```

`chtt` - Specifies the chart title.

- **`<chart_title>`** Title to show for the chart. You cannot specify where this appears, but you can optionally specify the font size and color. Currently basic latin and latin supplement characters are supported (need more? Ask our support). Use a `+` sign to indicate spaces, and a pipe character ` | ` to indicate line breaks.

`chts` [Optional] - Colors and font size for the chtt parameter.

- **`<font_color>`** The title color, in [RRGGBB[AA] hexadecimal format](/reference/color-format). Default color is black.
- **`<font_size>`** Font size of the title, in points.
- **`<opt_alignment>`** Not implemented yet.
- **`<opt_font_family>`** [Optional] one of the [supported open-source font](/reference/chart-font/#supported-open-source-fonts).
- **`<opt_font_style>`** [Optional] one of `normal` or `italic`. Default value used is `normal`.

!!! info "Enterprise+ subscription only"
    **Font-family** and **Font-style** are only enabled in **Enterprise+** subscriptions

<!-- - **`<opt_alignment>`** [Optional] Alignment of the title. Choose one of the following case-sensitive string values: "l" (left), "c" (centered) "r" (right). Default is "c". -->

#### Examples

A chart with a title, using default color and font size. Specify a space with a plus sign (+). `chts` is not specified here.

[![chart](https://image-charts.com/chart?chbh=22%2C4&chco=FF6B6B%2CC44D58&chd=s%3AYUVmw1%2Cwellow&chs=700x200&cht=bvs&chtt=Site%20visitors%20by%20month%7CJanuary%20to%20July&icac=documentation&ichm=244131d1ae07bbd376c78f71c3c80aeca5d8feba2d93bb8bec0ba3f00596ba38)](https://editor.image-charts.com/chart?chbh=22%2C4&chco=FF6B6B%2CC44D58&chd=s%3AYUVmw1%2Cwellow&chs=700x200&cht=bvs&chtt=Site%20visitors%20by%20month%7CJanuary%20to%20July&icac=documentation&ichm=244131d1ae07bbd376c78f71c3c80aeca5d8feba2d93bb8bec0ba3f00596ba38)

```
chtt=Site+visitors+by+month+January+to+July
```

A chart with a blue, 20-point title.

[![chart](https://image-charts.com/chart?chbh=22%2C4&chco=4ECDC4%2CC7F464&chd=s%3AYUVmw1%2Cwellow&chs=700x200&cht=bvs&chts=556270%2C20%2Cr&chtt=Site%20visitors&icac=documentation&ichm=5d2d3730940204c67b0a5c168e6f05c928f23830e7b9646dfc9206e7f8f5d610)](https://editor.image-charts.com/chart?chbh=22%2C4&chco=4ECDC4%2CC7F464&chd=s%3AYUVmw1%2Cwellow&chs=700x200&cht=bvs&chts=556270%2C20%2Cr&chtt=Site%20visitors&icac=documentation&ichm=5d2d3730940204c67b0a5c168e6f05c928f23830e7b9646dfc9206e7f8f5d610)


```
chtt=Site+visitors
chts=FF0000,20,r
```

A chart with a teal, Dancing Script, 20-point title.

[![chart](https://image-charts.com/chart?chbh=22%2C4&chco=4ECDC4%2CC7F464&chd=s%3AYUVmw1%2Cwellow&chs=700x200&cht=bvs&chts=008080%2C20%2Cr%2CDancing%20Script&chtt=Site%20visitors&icac=documentation&icretina=1&ichm=8b55c3e6f48cba2655aa7d6f79ca28a1ad4fa8165ead6d2d7daa2603f52255f9)](https://editor.image-charts.com/chart?chbh=22%2C4&chco=4ECDC4%2CC7F464&chd=s%3AYUVmw1%2Cwellow&chs=700x200&cht=bvs&chts=008080%2C20%2Cr%2CDancing%20Script&chtt=Site%20visitors&icac=documentation&icretina=1&ichm=8b55c3e6f48cba2655aa7d6f79ca28a1ad4fa8165ead6d2d7daa2603f52255f9)


```
chtt=Site+visitors
chts=008080,20,r,Dancing Script
```

A chart with a teal, Amatic SC, italic, 20-point title.

[![chart](https://image-charts.com/chart?chbh=22%2C4&chco=4ECDC4%2CC7F464&chd=s%3AYUVmw1%2Cwellow&chs=700x200&cht=bvs&chts=008080%2C20%2Cr%2CAmatic%20SC%2Citalic&chtt=Site%20visitors&icac=documentation&icretina=1&ichm=51ed136af930ed9f677b9cdfb0f497e50a965527f93e109e27ef2364922b9237)](https://editor.image-charts.com/chart?chbh=22%2C4&chco=4ECDC4%2CC7F464&chd=s%3AYUVmw1%2Cwellow&chs=700x200&cht=bvs&chts=008080%2C20%2Cr%2CAmatic%20SC%2Citalic&chtt=Site%20visitors&icac=documentation&icretina=1&ichm=51ed136af930ed9f677b9cdfb0f497e50a965527f93e109e27ef2364922b9237)


```
chtt=Site+visitors
chts=008080,20,r,Amatic SC,italic
```
