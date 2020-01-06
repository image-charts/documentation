You can specify labels for individual slices (in bar, pie, doughnut or polar chart) or bar using the `chl` parameter. You can also display a legend with the same or different values, one legend entry per slice. Use `\n` for multi-line labels.

!!! note "A Note on String Values"
    Only URL-safe characters are permitted in label strings. To be safe, you should URL-encode any strings containing characters not in the character set `0-9a-zA-Z`.

#### Syntax

```
chl=
  <label_value>|
    ...
  <label_value>
```

- **`<label_value>`** A string value to apply to a **slice** or **bar**. Labels are applied consecutively to the data points in `chd`. If you have multiple series (for a concentric pie chart, for example), labels are applied to all points in all sequences, in the order specified in `chd`. Use a pipe delimiter ( `|` ) between each label. Specify a missing intervening value by using two consecutive pipe characters with no space between them: `||` . You do not need to label all slices.

#### Examples

Let specify labels for a simple animated pie chart.

[![chart](https://image-charts.com/chart?chan&chd=t%3A20%2C20%2C30%2C40%2C50&chf=b0%2Clg%2C0%2C8222ff%2C0%2Ceabfff%2C1&chl=20%C2%B0%7C20%C2%B0%7C30%C2%B0%7C40%C2%B0%7C50%C2%B0&chs=700x200&cht=p3&icac=fgribreau&icretina=1&ichm=0950432c7209bf892580f8ae81cf38689a4982bcd6c331b10226346ab1ad17fe)](https://editor.image-charts.com/chart?chan&chd=t%3A20%2C20%2C30%2C40%2C50&chf=b0%2Clg%2C0%2C8222ff%2C0%2Ceabfff%2C1&chl=20%C2%B0%7C20%C2%B0%7C30%C2%B0%7C40%C2%B0%7C50%C2%B0&chs=700x200&cht=p3&icac=fgribreau&icretina=1&ichm=0950432c7209bf892580f8ae81cf38689a4982bcd6c331b10226346ab1ad17fe)

```
cht=p3
chd=t:20,20,30,40,50
chl=20°|20°|30°|40°|50°
```

Same as the previous chart but this time as an animated donught chart.

[![chart](https://image-charts.com/chart?chan&chd=t%3A20%2C20%2C30%2C40%2C50&chl=20%C2%B0%7C20%C2%B0%7C30%C2%B0%7C40%C2%B0%7C50%C2%B0&chs=700x200&cht=pd&icac=fgribreau&icretina=1&ichm=8178d0498c669a8ddc6211025963e23d770f3986fd47a1bd9c9660f95478717e)](https://editor.image-charts.com/chart?chan&chd=t%3A20%2C20%2C30%2C40%2C50&chl=20%C2%B0%7C20%C2%B0%7C30%C2%B0%7C40%C2%B0%7C50%C2%B0&chs=700x200&cht=pd&icac=fgribreau&icretina=1&ichm=8178d0498c669a8ddc6211025963e23d770f3986fd47a1bd9c9660f95478717e)

```
cht=pd
[...]
```

And now a concentric [pie charts](/pie-charts) with labels for each slices.

[![chart](https://image-charts.com/chart?chd=t%3A1%2C2%2C3%2C4%7C10%2C40%2C100%2C100&chl=A%7CB%7CC%7CD%7CE%7CF%7CG%7CH&chs=700x200&cht=pc&icac=fgribreau&icretina=1&ichm=9df6b979fa91e13a24e8fb09b9f02ce51338499090e612612c13f502a6346bf0)](https://editor.image-charts.com/chart?chd=t%3A1%2C2%2C3%2C4%7C10%2C40%2C100%2C100&chl=A%7CB%7CC%7CD%7CE%7CF%7CG%7CH&chs=700x200&cht=pc&icac=fgribreau&icretina=1&ichm=9df6b979fa91e13a24e8fb09b9f02ce51338499090e612612c13f502a6346bf0)


```
chs=700x200
chd=t:1,2,3,4|10,40,100,100
chl=A|B|C|D|E|F|G|H
```

Here is an example of a [line chart](/line-charts) with label on some points, to do that we skip label using `||`.

[![chart](https://image-charts.com/chart?chd=s%3Atheresadifferencebetweenknowingthepathandwalkingthepath&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&chl=Go%21%7C%7C%7C%7C%7C%7Coops%7C%7C%7C%7C%7C%7CYes%21%7C%7C%7C%7C%7C%7C%7C%7C%7Cnot%5Cnagain%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7Coh%20boy&chs=700x200&cht=ls&icac=fgribreau&icretina=1&ichm=32ef0da651fe54759491ad3ad03bd7d4bc011e99f8c08c2cad241ed8f05ca5b8)](https://editor.image-charts.com/chart?chd=s%3Atheresadifferencebetweenknowingthepathandwalkingthepath&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&chl=Go%21%7C%7C%7C%7C%7C%7Coops%7C%7C%7C%7C%7C%7CYes%21%7C%7C%7C%7C%7C%7C%7C%7C%7Cnot%5Cnagain%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7Coh%20boy&chs=700x200&cht=ls&icac=fgribreau&icretina=1&ichm=32ef0da651fe54759491ad3ad03bd7d4bc011e99f8c08c2cad241ed8f05ca5b8)

```
chl=Go!||||||oops||||||Yes!|||||||||not\nagain||||||||||||||oh boy
```

A [bar chart](/bar-charts) with text inside each bar. Note that we only display the Y axis with `chxt=y`. Note that if `chxl` is not defined for the x axis but `chl` is, `chl` will be used instead.

[![chart](https://image-charts.com/chart?chd=t%3A50%2C30%2C10%2C60%2C65%2C90&chf=b0%2Clg%2C90%2C03a9f47C%2C0%2C3f51b57C%2C1&chg=20%2C50&chl=a%7Cb%7Cc%7Cd%7Ce%7Cf&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=bvg&chxt=y&icac=fgribreau&icretina=1&ichm=6eb3331c5100571adc7b83d7f9d2ac2fef7df98b49696d0a9c33e0c74a21bda5)](https://editor.image-charts.com/chart?chd=t%3A50%2C30%2C10%2C60%2C65%2C90&chf=b0%2Clg%2C90%2C03a9f47C%2C0%2C3f51b57C%2C1&chg=20%2C50&chl=a%7Cb%7Cc%7Cd%7Ce%7Cf&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=bvg&chxt=y&icac=fgribreau&icretina=1&ichm=6eb3331c5100571adc7b83d7f9d2ac2fef7df98b49696d0a9c33e0c74a21bda5)

```
chxt=y
chl=a|b|c|d|e|f
```

A [bubble chart](/bubble-charts) with text inside each bubble.

[![chart](https://image-charts.com/chart?chd=t%3A10%2C10%2C30%2C_%2C30%2C40%2C35&chf=b0%2Clg%2C90%2C03a9f47C%2C0%2C3f51b57C%2C1&chg=20%2C50&chl=label%201%7Clabel%202&chls=2.0%2C0.0%2C0.0&chma=0%2C50%2C50&chs=700x300&cht=bb&chxt=y%2Cx&icac=fgribreau&icretina=1&ichm=c0a668b1b1cf089921a0fc3b563cf679677b02edd40936fea75d6566d1f8369c)](https://editor.image-charts.com/chart?chd=t%3A10%2C10%2C30%2C_%2C30%2C40%2C35&chf=b0%2Clg%2C90%2C03a9f47C%2C0%2C3f51b57C%2C1&chg=20%2C50&chl=label%201%7Clabel%202&chls=2.0%2C0.0%2C0.0&chma=0%2C50%2C50&chs=700x300&cht=bb&chxt=y%2Cx&icac=fgribreau&icretina=1&ichm=c0a668b1b1cf089921a0fc3b563cf679677b02edd40936fea75d6566d1f8369c)

```
cht=bb&
chl=label 1|label 2
```
