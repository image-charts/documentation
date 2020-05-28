Image Chart API can generate multiple output image format.


!!! tip "Recommendation"
    Also Some software like Flowdock, Slack or Facebook messenger needs an URL **that ends** with a valid image extension file to display it as an image. Always explicitly set the `chof` parameter at the end of the URL to maximize your support of this kind of clients.

#### Syntax

```
chof=.png
``` 


#### Related

Output image format depends on the kind of chart generated.

- [QR Codes output format](../qr-codes.md#output-format)
- [GraphViz output format](../graph-viz-charts.md#output-format)
- [Other charts output format](#other-charts-output-format)

#### Other charts output format

Other chart types like bar, line, pie charts do not depends on `chof` value and will output chart image in `png` format.

#### Animated charts with `chan`

If the `chan` [animated chart]((/reference/animation) parameter is used, no matter the value of `chof` the output format will always be a `gif`. Some email and chat clients might still need the `&chof=.gif` at the end of the URL to interpret it as an image.

The output format (`png` or `gif`) will not depends on the `chof` query parameter but instead on whether or not the chart is animated or not, see the [animation section](/reference/animation).



```
.../chart?chs=700x190&chd=t:60,40&cht=p3&chof=.png
```
