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
