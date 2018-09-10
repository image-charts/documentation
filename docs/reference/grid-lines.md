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


!!! info
    Google Image charts use these two parameters to calculate how many x or y grid lines to show on the chart, we decided not to implement this feature as it was **hard to use** and **error prone**.

- **`<opt_dash_length>, <opt_space_length>`** [Optional] Used to define dashed grid lines. The first parameter is the length of each line dash, in pixels. The second parameter is the spacing between dashes, in pixels. Specify 0 for *<opt_space_length>* for a solid line. Default values are `4,1`.

<!-- - **`<opt_x_offset>,<opt_y_offset>`** [Optional] The number of units, according to the chart scale, to offset the x and y grid lines, respectively. Can be positive or negative values. If you specify this value, you must also specify all preceding values. Default values are 0,0. -->

#### Examples

These examples use only the `<x_axis_step_size>` and `<y_axis_step_size>` parameters. The Chart API displays a dashed grid line by default.

![chart](https://image-charts.com/chart?cht=bvg&chd=t:50,30,10,60,65,90&chco=76A4FB&chls=2.0,0.0,0.0&chxt=x,y&chxl=0:|0|1|2|3|4|5|1:|0|50|100&chs=700x200&chg=20,50)

```
cht=bvg
chg=20,50
```

![chart](https://image-charts.com/chart?cht=lc&chd=s:cEAELFJHHHKUju9uuXUc&chco=76A4FB&chls=2.0,0.0,0.0&chxt=x,y&chxl=0:%7C0%7C1%7C2%7C3%7C4%7C5%7C1:%7C0%7C50%7C100&chs=700x200&chg=20,50)

```
cht=lc
chg=20,50
```

The following example uses larger spaces to display lighter grid lines (**1,5**):

![chart](https://image-charts.com/chart?cht=lc&chd=s:cEAELFJHHHKUju9uuXUc&chco=76A4FB&chls=2.0,0.0,0.0&chxt=x,y&chxl=0:%7C0%7C1%7C2%7C3%7C4%7C5%7C1:%7C0%7C50%7C100&chs=700x200&chg=20,50,1,5)

```
chg=20,50,1,5
```

Finally let's hide the vertical grid lines from previous example:

![chart](https://image-charts.com/chart?cht=lc&chd=s:cEAELFJHHHKUju9uuXUc&chco=76A4FB&chls=2.0,0.0,0.0&chxt=x,y&chxl=0:%7C0%7C1%7C2%7C3%7C4%7C5%7C1:%7C0%7C50%7C100&chs=700x200&chg=0,50,1,5)

```
chg=0,50,1,5
```
