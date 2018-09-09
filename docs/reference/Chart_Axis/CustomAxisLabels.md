### Custom Axis Labels

You can specify custom string axis labels on any axis, using the `chxl` parameter. You can specify as many labels as you like. If you display an axis (using the [`chxt`](#visible-axes) parameter) and do not specify custom labels, the standard, numeric labels will be applied. To specify a custom numeric range, use the [`chxr`](#axis-range) parameter instead.

To set specific locations along the axis for your labels, use the chxp parameter.

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

Labels also work in [bar charts](#bar-charts):

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
