All charts require the size to be specified. This parameter determines the total width and height of the chart image, including legends, margins, and titles. Legends, margins, and titles are clipped to fit within the total chart size.

Maximum chart size for all charts except maps is 998,001 pixels total (Google Image Charts was limited to 300,000), and maximum width or height is 999 pixels.

Values are integers.

#### Syntax


```
chs=<width>x<height>
```

- **`<width>`** width, in pixels. Maximum value is 999. Width x height cannot exceed 998,001.
- **`<height>`** height, in pixels. Maximum value is 999. Width x height cannot exceed 998,001.


#### Example

Here is a 700 pixel x 200 pixel chart.


![chart](https://image-charts.com/chart?cht=bvs&chd=s:theresadifferencebetweenknowingthepathandwalkingthepath&chs=700x200&chxt=y&chf=b0,lg,90,03a9f4,0,3f51b5,1)

```
chs=700x200
```

!!! info "Want high-resolution, retina-ready charts?"
    Enterprise+ subscriptions enable [high resolution](/reference/retina/) Image Chart.
