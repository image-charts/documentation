!!! note "Enterprise+ plan only"
    Font Family and Font Style support is only enabled in **Enterprise+** subscriptions

Specify the font family and font style using `icfs` and `icff`

#### Font Style Syntax
```
icfs=<style>
```

- **`<style>`** one of `normal` or `italic`. Default value used is `normal`

#### Example

A pie chart with italic font style

![chart](https://image-charts.com/chart?cht=pd&icac=fgribreau&chd=t:10,20,30&chco=EA469E,03A9F4,FFC00C&chl=Aaaa|Bbbb|Cccc&chdl=A|B|c&chli=95K€&chs=700x200&icfs=italic&icff=Roboto&ichm=b740adda222e046ddae2287bb9fbdff966a88fa580ca3f0afa95cef4efcca6d1)

#### Font Family Syntax

```
icff=<fontFamily>
```

- **`<fontFamily>`** one of  the Google Font. Full list of supported fonts [are available at the bottom of page](#available-fonts).

#### Example

A pie chart with Roboto font family

![chart](https://image-charts.com/chart?cht=pd&icac=fgribreau&chs=700x200&chd=t:10,20,30&chco=EA469E,03A9F4,FFC00C&chl=Aaaa|Bbbb|Cccc&chdl=A|B|c&chli=95K€&icff=Roboto&ichm=612f70641d127843339a8bf968bb7bc4234ce1d1c9a0119dc15dd8695b519a32)

A pie chart with Coda Caption font family

![chart](https://image-charts.com/chart?cht=pd&icac=fgribreau&chs=700x200&chd=t:10,20,30&chco=EA469E,03A9F4,FFC00C&chl=Aaaa|Bbbb|Cccc&chdl=A|B|c&chli=95K€&icff=Coda+Caption&ichm=b526abc94bf3f1ca67da17d02d7c0b5493580c9b60a06128b16b5ba0edd03f47)

#### Available Fonts

{!fonts/google-fonts.md!}
