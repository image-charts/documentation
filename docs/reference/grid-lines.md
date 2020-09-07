!!! warning
    Only **[bar](/bar-charts)** and **[line](/line-charts)** charts can leverage grid lines.

You can specify solid or dotted grid lines on your chart using the `chg` parameter.

This parameter doesn't let you specify the thickness or color of the lines, if you need this please contact us with your requirements.

 <!-- For more ways to make lines across your chart, see shape markers (chm type h, H, v, or V), range markers (chm), and axis tick marks (chxtc). -->

#### Syntax

```
chg=
  <x_axis_enabled>,<y_axis_enabled>,
  <opt_dash_length>,<opt_space_length>
```

<!-- <opt_x_offset>,<opt_y_offset> -->

- **`<x_axis_enabled>`** if set to a number between 1 and 100 ([1;100]) enable vertical grid lines.
- **`<y_axis_enabled>`** if set to a number between 1 and 100 ([1;100]) enable horizontal grid lines.

!!! warning
    Google Image charts use the two parameters above to calculate how many x or y grid lines to show on the chart, we decided not to implement this feature as it was **hard to use** and **error prone** when used with changing datasets.


- **`<opt_dash_length>, <opt_space_length>`** [Optional] Used to define dashed grid lines. The first parameter is the length of each line dash, in pixels. The second parameter is the spacing between dashes, in pixels. Specify 0 for *<opt_space_length>* for a solid line. Default values are `4,1`.

<!-- - **`<opt_x_offset>,<opt_y_offset>`** [Optional] The number of units, according to the chart scale, to offset the x and y grid lines, respectively. Can be positive or negative values. If you specify this value, you must also specify all preceding values. Default values are 0,0. -->

#### Examples

These examples use only the `<x_axis_step_size>` and `<y_axis_step_size>` parameters. The Chart API displays a dashed grid line by default.

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=t%3A50%2C30%2C10%2C60%2C65%2C90&chg=20%2C50&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=bvg&chxl=0%3A%7C0%7C1%7C2%7C3%7C4%7C5%7C&chxr=1%2C0%2C100%2C25&chxt=x%2Cy&icac=documentation&icretina=1&ichm=dca20a51a1de4d6f4f93bcf1435eace9c38a8cb64627d14191cebd8fd6d1ea57)](https://editor.image-charts.com/chart?chco=76A4FB&chd=t%3A50%2C30%2C10%2C60%2C65%2C90&chg=20%2C50&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=bvg&chxl=0%3A%7C0%7C1%7C2%7C3%7C4%7C5%7C&chxr=1%2C0%2C100%2C25&chxt=x%2Cy&icac=documentation&icretina=1&ichm=dca20a51a1de4d6f4f93bcf1435eace9c38a8cb64627d14191cebd8fd6d1ea57)

```
cht=bvg
chg=20,50
```

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=5b37d67a286c0978ab3658fa82e6501f0af5c3d012165185b813df76115eada3)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=5b37d67a286c0978ab3658fa82e6501f0af5c3d012165185b813df76115eada3)

```
cht=lc
chg=20,50
```

The following example uses larger spaces to display lighter grid lines (**1,5**):

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=2b1c0bc4047dfe316edbf5d0e1f40d4ea829001e29e55bb9395fa1d0bb6061f4)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=2b1c0bc4047dfe316edbf5d0e1f40d4ea829001e29e55bb9395fa1d0bb6061f4)

```
chg=20,50,1,5
```

Finally let's hide the vertical grid lines from previous example:

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=0%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=bfc6f739dab89fa762369495741fdefeecd847a3bd39cb54b35fa91ba4d487de)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=0%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxt=x%2Cy&icac=documentation&icretina=1&ichm=bfc6f739dab89fa762369495741fdefeecd847a3bd39cb54b35fa91ba4d487de)

```
chg=0,50,1,5
```

Oh, and let's also change the axis colors (see [chxs](/reference/chart-axis/#axis-label-styles)). The y axis is the second displayed axis (so the 1 index) and we want the axis to have the `7FA5F4` color:

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=0%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1%2C33333%2C14%2C-1%2Cl%2CFFFFFF%2C7FA5F4&chxt=x%2Cy&icac=documentation&icretina=1&ichm=2b4dc673bbcba70fe8e739805e52a41a62a1038a85dc6706dd8182bb2da5492e)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=0%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1%2C33333%2C14%2C-1%2Cl%2CFFFFFF%2C7FA5F4&chxt=x%2Cy&icac=documentation&icretina=1&ichm=2b4dc673bbcba70fe8e739805e52a41a62a1038a85dc6706dd8182bb2da5492e
)

```
chg=0,50,1,5
chxt=x,y
chxs=1,33333,14,-1,l,FFFFFF,7FA5F4
```
