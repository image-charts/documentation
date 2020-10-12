---
meta_description: "Learn how to customize your chart margin, from left, right, top or bottom."
---
You can specify the size of the chart's margins, in pixels. Margins are calculated inward from the specified chart size (chs); increasing the margin size does not increase the total chart size, but rather shrinks the chart area, if necessary. The chart margins include the axis labels.

#### Syntax


```
chma=<left_margin>,<right_margin>,<top_margin>,<bottom_margin>
```

- **`<left_margin>, <right_margin>, <top_margin>, <bottom_margin>`** Minimum margin size around the chart area, in pixels. Increase this value to include some padding to prevent axis labels from bumping against the borders of the chart. Unlike the old deprecated Google Image Charts API, **negative margins are also allowed**.
<!-- - **`<opt_legend_width>, <opt_legend_height>`** [Optional] Width of the margin around the legend, in pixels. Use this to avoid having the legend bump up against the chart area or the edges of the image. -->


#### Example

In the example below we set a `left_margin` to 10px, a `right_margin` to 100px and a `top_margin` to 20px. Since we did not define `bottom_margin`, its value will be set to 0px.

[![chart](https://image-charts.com/chart?chco=febe52%2C2a93fd&chd=s%3AUf9a%2Ca3fG&chdl=Temp%7CSales&chdlp=b&chl=a%7Cb%7Cc%7Cd&chma=200%2C200%2C0%2C0&chs=700x200&cht=ls&chtt=Note%20the%20big%20left%20and%20right%20margins%20%28200px%29&icac=documentation&icretina=1&ichm=061a3895a5cdb6213215666420f162b9634f8260658d2ba38b57b5c5a17d95af)](https://editor.image-charts.com/chart?chco=febe52%2C2a93fd&chd=s%3AUf9a%2Ca3fG&chdl=Temp%7CSales&chdlp=b&chl=a%7Cb%7Cc%7Cd&chma=200%2C200%2C0%2C0&chs=700x200&cht=ls&chtt=Note%20the%20big%20left%20and%20right%20margins%20%28200px%29&icac=documentation&icretina=1&ichm=061a3895a5cdb6213215666420f162b9634f8260658d2ba38b57b5c5a17d95af)

```
chma=10,100,20
```

Negative margins are a great way to hide axis. Below is an horizontal bar that simulate a progress bar (`left_margin`: -10px, `bottom_margin`: -10px):

[![progress bar](https://image-charts.com/chart?chco=3B5F92%2CEBECF3&chd=a%3A65%7C35&chf=bg%2Cs%2CFFFFFF00&chma=-10%2C0%2C0%2C-10&chs=700x80&cht=bhs&icac=documentation&ichm=49d04cd6332c93dec8f3f8fea63afab774a1556e64265fb60e22b9c6fc469440)](https://editor.image-charts.com/chart?chco=3B5F92%2CEBECF3&chd=a%3A65%7C35&chf=bg%2Cs%2CFFFFFF00&chma=-10%2C0%2C0%2C-10&chs=700x80&cht=bhs&icac=documentation&ichm=49d04cd6332c93dec8f3f8fea63afab774a1556e64265fb60e22b9c6fc469440)

```
chma=-10,0,0,-10
```
