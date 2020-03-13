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
- **`<opt_font_family>`** [Optional] one of the [supported open-source font](#supported-open-source-fonts). Don't forget to checkout the [font gallery](https://fonts.google.com/).
- **`<opt_font_style>`** [Optional] one of `normal` or `italic`. Default value used is `normal`.

!!! info "Enterprise+ subscription only"
    **Font-family** and **Font-style** are only enabled in **Enterprise+** subscriptions

<!-- - **`<opt_alignment>`** [Optional] Alignment of the title. Choose one of the following case-sensitive string values: "l" (left), "c" (centered) "r" (right). Default is "c". -->

#### Examples

A chart with a title, using default color and font size. Specify a space with a plus sign (+). `chts` is not specified here.

[![chart](https://image-charts.com/chart?chbh=22,4&chco=FF6B6B,C44D58&chd=s:YUVmw1,wellow&chs=700x200&cht=bvs&chtt=Site visitors by month|January to July&icac=fgribreau&icretina=1&ichm=b4dce55ddf418d5548235763d3722b3bdb2a11c24b8f6f8613d39acfe7bcc8aa)](https://editor.image-charts.com/chart?cht=bvs&chd=s:YUVmw1,wellow&chco=FF6B6B,C44D58&chs=700x200&chtt=Site+visitors+by+month%7CJanuary+to+July&chbh=22,4)

```
chtt=Site+visitors+by+month+January+to+July
```

A chart with a blue, 20-point title.

[![chart](https://image-charts.com/chart?chbh=22,4&chco=4ECDC4,C7F464&chd=s:YUVmw1,wellow&chs=700x200&cht=bvs&chts=556270,20,r&chtt=Site visitors&icac=fgribreau&icretina=1&ichm=947f0740369cf818af39360a765d875be0d1a7fd9c439c418a4272295e52798d)](https://editor.image-charts.com/chart?cht=bvs&chd=s:YUVmw1,wellow&chco=4ECDC4,C7F464&chs=700x200&chtt=Site+visitors&chts=556270,20,r&chbh=22,4)


```
chtt=Site+visitors
chts=FF0000,20,r
```

A chart with a blue, Indie Flower, 20-point title.

[![chart](https://image-charts.com/chart?chbh=22,4&chco=4ECDC4,C7F464&chd=s:YUVmw1,wellow&chs=700x200&cht=bvs&chts=0000FF,20,r,Indie%20Flower&chtt=Site%20visitors&icac=fgribreau&ichm=71cce7e0ef467fc3b5c9d17892a0c711a87ae4dd05a35cb24c9a77a54f952064)](https://editor.image-charts.com/chart?chbh=22,4&chco=4ECDC4,C7F464&chd=s:YUVmw1,wellow&chs=700x200&cht=bvs&chts=0000FF,20,r,Indie%20Flower&chtt=Site%20visitors&icac=fgribreau&ichm=71cce7e0ef467fc3b5c9d17892a0c711a87ae4dd05a35cb24c9a77a54f952064)


```
chtt=Site+visitors
chts=FF0000,20,r,Indie+Flower
```

A chart with a blue, Roboto, italic, 20-point title.

[![chart](https://image-charts.com/chart?chbh=22,4&chco=4ECDC4,C7F464&chd=s:YUVmw1,wellow&chs=700x200&cht=bvs&chts=0000FF,20,r,Roboto,italic&chtt=Site%20visitors&icac=fgribreau&ichm=ee0e254216f437dfb976a47b99ebe314c236169f07ddbc71e5c0e92ab173ba5f)](https://editor.image-charts.com/chart?chbh=22,4&chco=4ECDC4,C7F464&chd=s:YUVmw1,wellow&chs=700x200&cht=bvs&chts=0000FF,20,r,Roboto,italic&chtt=Site%20visitors&icac=fgribreau&ichm=ee0e254216f437dfb976a47b99ebe314c236169f07ddbc71e5c0e92ab173ba5f)


```
chtt=Site+visitors
chts=FF0000,20,r,Roboto,italic
```
