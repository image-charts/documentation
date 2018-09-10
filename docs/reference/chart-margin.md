You can specify the size of the chart's margins, in pixels. Margins are calculated inward from the specified chart size (chs); increasing the margin size does not increase the total chart size, but rather shrinks the chart area, if necessary. The chart margins include the axis labels.

#### Syntax


```
chma=<left_margin>,<right_margin>,<top_margin>,<bottom_margin>
```

- **`<left_margin>, <right_margin>, <top_margin>, <bottom_margin>`** Minimum margin size around the chart area, in pixels. Increase this value to include some padding to prevent axis labels from bumping against the borders of the chart.
<!-- - **`<opt_legend_width>, <opt_legend_height>`** [Optional] Width of the margin around the legend, in pixels. Use this to avoid having the legend bump up against the chart area or the edges of the image. -->


#### Example

In the example below we set a `left_margin` to 10px, a `right_margin` to 100px and a `top_margin` to 20px. Since we did not define `bottom_margin`, its value will be set to 0px.

![chart](https://image-charts.com/chart?cht=lc&chd=s:Uf9a,a3fG&chs=700x125&chl=1%7C2%7C3%7C4&chco=febe52,2a93fd&chma=10,100,20&chdl=Temp%7CSales)

```
chma=10,100,20
```
