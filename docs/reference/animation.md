Animated charts are awesome right? Sadly chart generated images are simple PNGs and our team at Image-Charts was quite sad with that status quo. But then we thought, why don't we generate animated gif? They will perfectly fit inside emails and IM bot and will give **the final wow effect everyone is waiting for**!

So we did it and we were like:

<center>
![woot](https://i.imgur.com/BQXuCnf.gif){style="width:200px;"}
</center>

#### Syntax

There are two ways to use the `chan` parameter.

The first one is to specify an empty value. The resulting chart will be an animated gif with default duration and easing parameters:

```
&chan
```

The other way is to specify `duration` and `easing`:

```
&chan=<duration>,<easing>
```
- **`duration_ms`** (optional) animation duration in milliseconds. The duration must be set between `10`ms and `1500`ms (1,5 seconds). Default value is `1200`ms (1,2 seconds).
- **`easing`** (optional) animation easing, it must be on of the following values (case-sensitive) `easeInQuad`, `easeOutQuad`, `easeInOutQuad`, `easeInCubic`, `easeOutCubic`, `easeInOutCubic`, `easeInQuart`, `easeOutQuart`, `easeInOutQuart`, `easeInQuint`, `easeOutQuint`, `easeInOutQuint`, `easeInSine`, `easeOutSine`, `easeInOutSine`, `easeInExpo`, `easeOutExpo`, `easeInOutExpo`, `easeInCirc`, `easeOutCirc`, `easeInOutCirc`, `easeInElastic`, `easeOutElastic`, `easeInOutElastic`, `easeInBack`, `easeOutBack`, `easeInOutBack`, `easeInBounce`, `easeOutBounce`, `easeInOutBounce`.

#### Examples

!!! tip
    If you missed the animation, copy the image URL, paste it into another tab and then hit reload any time you want to replay the gif animation.

Let's start with a simple chart that we animate just by adding `chan` to the URL:

[![chart](https://image-charts.com/chart?chan&chco=4ECDC4&chd=s%3AMonkeys&chs=700x200&cht=bvg&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=96c51e8a1cf970f0470c14612be4817347e4d173f532fd9164f87510ca89a291)](https://editor.image-charts.com/chart?chan&chco=4ECDC4&chd=s%3AMonkeys&chs=700x200&cht=bvg&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=96c51e8a1cf970f0470c14612be4817347e4d173f532fd9164f87510ca89a291)

```
/chart?cht=bvg&...&chan
```

The animation seems a little too slow, so let's specify a duration to 1,2 second (`1200`ms):

[![chart](https://image-charts.com/chart?chan=1200&chco=556270&chd=s%3AMonkeys&chs=700x200&cht=bvg&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=a8b723eebe0776dee64dd7928aa4c66b14f9cb328131d4e9ad87ab483abe4aef)](https://editor.image-charts.com/chart?chan=1200&chco=556270&chd=s%3AMonkeys&chs=700x200&cht=bvg&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=a8b723eebe0776dee64dd7928aa4c66b14f9cb328131d4e9ad87ab483abe4aef)

```
/chart?cht=bvg&...&chan=1200
```

That's better, now let's change the easing to `easeOutBack`:

[![chart](https://image-charts.com/chart?chan=1200%2CeaseOutBack&chco=C44D58&chd=s%3AMonkeys&chs=700x200&cht=bvg&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=3eb93f3b36aecd4c86a7543ed7bb982fbf62d5323eb99b81c881023c3842f08f)](https://editor.image-charts.com/chart?chan=1200%2CeaseOutBack&chco=C44D58&chd=s%3AMonkeys&chs=700x200&cht=bvg&chxt=x%2Cy&icac=fgribreau&icretina=1&ichm=3eb93f3b36aecd4c86a7543ed7bb982fbf62d5323eb99b81c881023c3842f08f)

```
/chart?cht=bvg&...&chan=1200,easeOutBack
```

Perfect!
