---
meta_description: "Learn how to customize your chart label, from format to positionning."
---
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

[![chart](https://image-charts.com/chart?chan&chd=t%3A20%2C20%2C30%2C40%2C50&chf=b0%2Clg%2C0%2C8222ff%2C0%2Ceabfff%2C1&chl=20%C2%B0%7C20%C2%B0%7C30%C2%B0%7C40%C2%B0%7C50%C2%B0&chs=700x200&cht=p3&icac=documentation&icretina=1&ichm=097f8af92f9bd0835d92af69c6e95e39d80e02c23f93b0b828acf2e48236871f)](https://editor.image-charts.com/chart?chan&chd=t%3A20%2C20%2C30%2C40%2C50&chf=b0%2Clg%2C0%2C8222ff%2C0%2Ceabfff%2C1&chl=20%C2%B0%7C20%C2%B0%7C30%C2%B0%7C40%C2%B0%7C50%C2%B0&chs=700x200&cht=p3&icac=documentation&icretina=1&ichm=097f8af92f9bd0835d92af69c6e95e39d80e02c23f93b0b828acf2e48236871f)

```
cht=p3
chd=t:20,20,30,40,50
chl=20°|20°|30°|40°|50°
```

Same as the previous chart but this time as an animated donught chart.

[![chart](https://image-charts.com/chart?chan&chd=t%3A20%2C20%2C30%2C40%2C50&chl=20%C2%B0%7C20%C2%B0%7C30%C2%B0%7C40%C2%B0%7C50%C2%B0&chs=700x200&cht=pd&icac=documentation&icretina=1&ichm=969f404edef096ef8444d3bdbc36cfcc6b696bb9dc183bfe4c7ac1cde6d3e923)](https://editor.image-charts.com/chart?chan&chd=t%3A20%2C20%2C30%2C40%2C50&chl=20%C2%B0%7C20%C2%B0%7C30%C2%B0%7C40%C2%B0%7C50%C2%B0&chs=700x200&cht=pd&icac=documentation&icretina=1&ichm)

```
cht=pd
[...]
```

And now a concentric [pie charts](/pie-charts) with labels for each slices.

[![chart](https://image-charts.com/chart?chd=t%3A1%2C2%2C3%2C4%7C10%2C40%2C100%2C100&chl=A%7CB%7CC%7CD%7CE%7CF%7CG%7CH&chs=700x200&cht=pc&icac=documentation&icretina=1&ichm=f8661d028d4ba6ad6c4e7eeaa4e537670671bd267380447f84df31164eb60ed7)](https://editor.image-charts.com/chart?chd=t%3A1%2C2%2C3%2C4%7C10%2C40%2C100%2C100&chl=A%7CB%7CC%7CD%7CE%7CF%7CG%7CH&chs=700x200&cht=pc&icac=documentation&icretina=1&ichm=f8661d028d4ba6ad6c4e7eeaa4e537670671bd267380447f84df31164eb60ed7)


```
chs=700x200
chd=t:1,2,3,4|10,40,100,100
chl=A|B|C|D|E|F|G|H
```

Here is an example of a [line chart](/line-charts) with label on some points, to do that we skip label using `||`.

[![chart](https://image-charts.com/chart?chd=s%3Atheresadifferencebetweenknowingthepathandwalkingthepath&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&chl=Go%21%7C%7C%7C%7C%7C%7Coops%7C%7C%7C%7C%7C%7CYes%21%7C%7C%7C%7C%7C%7C%7C%7C%7Cnot%5Cnagain%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7Coh%20boy&chs=700x200&cht=ls&icac=documentation&icretina=1&ichm=0149fd972df42aac6fd484dbe1f99a2b0bf9c17181c22c4bc3c42a2fb99f7085)](https://editor.image-charts.com/chart?chd=s%3Atheresadifferencebetweenknowingthepathandwalkingthepath&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&chl=Go%21%7C%7C%7C%7C%7C%7Coops%7C%7C%7C%7C%7C%7CYes%21%7C%7C%7C%7C%7C%7C%7C%7C%7Cnot%5Cnagain%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7C%7Coh%20boy&chs=700x200&cht=ls&icac=documentation&icretina=1&ichm=0149fd972df42aac6fd484dbe1f99a2b0bf9c17181c22c4bc3c42a2fb99f7085)

```
chl=Go!||||||oops||||||Yes!|||||||||not\nagain||||||||||||||oh boy
```

A [bar chart](/bar-charts) with text inside each bar. Note that we only display the Y axis with `chxt=y`. Note that if `chxl` is not defined for the x axis but `chl` is, `chl` will be used instead.

[![chart](https://image-charts.com/chart?chd=t%3A50%2C30%2C10%2C60%2C65%2C90&chf=b0%2Clg%2C90%2C03a9f47C%2C0%2C3f51b57C%2C1&chg=20%2C50&chl=a%7Cb%7Cc%7Cd%7Ce%7Cf&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=bvg&chxt=y&icac=documentation&icretina=1&ichm=704f01a316bc1bfa5bc2fceac77cd6149fa7e27f47d79451acbd09c7d803880e)](https://editor.image-charts.com/chart?chd=t%3A50%2C30%2C10%2C60%2C65%2C90&chf=b0%2Clg%2C90%2C03a9f47C%2C0%2C3f51b57C%2C1&chg=20%2C50&chl=a%7Cb%7Cc%7Cd%7Ce%7Cf&chls=2.0%2C0.0%2C0.0&chs=700x200&cht=bvg&chxt=y&icac=documentation&icretina=1&ichm=704f01a316bc1bfa5bc2fceac77cd6149fa7e27f47d79451acbd09c7d803880e)

```
chxt=y
chl=a|b|c|d|e|f
```

A [bubble chart](/bubble-charts) with text inside each bubble.

[![chart](https://image-charts.com/chart?chd=t%3A10%2C10%2C30%2C_%2C30%2C40%2C35&chf=b0%2Clg%2C90%2C03a9f47C%2C0%2C3f51b57C%2C1&chg=20%2C50&chl=label%201%7Clabel%202&chls=2.0%2C0.0%2C0.0&chma=0%2C50%2C50&chs=700x300&cht=bb&chxt=y%2Cx&icac=documentation&icretina=1&ichm=071903076ad890952375878581704f2257fd23014a6b8d0b5f5d4c0391985d7e)](https://editor.image-charts.com/chart?chd=t%3A10%2C10%2C30%2C_%2C30%2C40%2C35&chf=b0%2Clg%2C90%2C03a9f47C%2C0%2C3f51b57C%2C1&chg=20%2C50&chl=label%201%7Clabel%202&chls=2.0%2C0.0%2C0.0&chma=0%2C50%2C50&chs=700x300&cht=bb&chxt=y%2Cx&icac=documentation&icretina=1&ichm=071903076ad890952375878581704f2257fd23014a6b8d0b5f5d4c0391985d7e)

```
cht=bb&
chl=label 1|label 2
```

## Positionning and formatting

Labels appearance (font color, font size) and position (anchoring, alignement, rotation) is fully and dynamically controllable.

#### Syntax

```
chlps=<option_name>,<option_value>|<option_name>,<option_value>|...
```



### Formatting

#### Text Color

Define the text color of each label with the `color` option. The example below defines a pink label color:

```
chlps=color,FF00FF
```

#### Font size

Define the font size of each label with `font.size`. The example below defines a font size of 15px:

```
chlps=font.size,15
```

#### Text Opacity

Define the opacity (between 0 and 1) of each label with `opacity`. The example below defines an opacity of 50%:

```
chlps=opacity,0.5
```

#### Top padding

Define the padding of each label with `padding.top`:

```
chlps=padding.top,10
```

#### Right padding

Define the padding of each label with `padding.right`:

```
chlps=padding.right,10
```

#### Bottom padding

Define the padding of each label with `padding.bottom`:

```
chlps=padding.bottom,10
```

#### Left padding

Define the padding of each label with `padding.left`:

```
chlps=padding.left,10
```

#### Text Stroke Color

Define the textStrokeColor of each label with `textStrokeColor`:

```
chlps=textStrokeColor,f7f7f7
```

#### Text Stroke Width

Define the textStrokeWidth of each label with `textStrokeWidth`:

```
chlps=textStrokeWidth,10
```

#### Text Shadow Blur

Define the textShadowBlur of each label with `textShadowBlur`:

```
chlps=textShadowBlur,10
```

#### Text Shadow Color

Define the textShadowColor of each label with `textShadowColor`:

```
chlps=textShadowColor,cecece
```

#### Background Color

Define the background color of each label with `backgroundColor`

```
chlps=backgroundColor,00FF00
```


#### Border color

Define the border color of each label with `borderColor`. The example below defines a green border around the label:

```
chlps=borderColor,00FF00
```

#### Border radius

Define the border radius of each label with `borderRadius`. The example below defines a 5px border radius around the label:

```
chlps=borderRadius,5
```

#### Border width

Define the border width of each label with `borderWidth`. The example below defines a 10px border width around the label:

```
chlps=borderWidth,10
```

#### Text alignement

The `textAlign` option only applies to multiline labels and specifies the text alignment being used when drawing the label text.

Supported values for `textAlign`:

- `'start'` (default): the text is left-aligned
- `'center'`: the text is centered
- `'end'`: the text is right-aligned
- `'left'`: alias of `'start'`
- `'right'`: alias of `'end'`

```
chlps=textAlign=center
```

### Positionning

#### Aglinement

The `align` option defines the position of the label relative to the anchor point position and orientation. Its value can be expressed either by a number representing the clockwise angle (in degree) or by one of the following string presets:

- `'center'` (default): the label is centered on the anchor point
- `'start'`: the label is positioned before the anchor point, following the same direction
- `'end'`: the label is positioned after the anchor point, following the same direction
- `'right'`: the label is positioned to the right of the anchor point (0°)
- `'bottom'`: the label is positioned to the bottom of the anchor point (90°)
- `'left'`: the label is positioned to the left of the anchor point (180°)
- `'top'`: the label is positioned to the top of the anchor point (270°)

```
chlps=align,top
```

#### Offset

The `offset` represents the distance (in pixels) to pull the label *away* from the anchor point. This option is **not applicable** when `align` is `'center'`. Also note that if `align` is `'start'`, the label is moved in the opposite direction. The default value is `4`.

```
chlps=offset,start
```

![image charts alignement and offset](https://i.imgur.com/VTJ0ldn.png)

#### Anchoring

An `anchor` option is defined by an orientation vector and a position on the data element. The orientation depends on the scale type (vertical, horizontal or radial). The position is calculated based on the `anchor` option and the orientation vector.

Supported values for `anchor`:
- `'center'` (default): element center
- `'start'`: lowest element boundary
- `'end'`: highest element boundary

```
chlps=anchor,start
```

![image charts  anchoring](https://i.imgur.com/hJpMkps.png)

#### Rotation

This option controls the clockwise rotation angle (in degrees) of the label, the rotation center point being the label center. The default value is `0` (no rotation).

```
chlps=rotation,4
```

#### Clamping

The `clamp` option, when `true`(or `1`), enforces the anchor position to be calculated based on the *visible geometry* of the associated element (i.e. part inside the chart area).

```
chlps=clamp,true
```

![image charts clamp](https://i.imgur.com/JSma3IC.png)


!!! tip
    If the element is fully hidden (i.e. entirely outside the chart area), anchor points will **not** be adjusted and thus will also be outside the viewport.

#### Clipping

When the `clip` option is `true` (or `1`), the part of the label which is outside the chart area will be masked.

```
chlps=clip,1
```

#### Visibility

The `display` option controls the visibility of labels and accepts the following values:

- `true` (default): the label is drawn
- `false`: the label is hidden

```
chlps=display,false
```
