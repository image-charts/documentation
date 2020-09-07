!!! info "Enterprise+ subscription only"
    Retina support is only enabled in **Enterprise+** subscriptions

#### Retina displays

Retina is a marketing term coined by Apple that refers to devices and monitors that have a resolution and pixel density so high — roughly 300 or more pixels per inch – that a person is unable to discern the individual pixels at a normal viewing distance.

In order to generate beautiful charts for these Retina displays, Image-Charts supports a retina mode that can be activated through the `icretina=1` parameter. If the chart URL contains `icretina=1` parameter, the generated chart output will have its `width` and `height` size doubled.

#### Syntax

```
icretina=<retina_activation>
```

- **`<retina_activation>`** set to `1` to activate retina mode and double image size.

#### Example

Here is a graph of 700 pixels x 200 pixels without retina


![chart](https://image-charts.com/chart?chd=s%3Atheresadifferencebetweenknowingthepathandwalkingthepath&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&chs=700x200&cht=bvs&icac=documentation&icretina=0&ichm=34d089caad211c330bd64d5a2788f88f580f11534e014962bba30297bee668f2)

```
icretina=0
```

Here is a graph of 700 pixels x 200 pixels with retina, image output size as doubled and no pixel will be seen on retina displays.

![chart](https://image-charts.com/chart?chd=s%3Atheresadifferencebetweenknowingthepathandwalkingthepath&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&chs=700x200&cht=bvs&icac=documentation&icretina=1&ichm=ae142c920ce8b36c3ac13841160536cbe1f5de1e1cf1869975cbe556d3b2439c)

```
icretina=1
```


### Usage with `srcset`

The ideal solution is to send the high-resolution image chart version to devices that can use them, while maintaining a standard resolution for others, thus reducing bandwidth usage. The `srcset` HTML attribute with the x designator does just that and here is the basic idea:

```
<img src="image-charts-url.jpg" srcset="image-charts-url.jpg 1x, image-charts-url-with-icretina.jpg 2x" alt="My awesome chart">
```

- `image-charts-url.jpg` will be loaded on usual, standard-resolution device
- `image-charts-url-with-icretina.jpg` will be loaded on high-resolution device (e.g. Retina devices)

Considering that Image-Charts does not requires us to store our own image for our own good (it leverages word-wide CDNs), let's change this example to a more production-ready one:

```
<img src="https://image-charts.com/chart?ichm=68c82618eccc2f0a861473ef93e978beb0b018a3ce2c2b4b609aec1b2726090c&chs=700x300&chxt=x,y&chl=2018|2017|2015&chd=t:60,40,20&cht=pa&chdl=Image|Charts|Rocks&chf=ps0-0,lg,45,ffeb3b,0.2,f443367C,1|ps0-1,lg,45,8bc34a,0.2,0096887C,1|ps0-2,lg,45,EA469E,0.2,03A9F47C,1&chan=&icac=fgribreau" srcset="https://image-charts.com/chart?ichm=68c82618eccc2f0a861473ef93e978beb0b018a3ce2c2b4b609aec1b2726090c&chs=700x300&chxt=x,y&chl=2018|2017|2015&chd=t:60,40,20&cht=pa&chdl=Image|Charts|Rocks&chf=ps0-0,lg,45,ffeb3b,0.2,f443367C,1|ps0-1,lg,45,8bc34a,0.2,0096887C,1|ps0-2,lg,45,EA469E,0.2,03A9F47C,1&chan=&icac=fgribreau 1x, https://image-charts.com/chart?ichm=f3df2861ceb282159805fccea15767e82bf1e4f23b88b3da4b6d3ad3fc6f6ee9&chs=700x300&chxt=x,y&chl=2018|2017|2015&chd=t:60,40,20&cht=pa&chdl=Image|Charts|Rocks&chf=ps0-0,lg,45,ffeb3b,0.2,f443367C,1|ps0-1,lg,45,8bc34a,0.2,0096887C,1|ps0-2,lg,45,EA469E,0.2,03A9F47C,1&chan=&icretina=1&icac=fgribreau 2x" alt="My awesome chart">
```

:+1:
