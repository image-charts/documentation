<!-- axis styling (chxtc) is currently unsupported -->

You can specify which axes to display on the chart, and give them custom labels and positions, ranges.

Not all charts show axis lines by default. You can specify exactly which axes your chart should show using the `chxt` parameter. Default axis lines do not show numbers; you must specify an axis in the `chxt` parameter to show numbers.

You can choose to have your axes display numbers reflecting the data values, or you can specify custom axes. The default is to display numeric values, with values scaled to range from 0—100. However, you can change that range using `chxr` to display another range.

If you choose to use custom values, for example: "Mon, Tues, Wed", you can use the chxl parameter. <!-- To place these labels in specific locations along the axis, use the chxp parameter.-->

This section covers the following topics:

* [Visible Axes](#visible-axes) (`chxt`) - Which axes to display.
* [Axis range](#axis-range) (`chxr`) - Value range for each axis.
* [Custom Axis Labels](#custom-axis-labels) (`chxl`) - Custom values to show on the axis.
* [Axis Label Styles](#axis-label-styles) (`chxs`) - Color, size<!--, alignment, and formatting--> of axis labels.

<!-- * Axis label positions (`chxp`) - Placement of custom labels along each axis.
* Axis label styles (`chxs`) - Color, size, alignment, and formatting of axis labels.
* Axis tick mark styles (`chxtc`) - Length of tick marks for a specific axis. -->

### Visible Axes

Bar, line, radar, and scatter charts show one or two axis lines by default, but these lines do not include values. To display values on your axis lines, or to change which axes are shown, you must use the `chxt` parameter. By default, the axis values range from 0-100, unless you scale them explicitly using the `chxr` property. To hide all axis lines in a line chart, specify `:nda` after the chart type value in the `cht` parameter (example: `cht=lc:nda`).

<!-- By default, the top and bottom axes do not show tick marks by the values, while the left and right axes do show them. You can change this behavior using the chxs parameter. -->

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
    * `t` - Top x-axis (:+1: Enterprise+ subscription, **upcoming on January 15th, 2020**)
    * `r` - Right y-axis (:+1: Enterprise+ subscription, **upcoming on January 15th, 2020**)

!!! info "Enterprise+ subscribers - **upcoming on January 15th, 2020**"
    `chxt` up to `x,y` is available for *Free* and *Enterprise* subscriptions. Charts with more than two axis requires the Enterprise+ subscription.
    You can specify multiple axes of the same type, for example: `cht=x,x,y`. This will stack two sets of x-axes along the bottom of the chart. This is useful when adding custom labels along an axis that shows numeric values (see the example below). Axes are drawn from the inside out, so if you have `x,x`, the first x refers to the innermost copy, the next x refers to the next outwards copy, and so on.


#### Example

For our first example, let's ask to display the y-axis:

[![chart](https://image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=ls&chxt=y&icac=fgribreau&icretina=1&ichm=6069c739b38aed16e1aeec88e0e93a9013ce7bc20bbf859906c1a3b99e38c198)](https://editor.image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=ls&chxt=y&icac=fgribreau&icretina=1&ichm=6069c739b38aed16e1aeec88e0e93a9013ce7bc20bbf859906c1a3b99e38c198)

```
cht=ls
chxt=y
```

Now let's display the x-axis:

[![chart](https://image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=ls&chxt=x&icac=fgribreau&icretina=1&ichm=0fc031e3e108d1f1195476cd9e0ed990054942cc2d69ab37e71015cb1943f44d)](https://editor.image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=ls&chxt=x&icac=fgribreau&icretina=1&ichm=0fc031e3e108d1f1195476cd9e0ed990054942cc2d69ab37e71015cb1943f44d)

```
cht=ls
chxt=y
```

Why not both?

[![chart](https://image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=ls&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=cf6c75d1dabfcff3076a1fb304a0a55c248357ba639ccf1aaeaf45a599890a9b)](https://editor.image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=ls&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=cf6c75d1dabfcff3076a1fb304a0a55c248357ba639ccf1aaeaf45a599890a9b)

```
cht=ls
chxt=x,y
```

Note that unlike sparklines (`cht=ls`), line-charts (`cht=lc`) automatically display x-axis and y-axis:

[![chart](https://image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=lc&icac=fgribreau&icretina=1&ichm=c14783a235f01e852303f9ea468629bf3845bd51e8d97a9d0938ecc58a1be1f2)](https://editor.image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=lc&icac=fgribreau&icretina=1&ichm=c14783a235f01e852303f9ea468629bf3845bd51e8d97a9d0938ecc58a1be1f2)

```
cht=lc
```

... and you can suppress default axes in a line chart (`cht=lc`) by specifying `:nda` after the chart type.

[![chart](https://image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=lc%3Anda&icac=fgribreau&icretina=1&ichm=80c72f834a87184f1f768b1a217a11107f57dae32611235b9cd91eca6c63d6e2)](https://editor.image-charts.com/chart?chd=t%3A40%2C60%2C60%2C45%2C47%2C75%2C70%2C72&chs=700x125&cht=lc%3Anda&icac=fgribreau&icretina=1&ichm=80c72f834a87184f1f768b1a217a11107f57dae32611235b9cd91eca6c63d6e2)

```
cht=lc:nda
```


!!! info "Enterprise+ subscribers - **upcoming on January 15th, 2020**"
    This example shows a line chart with an x-axis, a y-axis, a top axis (t), and a right axis (r). Because no labels are specified, the chart defaults to a range of 0 to 100 for all axes. Note that by default, the top and bottom axes don't show tick marks by the labels.

    [![chart url multiple axis](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x125&cht=lc&chxt=x%2Cy%2Ct%2Cr&icac=fgribreau&icretina=1&ichm=d31843a681fe882531e763d2ada25b595c6e83a5d8ddf8f607617c106d3ca3ce)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x125&cht=lc&chxt=x%2Cy%2Ct%2Cr&icac=fgribreau&icretina=1&ichm=d31843a681fe882531e763d2ada25b595c6e83a5d8ddf8f607617c106d3ca3ce)

    ```
    chxt=x,y,r,t
    ```

    You can include multiple sets of labels for each axis by including the same value more than once. This example shows two sets of x and two sets of y-axes. This isn't particularly useful when using only the default axis labels, as is shown here. But you can specify custom labels for each copy of each axis, using the `chxl` parameter.

    [![chart with multiple x and y axis](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x325&cht=lc&chxt=x%2Cx%2Cy%2Cy&icac=fgribreau&icretina=1&ichm=15fee9f965cabc36eca2034bec28a20c65e2a7e93d8e756adfa1e53202460d29)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x325&cht=lc&chxt=x%2Cx%2Cy%2Cy&icac=fgribreau&icretina=1&ichm=15fee9f965cabc36eca2034bec28a20c65e2a7e93d8e756adfa1e53202460d29)

    ```
    chxt=x,x,y,y
    ```

    [![chart with multiple labels](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chma=40%2C20%2C20%2C30&chs=700x325&cht=lc&chxl=1%3A%7CFreezing%7CHot%7C3%3A%7CLow%7CHigh&chxt=x%2Cx%2Cy%2Cy&icac=fgribreau&icretina=1&ichm=a16fc60339d566c22c7d9987644053209f2d1ecee4325cf8df7f447a744f41dd)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chma=40%2C20%2C20%2C30&chs=700x325&cht=lc&chxl=1%3A%7CFreezing%7CHot%7C3%3A%7CLow%7CHigh&chxt=x%2Cx%2Cy%2Cy&icac=fgribreau&icretina=1&ichm=a16fc60339d566c22c7d9987644053209f2d1ecee4325cf8df7f447a744f41dd)

    ```
    chxt=x,x,y,y
    chxl=
      1:|Freezing|Hot|
      3:|Low|High
    ```

    This example shows a horizontal bar chart with an x-axis, a y-axis, an upper t-axis, and a right r-axis.

    Axis labels are omitted, so the Chart API displays a range of 0 to 100 for the x-axis and for the t-axis.

    The range for the y-axis and for the r-axis is determined by the number of bars. In this case, there are five bars, so the Chart API displays a range of 0 to 4. The first label is centered at the base of the first bar, the second label is centered at the base of the second bar, and so on.

    [![](https://image-charts.com/chart?chco=76A4FB&chd=s%3AEUjVu&chls=2.0&chs=700x225&cht=bhs&chxt=x%2Cy%2Cr%2Ct&icac=fgribreau&icretina=1&ichm=5855ea3d26ca77473efeeb1bddecfaac30aa50b68c0e470ff187d89eda3b41fc)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AEUjVu&chls=2.0&chs=700x225&cht=bhs&chxt=x%2Cy%2Cr%2Ct&icac=fgribreau&icretina=1&ichm=5855ea3d26ca77473efeeb1bddecfaac30aa50b68c0e470ff187d89eda3b41fc)

    ```
    chxt=x,y,r,t
    ```


### Axis Range

You can specify the range of values that appear on each axis independently using the `chxr` parameter. Unlike in Google Image Charts the axis range is related to the data range, which make sense. 

!!! info "This is only behavior change between Google Image Charts and Image Charts"
    In Google Image Charts specifying the `chxr` parameter changed the scale of the axis but not the dataset scale. In Image-Charts — because we think it's was the biggest usage issue with Google Image Charts — changing the axis scale through `chxr` also impact the whole dataset scale.

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

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxr=1%2C0%2C100&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=595706d9c732b4a0c5821516f40afcb1a66bcd17a8e94de25dce6683ef98e740)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxr=1%2C0%2C100&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=595706d9c732b4a0c5821516f40afcb1a66bcd17a8e94de25dce6683ef98e740)

```
chxt=x,y
chxr=1,0,100
```

In this example, we are defining values (`chd`) from -30 to 50 and allowing them in the scale of -100,100 (`chds`).

The Y axis range (`chxr`) is set from -50 to 50 and both axis are visible (`chxt`).

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=t%3A20%2C30%2C40%2C50%2C-30%2C10&chds=-100%2C100&chls=2.0&chs=700x300&cht=bvs&chxr=1%2C-50%2C50&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=4f462883ddd99871b286c31020ca848dabf210111423e3af0bc65612df7493f4)](https://editor.image-charts.com/chart?chco=76A4FB&chd=t%3A20%2C30%2C40%2C50%2C-30%2C10&chds=-100%2C100&chls=2.0&chs=700x300&cht=bvs&chxr=1%2C-50%2C50&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=4f462883ddd99871b286c31020ca848dabf210111423e3af0bc65612df7493f4)

```
chxt=x,y
chd=t:20,30,40,50,-30,10
chds=-100,100
chxr=1,-50,50
```

!!! info "Enterprise+ subscribers - **upcoming on January 15th, 2020**"
    This example shows left and right y-axes (y and r) and one x-axis (x).

    Each axis has a defined range. Because no labels or positions are specified, values are taken from the given range, and are evenly spaced within that range. In the line chart, values are evenly spread along the x-axis.

    Axis direction is reversed for the r-axis (index 2), because the first value (`1000`) is larger than the last value (0).

    [![](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x225&cht=lc&chxr=1%2C0%2C200%7C2%2C1000%2C0&chxt=x%2Cy%2Cr&icac=fgribreau&icretina=1&ichm=e5b79ac7f50d44bf739afcdc639c1b9b5fab59d276a8adc55c293cd9e9581bef)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x225&cht=lc&chxr=1%2C0%2C200%7C2%2C1000%2C0&chxt=x%2Cy%2Cr&icac=fgribreau&icretina=1&ichm=e5b79ac7f50d44bf739afcdc639c1b9b5fab59d276a8adc55c293cd9e9581bef)

    ```
    chxt=x,y,r
    chxr=
      0,0,500|
      1,0,200|
      2,1000,0
    ```

### Custom Axis Labels

You can specify custom string axis labels on any axis, using the `chxl` parameter. You can specify as many labels as you like. If you display an axis (using the [`chxt`](#visible-axes) parameter) and do not specify custom labels, the standard, numeric labels will be applied. To specify a custom numeric range, use the [`chxr`](#axis-range) parameter instead.

<!-- To set specific locations along the axis for your labels, use the chxp parameter. -->

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

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=t%3A10%2C5%2C34%2C10%2C5&chls=2.0&chs=700x190&cht=lc&chxl=0%3A%7CJan%7CFeb%7CMarch%7CApril%7CMay&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=6c51ae240d2e93e4157418bf65cf4439c347da8cdc00e3d550328c48374df807)](https://editor.image-charts.com/chart?chco=76A4FB&chd=t%3A10%2C5%2C34%2C10%2C5&chls=2.0&chs=700x190&cht=lc&chxl=0%3A%7CJan%7CFeb%7CMarch%7CApril%7CMay&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=6c51ae240d2e93e4157418bf65cf4439c347da8cdc00e3d550328c48374df807)

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

[![chart](https://image-charts.com/chart?chan=1200%2CeaseOutBounce&chd=t%3A10%2C40%2C25&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&chs=700x190&cht=bvs&chxl=0%3A%7CJun%7CJuly%7CAug&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=e0f081c33e778f41bba6276e96696ac8260334c4eb43ac6a06b6c8c2d724812a)](https://editor.image-charts.com/chart?chan=1200%2CeaseOutBounce&chd=t%3A10%2C40%2C25&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&chs=700x190&cht=bvs&chxl=0%3A%7CJun%7CJuly%7CAug&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=e0f081c33e778f41bba6276e96696ac8260334c4eb43ac6a06b6c8c2d724812a)

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

[![](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxl=0%3A%7CJan%7CFeb%7CMarch%7CApril%7CMay%7C1%3A%7CMin%7CMid%7CMax&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=4d06f8fbfa062fe52737ddb9572f77de89481dd0965d7f7a56894f9f2b5b0a71)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxl=0%3A%7CJan%7CFeb%7CMarch%7CApril%7CMay%7C1%3A%7CMin%7CMid%7CMax&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=4d06f8fbfa062fe52737ddb9572f77de89481dd0965d7f7a56894f9f2b5b0a71)

```
chxt=x,y
chxl=
0:|Jan|Feb|March|April|May|
1:|Min|Mid|Max
```

!!! info "Enterprise+ subscribers - **upcoming on January 15th, 2020**"
    The example below includes axis labels on the left and right y-axes (`y` and `r`). It also includes two sets of values for the x-axis (x). You could consider adding tick marks on the y-axis using `chxs`.

    [![](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x325&cht=lc&chxl=0%3A%7CJan%7CJuly%7CJan%7CJuly%7CJan%7C1%3A%7C0%7C50%7C100%7C2%3A%7CA%7CB%7CC%7C3%3A%7C2005%7C2006%7C2007&chxt=x%2Cy%2Cr%2Cx&icac=fgribreau&icretina=1&ichm=c8c3a32d4bc2bb6888c6406a46e112cd4163050e8e73275ac6773a9ab57e2192)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x325&cht=lc&chxl=0%3A%7CJan%7CJuly%7CJan%7CJuly%7CJan%7C1%3A%7C0%7C50%7C100%7C2%3A%7CA%7CB%7CC%7C3%3A%7C2005%7C2006%7C2007&chxt=x%2Cy%2Cr%2Cx&icac=fgribreau&icretina=1&ichm=c8c3a32d4bc2bb6888c6406a46e112cd4163050e8e73275ac6773a9ab57e2192)

    ```
    chxt=x,y,r,x
    chxl=
    0:|Jan|July|Jan|July|Jan|
    1:|0|50|100|
    2:|A|B|C|
    3:|2005|2006|2007
    ```

    If you want to add a generic label to describe a whole axis (for example, to label one axis "cost" and another "student"), use the chxt property to add an additional axis on each side, then use chxl to add a single custom label to each side.

    [![](https://image-charts.com/chart?chd=s%3Ac9ucD&chls=2.0&chs=700x325&cht=bvs&chxl=1%3A%7CMartinis%7C3%3A%7CScore&chxt=x%2Cx%2Cy%2Cy&icac=fgribreau&icretina=1&ichm=245b949723a85d15129bfca048c6b3cd252a0a44f7a153b39dc2c72715bc9d98)](https://editor.image-charts.com/chart?chd=s%3Ac9ucD&chls=2.0&chs=700x325&cht=bvs&chxl=1%3A%7CMartinis%7C3%3A%7CScore&chxt=x%2Cx%2Cy%2Cy&icac=fgribreau&icretina=1&ichm=245b949723a85d15129bfca048c6b3cd252a0a44f7a153b39dc2c72715bc9d98)

    ```
    chxt=x,x,y,y
    chxl=1:|Martinis|3:|Score
    ```

    This example uses default values for the axis labels on the left y-axis.

    [![](https://image-charts.com/chart?chbh=r%2C0.3&chco=76A4FB&chd=s%3Ac9uDc&chls=2.0&chs=700x325&cht=bvs&chxl=0%3A%7CJan%7CJuly%7CJan%7CJuly%7CJan%7C2%3A%7CA%7CB%7CC%7C3%3A%7C2005%7C%7C2006%7C%7C2007&chxt=x%2Cy%2Cr%2Cx&icac=fgribreau&icretina=1&ichm=0dff58a5ff6ba2947cab9ce08bafdfc2479d2adaca4119159b3befdb3c186d24)](https://editor.image-charts.com/chart?chbh=r%2C0.3&chco=76A4FB&chd=s%3Ac9uDc&chls=2.0&chs=700x325&cht=bvs&chxl=0%3A%7CJan%7CJuly%7CJan%7CJuly%7CJan%7C2%3A%7CA%7CB%7CC%7C3%3A%7C2005%7C%7C2006%7C%7C2007&chxt=x%2Cy%2Cr%2Cx&icac=fgribreau&icretina=1&ichm=0dff58a5ff6ba2947cab9ce08bafdfc2479d2adaca4119159b3befdb3c186d24)

    ```
    chxt=x,y,r,x
    chxl=
    0:|Jan|July|Jan|July|Jan|
    2:|A|B|C|
    3:|2005||2006||2007
    ```

### Axis Label Styles

You can specify the font size, color<!--, and alignment --> for axis labels, both custom labels and default label values. All labels on the same axis have the same format. If you have multiple copies of an axis, you can format each one differently. You can also specify the format of a label string, for example to show currency symbols or trailing zeroes.

<!-- By default, the top and bottom axes do not show tick marks by the values, while the left and right axes do show them. -->

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
          - `f` - [Default] Floating point format. Consider specifying precision as well with the <decimal_places> value.
          - `p` - Percentage format. A % sign is appended automatically. Note: When using this format, data values from 0.0 — 1.0 map to 0 — 100% (for example, 0.43 will be shown as 43%).
          - `e` - Scientific notation format. (not supported, please contact our support)
          - `c<CUR>` - Format the number in the currency specified, with the appropriate currency marker. Replace <CUR> with a three-letter currency code. Example: cEUR for Euros. You can find a list of codes on the [ISO web site](http://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=46121), although not all symbols are supported.
        - `<decimal_places>` - An integer specifying how many decimal places to show. The value is rounded (not truncated) to this length. *Default is 2*.
        - `z` - Display trailing zeros. *Default is no*.
        - `s` - Display group separators. *Default is no*.
        - `x or y` -Display the data from the x- or y-coordinate, as specified. The meaning of x data varies by chart type: experiment with your chart to determine what it means. *Default is 'y'*.
    - `<following_text>` - Literal text to follow each value.
- **`<opt_label_color>`** *[Optional]* The color to apply to the axis text (but not axis line), in RRGGBB hexadecimal format. Axis line color is specified separately using opt_axis_color. *Default is black*.
- **`<opt_font_size>`** *[Optional]* specifies the font size in pixels. This parameter is optional.
- **`<opt_alignment>`** *[Optional]* (not supported, please contact our support) Label alignment. <!--For top or bottom axes, this describes how the label aligns to the tick mark above or below it; for left or right axes, this describes how the aligns inside its bounding box, which touches the axis. Specify one of the following numbers:
-1 - Top or bottom: labels are to the right of the ticks; Left or right: labels are left-aligned in their area. Default for r-axis labels.
0 - Top or bottom: labels are centered on the ticks; Left or right: labels are centered in their area. Default for x- and t-axis labels.
1 - Top or bottom: labels are to the left of the ticks; Left or right: labels are right-aligned in their area. Default for y-axis labels.-->
- **`<opt_axis_or_tick>`** *[Optional]* Whether to show tick marks and/or axis lines for this axis, note that [the axis visibility parameter (`chxt`)](/referenceeditor./chart-axis/) has precedence over this parameter for axis visibility.
      - `l` (lowercase 'L') - Draw axis line only.
      - `t` - Draw tick marks only. Tick marks are the little lines next to axis labels.
      - `lt` - [Default] Draw both an axis line and tick marks for all labels.
      - `_` - (Underscore) Draw neither axis line nor tick marks. If you want to hide an axis line, use this value.
- **`<tick_color>`** *[Optional]* The tick mark color, in RRGGBB hexadecimal format. *Default is black*.
- **`<opt_axis_color>`** *[Optional]* (not supported, please contact our support) The color of this axis line, in RRGGBB hexadecimal format.
- **`<opt_skip_labels>`** *[Optional]*  Specify `s` if labels on this axis should be hidden in case there are too many
- **`<opt_min_max_rotation>`** *[Optional]* **(upcoming on January 15th, 2020)**  Specify the mininum (e.g. `min10`) or the maximum (e.g. `max45`) or both (`min10max45`) rotation degree labels on this axis could have. Default value is `0` (no rotation at all) for both parameters.


#### Example


Display the x-axis labels in `#FF00FF` with a 13px font-size and `#FF0000` color for the y-axis.

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxr=1%2C0%2C70&chxs=0%2CFF00FF%2C13%2C0%2Ct%7C1%2CFF0000&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=9bb1101491ce0536278abb8bfb46a0fc3de0285fcf2579495a1dfabe666ca13f)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x300&cht=lc&chxr=1%2C0%2C70&chxs=0%2CFF00FF%2C13%2C0%2Ct%7C1%2CFF0000&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=9bb1101491ce0536278abb8bfb46a0fc3de0285fcf2579495a1dfabe666ca13f)

```
&chxt=x,y
&chxs=0,FF00FF,13|1,FF0000
```

[![chart](https://image-charts.com/chart?chd=s%3A984sttvuvkQIBLKNCAIi%2CDEJPgq0uov17zwopQODS&chs=700x300&cht=ls&chxr=0%2C0%2C100&chxs=1N%2AcUSD2sz%2AMil%2C000000&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=f96bf9ff292af3916659b2a8d2fa88a3fc82c96d1f227f19b636b400f0228fd9)](https://editor.image-charts.com/chart?chd=s%3A984sttvuvkQIBLKNCAIi%2CDEJPgq0uov17zwopQODS&chs=700x300&cht=ls&chxr=0%2C0%2C100&chxs=1N%2AcUSD2sz%2AMil%2C000000&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=f96bf9ff292af3916659b2a8d2fa88a3fc82c96d1f227f19b636b400f0228fd9)

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


Chart below has an x-axis with 1 trailing zero (z) colored in black with 10px font-size and an y-axis with a $ currency suffixed by Mil, colored in `#007939` with a 20px font-size.

[![chart](https://image-charts.com/chart?chd=s%3A984sttvuvkQIBLKNCAIi%2CDEJPgq0uov17zwopQODS&chdl=2017%7C2018&chs=700x300&cht=ls&chxr=0%2C0%2C1000000%2C250000%7C1%2C0%2C60%7C2%2C0%2C5000&chxs=0N%2Af1z%2A%2C000000%2C10%7C1N%2AcUSD%2AMil%2C007939%2C20&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=fef8b1562547b978b74d23a3b78be6f1bc31492a6652f958a4a5cbdc38bcf19e)](https://editor.image-charts.com/chart?chd=s%3A984sttvuvkQIBLKNCAIi%2CDEJPgq0uov17zwopQODS&chdl=2017%7C2018&chs=700x300&cht=ls&chxr=0%2C0%2C1000000%2C250000%7C1%2C0%2C60%7C2%2C0%2C5000&chxs=0N%2Af1z%2A%2C000000%2C10%7C1N%2AcUSD%2AMil%2C007939%2C20&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=fef8b1562547b978b74d23a3b78be6f1bc31492a6652f958a4a5cbdc38bcf19e)

```
&chxt=x,y
&chxs=0N*f1z*,000000,10|1N*cUSD*Mil,007939,20
```

Chart below has too many labels in the x axis:

[![chart](https://image-charts.com/chart?chco=FF0000&chd=a%3A0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&chdl=Temperature&chs=700x190&cht=bvg&chtt=Temperature%20last%20week&chxs=1N%2A%2A%C2%BAC%2C000000&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=9ee613d417769bb6fce86fc64d7644cff3c8401cb7c316647534df6d602a6634)](https://editor.image-charts.com/chart?chco=FF0000&chd=a%3A0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&chdl=Temperature&chs=700x190&cht=bvg&chtt=Temperature%20last%20week&chxs=1N%2A%2A%C2%BAC%2C000000&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=9ee613d417769bb6fce86fc64d7644cff3c8401cb7c316647534df6d602a6634)

```
&chxs=1N**ºC,000000
```

Thus we use `<skip_labels>` (see `0,s`, 0 means x axis and `s` means skip labels) to only let Image-Charts only display some of them:

[![chart](https://image-charts.com/chart?chco=FF0000&chd=a%3A0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&chdl=Temperature&chs=700x190&cht=bvg&chtt=Temperature%20last%20week&chxs=1N%2A%2A%C2%BAC%2C000000%7C0%2Cs&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=6c4413b5255d878ae218e7ebdbf4ac2b721ca047fd8049fe94d07c8af9b46d87)](https://editor.image-charts.com/chart?chco=FF0000&chd=a%3A0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&chdl=Temperature&chs=700x190&cht=bvg&chtt=Temperature%20last%20week&chxs=1N%2A%2A%C2%BAC%2C000000%7C0%2Cs&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=6c4413b5255d878ae218e7ebdbf4ac2b721ca047fd8049fe94d07c8af9b46d87)

```
&chxt=x,y
&chxs=1N**ºC,000000|0,s
```


!!! info "Enterprise+ subscribers - **upcoming on January 15th, 2020**"
    Font size and color are specified for the second x-axis (Jan, Feb, Mar).

    [![](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x325&cht=lc&chxl=3%3A%7CJan%7CFeb%7CMar&chxr=2%2C0%2C4&chxs=3%2C0000dd%2C13%2C0%2Ct&chxt=x%2Cy%2Cr%2Cx&icac=fgribreau&icretina=1&ichm=54f1ebd0fb5d54475e3def9fa699aac47c131d4291bae219308c718ec6d3baa9)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUc&chls=2.0&chs=700x325&cht=lc&chxl=3%3A%7CJan%7CFeb%7CMar&chxr=2%2C0%2C4&chxs=3%2C0000dd%2C13%2C0%2Ct&chxt=x%2Cy%2Cr%2Cx&icac=fgribreau&icretina=1&ichm=54f1ebd0fb5d54475e3def9fa699aac47c131d4291bae219308c718ec6d3baa9)

    ```
    chxt=x,y,r,x
    chxr=2,0,4
    chxl=3:|Jan|Feb|Mar|
         1:|min|average|max
    chxp=1,10,35,75
    chxs=3,0000DD,13,0,t
    ```
