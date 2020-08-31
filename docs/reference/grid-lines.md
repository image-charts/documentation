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

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=t:50,30,10,60,65,90&chg=20,50&chls=2.0,0.0,0.0&chs=700x200&cht=bvg&chxl=0:|0|1|2|3|4|5|&chxr=1,0,100,25&chxt=x,y&icac=fgribreau&icretina=1&ichm=21f7a26d87c1d80c3cf7bfb89420212f57f9eb989070e1e44a2d22b0a4953f9d)](https://editor.image-charts.com/chart?chco=76A4FB&chd=t:50,30,10,60,65,90&chg=20,50&chls=2.0,0.0,0.0&chs=700x200&cht=bvg&chxl=0:|0|1|2|3|4|5|&chxr=1,0,100,25&chxt=x,y&icac=fgribreau&icretina=1&ichm=21f7a26d87c1d80c3cf7bfb89420212f57f9eb989070e1e44a2d22b0a4953f9d)

```
cht=bvg
chg=20,50
```

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s:cEAELFJHHHKUju9uuXUcd&chg=20,50&chls=2.0,0.0,0.0&chs=700x200&cht=lc&chxr=0,0,20,1|1,0,100,20&chxt=x,y&icac=fgribreau&icretina=1&ichm=c11bfa4834719befa1f16d3ef9c2f93bb5b125fda3a391cee5a22d372006b84d)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s:cEAELFJHHHKUju9uuXUcd&chg=20,50&chls=2.0,0.0,0.0&chs=700x200&cht=lc&chxr=0,0,20,1|1,0,100,20&chxt=x,y&icac=fgribreau&icretina=1&ichm=c11bfa4834719befa1f16d3ef9c2f93bb5b125fda3a391cee5a22d372006b84d)

```
cht=lc
chg=20,50
```

The following example uses larger spaces to display lighter grid lines (**1,5**):

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s:cEAELFJHHHKUju9uuXUcd&chg=20,50,1,5&chls=2.0,0.0,0.0&chs=700x200&cht=lc&chxr=0,0,20,1|1,0,100,20&chxt=x,y&icac=fgribreau&icretina=1&ichm=53c946d2708babd1f29024dab2dc649fdbaab0ff2e082dea5cba42c72baf2b1d)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s:cEAELFJHHHKUju9uuXUcd&chg=20,50,1,5&chls=2.0,0.0,0.0&chs=700x200&cht=lc&chxr=0,0,20,1|1,0,100,20&chxt=x,y&icac=fgribreau&icretina=1&ichm=53c946d2708babd1f29024dab2dc649fdbaab0ff2e082dea5cba42c72baf2b1d)

```
chg=20,50,1,5
```

Finally let's hide the vertical grid lines from previous example:

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s:cEAELFJHHHKUju9uuXUcd&chg=0,50,1,5&chls=2.0,0.0,0.0&chs=700x200&cht=lc&chxr=0,0,20,1|1,0,100,20&chxt=x,y&icac=fgribreau&icretina=1&ichm=d0c7f531eace6c5ded91461e09e3b5210c4547a84866917843be737e6fb55c41)](https://editor.image-charts.com/chart?chco=76A4FB&chd=s:cEAELFJHHHKUju9uuXUcd&chg=0,50,1,5&chls=2.0,0.0,0.0&chs=700x200&cht=lc&chxr=0,0,20,1|1,0,100,20&chxt=x,y&icac=fgribreau&icretina=1&ichm=d0c7f531eace6c5ded91461e09e3b5210c4547a84866917843be737e6fb55c41)

```
chg=0,50,1,5
```

Oh, and let's also change the axis colors. The y axis is the second displayed axis (so the 1 index) and we want the axis to have the `7FA5F4` color:

[![chart](https://image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=0%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1%2C33333%2C14%2C-1%2Cl%2CFFFFFF%2C000000&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=b1676d1f09c573d3623ea010dd923e672c36469964d0ccf860b70041d1a96410](https://editor.image-charts.com/chart?chco=76A4FB&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=0%2C50%2C1%2C5&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1%2C33333%2C14%2C-1%2Cl%2CFFFFFF%2C000000&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=b1676d1f09c573d3623ea010dd923e672c36469964d0ccf860b70041d1a96410)

```
chg=0,50,1,5
chxt=x,y
chxs=1,33333,14,-1,l,FFFFFF,7FA5F4
```
