You can specify solid or dotted grid lines on your chart using the `chg` parameter.

This parameter doesn't let you specify the thickness of the lines, if you need this please [contact us](mailto:support@image-charts.com) with your requirements. 

Grid lines are available on **[bar](/bar-charts)**, **[line](/line-charts)** and **[bubble](/bubble-charts)** charts.

 <!-- For more ways to make lines across your chart, see shape markers (chm type h, H, v, or V), range markers (chm), and axis tick marks (chxtc). -->

#### Syntax

```
chg=
  <x_axis_enabled>,<y_axis_enabled>,
  <opt_dash_length>,<opt_space_length>,<opt_lines_color>
```

<!-- <opt_x_offset>,<opt_y_offset> -->

- **`<x_axis_enabled>`** if set to a number between 1 and 100 ([1;100]) enable vertical grid lines.
- **`<y_axis_enabled>`** if set to a number between 1 and 100 ([1;100]) enable horizontal grid lines.

!!! warning
    Google Image charts use the two parameters above to calculate how many x or y grid lines to show on the chart, we decided not to implement this feature as it was **hard to use** and **error prone** when used with changing datasets.


- **`<opt_dash_length>, <opt_space_length>`** [Optional] Used to define dashed grid lines. The first parameter is the length of each line dash, in pixels. The second parameter is the spacing between dashes, in pixels. Specify 0 for *<opt_space_length>* for a solid line. Default values are `4,1`.
- **`<opt_lines_color>`** [Optional] The [color](/reference/color-format/) of the grid lines.

<!-- - **`<opt_x_offset>,<opt_y_offset>`** [Optional] The number of units, according to the chart scale, to offset the x and y grid lines, respectively. Can be positive or negative values. If you specify this value, you must also specify all preceding values. Default values are 0,0. -->

#### Examples

These examples use only the `<x_axis_step_size>` and `<y_axis_step_size>` parameters. The Chart API displays a dashed grid line by default.



```
cht=bvg
chg=20,50
```

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=t%3A50%2C30%2C10%2C60%2C65%2C90&chg=20%2C50&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=bvg&chxl=0%3A%7C0%7C1%7C2%7C3%7C4%7C5%7C&chxr=1%2C0%2C100%2C25&chxt=x%2Cy&icac=documentation&icretina=1&ichm=dca20a51a1de4d6f4f93bcf1435eace9c38a8cb64627d14191cebd8fd6d1ea57)](https://editor.image-charts.com/chart?chco=76A4FB&chd=t%3A50%2C30%2C10%2C60%2C65%2C90&chg=20%2C50&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=bvg&chxl=0%3A%7C0%7C1%7C2%7C3%7C4%7C5%7C&chxr=1%2C0%2C100%2C25&chxt=x%2Cy&icac=documentation&icretina=1&ichm=dca20a51a1de4d6f4f93bcf1435eace9c38a8cb64627d14191cebd8fd6d1ea57)

Hum, we can do much better, why not change the grid [color](/reference/color-format) `#CECECE` to and make it dashed:

```
chg=20,50,5,5,CECECE
```

Oh, and add some extra-colors and make bars rounded (8px):

```
chbr=8
chco=ffc107|67c23a|66b1ff|f56c6c|ffeb3b|00bcd4
```


[![chart](https://image-charts.com/chart?chbr=8&chco=ffc107%7C67c23a%7C66b1ff%7Cf56c6c%7Cffeb3b%7C00bcd4&chd=t%3A50%2C30%2C10%2C60%2C65%2C90&chg=20%2C50%2C5%2C5%2CCECECE&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=bvg&chxl=0%3A%7C0%7C1%7C2%7C3%7C4%7C5%7C&chxr=1%2C0%2C100%2C25&chxt=x%2Cy&icac=documentation&icretina=1&ichm=d993d06aa120bbb24b98b45afd98da0d851ff39b3cf9607375aacba0768afc97)](https://editor.image-charts.com/chart?chbr=8&chco=ffc107%7C67c23a%7C66b1ff%7Cf56c6c%7Cffeb3b%7C00bcd4&chd=t%3A50%2C30%2C10%2C60%2C65%2C90&chg=20%2C50%2C5%2C5%2CCECECE&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=bvg&chxl=0%3A%7C0%7C1%7C2%7C3%7C4%7C5%7C&chxr=1%2C0%2C100%2C25&chxt=x%2Cy&icac=documentation&icretina=1&ichm=d993d06aa120bbb24b98b45afd98da0d851ff39b3cf9607375aacba0768afc97)

Grid lines also works on line charts:

```
cht=lc
chg=20,50,1,1,333333
```

[![chart](https://image-charts.com/chart?chco=009688&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C1%2C1%2C333333&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=77082d0eaec0281622dde62cc8e79f30e4e648c336a98e8aef8f531ba882699e)](https://editor.image-charts.com/chart?chco=009688&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C1%2C1%2C333333&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=77082d0eaec0281622dde62cc8e79f30e4e648c336a98e8aef8f531ba882699e)


The following example uses larger spaces to display lighter grid lines (**1,5**):

```
chg=20,50,1,5
```

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=2b1c0bc4047dfe316edbf5d0e1f40d4ea829001e29e55bb9395fa1d0bb6061f4)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=2b1c0bc4047dfe316edbf5d0e1f40d4ea829001e29e55bb9395fa1d0bb6061f4)


Finally let's hide the vertical grid lines from previous example:

```
chg=0,50,1,5
```

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=0%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=bfc6f739dab89fa762369495741fdefeecd847a3bd39cb54b35fa91ba4d487de)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=0%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=bfc6f739dab89fa762369495741fdefeecd847a3bd39cb54b35fa91ba4d487de)

Oh, and let's also change the axis colors (see [chxs](/reference/chart-axis/#axis-label-styles)). The y axis is the second displayed axis (so the 1 index) and we want the axis to have the `7FA5F4` color:

```
chg=0,50,1,5
chxt=x,y
chxs=1,33333,14,-1,l,FFFFFF,7FA5F4
```

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=0%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1%2C33333%2C14%2C-1%2Cl%2CFFFFFF%2C7FA5F4&chxt=x%2Cy&icac=documentation&icretina=1&ichm=2b4dc673bbcba70fe8e739805e52a41a62a1038a85dc6706dd8182bb2da5492e)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=0%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1%2C33333%2C14%2C-1%2Cl%2CFFFFFF%2C7FA5F4&chxt=x%2Cy&icac=documentation&icretina=1&ichm=2b4dc673bbcba70fe8e739805e52a41a62a1038a85dc6706dd8182bb2da5492e)
