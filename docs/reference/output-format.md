Unlike Google Image Charts API, the output format (`png` or `gif`) will not depends on the `chof` query parameter but instead on whether or not the chart is animated or not, see the [animation section](/reference/animation).

However we kept it because some software like Flowdock, Slack or Facebook messenger (and so on...) needs an URL that ends with a valid image extension file to display it as an image. So we recommend you to always use the `chof` parameter at the end the URL to support them. 
Valid values are:
- `.png` and `.svg` for [QR Codes](/qr-codes/#svg-format)
- `.png` and `.gif` for every other chart types


```
.../chart?chs=700x190&chd=t:60,40&cht=p3&chof=.png
```
