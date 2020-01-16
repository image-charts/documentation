You can specify the size of the chart's margins, in pixels. Margins are calculated inward from the specified chart size (chs); increasing the margin size does not increase the total chart size, but rather shrinks the chart area, if necessary. The chart margins include the axis labels.

#### Syntax


```
chma=<left_margin>,<right_margin>,<top_margin>,<bottom_margin>
```

- **`<left_margin>, <right_margin>, <top_margin>, <bottom_margin>`** Minimum margin size around the chart area, in pixels. Increase this value to include some padding to prevent axis labels from bumping against the borders of the chart. Unlike the old deprecated Google Image Charts API, **negative margins are also allowed**.
<!-- - **`<opt_legend_width>, <opt_legend_height>`** [Optional] Width of the margin around the legend, in pixels. Use this to avoid having the legend bump up against the chart area or the edges of the image. -->


#### Example

In the example below we set a `left_margin` to 10px, a `right_margin` to 100px and a `top_margin` to 20px. Since we did not define `bottom_margin`, its value will be set to 0px.

[![chart](https://image-charts.com/chart?chco=febe52,2a93fd&chd=s:Uf9a,a3fG&chdl=Temp%7CSales&chdlp=b&chl=a%7Cb%7Cc%7Cd&chma=200,200,0,0&chs=700x200&cht=ls&chtt=Note%20the%20big%20left%20and%20right%20margins%20(200px)&icac=fgribreau&icretina=1&ichm=11ba100afd3d19486fa4db60e06fade2b87f07b626cc4bde194f4022889f37a2)](https://editor.image-charts.com/chart?chco=febe52,2a93fd&chd=s:Uf9a,a3fG&chdl=Temp%7CSales&chdlp=b&chl=a%7Cb%7Cc%7Cd&chma=200,200,0,0&chs=700x200&cht=ls&chtt=Note%20the%20big%20left%20and%20right%20margins%20(200px)&icac=fgribreau&icretina=1&ichm=11ba100afd3d19486fa4db60e06fade2b87f07b626cc4bde194f4022889f37a2)

```
chma=10,100,20
```

Negative margins are a great way to hide axis. Below is an horizontal bar that simulate a progress bar (`left_margin`: -10px, `bottom_margin`: -10px):

[![progress bar](https://image-charts.com/chart?chco=3B5F92,EBECF3&chd=a:65|35&chf=bg,s,FFFFFF00&chma=-10,0,0,-10&chs=700x80&cht=bhs&icac=fgribreau&icretina=1&ichm=5fe0df02b9e761fed36a465ff65b127ac04401d2b6d2ae02f4ae890b6feb15d0)](https://editor.image-charts.com/chart?chco=3B5F92,EBECF3&chd=a:65|35&chf=bg,s,FFFFFF00&chma=-10,0,0,-10&chs=700x80&cht=bhs&icac=fgribreau&ichm=eec3a03eb139d6e9add9e60145636d274ebf79b6a641beba1f3d0b65163bcfb8)

```
chma=-10,0,0,-10
```
