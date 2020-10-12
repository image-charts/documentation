---
meta_description: "Learn how to customize your chart font, from a multitude of fonts."
---
!!! note "Enterprise+ plan only"
    Custom fonts are only available to **Enterprise+** subscriptions

Specify the font family and font style using `icfs` and `icff` query parameters.

#### Font Family Syntax

```
icff=<fontFamily>
```

- **`<fontFamily>`** one of the [supported open-source font](#supported-open-source-fonts). Don't forget to checkout the [font gallery](https://fonts.google.com/)

#### Example

A bar chart with [`icff=Dosis`](https://fonts.google.com/specimen/Dosis) font family and default font-style (`normal`):

[![chart](https://image-charts.com/chart?chbh=30%2C20%2C20&chco=FFB754%7CF9B6C5%7CB5D2F4%7CDAEDE9%7CE1DAED&chd=t%3A22%2C32%2C11%2C27%2C8&chds=0%2C40&chl=Jan%7CFeb%7CMar%7CApr%7CMay&chs=400x400&cht=bvg&chxl=1%3A%7CMonths%7C3%3A%7CScore&chxp=1%2C50%7C3%2C50&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icff=Dosis&icfs=normal&icretina=1&ichm=cf589d5500bf756b449ec775cf26bf559bac76cb03c914b3574b8e9ace83168e)](https://editor.image-charts.com/chart?chbh=30%2C20%2C20&chco=FFB754%7CF9B6C5%7CB5D2F4%7CDAEDE9%7CE1DAED&chd=t%3A22%2C32%2C11%2C27%2C8&chds=0%2C40&chl=Jan%7CFeb%7CMar%7CApr%7CMay&chs=400x400&cht=bvg&chxl=1%3A%7CMonths%7C3%3A%7CScore&chxp=1%2C50%7C3%2C50&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icff=Dosis&icfs=normal&icretina=1&ichm=cf589d5500bf756b449ec775cf26bf559bac76cb03c914b3574b8e9ace83168e)


A pie chart with [`icff=Indie Flower`](https://fonts.google.com/specimen/Indie+Flower) font family and default font-style (`normal`):
Note that `icff=Indie+Flower` and `icff=Indie%20Flower` will also work.

[![chart](https://image-charts.com/chart?chco=EA469E%2C03A9F4%2CFFC00C&chd=t%3A10%2C20%2C30&chdl=A%7CB%7CC&chl=Aaaa%7CBbbb%7CCccc&chli=95K%E2%82%AC&chs=700x400&cht=pd&chts=333333%2C20&chtt=This%20is%20a%20test&icac=documentation&icff=Indie%20Flower&icretina=1&ichm=ca74dfe264c4f16f985745f3387137ae82de11ffa49356691a2e96d9b3a607f9)](https://editor.image-charts.com/chart?chco=EA469E%2C03A9F4%2CFFC00C&chd=t%3A10%2C20%2C30&chdl=A%7CB%7CC&chl=Aaaa%7CBbbb%7CCccc&chli=95K%E2%82%AC&chs=700x400&cht=pd&chts=333333%2C20&chtt=This%20is%20a%20test&icac=documentation&icff=Indie%20Flower&icretina=1&ichm=ca74dfe264c4f16f985745f3387137ae82de11ffa49356691a2e96d9b3a607f9)



Another pie chart with [`icff=Dancing+Script`](https://fonts.google.com/specimen/Dancing+Script) font family:
Note that `Dancing Script` and `Dancing%20Script` will also work.

[![chart](https://image-charts.com/chart?chco=EA469E%2C03A9F4%2CFFC00C&chd=t%3A10%2C20%2C30&chdl=A%7CB%7CC&chl=Hello%7CWorld%7CLife%20is%20good&chli=95K%E2%82%AC&chs=700x400&cht=pd&chtt=My%20awesome%20chart&icac=documentation&icff=Dancing%20Script&icretina=1&ichm=f9b24f7609fdfa61607264c79b52cfabbfdef8889329630a7217bb684b44dd24)](https://editor.image-charts.com/chart?chco=EA469E%2C03A9F4%2CFFC00C&chd=t%3A10%2C20%2C30&chdl=A%7CB%7CC&chl=Hello%7CWorld%7CLife%20is%20good&chli=95K%E2%82%AC&chs=700x400&cht=pd&chtt=My%20awesome%20chart&icac=documentation&icff=Dancing%20Script&icretina=1&ichm=f9b24f7609fdfa61607264c79b52cfabbfdef8889329630a7217bb684b44dd24)


Another pie chart with [`icff=Amatic SC`](https://fonts.google.com/specimen/Dancing+Script) font family and `icfs=italic` font-style as well as a title in font-size `40px` with a color of `#76A4FB`:
Note that `Amatic%20SC` and `Amatic+SC` will also work.

```
icff=Amatic SC
icfs=italic
chtt=My awesome chart
chts=76A4FB,40
```

[![chart](https://image-charts.com/chart?chco=EA469E%2C03A9F4%2CFFC00C&chd=t%3A10%2C20%2C30&chdl=A%7CB%7CC&chl=Hello%7CWorld%7CLife%20is%20good&chli=95K%E2%82%AC&chs=700x400&cht=pd&chts=76A4FB%2C40&chtt=My%20awesome%20chart&icac=documentation&icff=Amatic%20SC&icfs=italic&icretina=1&ichm=c189ed8b766b733104ef66674f9b812fb8622cc956912613015aa5553e1a72bb)](https://editor.image-charts.com/chart?chco=EA469E%2C03A9F4%2CFFC00C&chd=t%3A10%2C20%2C30&chdl=A%7CB%7CC&chl=Hello%7CWorld%7CLife%20is%20good&chli=95K%E2%82%AC&chs=700x400&cht=pd&chts=76A4FB%2C40&chtt=My%20awesome%20chart&icac=documentation&icff=Amatic%20SC&icfs=italic&icretina=1&ichm=c189ed8b766b733104ef66674f9b812fb8622cc956912613015aa5553e1a72bb)

#### Font Style Syntax
```
icfs=<fontStyle>
```

- **`<fontStyle>`** one of `normal` or `italic`. Default value used is `normal`

#### Example

A pie chart with `icfs=italic` font style

[![chart](https://image-charts.com/chart?chco=EA469E%2C03A9F4%2CFFC00C&chd=t%3A10%2C20%2C30&chdl=A%7CB%7Cc&chl=Aaaa%7CBbbb%7CCccc&chli=95K%E2%82%AC&chs=700x200&cht=pd&icac=documentation&icff=Roboto&icfs=italic&icretina=1&ichm=9412df600af2d648f01becb45a731c2c4fb87cc60e643ce2c376f904386d7577)](https://editor.image-charts.com/chart?chco=EA469E%2C03A9F4%2CFFC00C&chd=t%3A10%2C20%2C30&chdl=A%7CB%7Cc&chl=Aaaa%7CBbbb%7CCccc&chli=95K%E2%82%AC&chs=700x200&cht=pd&icac=documentation&icff=Roboto&icfs=italic&icretina=1&ichm=9412df600af2d648f01becb45a731c2c4fb87cc60e643ce2c376f904386d7577)


#### Supported open-source fonts

{!fonts/google-fonts.md!}
