---
meta_description: "Image-charts API propose to customize your graphics as for example with retina. This documentation shows you how to use the API url parameters to generate a chart."
---
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
<img src="https://image-charts.com/chart?chan=&chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1&chl=2018%7C2017%7C2015&chs=700x300&cht=pa&chxt=x%2Cy&icac=documentation&ichm=d11aa35a3de75d815c293f31e2baa20e722928d42c4e477144780b94141aa8ea" srcset="https://image-charts.com/chart?chan=&chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1&chl=2018%7C2017%7C2015&chs=700x300&cht=pa&chxt=x%2Cy&icac=documentation&ichm=d11aa35a3de75d815c293f31e2baa20e722928d42c4e477144780b94141aa8ea 1x, https://image-charts.com/chart?chan=&chd=t%3A60%2C40%2C20&chdl=Image%7CCharts%7CRocks&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1&chl=2018%7C2017%7C2015&chs=700x300&cht=pa&chxt=x%2Cy&icac=documentation&icretina=1&ichm=7e98a359afb92c0bb1bd303719d0f859aac9e2390f70188938fa6f1bad3df496 2x" alt="My awesome chart">
```

:+1:
