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

- `lc` A line chart where data points are spaced evenly along the x-axis. Axis lines are shown by default. To show values on the axis lines, you must specify chxt.

![chart](https://image-charts.com/chart?cht=lc&chs=700x125&chd=t:40,60,60,45,47,75,70,72)

```
cht=lc
chd=t:40,60,60,45,47,75,70,72
```

- `ls` Similar to `lc` charts, but by default does not display axis lines. These are also known as sparklines.

![chart](https://image-charts.com/chart?chs=700x125&cht=ls&chco=0077CC&chd=t:27,25,60,31,25,39,25,31,26,28,80,28,27,31,27,29,26,35,70,25)

```
cht=ls
chd=t:27,25,60,31,25,39,25,31,26,28,80,28,27,31,27,29,26,35,70,25
```

- `lxy` Lets you specify both x- and y-coordinates for each point, rather just the y values.

To specify data points for `lxy` charts, you must specify series in multiples of two. The first series in each pair is the x coordinates for that line, and the second series is the corresponding y coordinates for that line. For example:

```
cht=lxy
chd=t:<line_1_x1>,<line_1_x2>,...|<line_1_y1>,<line_1_y2>,...|
      <line_2_x1>,<line_2_x2>,...|<line_2_y1>,<line_2_y2>,...
```

To space the data points evenly along the x-axis only, provide a single undefined value for the x set for that series. In this example, the red "Unicorns" line spaces the data points evenly along the x-axis. For more information about undefined values, see Data formats.

In this example, the "Ponies" line specifies exact x- and y-values for all points, and the "Unicorns" line spaces the values evenly along the x-axis.

![chart](https://image-charts.com/chart?cht=lxy&chs=700x200&chd=t:10,20,40,80,90,95,99|20,30,40,50,60,70,80|-1|5,10,22,35,85&chco=3072F3,ff0000,00aaaa&chls=2,4,1&chm=s,000000,0,-1,5|s,000000,1,-1,5&chdl=Ponies|Unicorns&chdlp=t)

```
cht=lxy
chd=t:
  10,20,40,80,90,95,99|
  20,30,40,50,60,70,80|
  -1|
  5,10,22,35,85
```


#### Data Granularity

Take care not to overestimate the number of data points required for your line chart. For example, to show how popular chocolate ice cream was over the last ten years, aggregating search queries for each day would result in more than 3,600 values. It would not make any sense to plot a graph at this granularity. On a chart 1024 pixels wide, one data point would be about a quarter of a pixel. (Additionally, this would be too much data to pass in a URL). The following examples illustrate this point.

600 pixel wide chart with 40 data points (15 pixels per data point):

![chart](https://image-charts.com/chart?cht=lc&chs=700x125&chd=s:ithankYouGodformostthisamazingdayforthel&chxt=x,y&chxl=0:|Apr|May|June|1:||50+Kb)

300 data points (2 pixel per data point):

![chart](https://image-charts.com/chart?cht=lc&chs=700x125&chd=s:ithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chxt=x,y&chxl=1:|Apr|May|June|1:||50+Kb)

600 data points (1 pixel per data point):

![chart](https://image-charts.com/chart?cht=lc&chs=700x125&chd=s:ithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chxt=x,y&chxl=1:|Apr|May|June|1:||50+Kb)


900 data points (less than 1 pixel per data point):

![chart](https://image-charts.com/chart?cht=lc&chs=700x125&chd=s:ithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chxt=x,y&chxl=1:|Apr|May|June|1:||50+Kb)


## Series Colors

You can specify the colors of a specific series, or all series, using the chco parameter.


#### Syntax

```
chco=<color_1>, ... <color_n>
```

- **`<color>`** An [RRGGBB[AA] hexadecimal format](/reference/color-format) format hexadecimal number. Specify a single value to apply the same color to all series. Specify different colors for different series by adding color values separated by a comma. If you have fewer colors than you have series, the unspecified series will cycle through the specified colors from the beginning.


#### Example

When you specify a single color for each series, each series gets the color assigned. This example has three data series and three colors specified.

![chart](https://image-charts.com/chart?cht=lc&chco=FF0000,00FF00,0000FF&chs=700x125&chd=s:FOETHECat,lkjtf3asv,KATYPSNXJ&chxt=x,y&chxl=0:|Oct|Nov|Dec|1:||20K||60K||100K)

```
chco=FF0000,00FF00,0000FF
```

The following example also has three data series, but only two colors are specified. Because the color for the third series is unspecified, the third line is drawn using the first color (red).

![chart](https://image-charts.com/chart?cht=ls&chco=FF0000,0000FF&chs=700x125&chd=s:FOETHECat,lkjtf3asv,KATYPSNXJ)

```
chco=FF0000,0000FF
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

![chart](https://image-charts.com/chart?cht=lc&chd=s:93zyvneTTOMJMLIJFHEAECFJGHDBFCFIERcgnpy45879,IJKNUWUWYdnswz047977315533zy1246872tnkgcaZQONHCECAAAAEII&chls=3,6,3%7C5&chs=700x125)

```
chls=3,6,3|5
```

Now let's use various line thickness:

![chart](https://image-charts.com/chart?cht=lc&chd=s:93zyvneTTOMJMLIJFHEAECFJGHDBFCFIERcgnpy45879,IJKNUWUWYdnswz047977315533zy1246872tnkgcaZQONHCECAAAAEII&chls=4|2&chs=700x125&chan)

```
chls=4|2
```

## Line Fills

You can fill the area below a data line with a solid color.

You can combine line fills with any other `chm` parameters using a pipe character ( `|` ) to separate the chm parameters.

#### Syntax

```
chm=
  B,<color>,<serie_index>
    |...|
  B,<color>,<serie_index>
```

- **`<B>`** Fill to the bottom of the chart, fill from <start_line_index> to the bottom of the chart
- **`<color>`** An [RRGGBB format hexadecimal](/reference/color-format) number of the fill color
- **`<serie_index>`** The index of the line at which the fill starts. The first data series specified in chd has an index of zero (`0`), the second data series has an index of `1`, and so on

#### Examples

The following example fills the entire area under the line.


![chart](https://image-charts.com/chart?cht=lc&chs=700x125&chd=s:ATSTaVd21981uocA&chco=224499&chxt=x,y&chxl=0:|Sep|Oct|Nov|Dec|1:||50|100&chm=B,76A4FB,0,0,0)

```
chm=B,76A4FB,0,0,0
```

The following example fills 2 datasets with yellow (consumed) and grey (prevision) colors.

![chart](https://image-charts.com/chart?chxl=0:%7CMon%7CTue%7CWed%7CThu%7CFri%7CSat%7CSun%7CMon%7CTue%7CWed%7CThu%7CFri%7CSat&chxs=0,676767,11.5,0,t,676767%7C1,676767,11.5,0,lt,676767&chxt=x,y&chs=700x300&cht=lc&chco=ffc107,9e9e9e&chd=a:1,2,3,4,5,6,7%7C1,2,3,4,5,6,7,8,9,10,11,12,13&chg=0,20,0,0&chls=3%7C0&chm=B,ffc107,0,0,0%7CB,9e9e9e,1,0,0&chtt=Power%20consumption%20%28mW%29%20and%20prevision)

```
chd=a:1,2,3,4,5,6,7|1,2,3,4,5,6,7,8,9,10,11,12,13
chm=B,ffc107,0,0,0|B,9e9e9e,1,0,0
```
