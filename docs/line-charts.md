---
meta_description: "Generate line charts as image using Image-charts API. From basic or multi axis line charts to circle, triangle or star, we handle everything!"
---
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

[![chart](https://image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=lc&icac=documentation&icretina=1&ichm=6cf888f4b111e18b9dae2024bfc6075983e26b8f66e37f47265427ef4f5d87bc
)](https://editor.image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=lc&icac=documentation&icretina=1&ichm=6cf888f4b111e18b9dae2024bfc6075983e26b8f66e37f47265427ef4f5d87bc)

```
cht=lc
chd=t:40,60,60,45,47,75,70,72
```

Multiple lines (series) can be displayed using `|` in the [chart data (chd)](reference/data-format.md) parameter.


[![chart](https://image-charts.com/chart?chco=0762C8%2CE10600&chd=a%3A150%2C156%2C155%2C164%2C175%2C171%2C160%2C168%2C187%2C188%2C192%2C192%2C187%2C185%2C194%2C198%2C213%2C199%2C210%2C198%2C193%2C181%2C192%2C203%2C210%2C227%2C227%2C226%2C218%2C233%2C225%2C239%2C242%2C256%2C264%2C277%2C294%2C285%2C296%2C278%2C271%2C287%2C276%2C259%2C266%2C258%2C257%2C262%2C270%2C275%2C285%2C285%2C267%2C259%2C272%2C264%2C250%2C255%2C272%2C253%2C241%2C251%2C241%2C253%2C245%2C262%2C280%2C273%2C261%2C275%2C260%2C248%2C231%2C241%2C228%2C219%2C228%2C228%2C222%2C205%2C191%2C192%2C207%2C219%2C209%2C218%2C217%2C212%2C199%2C180%2C186%2C169%2C150%2C134%2C116%2C123%2C130%2C130%2C144%2C140%2C130%7C150%2C161%2C149%2C150%2C147%2C166%2C165%2C149%2C143%2C162%2C162%2C180%2C168%2C161%2C150%2C154%2C165%2C164%2C178%2C168%2C178%2C172%2C170%2C162%2C151%2C135%2C133%2C145%2C134%2C137%2C154%2C158%2C159%2C177%2C192%2C175%2C186%2C204%2C192%2C207%2C221%2C213%2C203%2C214%2C233%2C233%2C224%2C209%2C216%2C208%2C208%2C191%2C209%2C224%2C239%2C229%2C213%2C203%2C216%2C230%2C242%2C250%2C263%2C282%2C292%2C295%2C303%2C303%2C320%2C332%2C319%2C315%2C307%2C320%2C321%2C326%2C332%2C316%2C311%2C325%2C321%2C312%2C331%2C335%2C328%2C317%2C317%2C315%2C304%2C319%2C304%2C305%2C295%2C296%2C300%2C293%2C293%2C277%2C261%2C250%2C253&chs=600x300&cht=lc&chxl=0%3A%7C01%2F02%2F2008%7C07%2F01%2F2008%7C01%2F02%2F2009%7C07%2F01%2F2009&chxr=1%2C100%2C350%2C10&chxs=0%2C000000%2C10%7C1%2C000000%2C10&chxt=x%2Cr&icac=documentation&icff=Acme&icretina=1&ichm=5d50aa03d069e6c092c1756d85e39ba211988c5f331b2605dedcef9eb2297a60)](https://editor.image-charts.com/?tab_editor=form&tab_viewer=html#https:/image-charts.com/chart?chco=0762C8%2CE10600&chd=a%3A150%2C156%2C155%2C164%2C175%2C171%2C160%2C168%2C187%2C188%2C192%2C192%2C187%2C185%2C194%2C198%2C213%2C199%2C210%2C198%2C193%2C181%2C192%2C203%2C210%2C227%2C227%2C226%2C218%2C233%2C225%2C239%2C242%2C256%2C264%2C277%2C294%2C285%2C296%2C278%2C271%2C287%2C276%2C259%2C266%2C258%2C257%2C262%2C270%2C275%2C285%2C285%2C267%2C259%2C272%2C264%2C250%2C255%2C272%2C253%2C241%2C251%2C241%2C253%2C245%2C262%2C280%2C273%2C261%2C275%2C260%2C248%2C231%2C241%2C228%2C219%2C228%2C228%2C222%2C205%2C191%2C192%2C207%2C219%2C209%2C218%2C217%2C212%2C199%2C180%2C186%2C169%2C150%2C134%2C116%2C123%2C130%2C130%2C144%2C140%2C130%7C150%2C161%2C149%2C150%2C147%2C166%2C165%2C149%2C143%2C162%2C162%2C180%2C168%2C161%2C150%2C154%2C165%2C164%2C178%2C168%2C178%2C172%2C170%2C162%2C151%2C135%2C133%2C145%2C134%2C137%2C154%2C158%2C159%2C177%2C192%2C175%2C186%2C204%2C192%2C207%2C221%2C213%2C203%2C214%2C233%2C233%2C224%2C209%2C216%2C208%2C208%2C191%2C209%2C224%2C239%2C229%2C213%2C203%2C216%2C230%2C242%2C250%2C263%2C282%2C292%2C295%2C303%2C303%2C320%2C332%2C319%2C315%2C307%2C320%2C321%2C326%2C332%2C316%2C311%2C325%2C321%2C312%2C331%2C335%2C328%2C317%2C317%2C315%2C304%2C319%2C304%2C305%2C295%2C296%2C300%2C293%2C293%2C277%2C261%2C250%2C253&chs=600x300&cht=lc&chxl=0%3A%7C01%2F02%2F2008%7C07%2F01%2F2008%7C01%2F02%2F2009%7C07%2F01%2F2009&chxr=1%2C100%2C350%2C10&chxs=0%2C000000%2C10%7C1%2C000000%2C10&chxt=x%2Cr&icac=documentation&icff=Acme&icretina=1&ichm=5d50aa03d069e6c092c1756d85e39ba211988c5f331b2605dedcef9eb2297a60)

```
cht=lc
chd=t:150,156,155,164,175,171,160,168,187,188,192,192,187,185,194,198,213,199,210,198,193,181,192,203,210,227,227,226,218,233,225,239,242,256,264,277,294,285,296,278,271,287,276,259,266,258,257,262,270,275,285,285,267,259,272,264,250,255,272,253,241,251,241,253,245,262,280,273,261,275,260,248,231,241,228,219,228,228,222,205,191,192,207,219,209,218,217,212,199,180,186,169,150,134,116,123,130,130,144,140,130|150,161,149,150,147,166,165,149,143,162,162,180,168,161,150,154,165,164,178,168,178,172,170,162,151,135,133,145,134,137,154,158,159,177,192,175,186,204,192,207,221,213,203,214,233,233,224,209,216,208,208,191,209,224,239,229,213,203,216,230,242,250,263,282,292,295,303,303,320,332,319,315,307,320,321,326,332,316,311,325,321,312,331,335,328,317,317,315,304,319,304,305,295,296,300,293,293,277,261,250,253
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

[![chart](https://image-charts.com/chart?chco=3072F3%2Cff0000%2C00aaaa&chd=t%3A10%2C20%2C40%2C80%2C90%2C95%2C99%7C20%2C30%2C40%2C50%2C60%2C70%2C80%7C-1%7C5%2C10%2C22%2C35%2C85&chdl=Ponies%7CUnicorns&chdlp=t&chls=2%2C4%2C1&chm=s%2C000000%2C0%2C-1%2C5%7Cs%2C000000%2C1%2C-1%2C5&chs=700x200&cht=lxy&icac=documentation&icretina=1&ichm=e8c903eedef1a8e1ff963d3d416f09d9b5aad5d94f8f02acc7f337f7e7e6c602
)](https://editor.image-charts.com/chart?chco=3072F3%2Cff0000%2C00aaaa&chd=t%3A10%2C20%2C40%2C80%2C90%2C95%2C99%7C20%2C30%2C40%2C50%2C60%2C70%2C80%7C-1%7C5%2C10%2C22%2C35%2C85&chdl=Ponies%7CUnicorns&chdlp=t&chls=2%2C4%2C1&chm=s%2C000000%2C0%2C-1%2C5%7Cs%2C000000%2C1%2C-1%2C5&chs=700x200&cht=lxy&icac=documentation&icretina=1&ichm=e8c903eedef1a8e1ff963d3d416f09d9b5aad5d94f8f02acc7f337f7e7e6c602
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

[![chart](https://image-charts.com/chart?chco=0077CC&chd=t%3A27%2C25%2C60%2C31%2C25%2C39%2C25%2C31%2C26%2C28%2C80%2C28%2C27%2C31%2C27%2C29%2C26%2C35%2C70%2C25&chs=700x125&cht=ls&icac=documentation&icretina=1&ichm=acea8ae37540a132e5c9247acb4ae7414a9e0b56c859c335080f64c780104013
)](https://editor.image-charts.com/chart?chco=0077CC&chd=t%3A27%2C25%2C60%2C31%2C25%2C39%2C25%2C31%2C26%2C28%2C80%2C28%2C27%2C31%2C27%2C29%2C26%2C35%2C70%2C25&chs=700x125&cht=ls&icac=documentation&icretina=1&ichm=acea8ae37540a132e5c9247acb4ae7414a9e0b56c859c335080f64c780104013
)

```
cht=ls
chd=t:27,25,60,31,25,39,25,31,26,28,80,28,27,31,27,29,26,35,70,25
```


#### Data Granularity

Take care not to overestimate the number of data points required for your line chart. For example, to show how popular chocolate ice cream was over the last ten years, aggregating search queries for each day would result in more than 3,600 values. It would not make any sense to plot a graph at this granularity. On a chart 1024 pixels wide, one data point would be about a quarter of a pixel. (Additionally, this would be too much data to pass in a URL). The following examples illustrate this point.

600 pixel wide chart with 40 data points (15 pixels per data point):

[![chart](https://image-charts.com/chart?chd=s%3AithankYouGodformostthisamazingdayforthel&chs=700x125&cht=lc&chxl=1%3A%7CApr%7CMay%7CJune&chxt=x%2Cy&icac=documentation&icretina=1&ichm=16cf181d8047d853e4192f556d923fe4304e1ea154c4a18b9e8ce7f0f999a81b)](https://editor.image-charts.com/chart?chd=s%3AithankYouGodformostthisamazingdayforthel&chs=700x125&cht=lc&chxl=1%3A%7CApr%7CMay%7CJune&chxt=x%2Cy&icac=documentation&icretina=1&ichm=16cf181d8047d853e4192f556d923fe4304e1ea154c4a18b9e8ce7f0f999a81b)

300 data points (2 pixel per data point):

[![chart](https://image-charts.com/chart?chd=s%3AithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chs=700x125&cht=lc&chxl=1%3A%7CApr%7CMay%7CJune%7C&chxt=x%2Cy&icac=documentation&icretina=1&ichm=33e061200d1cbff3d4a897469803bdc30b81da94434e1cc40f7fd71f549bab5c)](https://editor.image-charts.com/chart?chd=s%3AithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chs=700x125&cht=lc&chxl=1%3A%7CApr%7CMay%7CJune%7C&chxt=x%2Cy&icac=documentation&icretina=1&ichm=33e061200d1cbff3d4a897469803bdc30b81da94434e1cc40f7fd71f549bab5c
)

600 data points (1 pixel per data point):

[![chart](https://image-charts.com/chart?chd=s%3AithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chs=700x125&cht=lc&chxl=1%3A%7CApr%7CMay%7CJune%7C&chxt=x%2Cy&icac=documentation&icretina=1&ichm=29a86a36fefa4a43a7652c7f5a22513c2cd06c4a5a9725c81c2a67b70694bf53)](https://editor.image-charts.com/chart?chd=s%3AithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chs=700x125&cht=lc&chxl=1%3A%7CApr%7CMay%7CJune%7C&chxt=x%2Cy&icac=documentation&icretina=1&ichm=29a86a36fefa4a43a7652c7f5a22513c2cd06c4a5a9725c81c2a67b70694bf53
)


900 data points (less than 1 pixel per data point):

[![chart](https://image-charts.com/chart?chd=s%3AithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chs=700x125&cht=lc&chxl=1%3A%7CApr%7CMay%7CJune&chxt=x%2Cy&icac=documentation&icretina=1&ichm=4eeb710ecb79d5fcca7bfc8dea146a74224e55bdd74b5fc32a9277e2db6a0829)](https://editor.image-charts.com/chart?chd=s%3AithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummingsithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyesithankYouGodformostthisamazingdayfortheleapinggreenlyspiritsoftreesandabluetruedreamofskyandforeverythingwhichisnaturalwhichisinfinitewhichisyeseecummings&chs=700x125&cht=lc&chxl=1%3A%7CApr%7CMay%7CJune&chxt=x%2Cy&icac=documentation&icretina=1&ichm=4eeb710ecb79d5fcca7bfc8dea146a74224e55bdd74b5fc32a9277e2db6a0829)


## Series Colors

You can specify the colors of a specific series, or all series, using the chco parameter.


#### Syntax

```
chco=<color_1>, ... <color_n>
```

- **`<color>`** An [RRGGBB[AA] hexadecimal format](/reference/color-format) format hexadecimal number. Specify a single value to apply the same color to all series. Specify different colors for different series by adding color values separated by a comma. If you have fewer colors than you have series, the unspecified series will cycle through the specified colors from the beginning.


#### Example

When you specify a single color for each series, each series gets the color assigned. This example has three data series and three colors specified.

[![chart](https://image-charts.com/chart?chco=fdb45c%2C27c9c2%2C1869b7&chd=s%3AFOETHECat%2Clkjtf3asv%2CKATYPSNXJ&chs=700x125&cht=lc&chxl=0%3A%7COct%7CNov%7CDec%7C1%3A%7C%7C20K%7C%7C60K%7C%7C100K&chxt=x%2Cy&icac=documentation&icretina=1&ichm=b8f843f80256fb3ac11716c5b48bcb50be099f5ca0acd07932e25cca830b8329)](https://editor.image-charts.com/chart?chco=fdb45c%2C27c9c2%2C1869b7&chd=s%3AFOETHECat%2Clkjtf3asv%2CKATYPSNXJ&chs=700x125&cht=lc&chxl=0%3A%7COct%7CNov%7CDec%7C1%3A%7C%7C20K%7C%7C60K%7C%7C100K&chxt=x%2Cy&icac=documentation&icretina=1&ichm=b8f843f80256fb3ac11716c5b48bcb50be099f5ca0acd07932e25cca830b8329)

```
chco=fdb45c,27c9c2,1869b7
```

The following example also has three data series, but only two colors are specified. Because the color for the third series is unspecified, the third line is drawn using the first color (orange).

[![chart](https://image-charts.com/chart?chco=fdb45c%2C27c9c2&chd=s%3AFOETHECat%2Clkjtf3asv%2CKATYPSNXJ&chs=700x125&cht=ls&icac=documentation&icretina=1&ichm=01b52cc6e45578d1d08ccb058b32e497bc603e07c50e55c036f31acec8ff32d4)](https://editor.image-charts.com/chart?chco=fdb45c%2C27c9c2&chd=s%3AFOETHECat%2Clkjtf3asv%2CKATYPSNXJ&chs=700x125&cht=ls&icac=documentation&icretina=1&ichm=01b52cc6e45578d1d08ccb058b32e497bc603e07c50e55c036f31acec8ff32d4
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

[![chart](https://image-charts.com/chart?chco=fdb45c%2C27c9c2&chd=s%3A93zyvneTTOMJMLIJFHEAECFJGHDBFCFIERcgnpy45879%2CIJKNUWUWYdnswz047977315533zy1246872tnkgcaZQONHCECAAAAEII&chls=3%2C6%2C3%7C5&chs=700x125&cht=lc&icac=documentation&icretina=1&ichm=57136b43748a73db852aba42932e40925ac7d00029df0e3bc12d9ce001daac2e)](https://editor.image-charts.com/chart?chco=fdb45c%2C27c9c2&chd=s%3A93zyvneTTOMJMLIJFHEAECFJGHDBFCFIERcgnpy45879%2CIJKNUWUWYdnswz047977315533zy1246872tnkgcaZQONHCECAAAAEII&chls=3%2C6%2C3%7C5&chs=700x125&cht=lc&icac=documentation&icretina=1&ichm=57136b43748a73db852aba42932e40925ac7d00029df0e3bc12d9ce001daac2e)

```
chls=3,6,3|5
```

Now let's use various line thickness:

[![chart](https://image-charts.com/chart?chan&chco=fdb45c%2C1869b7&chd=s%3A93zyvneTTOMJMLIJFHEAECFJGHDBFCFIERcgnpy45879%2CIJKNUWUWYdnswz047977315533zy1246872tnkgcaZQONHCECAAAAEII&chls=4%7C2&chs=700x126&cht=lc&icac=documentation&icretina=1&ichm=cd0451481d98eb31483cee5f28c4e4a9e71a254754dad96dc47f6b8f32760660)](https://editor.image-charts.com/chart?chan&chco=fdb45c%2C1869b7&chd=s%3A93zyvneTTOMJMLIJFHEAECFJGHDBFCFIERcgnpy45879%2CIJKNUWUWYdnswz047977315533zy1246872tnkgcaZQONHCECAAAAEII&chls=4%7C2&chs=700x126&cht=lc&icac=documentation&icretina=1&ichm=cd0451481d98eb31483cee5f28c4e4a9e71a254754dad96dc47f6b8f32760660
)

```
chls=4|2
```

## Line Fills

!!! info "Looking for line fills?"
    Visit [line fills](/reference/markers/#line-fills) page to know how to use line fills
