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

[![chart](https://image-charts.com/chart?chbh=30%2C20%2C20&chco=FFB754%7CF9B6C5%7CB5D2F4%7CDAEDE9%7CE1DAED&chd=t%3A22%2C32%2C11%2C27%2C8&chds=0%2C40&chl=Jan%7CFeb%7CMar%7CApr%7CMay&chs=400x400&cht=bvg&chxl=1%3A%7CMonths%7C3%3A%7CScore&chxp=1%2C50%7C3%2C50&chxt=x%2Cx%2Cy%2Cy&icac=fgribreau&icff=Dosis&icfs=normal&icretina=1&ichm=11fd2aebcd2104241b75ce4cb8fe380ae5fc4c403705a43fc6c71b9e92d912cf)](https://editor.image-charts.com/chart?chbh=30%2C20%2C20&chco=FFB754%7CF9B6C5%7CB5D2F4%7CDAEDE9%7CE1DAED&chd=t%3A22%2C32%2C11%2C27%2C8&chds=0%2C40&chl=Jan%7CFeb%7CMar%7CApr%7CMay&chs=400x400&cht=bvg&chxl=1%3A%7CMonths%7C3%3A%7CScore&chxp=1%2C50%7C3%2C50&chxt=x%2Cx%2Cy%2Cy&icac=fgribreau&icff=Dosis&icfs=normal&icretina=1&ichm=11fd2aebcd2104241b75ce4cb8fe380ae5fc4c403705a43fc6c71b9e92d912cf)


A pie chart with [`icff=Indie Flower`](https://fonts.google.com/specimen/Indie+Flower) font family and default font-style (`normal`):
Note that `icff=Indie+Flower` and `icff=Indie%20Flower` will also work.

[![chart](https://image-charts.com/chart?chco=EA469E%2C03A9F4%2CFFC00C&chd=t%3A10%2C20%2C30&chdl=A%7CB%7CC&chl=Aaaa%7CBbbb%7CCccc&chli=95K%E2%82%AC&chs=700x400&cht=pd&chts=333333%2C20&chtt=This%20is%20a%20test&icac=fgribreau&icff=Indie%20Flower&icretina=1&ichm=4e45ae4260e6a3cd8a38c7f8a0896a8942ae204d88b328669ff5d6eb13370b28)](https://editor.image-charts.com/chart?chco=EA469E%2C03A9F4%2CFFC00C&chd=t%3A10%2C20%2C30&chdl=A%7CB%7CC&chl=Aaaa%7CBbbb%7CCccc&chli=95K%E2%82%AC&chs=700x400&cht=pd&chts=333333%2C20&chtt=This%20is%20a%20test&icac=fgribreau&icff=Indie%20Flower&icretina=1&ichm=4e45ae4260e6a3cd8a38c7f8a0896a8942ae204d88b328669ff5d6eb13370b28)



Another pie chart with [`icff=Dancing+Script`](https://fonts.google.com/specimen/Dancing+Script) font family:
Note that `Dancing Script` and `Dancing%20Script` will also work.

![chart](https://image-charts.com/chart?ichm=ecfc3304aef66ecab1e43bb934bdde10ab7144b0b18505b47fc2a0b9253b22a1&cht=pd&chs=700x400&chd=t:10,20,30&chco=EA469E,03A9F4,FFC00C&chl=Hello|World|Life is good&chdl=A|B|C&chli=95K€&icff=Dancing Script&chtt=My awesome chart&icretina=1&icac=fgribreau)


Another pie chart with [`icff=Amatic SC`](https://fonts.google.com/specimen/Dancing+Script) font family and `icfs=italic` font-style as well as a title in font-size `40px` with a color of `#76A4FB`:
Note that `Amatic%20SC` and `Amatic+SC` will also work.

```
icff=Amatic SC
icfs=italic
chtt=My awesome chart
chts=76A4FB,40
```

![chart](https://image-charts.com/chart?ichm=11a5ffd6b89fd330d56c8afd4aced5de86ddfdaafc3a9626c42512b45719ed1b&cht=pd&chs=700x400&chd=t:10,20,30&chco=EA469E,03A9F4,FFC00C&chl=Hello|World|Life is good&chdl=A|B|C&chli=95K€&icff=Amatic SC&chtt=My awesome chart&icretina=1&icac=fgribreau&icfs=italic&chts=76A4FB,40)

#### Font Style Syntax
```
icfs=<fontStyle>
```

- **`<fontStyle>`** one of `normal` or `italic`. Default value used is `normal`

#### Example

A pie chart with `icfs=italic` font style

![chart](https://image-charts.com/chart?ichm=707debc1a57b09f8eb470694c1325e63666d6ee1aa770dc6c2853718d8ea06dc&cht=pd&icac=fgribreau&chd=t:10,20,30&chco=EA469E,03A9F4,FFC00C&chl=Aaaa|Bbbb|Cccc&chdl=A|B|c&chli=95K%E2%82%AC&chs=700x200&icfs=italic&icff=Roboto&icretina=1)


#### Supported open-source fonts

{!fonts/google-fonts.md!}
