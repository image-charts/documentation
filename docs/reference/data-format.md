This document explains how to send your chart data to the Image Charts API.

Data for almost all charts is sent using the `chd` parameter. The data must be sent in one of the following formats:

- [Basic text format](#basic-text-format) is essentially simple floating point numbers from 0—100, inclusive. This format is easy to read and write by hand.
- [Awesome data format](#awesome-text-format) (**:star: recommended**)  is the easiest format that we created for you at Image-Charts. It has floating point numbers, **no lower-upper limitation** :heart_eyes: and **automatic scaling**. If you never used Image-Charts before, **start with this one**.
- [Text format with automatic scaling](#text-format-with-automatic-scaling) scales the chart to fit your data.
- [Text format with custom scaling](#text-format-with-custom-scaling) is similar to basic text format, but it lets you specify a custom range using a second URL parameter.
- [Simple encoding format](#simple-encoding-format) lets you specify integer values from 0—61, inclusive, encoded by a single alphanumeric character. This encoding results in the shortest data string of any of the data formats (if any values are greater than 9).
- [Extended encoding format](#extended-encoding-format) lets you specify integer values from 0—4095, inclusive, encoded by two alphanumeric characters. Extended encoding is best suited to a chart with a lot of data and a large data range.

The data values are scaled to fit the format used; see Data Scaling and Axis Scaling for an explanation of how the data is manipulated to fit the chart.

We provide [JavaScript](#javascript-encoding-script) and [Python](#python-encoding-script) snippets for encoding data into simple encoding or extended encoding formats.

### Awesome Text Format

The awesome text format is the easiest text format available. It was not defined in Google Image Charts and we've implemented it due to high demand and usage.

It has floating point numbers, **no lower-upper value limitation** (unlike Google Image Charts 0-61, 0-100 or 0—4095 limitation), **automatic scaling** (no need for `chds=a`). Any value below or above zero is valid, no truncation anymore. It's the easiest to use, read and write by hand.

If you never used Google Image Charts and Image-Charts before, prefer this one.

!!! warning
    Don't forget that web browser URL maximum length is at ~[2000 characters](https://stackoverflow.com/a/417184/745121). If you have more data than the URL can fit use the [Extended encoding format](#extended-encoding-format) instead.

#### Syntax

```
chd=a:val,val,val|val,val,val...
```

**<data>** Each series is one or more comma-separated values. Separate multiple series using a pipe character (`|`). Values are floating point numbers from -∞ to +∞. The underscore character ( _ ) is considered a null value.

#### Example

A table with five values. The underscore is considered a null value, negative or positive float number are allowed, the chart scaling is automatic.

![chart](https://image-charts.com/chart?chs=700x200&cht=bvs&chxt=y&chf=b0,lg,90,EA469EFF,1,03A9F47C,0.4&chan=1100,easeInCirc&chl=2014|2015|2016|2017|2018&chd=a:30010,-30000.1,50000.5,80000.10,20000)

```
chd=a:30010,-30000.1,50000.5,80000.10,20000
```

### Basic Text Format

Basic text-formatted data lets you specify floating point values from 0—100, inclusive, as numbers. Values below zero are marked as missing; values above 100 are truncated to 100. The advantage of basic text format is that the values are easy to read and understand in the URL, and the default axis labels show the data values accurately. However, text formatting (whether simple or with custom parameters) results in the longest data string of all formats.

If your data includes values outside the specified range for text formatting, you can scale your data by converting it into percentages of the largest value in your data. Alternatively, you could use text formatting with custom scaling to handle the scaling for you.

#### Syntax

```
chd=t:val,val,val|val,val,val...
```

**<data>** Each series is one or more comma-separated values. Separate multiple series using a pipe character (`|`). Values are floating point numbers from 0—100, inclusive. Values less than zero, or the underscore character ( _ ) are considered null values. Values above 100 are truncated to 100.


#### Example

A table with five values. The underscore is considered a null value, the -30 value falls below the minimum value, so it is dropped, and the 200 value is truncated to 100.

![chart](https://image-charts.com/chart?chs=700x200&cht=bvs&chd=t:_,30,-30,50,80,200&chxt=y)

```
chd=t:_,30,-30,50,80,200
```
### Text Format with Automatic Scaling

You can configure some charts to scale automatically to fit their data. The chart will be scaled so that the largest value is at the top of the chart and the smallest (or zero, if all values are greater than zero) will be at the bottom.

Any marker values shown on the chart will display their actual values, not their scaled values.

This feature works only with text-formatted values, and does not work with all chart types. Experiment with your chart type to see whether it is supported.


#### Syntax

```
cht=t:val,val,val...
chds=a
```

**<data>** Each series is one or more comma-separated values. Separate multiple series using a pipe character (`|`). Values are floating point numbers from 0—100, inclusive. Values less than zero, or the underscore character ( _ ) are considered null values. Values above 100 are truncated to 100.


#### Example


How to generate a Pie Chart (note that you should not use values < 0 for pie charts):

![chart](https://image-charts.com/chart?chs=700x200&cht=p&chd=t:5,30,50,80,200&chds=a&chl=5\|30\|50\|80\|200)

```
chd=t:5,30,50,80,200
chds=a
```

How to generate a Bar Chart:

![chart](https://image-charts.com/chart?chs=700x200&cht=bvs&chd=t:-5,30,-30,50,80,200&chds=a&chxt=y&chm=N,000000,0,-1,11)

```
chd=t:-5,30,-30,50,80,200
chds=a
```

### Text Format with Custom Scaling

Text format with custom scaling lets you specify arbitrary positive or negative floating point numbers, in combination with a scaling parameter that lets you specify a custom range for your chart. This chart is useful when you don't want to worry about limiting your data to a specific range, or don't want to scale the data manually to fit nicely inside a chart. This format will adjust the zero line for you, as necessary. The format of the data is the same as with basic text format.

For automatic scaling, specify `chds=a`.

Text formatting (whether simple or with custom parameters) results in the longest data string of all formats.

#### Syntax

```
chd=t:val,val,val|val,val,val
chds=<series_1_min>,<series_1_max>,...,<series_n_min>,<series_n_max>
```

- **chd=t:<data>** Same as plain data format: one or more comma-separated values per series, multiple series separated by a pipe character (`|`). The range of permitted values in each series is specified by the `chds` parameter.

- **chds** A set of one or more minimum and maximum permitted values for each data series, separated by commas. You must supply both a max and a min. If you supply fewer pairs than there are data series, the last pair is applied to all remaining data series. **Note that this does not change the axis range; to change the axis range, you must set the chxr parameter**. <!--Valid values range from (+/-)9.999e(+/-)199. You can specify values in either standard or E notation. -->
  - **<series_1_min>** The minimum allowable value in the first series. Lower values are marked as missing.
  - **<series_1_max>** Maximum allowable value in the first series. Higher values are truncated to this value.


#### Example

A bar chart with a min/max scale of -80—140. The 30, -60, 50, 140, and 80 values fall within the scale, so they are not truncated. Note that the zero line is adjusted for you, 80/(140 + 80) = 0.36 of the way up the y-axis.

Google Image Charts had a weird --bug-- feature, the default y-axis range was still 0—100, despite the **chds** parameter, so the label values do not reflected the actual data values. In Image-charts we think that its a bug. We are displaying the real-values inside the default y-axis, just as one would think.


![chart](https://image-charts.com/chart?chs=700x200&cht=bvs&chd=t:30,-60,50,140,80,-90&chds=-80,140&chxt=y)

```
chd=t:30,-60,50,140,80,-90
chds=-80,140
```

### Simple Encoding Format

Simple encoding format lets you specify integer values from 0—61, inclusive, encoded by a single alphanumeric character. This results in the shortest data string URL of all the data formats. However, if you have a line or bar chart that is longer than 100 pixels along the data axis, you might want to use another format. This is because, with only 62 data values supported, the data granularity is much bigger than the display granularity, and values will be just little off (not much, but visible on larger charts).

Note that if you use the `chds` parameter with simple encoding, data element size on the chart won't be affected, but any data point marker values will be.


#### Syntax

```
chd=s:
  <series_1>
    ,...,
  <series_n>
```

- **<series_1>** A string, where each character is a single data point, and series are delimited by a comma. Individual values within a series are not delimited. Here are the supported data characters, and their corresponding values:
  - `A—Z`, where `A` = 0, `B` = 1, and so on, to `Z` = 25
  - `a—z`, where `a` = 26, `b` = 27, and so on, to `z` = 51
  - `0(zero)—9`, where `0` = 52 and `9` = 61
  - The underscore character (`_`) indicates a missing value

You can use the [JavaScript code](#javascript-encoding-script) to scale and encode an entire URL string.

#### Example


Equivalent to the text-encoded string `chd=t:1,19,27,53,61,-1|12,39,57,45,51,27`:

![chart](https://image-charts.com/chart?chs=700x200&cht=bvs&chd=s:BTb19_,Mn5tzb&chco=FFCC33,FFE9A4&chxr=0,0,61,5&chxt=y)

```
chd=s:BTb19_,Mn5tzb
```

### Extended Encoding Format

Extended encoding format lets you specify integer values from 0—4095, inclusive, encoded by two alphanumeric characters. It uses a slightly different syntax from simple encoding.

Note that if you use the chds parameter with simple encoding, data element size on the chart won't be affected, but any data point marker values will be.


#### Syntax

```
chd=e:
  <series_1>
    ,...,
  <series_n>
```

- **<series_1>** A string where each two characters is a single data point, and series are delimited by a comma. Individual values in a series are not delimited. Here are the supported encoding characters:
  - `A—Z`
  - `a—z`
  - `0—9`
  - period (`.`)
  - hyphen (`-`)
  - Missing values are indicated with a double underscore (`__`).

Here is an abbreviated description of encoded values:

  - `AA` = 0, `AB` = 1, and so on to `AZ` = 25
  - `Aa` = 26, `Ab` = 27, and so on to `Az` = 51
  - `A0` = 52, `A1` = 53, and so on to `A9` = 61
  - `A-` = 62, `A.` = 63
  - `BA` = 64, `BB` = 65, and so on to `BZ` = 89
  - `Ba` = 90, `Bb` = 91, and so on to `Bz` = 115
  - `B0` = 116, `B1` = 117, and so on to `B9` = 125
  - `B-` = 126, `B.` = 127
  - `9A` = 3904, `9B` = 3905, and so on to `9Z` = 3929
  - `9a` = 3930, `9b` = 3931, and so on to `9z` = 3955
  - `90` = 3956, `91` = 3957, and so on to `99` = 3965
  - `9-` = 3966, `9.` = 3967
  - `-A` = 3968, `-B` = 3969, and so on to `-Z` = 3993
  - `-a` = 3994, `-b` = 3995, and so on to `-z` = 4019
  - `-0` = 4020, `-1` = 4021, and so on to `-9` = 4029
  - `--` = 4030, `-.` = 4031
  - `.A` = 4032, `.B` = 4033, and so on to `.Z` = 4057
  - `.a` = 4058, `.b` = 4059, and so on to `.z` = 4083
  - `.0` = 4084, `.1` = 4085, and so on to `.9` = 4093
  - `.-` = 4094, .. = 4095


You can use the [JavaScript code](#javascript-encoding-script) to scale and encode an entire URL string.

#### Example


Equivalent to the text-encoded string `chd=t:90,1000,2700,3500|3968,-1,1100,250`:

![chart](https://image-charts.com/chart?chs=700x200&cht=bvs&chd=e:BaPoqM2s,-A__RMD6&chco=FFCC33,FFE9A4&chxt=y)

```
chd=e:BaPoqM2s,-A__RMD6
```

### JavaScript Encoding Script

For real-world use, it is probably easier to encode data programmatically rather than manually.

The following snippet of JavaScript encodes a single series into simple or extended encoding, and scales data values to fit within the complete range of that encoding. The data must be provided as an array of positive numbers. Any value provided that is not a positive number is encoded as a missing value by using the underscore character (\_).


```javascript
{!reference/Data_format/encoding.js!}
```

To encode data, call the simpleEncode or extendedEncode function, passing in the array which contains your data (valueArray), and the maximum value of your data (maxValue). To create some space between the highest value and the top of the chart, set maxValue to be larger than the largest number in the data array, as follows:

```javascript
var valueArray = [0,1,4,4,6,11,14,17,23,28,33,36,43,59,65];
var maxValue = 70;
simpleEncode(valueArray, maxValue); // s:ABDDFKMPUYdflz5
```
### Python Encoding Script

The following snippet of Python encodes a single series into extended encoding, and scales data values to fit within the complete range of that encoding. The data must be provided as an array of positive numbers. Any value provided that is not a positive number is encoded as a missing value by using the underscore character (\_).


```python
{!reference/Data_format/encoding.py!}
```

To encode data, call the extendedEncode function, passing in the array which contains your data (valueArray), and the maximum value of your data (maxValue). To create some space between the highest value and the top of the chart, set maxValue to be larger than the largest number in the data array, as follows:

```python
extendedEncode([90, 1000, 2700, 3500], 3500); // 'e:AAKpqmqm.5LtBfBzCcC-DgD1ElGSG6'
```
