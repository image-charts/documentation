You can specify labels for individual slices (in pie, doughnut or polar chart) or bar using the `chl` parameter. You can also display a legend with the same or different values, one legend entry per slice. Use `\n` for multi-line labels.

!!! success "Who said we should just copy Google Image Charts?"
    Google Image Charts only supported `chl` parameter for pie chart slices.
    In Image-Charts we've extended support **for every one of our charts**, enjoy :+1::rocket:

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

![chart](https://image-charts.com/chart?cht=p3&chs=700x200&chd=t:20,20,30,40,50&chl=20°|20°|30°|40°|50°&chan)

```
cht=p3
chd=t:20,20,30,40,50
chl=20°|20°|30°|40°|50°
```

Same as the previous chart but this time as an animated donught chart.

![chart](https://image-charts.com/chart?cht=pd&chs=700x200&chd=t:20,20,30,40,50&chl=20°|20°|30°|40°|50°&chan)

```
cht=pd
[...]
```

And now a concentric [pie charts](/pie-charts) with labels for each slices.

![chart](https://image-charts.com/chart?cht=pc&chs=700x200&chd=t:1,2,3,4|10,40,100,100&chl=A|B|C|D|E|F|G|H)


```
chs=700x200
chd=t:1,2,3,4|10,40,100,100
chl=A|B|C|D|E|F|G|H
```

Here is an example of a [line chart](/line-charts) with label on some points, to do that we skip label using `||`.

![chart](https://image-charts.com/chart?cht=ls&chd=s:theresadifferencebetweenknowingthepathandwalkingthepath&chs=700x200&chf=b0,lg,90,03a9f4,0,3f51b5,1&chl=Go!||||||oops||||||Yes!|||||||||not\nagain||||||||||||||oh%20boy)

```
chl=Go!||||||oops||||||Yes!|||||||||not\nagain||||||||||||||oh boy
```

A [bar chart](/bar-charts) with text inside each bar. Note that we only display the Y axis with `chxt=y`.

![chart](https://image-charts.com/chart?cht=bvg&chd=t:50,30,10,60,65,90&chf=b0,lg,90,03a9f47C,0,3f51b57C,1&chls=2.0,0.0,0.0&chxt=y&chs=700x200&chg=20,50&chl=a|b|c|d|e|f)

```
chxt=y
chl=a|b|c|d|e|f
```

A [bubble chart](/bubble-charts) with text inside each bubble.

![chart](https://image-charts.com/chart?cht=bb&chd=t:10,10,30,_,30,40,35&chf=b0,lg,90,03a9f47C,0,3f51b57C,1&chls=2.0,0.0,0.0&chxt=y,x&chs=700x300&chg=20,50&chl=label%201|label%202&chma=0,50,50)

```
cht=bb&
chl=label 1|label 2
```
