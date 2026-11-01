---
title: Limits and Quotas on API Requests
description: "Limits brings reliability. Learn what Image-Charts API limits are."
sidebar_position: 17
---

# Limits and Quotas on API Requests

This document describes the limits and quotas of requesting the Image-Charts API.

Image-Charts is used by millions of sites. We put limits and quotas on chart generation requests to protect the system from receiving more data than it can handle, and to ensure an equitable distribution of the system resources. The limits and quotas are subject to change.


## General quota limits

The following quotas apply to Image-Charts API;

- 90 queries per 10 seconds per **IP address** (thus 9 queries per second (QPS))

:::tip
Please [contact our support team](mailto:support@image-charts.com) if you have special needs.
:::


## Free API usage quota limits

The following quotas apply to Image-Charts API calls without authentication (`ichm` and `icac`)

- 10 queries per 1 minute per **IP address**

:::tip
If you wish to get higher throughput [please subscribe](https://www.image-charts.com/pricing).
:::

## Exceeding quota limits

If the quota of requesting Image-Charts API is exceeded, the API returns an error code `429` and a message that the account has exceeded the quota. When the threshold is met, the client will be blocked **for 1 minute**.

## Chart complexity limits

The API limits how many series, points, axes, gradient stops, texts and ticks a chart can hold. A request over a limit gets:

- the `400` HTTP status code
- the `IS_VALIDATION_ERROR` [error code](/errors#error-codes) in the `x-ic-error-code` response header
- the reason in the `x-ic-error-validation` response header, as a JSON list of messages

The characters that these headers can hold are described in [error headers](/errors#error-headers).

A message names the limit that was exceeded and how to stay under it:

```
x-ic-error-code: IS_VALIDATION_ERROR
x-ic-error-validation: [{"message":"The chart has 1001 series, more than 1000. Merge some of them.","path":[],"context":{},"type":"IS_VALIDATION_ERROR"}]
```

### GET and POST /chart

`GET /chart` and `POST /chart` take the same parameters and apply the same limits.

| Parameter | Limit | How to stay under it |
|---|---|---|
| [`chd`](/reference/data-format) and [`chm`](/reference/markers) | At most 1,000 series. A `D` line marker of `chm` draws a series of its own and counts as one. | Merge series. |
| `chd` and `chm` | At most 10,080 points over all series. This is one week at one point per minute. | Aggregate or sample your data. |
| [`chtt`](/reference/chart-title), [`chdl`](/reference/legend-text-and-style), [`chl`](/reference/chart-label) and [`chxl`](/reference/chart-axis#custom-axis-labels) | At most 10,000 characters per text. Pipe characters separate the texts of one parameter. | Shorten the text. |
| [`chli`](/pie-charts) | At most 3,000 characters. | Shorten the text. |
| [`chxs`](/reference/chart-axis#axis-label-styles) and `chm` | At most 10,000 characters per number format. In `chxs` the format follows the `N` after the axis index. In `chm` it follows the `N` of an `N` marker. | Shorten the format. |
| `chm` | The last `N` marker of a series draws its text at each point of the series. The text, its `N` included, times the number of points of the series, added up over all series, is at most 500,000 characters. | Shorten the format, or send fewer points. |
| `chxs` | An axis draws its format at each tick. The format length times the number of ticks, added up over all axes, is at most 800,000 characters. An axis counts the ticks of its [`chxr`](/reference/chart-axis#axis-range) step, or 11 without a step. It counts at least as many ticks as the longest series has points or as `chxl` has labels, and at most 11,000. | Shorten the format, or send fewer points. |
| [`chxt`](/reference/chart-axis#visible-axes) | At most 100 axes. | Remove axes. |
| `chxs` | At most 100 styles, one per axis. | Style each axis once. |
| [`chf`](/reference/background-fill#gradient-fills) | At most 100 gradient stops, counted over all fills. A stop is one color and its anchor in an `lg` or `ls` fill. | Use fewer color stops. |
| [`chls`](/line-charts#line-styles) | On a line chart, the dash and the space of a dashed line average at least 1 pixel. | Lengthen the dash and the space. |
| `chls` | The thickness of a dashed line is at most twice the length of its dash plus its space. | Lengthen the dash and the space, or thin the line. |
| `chls` | The series drawn with a dashed line hold at most 1,000 points together. | Send fewer points, or leave out the dash and space lengths to draw solid lines. |
| [`chg`](/reference/grid-lines) | The dash and the space of a dashed grid average at least 1 pixel. | Lengthen the dash and the space. |

`chl` has no text limit on a [QR code](/qr-codes) or a [Graphviz chart](/graph-viz-charts). These charts read `chl` as their data.

Some examples of how to stay under a limit:

- An `N` marker whose text holds 51 characters, its `N` included, on a series of 10,000 points would draw 510,000 characters, so it is refused. A text of 50 characters draws exactly 500,000 characters and is accepted.
- A `chxs` format of 100 characters on a chart whose longest series holds 10,000 points would draw 1,000,000 characters. A format of 80 characters draws 800,000 and is accepted.
- `chls=10,1,1` is refused. A 10 pixel line needs a dash plus a space of at least 5 pixels. `chls=10,3,2` is accepted.

The messages of the axis and gradient limits read:

```
chxt lists 101 axes, more than 100. Remove axes.
chxs holds 101 styles, more than 100. Style each axis once.
chf holds 101 gradient stops, more than 100. Use fewer color stops.
```

### Graphviz charts

A [Graphviz chart](/graph-viz-charts) (`cht=gv`) has limits of its own on nodes, edges, image size and graph attributes.

They are the same on `GET /chart` and `POST /chart`. See [Graphviz limits](/graph-viz-charts#limits).

### GET /chart.js

These limits apply to the Chart.js configuration sent in the `c` (or `chart`) parameter. The limits of `width` and `height` are in [Chart size](/chart-js#chart-size). The limits on ticks are in [Axis ticks](/chart-js#axis-ticks).

| Configuration | Limit | How to stay under it |
|---|---|---|
| Nesting | Objects and arrays nest at most 64 levels below the root object. | Flatten the configuration. |
| `options.scales.xAxes` and `options.scales.yAxes` | At most 20 axes over both lists. | Remove axes, or share them between datasets. |
| `data.labels`, `data.xLabels` and `data.yLabels` | At most 10,000 labels in each list. | Aggregate the data into fewer labels. |
| `data.datasets` | At most 1,000 datasets. | Merge datasets. |
| `data` of the datasets | At most 10,000 points over all datasets. | Aggregate or sample the data. |
| Texts | At most 10,000 characters per text value, wherever it sits in the configuration. | Shorten the text. |
| `options.ic.insideLabel.text` | At most 3,000 characters. | Shorten the text. |
| `borderWidth`, `hoverBorderWidth`, `pointBorderWidth`, `pointHoverBorderWidth`, `lineWidth`, `zeroLineWidth`, `radius`, `hoverRadius`, `pointRadius` and `pointHoverRadius` | At most 50 pixels, wherever the option sits. When the value is a list or an object, each number in it is checked. | Lower the value. |
| `padding` | At most 100 pixels. | Lower the value. |
| `minRotation` and `maxRotation` | From -360 to 360 degrees. | Use an angle within one turn. |
| `borderDash` and `zeroLineBorderDash` | At most 16 entries. The entries average at least 1 pixel. | Use a shorter pattern, or lengthen its entries. |
| `borderDash` and `zeroLineBorderDash` | The line width is at most twice the length of the pattern. The length is the sum of the entries, counted twice for an odd number of entries. A line without a width counts as 3 pixels for a dataset line and 1 pixel for a grid line or an angle line. | Lengthen the pattern, or thin the line. |
| Datasets with a `borderDash` | The dashed datasets hold at most 1,000 points together. | Send fewer points, or draw the lines solid. |
| `datalabels` | At most 10 entries in `labels` per dataset. The entries of `options.plugins.datalabels.labels` count for every dataset, next to those of the dataset. | Name fewer labels. |
| `datalabels` with `display` set to `'auto'` | The number of points times the number of `labels` entries is at most 3,000 over all datasets. A dataset without `labels` entries counts one label per point. | Show fewer labels, or set `display` to `true`. |
| Radial scale (`options.scale`) | At most 1,000 labels when the scale displays its `angleLines` or its `pointLabels`. Each label draws a spoke. | Send fewer labels, or hide `angleLines` and `pointLabels`. |
| Radial scale (`options.scale`) | The rings (one per tick) times the spokes (one per label) make at most 100,000 corners, unless `gridLines.circular` is set. | Raise `ticks.stepSize`, send fewer labels, or set `gridLines.circular`. |

#### Data format

If the configuration has a `data` key, `data.datasets` must be a list of objects. The first dataset must hold a `data` array. Otherwise the answer is a `400` with the `IC_BAD_DATA_FORMAT` error code. A `null` `data` and a `null` dataset are refused this way.

#### Arrays

`data.labels`, `data.xLabels`, `data.yLabels`, `options.scales.xAxes`, `options.scales.yAxes` and the `data` of each dataset after the first must be JSON arrays. An object in their place is refused with the `IS_VALIDATION_ERROR` error code. So is any object that holds a key named `length`, wherever it sits in the configuration.
