<!-- axis styling (chxl, chxs, chxtc) is currently unsupported -->

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

{!reference/Chart_Axis/VisibleAxes.md!}
{!reference/Chart_Axis/AxisRange.md!}
{!reference/Chart_Axis/CustomAxisLabels.md!}
{!reference/Chart_Axis/AxisStyle.md!}
