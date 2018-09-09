### Axis Label Styles

You can specify the font size, color<!--, and alignment --> for axis labels, both custom labels and default label values. All labels on the same axis have the same format. If you have multiple copies of an axis, you can format each one differently. You can also specify the format of a label string, for example to show currency symbols or trailing zeroes.

<!-- By default, the top and bottom axes do not show tick marks by the values, while the left and right axes do show them. -->

#### Syntax

Values for multiple axes should be separated using a pipe character ( | ).


```
chxs=
 <axis_index><opt_format_string>,<opt_label_color>,<opt_font_size>,<opt_alignment>,<opt_axis_or_tick>,<opt_tick_color>,<opt_axis_color>
   |...|
 <axis_index><opt_format_string>,<opt_label_color>,<opt_font_size>,<opt_alignment>,<opt_axis_or_tick>,<opt_tick_color>,<opt_axis_color>
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
        - --`e` - Scientific notation format. 🏁 --
        - `c<CUR>` - Format the number in the currency specified, with the appropriate currency marker. Replace <CUR> with a three-letter currency code. Example: cEUR for Euros. You can find a list of codes on the [ISO web site](http://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=46121), although not all symbols are supported.
      - `<decimal_places>` - An integer specifying how many decimal places to show. The value is rounded (not truncated) to this length. *Default is 2*.
      - `z` - Display trailing zeros. *Default is no*.
      - `s` - Display group separators. *Default is no*.
      - `x or y` -Display the data from the x- or y-coordinate, as specified. The meaning of x data varies by chart type: experiment with your chart to determine what it means. *Default is 'y'*.
    - `<following_text>` - Literal text to follow each value.
- **`<opt_label_color>`** *[Optional]* The color to apply to the axis text (but not axis line), in RRGGBB hexadecimal format. Axis line color is specified separately using opt_axis_color. *Default is black*.
- **`<opt_font_size>`** *[Optional]* specifies the font size in pixels. This parameter is optional.
- --**`<opt_alignment>`** *[Optional]* Label alignment. 🏁-- <!--For top or bottom axes, this describes how the label aligns to the tick mark above or below it; for left or right axes, this describes how the aligns inside its bounding box, which touches the axis. Specify one of the following numbers:
-1 - Top or bottom: labels are to the right of the ticks; Left or right: labels are left-aligned in their area. Default for r-axis labels.
0 - Top or bottom: labels are centered on the ticks; Left or right: labels are centered in their area. Default for x- and t-axis labels.
1 - Top or bottom: labels are to the left of the ticks; Left or right: labels are right-aligned in their area. Default for y-axis labels.-->
- --**`<opt_axis_or_tick>`** *[Optional]* 🏁 Whether to show tick marks and/or axis lines for this axis. .--
- **`<tick_color>`** *[Optional]* The tick mark color, in RRGGBB hexadecimal format. *Default is black*.
- --**`<opt_axis_color>`** *[Optional]* 🏁 The color of this axis line, in RRGGBB hexadecimal format. .--


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
&chxs=0N*f1z*,000000,10|1N*cUSD*Mil,333333,20
```
