You can combine several chart types with [line markers](./line-markers.md) <!--or candlestick--> to highlight data trends or show variance. When you add line <!--or candlestick--> markers onto bar, scatter, or other chart types, the resulting chart is called a **compound chart**. Some compound charts look like a combination of two chart types—for instance, a bar chart with a [tracking line](./line-markers.md):


![chart](https://image-charts.com/chart?cht=bvs&chbh=5,2&chm=D,0033FF,2,0,5,1&chs=700x200&chd=s2:1XQbnf4,EWoQMUB,9halxp9&chco=4D89F9,C6D9FD)

```
chd=s2:1XQbnf4,EWoQMUB,9halxp9
chm=D,0033FF,2,0,5,1
```

#### Creating a Compound Chart

All compound charts consist of one or more base chart types (line, scatter, bar, or radar) combined with one or more sets of markers. These markers require data to place them on the chart. Sometimes you can use the same data series as used to draw the bars or points on your chart, but typically you want the markers to have their own independent data sets. If you want your chart to have different data series for the base chart and for markers, you must hide the marker data from the base chart (so that it doesn't try to draw more bars or lines with that data). Here's how to do that:

1. **Add your marker data series to the end of your `chd` parameter**. For example, if your bar chart had data `chd=t:30,10,20`, you could add new data for a line marker like this: `chd=t:30,10,20|60,40,50`.
2. **Hide your extra marker data from the base chart**. If you simply add an extra data series to a bar chart for your tracking line, the chart would show that as a new series of bars. To prevent this, you must hide this extra series. To hide a series, include a single digit after the `chd` format descriptor: for example, `chd=t1:30,10,20|60,40,50`. This `1` digit from `t1` tells the Chart API how many data series to use to draw elements for that base chart type as defined by the cht parameter (bars for bar charts, data points for line charts, and so on). Any additional data series will be ignored by that chart type when drawing the chart. `Note that this is a 1-based number, not 0-based`. So `t1` means "use only the first data series for bars," `t2` means "use only the first two series for bars," etc.
3. **Use the hidden data series to draw <!--candlestick markers,--> [line markers](./line-markers.md), or other markers**. How to draw markers is covered in the linked sections. Reference the hidden data series as the source for your markers. You can include as many additional hidden data series as you like, and use them for additional chart markers.

![](https://staging-us-central1.image-charts.com/chart?cht=bvg&chm=D,009900,1,0,5,1&chs=700x200&chd=t1:30,10,20|60,40,50&chxt=y&chco=224499)

```
cht=bvg
chd=t1:30,10,20|60,40,50
chm=D,0033FF,1,0,5,1
```


#### Examples

##### Bar line with line serie

Here is a bar chart with a [trace line](./line-markers.md). The first two data series are used for the stacked bars, and the remaining series is used for the line. chd=s2 indicates that the chart should use only the first two series for bars. The line uses the third series for its data.

- `chd=s2:1XQbnf4,EWoQMUB,9halxp9` - Simple encoding, where the first two series are used to draw the bars, and the last series is used for the line.
- `chm=D,0033FF,2,0,5,1` - Trace line (D), blue, data from series index 2, all points (0), line is 5 pixels wide, and has a z-order of 1.


![](https://image-charts.com/chart?cht=bvs&chbh=5,2&chm=D,0033FF,2,0,5,1&chs=700x200&chd=s2:1XQbnf4,EWoQMUB,9halxp9&chco=224499,009900&chxt=x,y&chxl=0:|Jan|Feb|Mar|Apr|May|Jun|Jul)

```
chm=
  D,0033FF,2,0,5,1
chd=s2:
  1XQbnf4,
  EWoQMUB,
  9halxp9
```

##### Stacked bar chart with an independent line drawn


![](https://image-charts.com/chart?cht=bvs&chs=700x200&chbh=15,10&chd=t2:0,10,20,30,20,70,80|0,20,10,5,20,30,10|10,0,20,15,60,40,30&chco=224499,009900&chxt=x,y&chm=D,76A4FB,2,0,3&chxl=0:|Jan|Feb|Mar|Apr|May|Jun|Jul)


```
cht=bvs
chd=t2:
  0,10,20,30,20,70,80|
  0,20,10,5,20,30,10|
  10,0,20,15,60,40,30
chm=D,76A4FB,2,0,3
```
