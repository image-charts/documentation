---
title: Animated Chart GIFs from a URL (chan parameter)
sidebar_label: Animation
description: "Turn any chart URL into an animated GIF by adding &chan. Set duration (10–1500 ms) and one of 30 easings. Works on bar, line, pie, radar, polar and bubble charts, on every plan."
sidebar_position: 4
---

# Animated chart GIFs

Add `&chan` to an Image-Charts URL and the API returns an animated GIF instead of a PNG: the bars grow, the lines draw, the pie slices open, then the GIF stops on the finished chart. A GIF plays where JavaScript cannot run, so the animation still works in emails, Slack and Microsoft Teams messages, chat bots and PDF-free reports.

<img src="https://i.imgur.com/BQXuCnf.gif" alt="Animated reaction GIF of a person cheering" style={{width: '200px'}} />

## How do I make an animated chart GIF?

Take a working chart URL and append `&chan`:

```
https://image-charts.com/chart?cht=bvg&chs=700x200&chd=t:10,40,25,60&chan
```

That is the whole change. The response switches to `Content-Type: image/gif` and uses the default animation: 1200 ms with the default easing. To control it, pass a duration and an easing: `&chan=1500,easeOutBounce`.

Animated charts are part of every plan, the free one included (the free plan adds the small `image-charts.com` watermark, as on any chart). See [pricing](https://www.image-charts.com/pricing).

## Syntax

```
&chan
&chan=<duration_ms>
&chan=<duration_ms>,<easing>
```

| Parameter | Type | Accepted values | Default |
|---|---|---|---|
| `duration_ms` | integer, milliseconds | `10` to `1500` | `1200` |
| `easing` | string, case-sensitive | one of the 30 easing names below | built-in default curve |

- **`duration_ms`** (optional): how long the bars, lines or slices take to reach their final value. Keep it between `10` and `1500`: `1500` is the documented maximum. The API does not reject a larger number, but do not rely on it.
- **`easing`** (optional): the speed curve of the animation. It must be one of these values, written exactly like this:

| Family | In | Out | In and out |
|---|---|---|---|
| Quad | `easeInQuad` | `easeOutQuad` | `easeInOutQuad` |
| Cubic | `easeInCubic` | `easeOutCubic` | `easeInOutCubic` |
| Quart | `easeInQuart` | `easeOutQuart` | `easeInOutQuart` |
| Quint | `easeInQuint` | `easeOutQuint` | `easeInOutQuint` |
| Sine | `easeInSine` | `easeOutSine` | `easeInOutSine` |
| Expo | `easeInExpo` | `easeOutExpo` | `easeInOutExpo` |
| Circ | `easeInCirc` | `easeOutCirc` | `easeInOutCirc` |
| Elastic | `easeInElastic` | `easeOutElastic` | `easeInOutElastic` |
| Back | `easeInBack` | `easeOutBack` | `easeInOutBack` |
| Bounce | `easeInBounce` | `easeOutBounce` | `easeInOutBounce` |

`In` curves start slowly and speed up, `Out` curves start fast and slow down at the end, `In and out` do both. `Back` overshoots the final value a little, `Elastic` wobbles around it and `Bounce` bounces on it.

## Examples

:::tip
A chart GIF plays once and then stays on the final frame. If you missed the animation, open the image in a new tab and reload it to replay it.
:::

### Bar chart: default animation

Start with a bar chart and add `chan` to the URL:

[![Animated bar chart GIF with teal bars growing from the x axis](https://image-charts.com/chart?chan&chco=4ECDC4&chd=s%3AMonkeys&chs=700x200&cht=bvg&chxt=x%2Cy&icac=documentation&ichm=cd9837d3c8e924d435bac9c957de2ea26e74818d5cae9b6c856d2358d16e69b7)](https://editor.image-charts.com/chart?chan&chco=4ECDC4&chd=s%3AMonkeys&chs=700x200&cht=bvg&chxt=x%2Cy&icac=documentation&ichm=cd9837d3c8e924d435bac9c957de2ea26e74818d5cae9b6c856d2358d16e69b7)

```
/chart?cht=bvg&...&chan
```

### Bar chart: explicit duration

Write the duration in the URL when you want it fixed in your code rather than relying on the default. Here `1200` ms (1.2 seconds):

[![Animated bar chart GIF with grey bars growing over 1.2 seconds](https://image-charts.com/chart?chan=1200&chco=556270&chd=s%3AMonkeys&chs=700x200&cht=bvg&chxt=x%2Cy&icac=documentation&icretina=1&ichm=348b3014785554ef5dcff7db4d7794986ceced1a488c750af5762d0e5551ef2a)](https://editor.image-charts.com/chart?chan=1200&chco=556270&chd=s%3AMonkeys&chs=700x200&cht=bvg&chxt=x%2Cy&icac=documentation&icretina=1&ichm=348b3014785554ef5dcff7db4d7794986ceced1a488c750af5762d0e5551ef2a)

```
/chart?cht=bvg&...&chan=1200
```

### Bar chart: duration and easing

Now change the easing to `easeOutBack`, so the bars overshoot slightly before settling:

[![Animated bar chart GIF with red bars that overshoot then settle, easeOutBack easing](https://image-charts.com/chart?chan=1200%2CeaseOutBack&chco=C44D58&chd=s%3AMonkeys&chs=700x200&cht=bvg&chxt=x%2Cy&icac=documentation&icretina=1&ichm=8bff0f6f95054317410ddb7691729e8ad52ee368cd37234c2a93a17b67e94aba)](https://editor.image-charts.com/chart?chan=1200%2CeaseOutBack&chco=C44D58&chd=s%3AMonkeys&chs=700x200&cht=bvg&chxt=x%2Cy&icac=documentation&icretina=1&ichm=8bff0f6f95054317410ddb7691729e8ad52ee368cd37234c2a93a17b67e94aba)

```
/chart?cht=bvg&...&chan=1200,easeOutBack
```

### Line chart

Lines draw from left to right. Learn more in [line charts](/line-charts/).

[![Animated line chart GIF with an orange and a blue line drawn from left to right](https://image-charts.com/chart?chan&chco=fdb45c%2C1869b7&chd=s%3A93zyvneTTOMJMLIJFHEAECFJGHDBFCFIERcgnpy45879%2CIJKNUWUWYdnswz047977315533zy1246872tnkgcaZQONHCECAAAAEII&chls=4%7C2&chs=700x126&cht=lc&icac=documentation&icretina=1&ichm=cd0451481d98eb31483cee5f28c4e4a9e71a254754dad96dc47f6b8f32760660)](https://editor.image-charts.com/chart?chan&chco=fdb45c%2C1869b7&chd=s%3A93zyvneTTOMJMLIJFHEAECFJGHDBFCFIERcgnpy45879%2CIJKNUWUWYdnswz047977315533zy1246872tnkgcaZQONHCECAAAAEII&chls=4%7C2&chs=700x126&cht=lc&icac=documentation&icretina=1&ichm=cd0451481d98eb31483cee5f28c4e4a9e71a254754dad96dc47f6b8f32760660)

```
/chart?cht=lc&...&chan
```

### 3D pie chart

[![Animated 3D pie chart GIF with two gradient slices labelled Hello and World](https://image-charts.com/chart?chan&chd=t%3A60%2C40&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf44336%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C009688%2C1&chl=Hello%7CWorld&chs=700x190&cht=p3&icac=documentation&icretina=1&ichm=abebee2af2cf02e577c59bb8516fdabd6ad5e9ec95303e01c3f54f76895225c2)](https://editor.image-charts.com/chart?chan&chd=t%3A60%2C40&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf44336%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C009688%2C1&chl=Hello%7CWorld&chs=700x190&cht=p3&icac=documentation&icretina=1&ichm=abebee2af2cf02e577c59bb8516fdabd6ad5e9ec95303e01c3f54f76895225c2)

```
/chart?cht=p3&...&chan
```

### Doughnut chart with bounce easing

The `easeOutBounce` easing also applies to the label in the middle of the doughnut. Learn more in [pie charts](/pie-charts/).

[![Animated doughnut chart GIF of expenses with a bouncing centre label, easeOutBounce easing](https://image-charts.com/chart?chan=1500%2CeaseOutBounce&chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chf=b0%2Clg%2C90%2C68cefd%2C0%2C96a6ff%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K%E2%82%AC&chli=95K%E2%82%AC&chs=700x300&cht=pd&chtt=Expenses&icac=documentation&icretina=1&ichm=4b74970b9927cb89b3d4637e375aa5fd1ec29a263616a52b12315045f336f478)](https://editor.image-charts.com/chart?chan=1500%2CeaseOutBounce&chd=t%3A10%2C40%2C45&chdl=Expansion%7CPayroll%7CEquipment&chf=b0%2Clg%2C90%2C68cefd%2C0%2C96a6ff%2C1&chl=10K%E2%82%AC%7C40K%E2%82%AC%7C45K%E2%82%AC&chli=95K%E2%82%AC&chs=700x300&cht=pd&chtt=Expenses&icac=documentation&icretina=1&ichm=4b74970b9927cb89b3d4637e375aa5fd1ec29a263616a52b12315045f336f478)

```
/chart?cht=pd&...&chan=1500,easeOutBounce
```

### Polar area chart

Learn more in [polar charts](/polar-charts/).

[![Animated polar area chart GIF with three gradient slices](https://image-charts.com/chart?chan&chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1&chs=700x200&cht=pa&chxt=x%2Cy&icac=documentation&icretina=1&ichm=0e3d216ea7cffd4a1391de962b13d67f7bd24507e4423ffd62d4e93530065ef1)](https://editor.image-charts.com/chart?chan&chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1&chs=700x200&cht=pa&chxt=x%2Cy&icac=documentation&icretina=1&ichm=0e3d216ea7cffd4a1391de962b13d67f7bd24507e4423ffd62d4e93530065ef1)

```
/chart?cht=pa&...&chan
```

### Bubble chart

Learn more in [bubble charts](/bubble-charts/).

[![Animated bubble chart GIF with purple and green bubbles bouncing into place](https://image-charts.com/chart?chan=1500%2CeaseOutBounce&chco=7059EF%7C0CE858&chd=t%3A40%2C60%2C10%2C_%2C47%2C40%2C12%2C_%2C10%2C10%2C20%2C_%2C20%2C40%2C40%7C50%2C30%2C5%2C_%2C20%2C20%2C6%2C_%2C5%2C5%2C10%2C_%2C15%2C20%2C20&chma=0%2C0%2C20&chs=700x300&cht=bb&chxt=x%2Cy&icac=documentation&ichm=39a81279e88bdb8e46953b301664dcc5279f17ae23ed8364b68cc697dbfc8b73)](https://editor.image-charts.com/chart?chan=1500%2CeaseOutBounce&chco=7059EF%7C0CE858&chd=t%3A40%2C60%2C10%2C_%2C47%2C40%2C12%2C_%2C10%2C10%2C20%2C_%2C20%2C40%2C40%7C50%2C30%2C5%2C_%2C20%2C20%2C6%2C_%2C5%2C5%2C10%2C_%2C15%2C20%2C20&chma=0%2C0%2C20&chs=700x300&cht=bb&chxt=x%2Cy&icac=documentation&ichm=39a81279e88bdb8e46953b301664dcc5279f17ae23ed8364b68cc697dbfc8b73)

```
/chart?cht=bb&...&chan=1500,easeOutBounce
```

## Which charts can be animated?

| Chart | `cht` values | Animated with `chan` |
|---|---|---|
| [Bar charts](/bar-charts/) | `bvs`, `bvg`, `bhs`, `bhg`, `bvo` | yes |
| [Line charts](/line-charts/) | `lc`, `ls`, `lxy` | yes |
| [Pie and doughnut charts](/pie-charts/) | `p`, `p3`, `pc`, `pd` | yes |
| [Polar area charts](/polar-charts/) | `pa` | yes |
| [Radar charts](/radar-charts/) | `r` | yes |
| [Bubble charts](/bubble-charts/) | `bb` | yes |
| [QR codes](/qr-codes/) | `qr` | no, `chan` is ignored and the output stays a PNG |
| [GraphViz charts](/graph-viz-charts/) | `gv`, `gv:*` | no, see [known limitations](/graph-viz-charts/#known-limitations) |

## How the GIF behaves

- **Output format**: an animated chart is always a GIF, whatever the value of `chof`. See [output format](/reference/output-format/#animated-charts-with-chan).
- **Plays once**: the GIF does not loop. It runs the animation once and then keeps the final chart on screen, so the reader ends on the real numbers.
- **Frame delay**: frames are 30 ms apart.
- **Size**: a GIF weighs more than the same chart as a PNG. On a 300×150 bar chart we measured about 200 KB with `&chan` against under 3 KB for the PNG. Bigger charts and [retina](/reference/retina/) output (`icretina=1`) make bigger files, so pick the smallest `chs` that reads well.
- **Errors**: an unknown easing, or one with the wrong case (`easeoutback`), returns HTTP `400` with the `IS_VALIDATION_ERROR` code. See [errors](/errors/).

## GIF charts in emails and chat

An animated chart is a plain image, so it goes anywhere an HTML image tag goes:

```html
<img alt="Monthly sign-ups, bar chart" width="600" height="250" src="https://image-charts.com/chart?cht=bvg&chs=600x250&chd=t:10,40,25,60&chan=1200,easeOutQuad&chof=.gif">
```

- **Add `&chof=.gif` at the end of the URL** for email and chat clients that decide whether a link is an image by looking at its extension. It changes nothing on our side, the output is a GIF anyway.
- **Outlook for Windows**: some desktop versions do not play GIF animations and show only the first frame. Since the first frame of a chart animation is close to empty, send the static chart (the same URL without `chan`) to audiences that mostly read their mail in desktop Outlook.
- **Set `width`, `height` and `alt`** on the image tag: email clients that block images then reserve the space and show the text.
- **Slack, Microsoft Teams and bots**: post the URL as an image attachment. See [send charts to Slack](/guides/send-charts-to-slack/).
- **Signed URLs**: on paid plans, sign the URL with `chan` included, like any other parameter. See [enterprise](/enterprise/).

## Coming from Google Image Charts?

Google Image Charts never had animated output and has been shut down. Once you have switched your URLs to Image-Charts by changing the host (see [migrating from Google Image Charts](https://www.image-charts.com/migrating-from-google-image-charts)), add `&chan` to any of them to get the animated version.

## FAQ

### Is `chan` available on the free plan?

Yes. Animated GIF charts work on Free, Business and Enterprise. The free plan adds the same watermark as on PNG charts.

### Can the GIF loop forever?

No. A chart GIF plays once and stops on the final chart. Reloading the image plays it again.

### Can I make the animation longer than 1.5 seconds?

No. `1500` ms is the longest documented duration.

### Why is my chart still a PNG?

Check that `chan` is really in the final query string (if a URL builder in your code drops empty values, write `chan=1200` instead of `chan`), and that the chart type supports animation (QR codes and GraphViz charts do not).
