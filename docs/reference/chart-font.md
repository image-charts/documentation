!!! note "Enterprise+ plan only"
    Custom fonts based are only available to **Enterprise+** subscriptions

Specify the font family and font style using `icfs` and `icff` query parameters.

#### Font Family Syntax

```
icff=<fontFamily>
```

- **`<fontFamily>`** one of the [supported open-source font](#supported-open-source-fonts). Don't forget to checkout the [font gallery](https://fonts.google.com/)

#### Example

A pie chart with [`icff=Indie Flower`](https://fonts.google.com/specimen/Indie+Flower) font family and default font-style (`normal`):
Note that `icff=Indie+Flower` and `icff=Indie%20Flower` will also work.

![chart](https://image-charts.com/chart?ichm=21d1633d17741be20e4564378a5b2b83f14645ec48cbefa7eee7b7eea3ce240a&cht=pd&chs=700x400&chd=t:10,20,30&chco=EA469E,03A9F4,FFC00C&chl=Aaaa|Bbbb|Cccc&chdl=A|B|C&chli=95K%E2%82%AC&icff=Indie%20Flower&icretina=1&chtt=This%20is%20a%20test&icac=fgribreau)



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

A pie chart with `italic` font style

![chart](https://image-charts.com/chart?cht=pd&icac=fgribreau&chd=t:10,20,30&chco=EA469E,03A9F4,FFC00C&chl=Aaaa|Bbbb|Cccc&chdl=A|B|c&chli=95K€&chs=700x200&icfs=italic&icff=Roboto&ichm=b740adda222e046ddae2287bb9fbdff966a88fa580ca3f0afa95cef4efcca6d1)


#### Supported open-source fonts

{!fonts/google-fonts.md!}
