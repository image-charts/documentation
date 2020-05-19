# Line Charts

<!-- :wrench: we are currently implementing this feature. -->

This section describes the various types of line charts that you can create using the Image Chart API.

## Chart Types

There are a variety of line charts that you can create. Specify a line chart with the following syntax:

#### Syntax

```
cht=<chart_type>
```

Where <chart_type> is one of the following types:

##### Line

- `lc` A line chart where data points are spaced evenly along the x-axis. Axis lines are shown by default. To show values on the axis lines, you must specify chxt.

[![chart](https://image-charts.com/chart?chd=t:40,60,60,45,47,75,70,72&chs=700x125&cht=lc&icac=fgribreau&icretina=1&ichm=59c36610c8edad756bf774a9b879581a7c22fb17ce3935edca863f74f2cc510d
)](https://editor.image-charts.com/chart?chd=t:40,60,60,45,47,75,70,72&chs=700x125&cht=lc&icac=fgribreau&icretina=1&ichm=59c36610c8edad756bf774a9b879581a7c22fb17ce3935edca863f74f2cc510d
)

```
cht=lc
chd=t:40,60,60,45,47,75,70,72
```

##### Scatter

- `lxy` Lets you specify both x- and y-coordinates for each point, rather just the y values. Also known as a scatter chart.

To specify data points for `lxy` charts, you must specify series in multiples of two. The first series in each pair is the x coordinates for that line, and the second series is the corresponding y coordinates for that line. For example:

```
cht=lxy
chd=t:<line_1_x1>,<line_1_x2>,...|<line_1_y1>,<line_1_y2>,...|
      <line_2_x1>,<line_2_x2>,...|<line_2_y1>,<line_2_y2>,...
```

To space the data points evenly along the x-axis only, provide a single undefined value for the x set for that series. In this example, the red "Unicorns" line spaces the data points evenly along the x-axis. For more information about undefined values, see Data formats.

In this example, the "Ponies" line specifies exact x- and y-values for all points, and the "Unicorns" line spaces the values evenly along the x-axis.

[![chart](https://image-charts.com/chart?chco=3072F3,ff0000,00aaaa&chd=t:10,20,40,80,90,95,99|20,30,40,50,60,70,80|-1|5,10,22,35,85&chdl=Ponies|Unicorns&chdlp=t&chls=2,4,1&chm=s,000000,0,-1,5|s,000000,1,-1,5&chs=700x200&cht=lxy&icac=fgribreau&icretina=1&ichm=d863dcb2b28f40df8cbf3dbde8e51307a4a0eb8fd78109e7f5981eaba8285e61
)](https://editor.image-charts.com/chart?chco=3072F3,ff0000,00aaaa&chd=t:10,20,40,80,90,95,99|20,30,40,50,60,70,80|-1|5,10,22,35,85&chdl=Ponies|Unicorns&chdlp=t&chls=2,4,1&chm=s,000000,0,-1,5|s,000000,1,-1,5&chs=700x200&cht=lxy&icac=fgribreau&icretina=1&ichm=d863dcb2b28f40df8cbf3dbde8e51307a4a0eb8fd78109e7f5981eaba8285e61
)

```
cht=lxy
chd=t:
  10,20,40,80,90,95,99|
  20,30,40,50,60,70,80|
  -1|
  5,10,22,35,85
```

##### Sparklines

- `ls` Similar to `lc` charts, but by default does not display axis lines. These are also known as sparklines.

[![chart](https://image-charts.com/chart?chco=0077CC&chd=t:27,25,60,31,25,39,25,31,26,28,80,28,27,31,27,29,26,35,70,25&chs=700x125&cht=ls&icac=fgribreau&icretina=1&ichm=82fea4e8c773e2c3d09b4e5f53468e6a12b37403bf9685f0065774d9e5376211
)](https://editor.image-charts.com/chart?chco=0077CC&chd=t:27,25,60,31,25,39,25,31,26,28,80,28,27,31,27,29,26,35,70,25&chs=700x125&cht=ls&icac=fgribreau&icretina=1&ichm=82fea4e8c773e2c3d09b4e5f53468e6a12b37403bf9685f0065774d9e5376211
)

```
cht=ls
chd=t:27,25,60,31,25,39,25,31,26,28,80,28,27,31,27,29,26,35,70,25
```


#### Data Granularity

Take care not to overestimate the number of data points required for your line chart. For example, to show how popular chocolate ice cream was over the last ten years, aggregating search queries for each day would result in more than 3,600 values. It would not make any sense to plot a graph at this granularity. On a chart 1024 pixels wide, one data point would be about a quarter of a pixel. (Additionally, this would be too much data to pass in a URL). The following examples illustrate this point.

600 pixel wide chart with 40 data points (15 pixels per data point):

[![chart](https://image-charts.com/chart?chd=s:ithankYouGodformostthisamazingdayforthel&chs=700x125&cht=lc&chxl=1:|Apr|May|June&chxt=x,y&icac=fgribreau&icretina=1&ichm=0c52da2e699f09ee5fa2f9242ae17ff0d8cc1c9dfed3d72241fd3f5afcd7e83a)](https://editor.image-charts.com/chart?chd=s:ithankYouGodformostthisamazingdayforthel&chs=700x125&cht=lc&chxl=1:|Apr|May|June&chxt=x,y&icac=fgribreau&icretina=1&ichm=0c52da2e699f09ee5fa2f9242ae17ff0d8cc1c9dfed3d72241fd3f5afcd7e83a)

300 data points (2 pixel per data point):

[![chart](https://image-charts.com/chart?chd=s:ithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chs=700x125&cht=lc&chxl=1:|Apr|May|June|&chxt=x,y&icac=fgribreau&icretina=1&ichm=a0b909ee82a2c5be730b54072065cea7364caf996db2be5f818a027e9905f637)](https://editor.image-charts.com/chart?chd=s:ithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chs=700x125&cht=lc&chxl=1:|Apr|May|June|&chxt=x,y&icac=fgribreau&icretina=1&ichm=a0b909ee82a2c5be730b54072065cea7364caf996db2be5f818a027e9905f637
)

600 data points (1 pixel per data point):

[![chart](https://image-charts.com/chart?chd=s:ithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chs=700x125&cht=lc&chxl=1:|Apr|May|June|&chxt=x,y&icac=fgribreau&icretina=1&ichm=8cba0553d8c286ff65554e49fecf1d0fc5ad093eccc0dd65fdff3620d642cf73)](https://editor.image-charts.com/chart?chd=s:ithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chs=700x125&cht=lc&chxl=1:|Apr|May|June|&chxt=x,y&icac=fgribreau&icretina=1&ichm=8cba0553d8c286ff65554e49fecf1d0fc5ad093eccc0dd65fdff3620d642cf73
)


900 data points (less than 1 pixel per data point):

[![chart](https://image-charts.com/chart?chd=s:ithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chs=700x125&cht=lc&chxl=1:|Apr|May|June&chxt=x,y&icac=fgribreau&icretina=1&ichm=3bc6b605fc71a2fcbd43d7ad1eace6a2cce4a437689de103fd4db0ae36b49054)](https://editor.image-charts.com/chart?chd=s:ithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chs=700x125&cht=lc&chxl=1:|Apr|May|June&chxt=x,y&icac=fgribreau&icretina=1&ichm=3bc6b605fc71a2fcbd43d7ad1eace6a2cce4a437689de103fd4db0ae36b49054)


## Series Colors

You can specify the colors of a specific series, or all series, using the chco parameter.


#### Syntax

```
chco=<color_1>, ... <color_n>
```

- **`<color>`** An [RRGGBB[AA] hexadecimal format](/reference/color-format) format hexadecimal number. Specify a single value to apply the same color to all series. Specify different colors for different series by adding color values separated by a comma. If you have fewer colors than you have series, the unspecified series will cycle through the specified colors from the beginning.


#### Example

When you specify a single color for each series, each series gets the color assigned. This example has three data series and three colors specified.

[![chart](https://image-charts.com/chart?chco=fdb45c,27c9c2,1869b7&chd=s:FOETHECat,lkjtf3asv,KATYPSNXJ&chs=700x125&cht=lc&chxl=0:|Oct|Nov|Dec|1:||20K||60K||100K&chxt=x,y&icac=fgribreau&icretina=1&ichm=da681e5c53ec37089bfbf95e6759c2fee7d1bdba6f97a4b07a11de8a7e5f9561)](https://editor.image-charts.com/chart?chco=fdb45c,27c9c2,1869b7&chd=s:FOETHECat,lkjtf3asv,KATYPSNXJ&chs=700x125&cht=lc&chxl=0:|Oct|Nov|Dec|1:||20K||60K||100K&chxt=x,y&icac=fgribreau&icretina=1&ichm=da681e5c53ec37089bfbf95e6759c2fee7d1bdba6f97a4b07a11de8a7e5f9561)

```
chco=fdb45c,27c9c2,1869b7
```

The following example also has three data series, but only two colors are specified. Because the color for the third series is unspecified, the third line is drawn using the first color (orange).

[![chart](https://image-charts.com/chart?chco=fdb45c,27c9c2&chd=s:FOETHECat,lkjtf3asv,KATYPSNXJ&chs=700x125&cht=ls&icac=fgribreau&icretina=1&ichm=b3bf56dbc603640a59b0ed451dc7c930bc441082e25b08fa35e8332cf70831ba)](https://editor.image-charts.com/chart?chco=fdb45c,27c9c2&chd=s:FOETHECat,lkjtf3asv,KATYPSNXJ&chs=700x125&cht=ls&icac=fgribreau&icretina=1&ichm=b3bf56dbc603640a59b0ed451dc7c930bc441082e25b08fa35e8332cf70831ba
)

```
chco=fdb45c,27c9c2
```

## Line Styles

You can specify line thickness and solid/dashed style with the `chls` parameter. This parameter can only be used to style lines in line or radar charts; you cannot use it to style the line in a compound chart lines, unless the base type of the compound chart is a line chart.


#### Syntax

Separate multiple line styles by the pipe character (` | `); the first style applies to the first line, the second to the next, and so on. If you have fewer styles than lines, the default style is applied to all the unspecified lines.

```
chls=
  <line_1_thickness>,<opt_dash_length>,<opt_space_length>
    |...|
  <line_n_thickness>,<opt_dash_length>,<opt_space_length>
```

- **`<line_1_thickness>`** Thickness of the line, in pixels.
- **`<opt_dash_length>, <opt_space_length>`** [Optional] Used to define dashed grid lines. The first parameter is the length of each line dash, in pixels. The second parameter is the spacing between dashes, in pixels. For a solid line, specify neither value. If you only specify `<opt_dash_length>`, then `<opt_space_length>` will be set to `<opt_dash_length>`. Default is `1,0` (a solid line).

#### Examples

Here the dashed line is specified by `3,6,3` and the thicker, solid line is specified by `5`:

[![chart](https://image-charts.com/chart?chco=fdb45c,27c9c2&chd=s:93zyvneTTOMJMLIJFHEAECFJGHDBFCFIERcgnpy45879,IJKNUWUWYdnswz047977315533zy1246872tnkgcaZQONHCECAAAAEII&chls=3,6,3|5&chs=700x125&cht=lc&icac=fgribreau&icretina=1&ichm=d4019d7cc0e0d63177c9751c437f2a6f441e11173ab9f613433fc079d252d13d)](https://editor.image-charts.com/chart?chco=fdb45c,27c9c2&chd=s:93zyvneTTOMJMLIJFHEAECFJGHDBFCFIERcgnpy45879,IJKNUWUWYdnswz047977315533zy1246872tnkgcaZQONHCECAAAAEII&chls=3,6,3|5&chs=700x125&cht=lc&icac=fgribreau&icretina=1&ichm=d4019d7cc0e0d63177c9751c437f2a6f441e11173ab9f613433fc079d252d13d)

```
chls=3,6,3|5
```

Now let's use various line thickness:

[![chart](https://image-charts.com/chart?chan&chco=fdb45c,1869b7&chd=s:93zyvneTTOMJMLIJFHEAECFJGHDBFCFIERcgnpy45879,IJKNUWUWYdnswz047977315533zy1246872tnkgcaZQONHCECAAAAEII&chls=4|2&chs=700x126&cht=lc&icac=fgribreau&icretina=1&ichm=8e10e2e9f73260a4ebe136d946ad490aa8e45ed834cad691fc33bf4d76de85bf)](https://editor.image-charts.com/chart?chan&chco=fdb45c,1869b7&chd=s:93zyvneTTOMJMLIJFHEAECFJGHDBFCFIERcgnpy45879,IJKNUWUWYdnswz047977315533zy1246872tnkgcaZQONHCECAAAAEII&chls=4|2&chs=700x126&cht=lc&icac=fgribreau&icretina=1&ichm=8e10e2e9f73260a4ebe136d946ad490aa8e45ed834cad691fc33bf4d76de85bf
)

```
chls=4|2
```

## Line Fills

!!! info "Looking for line fills?"
    Visit [line fills](/reference/markers/#line-fills) page to know how to use line fills
