---
title: Chart Axis
description: "Learn how to customize your chart axis, from label styling to axis ranges."
sidebar_position: 16
---

# Chart Axis

You can specify which axes to display on the chart, and give them custom labels and positions, ranges.

Not all charts show axis lines by default. You can specify exactly which axes your chart should show using the `chxt` parameter. Default axis lines do not show numbers; you must specify an axis in the `chxt` parameter to show numbers.

You can choose to have your axes display numbers reflecting the data values, or you can specify custom axes. The default is to display numeric values, with values scaled to range based on your dataset. However, you can change that range using `chxr` to display another value range.

If you choose to use custom values, for example: "Mon, Tues, Wed", you can use the chxl parameter.

This section covers the following topics:

* [Visible Axes](#visible-axes) (`chxt`) - Which axes to display.
* [Axis range](#axis-range) (`chxr`) - Value range for each axis.
* [Custom Axis Labels](#custom-axis-labels) (`chxl`) - Custom values to show on the axis.
* [Axis Label Styles](#axis-label-styles) (`chxs`) - Color, size of axis labels.

### Visible Axes

Bar, line, radar, and scatter charts show one or two axis lines by default, but these lines do not include values. To display values on your axis lines, or to change which axes are shown, you must use the `chxt` parameter. By default, the axis values range is based on your data, unless you scale them explicitly using the `chxr` property. To hide all axis lines in a line chart, specify `:nda` after the chart type value in the `cht` parameter (example: `cht=lc:nda`).

#### Syntax


```
chxt=
  <axis_1>
    ,...,
  <axis_n>
```

- **`<axis>`** An axis to show on the chart. Available axes are:
    * `x` - Bottom x-axis
    * `y` - Left y-axis
    * `t` - Top x-axis (Enterprise+ subscription)
    * `r` - Right y-axis (Enterprise+ subscription)

:::info Enterprise+ subscribers
`chxt` up to `x,y` is available for *Free* and *Enterprise* subscriptions. Charts with more than two axis requires the Enterprise+ subscription.
You can specify multiple axes of the same type, for example: `cht=x,x,y`. This will stack two sets of x-axes along the bottom of the chart. This is useful when adding custom labels along an axis that shows numeric values (see the example below). Axes are drawn from the inside out, so if you have `x,x`, the first x refers to the innermost copy, the next x refers to the next outwards copy, and so on.
:::


#### Example

For our first example, let's ask to display the y-axis:

[![chart](https://image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=ls&chxt=y&icac=documentation&icretina=1&ichm=906aef2ba6d0f9d69244b896dc062994c077dc8b3bc3d839b8d12a37ccc4d530)](https://editor.image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=ls&chxt=y&icac=documentation&icretina=1&ichm=906aef2ba6d0f9d69244b896dc062994c077dc8b3bc3d839b8d12a37ccc4d530)

```
cht=ls
chxt=y
```

Now let's display the x-axis:

[![chart](https://image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=ls&chxt=x&icac=documentation&icretina=1&ichm=a677f457ef554c7bf22a8a8c14a315ed85ce63027d2644086b49dc6bd8ca2c32)](https://editor.image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=ls&chxt=x&icac=documentation&icretina=1&ichm=a677f457ef554c7bf22a8a8c14a315ed85ce63027d2644086b49dc6bd8ca2c32)

```
cht=ls
chxt=y
```

Why not both?

[![chart](https://image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=ls&chxt=x%2Cy&icac=documentation&icretina=1&ichm=1b9de0b8a092863a09aac98a2754e176933c0ce04618fa9c15e94fa456dacd3b)](https://editor.image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=ls&chxt=x%2Cy&icac=documentation&icretina=1&ichm=1b9de0b8a092863a09aac98a2754e176933c0ce04618fa9c15e94fa456dacd3b)

```
cht=ls
chxt=x,y
```

Note that unlike sparklines (`cht=ls`), line-charts (`cht=lc`) automatically display x-axis and y-axis:

[![chart](https://image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=lc&icac=documentation&icretina=1&ichm=6cf888f4b111e18b9dae2024bfc6075983e26b8f66e37f47265427ef4f5d87bc)](https://editor.image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=lc&icac=documentation&icretina=1&ichm=6cf888f4b111e18b9dae2024bfc6075983e26b8f66e37f47265427ef4f5d87bc)

```
cht=lc
```

... and you can suppress default axes in a line chart (`cht=lc`) by specifying `:nda` after the chart type.

[![chart](https://image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=lc%3Anda&icac=documentation&icretina=1&ichm=05957e4595c4d20548b569294581e589af57077f51ac0fc543bd268384b463eb)](https://editor.image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=lc%3Anda&icac=documentation&icretina=1&ichm=05957e4595c4d20548b569294581e589af57077f51ac0fc543bd268384b463eb)

```
cht=lc:nda
```


:::info Enterprise+ subscribers
This example shows a line chart with an x-axis, a y-axis, a top axis (t), and a right axis (r). Because no labels are specified, the chart defaults to a range based on the dataset for all axes. Note that by default, the top and bottom axes don't show tick marks by the labels.

[![chart url multiple axis](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x125&cht=lc&chxt=x%2Cy%2Ct%2Cr&icac=documentation&icretina=1&ichm=f6f9ce66b72284a151f61ad2822d0d3f2b68eb41322bfc56b535bb6858795d6d)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x125&cht=lc&chxt=x%2Cy%2Ct%2Cr&icac=documentation&icretina=1&ichm=f6f9ce66b72284a151f61ad2822d0d3f2b68eb41322bfc56b535bb6858795d6d)

```
chxt=x,y,r,t
```

You can include multiple sets of labels for each axis by including the same value more than once. This example shows two sets of x and two sets of y-axes. This isn't particularly useful when using only the default axis labels, as is shown here. But you can specify custom labels for each copy of each axis, using the `chxl` parameter.

[![chart with multiple x and y axis](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x325&cht=lc&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=a84c1f21a18a8b88f9c436282a0173a6ea2024a08b94d785e440e991f7fab7f8)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x325&cht=lc&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=a84c1f21a18a8b88f9c436282a0173a6ea2024a08b94d785e440e991f7fab7f8)

```
chxt=x,x,y,y
```

[![chart with multiple labels](https://image-charts.com/chart?chco=3072F3&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chm=B%2C03a9f4%2C0%2C0%2C0&chma=40%2C20%2C20%2C30&chs=700x325&cht=lc&chxl=1%3A%7CFreezing%7CHot%7C3%3A%7CLow%7CHigh&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=5ea2d55b8470e8eeedde789441afeb974a82c49d0089dc40c381d0497131eaad)](https://editor.image-charts.com/chart?chco=3072F3&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chm=B%2C03a9f4%2C0%2C0%2C0&chma=40%2C20%2C20%2C30&chs=700x325&cht=lc&chxl=1%3A%7CFreezing%7CHot%7C3%3A%7CLow%7CHigh&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=5ea2d55b8470e8eeedde789441afeb974a82c49d0089dc40c381d0497131eaad)

```
chxt=x,x,y,y
chxl=
  1:|Freezing|Hot|
  3:|Low|High
```

This example shows a horizontal bar chart with an x-axis, a y-axis, an upper t-axis, and a right r-axis.

Axis labels are omitted, so the Chart API displays a range based on the dataset for the x-axis and for the t-axis.

The range for the y-axis and for the r-axis is determined by the number of bars. In this case, there are five bars, so the Chart API displays a range of 0 to 4. The first label is centered at the base of the first bar, the second label is centered at the base of the second bar, and so on.

[![](https://image-charts.com/chart?chco=76A4FB&chd=s%3AEUjVu&chls=2.0&chs=700x225&cht=bhs&chxt=x%2Cy%2Cr%2Ct&icac=documentation&icretina=1&ichm=42374d7ba37aa0a7a95fda4c91866844f60bb04e4586c17a2e8136c8c19977d0)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AEUjVu&chls=2.0&chs=700x225&cht=bhs&chxt=x%2Cy%2Cr%2Ct&icac=documentation&icretina=1&ichm=42374d7ba37aa0a7a95fda4c91866844f60bb04e4586c17a2e8136c8c19977d0)

```
chxt=x,y,r,t
```
:::


### Axis Range

You can specify the range of values that appear on each axis independently using the `chxr` parameter. Unlike in Google Image Charts the axis range is related to the data range, which make sense.

:::info This is only behavior change between Google Image Charts and Image Charts
In Google Image Charts specifying the `chxr` parameter changed the scale of the axis but not the dataset scale. In Image-Charts - because we think it's was the biggest usage issue with Google Image Charts - changing the axis scale through `chxr` also impact the whole dataset scale.
:::

You must make an axis visible using the `chxt` parameter if you want to specify its range.

To specify custom axis values, use the `chxl` parameter.

#### Syntax

Separate multiple axis label ranges using the pipe character ( | ).


```
chxr=
  <axis_index>,<start_val>,<end_val>,<opt_step>
    |...|
  <axis_index>,<start_val>,<end_val>,<opt_step>
```

- **`<axis_index>`** Which axis to apply the range to. This is a zero-based index into the axis array specified by `chxt`. For example, the y-axis would be 1 in `chxt=x,y`.
- **`<start_val>`** A number, defining the low value for this axis.
- **`<end_val>`** A number, defining the high value for this axis.
- **`<opt_step>`** [Optional] The count step between ticks on the axis. If there is no default step value; the step is calculated to try to show a set of nicely spaced labels.

#### Example

This example shows both x and y axes (`chxt`).

Each axis has a defined range. Because no step is specified, values are taken from the given range and are evenly spaced within that range. In the line chart, values are evenly spread along the x-axis.

Y axis will have a range from 0 to 100 (`chxr`).

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxr=1%2C0%2C100&chxt=x%2Cy&icac=documentation&icretina=1&ichm=9304b5e2a02232513de0a2c3631195d89344949236f45e535371358f28a13633)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxr=1%2C0%2C100&chxt=x%2Cy&icac=documentation&icretina=1&ichm=9304b5e2a02232513de0a2c3631195d89344949236f45e535371358f28a13633)

```
chxt=x,y
chxr=1,0,100
```

In this example, we are defining values (`chd`) from -30 to 50 and allowing them in the scale of -100,100 (`chds`).

The Y axis range (`chxr`) is set from -50 to 50 and both axis are visible (`chxt`).

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=t%3A20%2C30%2C40%2C50%2C-30%2C10&chds=-100%2C100&chls=2.0&chs=700x300&cht=bvs&chxr=1%2C-50%2C50&chxt=x%2Cy&icac=documentation&icretina=1&ichm=23ebe46d8aacea1479ac0a8665900663639f797da7e74ebb63e92e02ba9b8db4)](https://editor.image-charts.com/chart?chco=76A4FB&chd=t%3A20%2C30%2C40%2C50%2C-30%2C10&chds=-100%2C100&chls=2.0&chs=700x300&cht=bvs&chxr=1%2C-50%2C50&chxt=x%2Cy&icac=documentation&icretina=1&ichm=23ebe46d8aacea1479ac0a8665900663639f797da7e74ebb63e92e02ba9b8db4)

```
chxt=x,y
chd=t:20,30,40,50,-30,10
chds=-100,100
chxr=1,-50,50
```

:::info Enterprise+ subscribers
This example shows left and right y-axes (y and r) and one x-axis (x).

Each axis has a defined range. Because no labels or positions are specified, values are taken from the given range, and are evenly spaced within that range. In the line chart, values are evenly spread along the x-axis.

Axis direction is reversed for the r-axis (index 2), because the first value (`1000`) is larger than the last value (0).

[![](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x225&cht=lc&chxr=1%2C0%2C200%7C2%2C1000%2C0&chxt=x%2Cy%2Cr&icac=documentation&icretina=1&ichm=56a06e0dddbf52293d1a68d105ceabddd294e146bfad605922a340a9fd61570c)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x225&cht=lc&chxr=1%2C0%2C200%7C2%2C1000%2C0&chxt=x%2Cy%2Cr&icac=documentation&icretina=1&ichm=56a06e0dddbf52293d1a68d105ceabddd294e146bfad605922a340a9fd61570c)

```
chxt=x,y,r
chxr=
  0,0,500|
  1,0,200|
  2,1000,0
```
:::

### Custom Axis Labels

You can specify custom string axis labels on any axis, using the `chxl` parameter. You can specify as many labels as you like. If you display an axis (using the [`chxt`](#visible-axes) parameter) and do not specify custom labels, the standard, numeric labels will be applied. To specify a custom numeric range, use the [`chxr`](#axis-range) parameter instead.

#### Syntax

Specify one parameter set for each axis that you want to label. Separate multiple sets of labels using the pipe character (`|`).

```
chxl=
  <axis_index>:|<label_1>|...|<label_n>
    |...|
  <axis_index>:|<label_1>|...|<label_n>
```

- **`<axis_index>`** Which axis to apply labels to. This is an index into the chxt parameter array. For example, if you have `chxt=x,x,y,y` then index 0 would be the first x-axis, 1 would be the second x-axis. *Currently only customizing the x-axis is supported*.
- **`<label_1>| ... |<label_n>`** One or more labels to place along this axis. These can be string or number values; strings do not need to be in quotes. label_1 is displayed at the lowest position on the axis, and label_n is displayed at the highest position. Additional labels are spaced evenly between them. Indicate spaces with a + mark. There is no way to specify a line break in a label. Separate labels with a pipe character. Note: Do not place a pipe after the final label in the `chxl` parameter.

#### Example

This example shows how to add custom labels to two axes. Note how the values are evenly spaced, and how the last `chxl` value does not end with a pipe.

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=t%3A10%2C5%2C34%2C10%2C5&chls=2.0&chs=700x190&cht=lc&chxl=0%3A%7CJan%7CFeb%7CMarch%7CApril%7CMay&chxt=x%2Cy&icac=documentation&icretina=1&ichm=561fad5b9d0e82d47d2ec61eb94e01d019e5184ad1e3c023ed3d36354a198c4d)](https://editor.image-charts.com/chart?chco=76A4FB&chd=t%3A10%2C5%2C34%2C10%2C5&chls=2.0&chs=700x190&cht=lc&chxl=0%3A%7CJan%7CFeb%7CMarch%7CApril%7CMay&chxt=x%2Cy&icac=documentation&icretina=1&ichm=561fad5b9d0e82d47d2ec61eb94e01d019e5184ad1e3c023ed3d36354a198c4d)

```
cht=lc
chxt=x,y
chxl=0:|Jan|Feb|March|April|May
chd=t:10,5,34,10,5
chco=76A4FB
chls=2.0
chs=700x190
```

Labels also work in [bar charts](/bar-charts):

[![chart](https://image-charts.com/chart?chan=1200%2CeaseOutBounce&chd=t%3A10%2C40%2C25&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&chs=700x190&cht=bvs&chxl=0%3A%7CJun%7CJuly%7CAug&chxt=x%2Cy&icac=documentation&icretina=1&ichm=a5a7745bcb45f8bdaf8ce6490488e5d4f6bcca071f1dde41fc651e195f1233af)](https://editor.image-charts.com/chart?chan=1200%2CeaseOutBounce&chd=t%3A10%2C40%2C25&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&chs=700x190&cht=bvs&chxl=0%3A%7CJun%7CJuly%7CAug&chxt=x%2Cy&icac=documentation&icretina=1&ichm=a5a7745bcb45f8bdaf8ce6490488e5d4f6bcca071f1dde41fc651e195f1233af)

```
cht=bvs
chxt=x,y
chxl=0:|Jun|July|Aug|
chd=t:10,40,25
chf=b0,lg,90,03a9f4,0,3f51b5,1
chs=700x190
chan=1200,easeOutBounce
```

This chart shows how to add custom labels to two axes. Note how the values are evenly spaced, and how the last chxl value does not end with a pipe.

[![](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxl=0%3A%7CJan%7CFeb%7CMarch%7CApril%7CMay%7C1%3A%7CMin%7CMid%7CMax&chxt=x%2Cy&icac=documentation&icretina=1&ichm=bf72c9398baf5c1d5423438ecda655ff35133ea0d161bbe843525b7959c7f93a)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxl=0%3A%7CJan%7CFeb%7CMarch%7CApril%7CMay%7C1%3A%7CMin%7CMid%7CMax&chxt=x%2Cy&icac=documentation&icretina=1&ichm=bf72c9398baf5c1d5423438ecda655ff35133ea0d161bbe843525b7959c7f93a)

```
chxt=x,y
chxl=
0:|Jan|Feb|March|April|May|
1:|Min|Mid|Max
```

:::info Enterprise+ subscribers
The example below includes axis labels on the left and right y-axes (`y` and `r`). It also includes two sets of values for the x-axis (x). You could consider adding tick marks on the y-axis using `chxs`.

[![](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x325&cht=lc&chxl=0%3A%7CJan%7CJuly%7CJan%7CJuly%7CJan%7C1%3A%7C0%7C50%7C100%7C2%3A%7CA%7CB%7CC%7C3%3A%7C2005%7C2006%7C2007&chxt=x%2Cy%2Cr%2Cx&icac=documentation&icretina=1&ichm=18d19be63c842c10ea0f6c27c887e5a87eee9fd075c97e369ff434b855faf509)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x325&cht=lc&chxl=0%3A%7CJan%7CJuly%7CJan%7CJuly%7CJan%7C1%3A%7C0%7C50%7C100%7C2%3A%7CA%7CB%7CC%7C3%3A%7C2005%7C2006%7C2007&chxt=x%2Cy%2Cr%2Cx&icac=documentation&icretina=1&ichm=18d19be63c842c10ea0f6c27c887e5a87eee9fd075c97e369ff434b855faf509)

```
chxt=x,y,r,x
chxl=
0:|Jan|July|Jan|July|Jan|
1:|0|50|100|
2:|A|B|C|
3:|2005|2006|2007
```

If you want to add a generic label to describe a whole axis (for example, to label one axis "cost" and another "student"), use the chxt property to add an additional axis on each side, then use chxl to add a single custom label to each side.

[![](https://image-charts.com/chart?chd=s%3Ac9ucD&chls=2.0&chs=700x325&cht=bvs&chxl=1%3A%7CMartinis%7C3%3A%7CScore&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=6a4b3ab6adcd9b5a20c645fb32fb505a6c68d1b4d81f8608546361599ee80f2c)](https://editor.image-charts.com/chart?chd=s%3Ac9ucD&chls=2.0&chs=700x325&cht=bvs&chxl=1%3A%7CMartinis%7C3%3A%7CScore&chxt=x%2Cx%2Cy%2Cy&icac=documentation&icretina=1&ichm=6a4b3ab6adcd9b5a20c645fb32fb505a6c68d1b4d81f8608546361599ee80f2c)

```
chxt=x,x,y,y
chxl=1:|Martinis|3:|Score
```

This example uses default values for the axis labels on the left y-axis.

[![](https://image-charts.com/chart?chbh=r%2C0.3&chco=76A4FB&chd=s%3Ac9uDc&chls=2.0&chs=700x325&cht=bvs&chxl=0%3A%7CJan%7CJuly%7CJan%7CJuly%7CJan%7C2%3A%7CA%7CB%7CC%7C3%3A%7C2005%7C%7C2006%7C%7C2007&chxt=x%2Cy%2Cr%2Cx&icac=documentation&icretina=1&ichm=7289148f80eba957e6c24a0757271a1176e7b8d2a5600191ffcbb88fba721af8)](https://editor.image-charts.com/chart?chbh=r%2C0.3&chco=76A4FB&chd=s%3Ac9uDc&chls=2.0&chs=700x325&cht=bvs&chxl=0%3A%7CJan%7CJuly%7CJan%7CJuly%7CJan%7C2%3A%7CA%7CB%7CC%7C3%3A%7C2005%7C%7C2006%7C%7C2007&chxt=x%2Cy%2Cr%2Cx&icac=documentation&icretina=1&ichm=7289148f80eba957e6c24a0757271a1176e7b8d2a5600191ffcbb88fba721af8)

```
chxt=x,y,r,x
chxl=
0:|Jan|July|Jan|July|Jan|
2:|A|B|C|
3:|2005||2006||2007
```
:::

### Axis Label Styles

You can specify the font size, color for axis labels, both custom labels and default label values. All labels on the same axis have the same format. If you have multiple copies of an axis, you can format each one differently. You can also specify the format of a label string, for example to show currency symbols or trailing zeroes.

#### Syntax

Values for multiple axes should be separated using a pipe character ( | ).


```
chxs=
 <axis_index><opt_format_string>,<opt_label_color>,<opt_font_size>,<opt_alignment>,<opt_axis_or_tick>,<opt_tick_color>,<opt_axis_color>,<opt_skip_labels>,<opt_min_max_rotation>
   |...|
 <axis_index><opt_format_string>,<opt_label_color>,<opt_font_size>,<opt_alignment>,<opt_axis_or_tick>,<opt_tick_color>,<opt_axis_color>,<opt_skip_labels>,<opt_min_max_rotation>
```

- **`<axis_index>`** The axis to which this applies. This is a zero-based index into the `chxt` parameter.
- **`<opt_format_string>`** *[Optional]* This is an optional format string that, if used, follows immediately after the axis index number without an intervening comma. It starts with a literal letter N followed by the following values, all optional: The formatting string syntax is as follows:
      `N<preceding_text>*<number_type><decimal_places>zs<x or y>*<following_text>`
    Here is the meaning of each element:
    - `<preceding_text>` - Literal text to precede each value.
    - `*...*` - An optional block wrapped in literal asterisks, in which you can specify formatting details for numbers. The following values are supported, and are all optional:
        - `<number_type>` - The number format, for numeric values. Choose one of the following:
          - `f` - [Default] Floating point format. Consider specifying precision as well with the `<decimal_places>` value.
          - `p` - Percentage format. A % sign is appended automatically. Note: When using this format, data values from 0.0 - 1.0 map to 0 - 100% (for example, 0.43 will be shown as 43%).
          - `e` - Scientific notation format. (not supported, please contact our support)
          - `c<CUR>` - Format the number in the currency specified, with the appropriate currency marker. Replace `<CUR>` with a three-letter currency code. Example: cEUR for Euros. You can find a list of codes on the [ISO web site](http://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=46121), although not all symbols are supported.
        - `<decimal_places>` - An integer specifying how many decimal places to show. The value is rounded (not truncated) to this length. *Default is 2*.
        - `z` - Display trailing zeros. *Default is no*.
        - `s` - Display group separators. *Default is no*.
        - `x` or `y` -Display the data from the x- or y-coordinate, as specified. The meaning of `x` data varies by chart type: experiment with your chart to determine what it means. *Default is `y`*.
    - `<following_text>` - Literal text to follow each value.
- **`<opt_label_color>`** *[Optional]* The color to apply to the axis text (but not axis line), in RRGGBB hexadecimal format. Axis line color is specified separately using `<opt_axis_color>`. *Default is black*.
- **`<opt_font_size>`** *[Optional]* specifies the font size in pixels. This parameter is optional.
- **`<opt_alignment>`** (not supported, please contact our support) Label alignment. Use `-1`.
- **`<opt_axis_or_tick>`** *[Optional]* Whether to show tick marks and/or axis lines for this axis, note that [the axis visibility parameter (`chxt`)](#visible-axes) has precedence over this parameter for axis visibility.
      - `l` (lowercase 'L') - Draw axis line only.
      - `t` - Draw tick marks only. Tick marks are the little lines next to axis labels.
      - `lt` - [Default] Draw both an axis line and tick marks for all labels.
      - `_` - (Underscore) Draw neither axis line nor tick marks. If you want to hide an axis line, use this value.
- **`<tick_color>`** *[Optional]* The tick mark color, in RRGGBB hexadecimal format. *Default is black*.
- **`<opt_axis_color>`** *[Optional]* (not supported, please contact our support) The color of this axis line, in RRGGBB hexadecimal format.
- **`<opt_skip_labels>`** *[Optional]*  Specify `s` if labels on this axis should be hidden in case there are too many
- **`<opt_min_max_rotation>`** *[Optional]* Specify the mininum (e.g. `min10`) or the maximum (e.g. `max45`) or both (`min10max45`) rotation degree labels on this axis could have. Default value is `0` (no rotation at all) for both parameters.


#### Example


Display the x-axis labels in `#FF00FF` with a 13px font-size and `#FF0000` color for the y-axis.

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxr=1%2C0%2C70&chxs=0%2CFF00FF%2C13%2C0%2Ct%7C1%2CFF0000&chxt=x%2Cy&icac=documentation&icretina=1&ichm=c796a246b112590671e8cc43d6ab7d57c5419b4f525786b6fb154b7d30c58b26)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxr=1%2C0%2C70&chxs=0%2CFF00FF%2C13%2C0%2Ct%7C1%2CFF0000&chxt=x%2Cy&icac=documentation&icretina=1&ichm=c796a246b112590671e8cc43d6ab7d57c5419b4f525786b6fb154b7d30c58b26)

```
&chxt=x,y
&chxs=0,FF00FF,13|1,FF0000
```

[![chart](https://image-charts.com/chart?chd=s%3A984sttvuvkQIBLKNCAIi%2CDEJPgq0uov17zwopQODS&chs=700x300&cht=ls&chxr=0%2C0%2C100&chxs=1N%2AcUSD2sz%2AMil%2C000000&chxt=x%2Cy&icac=documentation&icretina=1&ichm=e917351fdef2197ce5e3c634ddef2395d5fbb6c633c02e16fb62e7acf16372ff)](https://editor.image-charts.com/chart?chd=s%3A984sttvuvkQIBLKNCAIi%2CDEJPgq0uov17zwopQODS&chs=700x300&cht=ls&chxr=0%2C0%2C100&chxs=1N%2AcUSD2sz%2AMil%2C000000&chxt=x%2Cy&icac=documentation&icretina=1&ichm=e917351fdef2197ce5e3c634ddef2395d5fbb6c633c02e16fb62e7acf16372ff)

```
&chxt=x,y
&chxs=1N*cUSD2sz*Mil,000000
```

- `1N`: style the y axis (because x is 0 and y is 1 in `chxt=x,y`)
- `cUSD`: display the dollar currency
- `2`: display 2 decimals places
- `z`: Display trailing zeros
- `s` Display group separators
- `Mil`: append "Mil" to each label

The chart below is the same as above but has a label rotation of 40 degres on the x axis (the first axis declared, zero indexed, on `chxt`).

```
chxt=x,y
chxs=0,min40
```

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxl=0%3A%7CJan%7CFeb%7CMarch%7CApril%7CMay%7C1%3A%7CMin%7CMid%7CMax&chxs=0%2Cmin40&chxt=x%2Cy&icac=documentation&icretina=1&ichm=a7d4fd4dfaaeb5cb156fdf9c579efa4c435f0d168c9ea7f6e4f12035194ec7c0)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxl=0%3A%7CJan%7CFeb%7CMarch%7CApril%7CMay%7C1%3A%7CMin%7CMid%7CMax&chxs=0%2Cmin40&chxt=x%2Cy&icac=documentation&icretina=1&ichm=a7d4fd4dfaaeb5cb156fdf9c579efa4c435f0d168c9ea7f6e4f12035194ec7c0)



Chart below has an x-axis with 1 trailing zero (z) colored in black with 10px font-size and an y-axis with a $ currency suffixed by Mil, colored in `#007939` with a 20px font-size.

[![chart](https://image-charts.com/chart?chd=s%3A984sttvuvkQIBLKNCAIi%2CDEJPgq0uov17zwopQODS&chdl=2017%7C2018&chs=700x300&cht=ls&chxs=0N%2Af1z%2A%2C000000%2C10%7C1N%2AcUSD%2AMil%2C007939%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=18a9b1ef7cb2cb893f76864b918781b65506fd9245cd9013bbdc138c7505f09c)](https://editor.image-charts.com/?tab_viewer=image#https:/image-charts.com/chart?chd=s%3A984sttvuvkQIBLKNCAIi%2CDEJPgq0uov17zwopQODS&chdl=2017%7C2018&chs=700x300&cht=ls&chxs=0N%2Af1z%2A%2C000000%2C10%7C1N%2AcUSD%2AMil%2C007939%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=18a9b1ef7cb2cb893f76864b918781b65506fd9245cd9013bbdc138c7505f09c)

```
&chxt=x,y
&chxs=0N*f1z*,000000,10|1N*cUSD*Mil,007939,20
```

Chart below has too many labels in the x axis:

[![chart](https://image-charts.com/chart?chco=FF0000&chd=a%3A0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&chdl=Temperature&chs=700x190&cht=bvg&chtt=Temperature%20last%20week&chxs=1N%2A%2A%C2%BAC%2C000000&chxt=x%2Cy&icac=documentation&icretina=1&ichm=8ef9513cc56d78455ff0e37b3fc9db31c5ea458c484c843aa409242eb0dee5e9)](https://editor.image-charts.com/chart?chco=FF0000&chd=a%3A0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&chdl=Temperature&chs=700x190&cht=bvg&chtt=Temperature%20last%20week&chxs=1N%2A%2A%C2%BAC%2C000000&chxt=x%2Cy&icac=documentation&icretina=1&ichm=8ef9513cc56d78455ff0e37b3fc9db31c5ea458c484c843aa409242eb0dee5e9)

```
&chxs=1N**C,000000
```

Thus we use `<skip_labels>` (see `0,s`, 0 means x axis and `s` means skip labels) to only let Image-Charts only display some of them:

[![chart](https://image-charts.com/chart?chco=FF0000&chd=a%3A0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&chdl=Temperature&chs=700x190&cht=bvg&chtt=Temperature%20last%20week&chxs=1N%2A%2A%C2%BAC%2C000000%7C0%2Cs&chxt=x%2Cy&icac=documentation&icretina=1&ichm=c8ee19e51c526168ffe10c7d721d6a2516261076ac4befaab0b68085d5b42b0b)](https://editor.image-charts.com/chart?chco=FF0000&chd=a%3A0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&chdl=Temperature&chs=700x190&cht=bvg&chtt=Temperature%20last%20week&chxs=1N%2A%2A%C2%BAC%2C000000%7C0%2Cs&chxt=x%2Cy&icac=documentation&icretina=1&ichm=c8ee19e51c526168ffe10c7d721d6a2516261076ac4befaab0b68085d5b42b0b)

```
&chxt=x,y
&chxs=1N**C,000000|0,s
```


:::info Enterprise+ subscribers -
Font size and color are specified for the second x-axis (Jan, Feb, Mar).

[![](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x325&cht=lc&chxl=3%3A%7CJan%7CFeb%7CMar&chxr=2%2C0%2C4&chxs=3%2C0000dd%2C13%2C0%2Ct&chxt=x%2Cy%2Cr%2Cx&icac=documentation&icretina=1&ichm=57fe1c9d1480df6fac5490e4f8887702f6757746fe6ed620e3f493ba7ba28799)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x325&cht=lc&chxl=3%3A%7CJan%7CFeb%7CMar&chxr=2%2C0%2C4&chxs=3%2C0000dd%2C13%2C0%2Ct&chxt=x%2Cy%2Cr%2Cx&icac=documentation&icretina=1&ichm=57fe1c9d1480df6fac5490e4f8887702f6757746fe6ed620e3f493ba7ba28799)

```
chxt=x,y,r,x
chxr=2,0,4
chxl=3:|Jan|Feb|Mar|
     1:|min|average|max
chxp=1,10,35,75
chxs=3,0000DD,13,0,t
```
:::
