You can specify which axes to display on the chart, and give them custom labels and positions, ranges.

Not all charts show axis lines by default. You can specify exactly which axes your chart should show using the `chxt` parameter. Default axis lines do not show numbers; you must specify an axis in the `chxt` parameter to show numbers.

You can choose to have your axes display numbers reflecting the data values, or you can specify custom axes. The default is to display numeric values, with values scaled to range from 0—100. However, you can change that range using `chxr` to display another range.

<!-- If you choose to use custom values, for example: "Mon, Tues, Wed", you can use the chxl parameter. To place these labels in specific locations along the axis, use the chxp parameter. -->

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
    * `t` - Top x-axis (:+1: Enterprise+ subscription)
    * `r` - Right y-axis (:+1: Enterprise+ subscription)

!!! info "Enterprise+ subscribers"
    `chxt` up to `x,y` is available for *Free* and *Enterprise* subscriptions. Charts with more than two axis requires the Enterprise+ subscription.
    You can specify multiple axes of the same type, for example: `cht=x,x,y`. This will stack two sets of x-axes along the bottom of the chart. This is useful when adding custom labels along an axis that shows numeric values (see the example below). Axes are drawn from the inside out, so if you have `x,x`, the first x refers to the innermost copy, the next x refers to the next outwards copy, and so on.


#### Example

For our first example, let's ask to display the y-axis:

![chart](https://image-charts.com/chart?cht=ls&chs=700x125&chd=t:40,60,60,45,47,75,70,72&chxt=y)

```
cht=ls
chxt=y
```

Now let's display the x-axis:

![chart](https://image-charts.com/chart?cht=ls&chs=700x125&chd=t:40,60,60,45,47,75,70,72&chxt=x)

```
cht=ls
chxt=y
```

Why not both?

![chart](https://image-charts.com/chart?cht=ls&chs=700x125&chd=t:40,60,60,45,47,75,70,72&chxt=x,y)

```
cht=ls
chxt=x,y
```

Note that unlike sparklines (`cht=ls`), line-charts (`cht=lc`) automatically display x-axis and y-axis:

![chart](https://image-charts.com/chart?cht=lc&chs=700x125&chd=t:40,60,60,45,47,75,70,72)

```
cht=lc
```

... and you can suppress default axes in a line chart (`cht=lc`) by specifying `:nda` after the chart type.

![chart](https://image-charts.com/chart?cht=lc:nda&chs=700x125&chd=t:40,60,60,45,47,75,70,72)

```
cht=lc:nda
```


!!! info "Enterprise+ subscribers"
    This example shows a line chart with an x-axis, a y-axis, a top axis (t), and a right axis (r). Because no labels are specified, the chart defaults to a range of 0 to 100 for all axes. Note that by default, the top and bottom axes don't show tick marks by the labels.

    ![chart url multiple axis](https://image-charts.com/chart?ichm=ad7683b7bcf642f5d19b53df53c18008df1152eb835e96dcadfef95dff0a9c32&chxt=x,y,t,r&cht=lc&chd=s:cEAELFJHHHKUju9uuXUc&chco=76A4FB&chls=2.0&chs=700x125&icac=fgribreau)

    ```
    chxt=x,y,r,t
    ```

    You can include multiple sets of labels for each axis by including the same value more than once. This example shows two sets of x and two sets of y-axes. This isn't particularly useful when using only the default axis labels, as is shown here. But you can specify custom labels for each copy of each axis, using the `chxl` parameter.

    ![chart with multiple x and y axis](https://image-charts.com/chart?ichm=5de6e0c5378844300015135f0734cf0943e4c39d3001bff572344ed7a52be268&chxt=x,x,y,y&cht=lc&chd=s:cEAELFJHHHKUju9uuXUc&chco=76A4FB&chls=2.0&chs=700x325&icac=fgribreau)

    ```
    chxt=x,x,y,y
    ```

    ![chart with multiple labels](https://image-charts.com/chart?ichm=f08d562c61c0991bf3db518a9cb058ec15b5d80d1c18de101c4cb673f6ef0d87&chxt=x,x,y,y&cht=lc&chd=s:cEAELFJHHHKUju9uuXUc&chco=76A4FB&chls=2.0&chs=700x325&chxl=1:|Freezing|Hot|3:|Low|High&chma=40,20,20,30&icac=fgribreau)

    ```
    chxt=x,x,y,y
    chxl=
      1:|Freezing|Hot|
      3:|Low|High
    ```

<!--
[en attente de fix]
This example shows a horizontal bar chart with an x-axis, a y-axis, an upper t-axis, and a right r-axis.

Axis labels are omitted, so the Chart API displays a range of 0 to 100 for the x-axis and for the t-axis.

The range for the y-axis and for the r-axis is determined by the number of bars. In this case, there are five bars, so the Chart API displays a range of 0 to 4. The first label is centered at the base of the first bar, the second label is centered at the base of the second bar, and so on.

![](https://image-charts.com/chart?ichm=46973d947f70fb47161e7bf9f75657d70302e96750077a4da4142b738dc271b2&chxt=x,y,r,t&cht=bhs&chd=s:EUjVu&chco=76A4FB&chls=2.0&chs=700x225&icac=fgribreau)

```
chxt=x,y,r,t
```
-->


### Axis Range

You can specify the range of values that appear on each axis independently using the `chxr` parameter. Unlike in Google Image Charts the axis range is related to the data range, which make sense. Specifying `chxr` will change the scale of the chart elements.

You must make an axis visible using the `chxt` parameter if you want to specify its range.

<!-- To specify custom axis values, use the `chxl` parameter. -->

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

![chart](https://image-charts.com/chart?chxt=x,y&chxr=1,0,100&cht=lc&chd=s:cEAELFJHHHKUju9uuXUc&chco=76A4FB&chls=2.0&chs=700x300)

```
chxt=x,y
chxr=1,0,100
```

In this example, we are defining values (`chd`) from -30 to 50 and allowing them in the scale of -100,100 (`chds`).

The Y axis range (`chxr`) is set from -50 to 50 and both axis are visible (`chxt`).

![chart](https://image-charts.com/chart?chxt=x,y&chxr=1,-50,50&cht=bvs&chd=t:20,30,40,50,-30,10&chds=-100,100&chco=76A4FB&chls=2.0&chs=700x300)

```
chxt=x,y
chd=t:20,30,40,50,-30,10
chds=-100,100
chxr=1,-50,50
```

<!--

!!! info "Enterprise+ subscribers"
    This example shows left and right y-axes (y and r) and one x-axis (x).

    Each axis has a defined range. Because no labels or positions are specified, values are taken from the given range, and are evenly spaced within that range. In the line chart, values are evenly spread along the x-axis.

    Axis direction is reversed for the r-axis (index 2), because the first value (`1000`) is larger than the last value (0).

    ![](https://image-charts.com/chart?ichm=9661e50821299982d8b30d82efaeb117a168c97295b3094b619b5523e399f306&chxt=x,y,r&chxr=0,0,500|1,0,200|2,1000,0&cht=lc&chd=s:cEAELFJHHHKUju9uuXUc&chco=76A4FB&chls=2.0&chs=700x225&icac=fgribreau)

    ```
    chxt=x,y,r
    chxr=
      0,0,500|
      1,0,200|
      2,1000,0
      ```
-->

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

![chart](https://image-charts.com/chart?chxt=x,y&chxl=0:|Jan|Feb|March|April|May&cht=lc&chd=t:10,5,34,10,5&chco=76A4FB&chls=2.0&chs=700x190)

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

![chart](https://image-charts.com/chart?cht=bvs&chd=t:10,40,25&chxt=x,y&chxl=0:|Jun|July|Aug|&chs=700x190&chf=b0,lg,90,03a9f4,0,3f51b5,1&chan=1200,easeOutBounce)

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

![](https://image-charts.com/chart?chxt=x,y&chxl=0:%7CJan%7CFeb%7CMarch%7CApril%7CMay%7C1:%7CMin%7CMid%7CMax&cht=lc&chd=s:cEAELFJHHHKUju9uuXUc&chco=76A4FB&chls=2.0&chs=700x300)

```
chxt=x,y
chxl=
0:|Jan|Feb|March|April|May|
1:|Min|Mid|Max
```

!!! info "Enterprise+ subscribers"
    The example below includes axis labels on the left and right y-axes (`y` and `r`). It also includes two sets of values for the x-axis (x). You could consider adding tick marks on the y-axis using `chxs`.

    ![](https://image-charts.com/chart?ichm=eb64b5863221a1fc9f8b34fb8a6998f6413d70e78d6a3dcff339bc1982dfaa86&chxt=x,y,r,x&chxl=0:|Jan|July|Jan|July|Jan|1:|0|50|100|2:|A|B|C|3:|2005|2006|2007&cht=lc&chd=s:cEAELFJHHHKUju9uuXUc&chco=76A4FB&chls=2.0&chs=700x325&icac=fgribreau)

    ```
    chxt=x,y,r,x
    chxl=
    0:|Jan|July|Jan|July|Jan|
    1:|0|50|100|
    2:|A|B|C|
    3:|2005|2006|2007
    ```

    If you want to add a generic label to describe a whole axis (for example, to label one axis "cost" and another "student"), use the chxt property to add an additional axis on each side, then use chxl to add a single custom label to each side.

    ![](https://image-charts.com/chart?ichm=902f7167780d9797046b117448f15bda4d0ea2ed3c1a32c8ad120a1720039fdf&chxt=x,x,y,y&cht=bvs&chd=s:c9ucD&chls=2.0&chs=700x325&chxl=1:|Martinis|3:|Score&icac=fgribreau)

    ```
    chxt=x,x,y,y
    chxl=1:|Martinis|3:|Score
    ```

<!--
ENTERPRISE+ SUBSCRIPTIONS

This example uses default values for the axis labels on the left y-axis.

![](https://image-charts.com/chart?ichm=51c40b04d9b3c7685b60019809339fa6fd00bf4961b637351a3042ca9f1001b2&chxt=x,y,r,x&chxl=0:|Jan|July|Jan|July|Jan|2:|A|B|C|3:|2005||2006||2007&cht=bvs&chd=s:c9uDc&chco=76A4FB&chls=2.0&chs=700x325&chbh=r,0.3&icac=fgribreau)

```
chxt=x,y,r,x
chxl=
0:|Jan|July|Jan|July|Jan|
2:|A|B|C|
3:|2005||2006||2007
```
-->

### Axis Label Styles

You can specify the font size, color<!--, and alignment --> for axis labels, both custom labels and default label values. All labels on the same axis have the same format. If you have multiple copies of an axis, you can format each one differently. You can also specify the format of a label string, for example to show currency symbols or trailing zeroes.

<!-- By default, the top and bottom axes do not show tick marks by the values, while the left and right axes do show them. -->

#### Syntax

Values for multiple axes should be separated using a pipe character ( | ).


```
chxs=
 <axis_index><opt_format_string>,<opt_label_color>,<opt_font_size>,<opt_alignment>,<opt_axis_or_tick>,<opt_tick_color>,<opt_axis_color><skip_labels>
   |...|
 <axis_index><opt_format_string>,<opt_label_color>,<opt_font_size>,<opt_alignment>,<opt_axis_or_tick>,<opt_tick_color>,<opt_axis_color><skip_labels>
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
          - `e` - Scientific notation format. 🚧
          - `c<CUR>` - Format the number in the currency specified, with the appropriate currency marker. Replace <CUR> with a three-letter currency code. Example: cEUR for Euros. You can find a list of codes on the [ISO web site](http://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=46121), although not all symbols are supported.
        - `<decimal_places>` - An integer specifying how many decimal places to show. The value is rounded (not truncated) to this length. *Default is 2*.
        - `z` - Display trailing zeros. *Default is no*.
        - `s` - Display group separators. *Default is no*.
        - `x or y` -Display the data from the x- or y-coordinate, as specified. The meaning of x data varies by chart type: experiment with your chart to determine what it means. *Default is 'y'*.
    - `<following_text>` - Literal text to follow each value.
- **`<opt_label_color>`** *[Optional]* The color to apply to the axis text (but not axis line), in RRGGBB hexadecimal format. Axis line color is specified separately using opt_axis_color. *Default is black*.
- **`<opt_font_size>`** *[Optional]* specifies the font size in pixels. This parameter is optional.
- **`<opt_alignment>`** *[Optional]* Label alignment. 🚧 <!--For top or bottom axes, this describes how the label aligns to the tick mark above or below it; for left or right axes, this describes how the aligns inside its bounding box, which touches the axis. Specify one of the following numbers:
-1 - Top or bottom: labels are to the right of the ticks; Left or right: labels are left-aligned in their area. Default for r-axis labels.
0 - Top or bottom: labels are centered on the ticks; Left or right: labels are centered in their area. Default for x- and t-axis labels.
1 - Top or bottom: labels are to the left of the ticks; Left or right: labels are right-aligned in their area. Default for y-axis labels.-->
- **`<opt_axis_or_tick>`** *[Optional]* 🚧 Whether to show tick marks and/or axis lines for this axis.
      - `l` (lowercase 'L') - Draw axis line only.
      - `t` - Draw tick marks only. Tick marks are the little lines next to axis labels.
      - `lt` - [Default] Draw both an axis line and tick marks for all labels.
      - `_` - (Underscore) Draw neither axis line nor tick marks. If you want to hide an axis line, use this value.
- **`<tick_color>`** *[Optional]* The tick mark color, in RRGGBB hexadecimal format. *Default is black*.
- **`<opt_axis_color>`** *[Optional]* 🚧 The color of this axis line, in RRGGBB hexadecimal format.
- **`<skip_labels>`** *[Optional]*  Specify `s` if labels on this axis should be hidden in case there are too many


#### Example


Display the x-axis labels in `#FF00FF` with a 13px font-size and `#FF0000` color for the y-axis.

![chart](https://image-charts.com/chart?cht=lc&chd=s:cEAELFJHHHKUju9uuXUc&chco=76A4FB&chls=2.0&chxt=x,y&chxs=0,FF00FF,13,0,t|1,FF0000&chxr=1,0,70&chs=700x300)

```
&chxt=x,y
&chxs=0,FF00FF,13|1,FF0000
```

![chart](https://image-charts.com/chart?cht=ls&chd=s:984sttvuvkQIBLKNCAIi,DEJPgq0uov17zwopQODS&chxt=x,y&chxs=1N*cUSD2sz*Mil,000000&chs=700x300&chxr=0,0,100)

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

![chart](https://image-charts.com/chart?cht=ls&chd=s:984sttvuvkQIBLKNCAIi,DEJPgq0uov17zwopQODS&chxt=x,y&chxr=0,0,1000000,250000|1,0,60|2,0,5000&chxs=0N*f1z*,000000,10|1N*cUSD*Mil,007939,20&chs=700x300&chdl=2017|2018)

```
&chxt=x,y
&chxs=0N*f1z*,000000,10|1N*cUSD*Mil,007939,20
```

Chart below has too many labels in the x axis:

![chart](https://image-charts.com/chart?chtt=Temperature+last+week&cht=bvg&chs=700x190&chco=FF0000&chxt=x,y&chxs=1N**ºC,000000&chdl=Temperature&chd=a:0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17)

```
&chxs=1N**ºC,000000
```

Thus we use `<skip_labels>` (see `0,s`, 0 means x axis and `s` means skip labels) to only let Image-Charts only display some of them:

![chart](https://image-charts.com/chart?chtt=Temperature+last+week&cht=bvg&chs=700x190&chco=FF0000&chxt=x,y&chdl=Temperature&chd=a:0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17&chxs=1N**ºC,000000|0,s)

```
&chxt=x,y
&chxs=1N**ºC,000000|0,s
```

<!--
!!! info "Enterprise+ subscribers"
    Font size and color are specified for the second x-axis (Jan, Feb, Mar).

    ![](https://image-charts.com/chart?ichm=0d7e2915972d892de9b67baa016a3937e8cc3b7807c6cc91521e9d7fd46a23a9&cht=lc&chd=s:cEAELFJHHHKUju9uuXUc&chco=76A4FB&chls=2.0&chs=700x325&chxt=x,y,r,x&chxr=2,0,4&chxl=3:|Jan|Feb|Mar&chxs=3,0000dd,13,0,t&icac=fgribreau)

    ```
    chxt=x,y,r,x
    chxr=2,0,4
    chxl=3:|Jan|Feb|Mar|
         1:|min|average|max
    chxp=1,10,35,75
    chxs=3,0000DD,13,0,t
    ```
-->
