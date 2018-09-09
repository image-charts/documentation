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

Note: `t` (Top x-axis) and `r` (right y-axis) and multiple axes (e.g. x,x,y) are currently not supported.


#### Example

You can suppress default axes in a line chart by specifying :nda after the chart type.

![chart](https://image-charts.com/chart?cht=lc:nda&chs=700x125&chd=t:40,60,60,45,47,75,70,72)

```
cht=lc:nda
```
