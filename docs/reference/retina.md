!!! note "Enterprise+ plan only"
    Retina support is only activable for Enterprise+ customers.

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


![chart](https://image-charts.com/chart?ichm=1cb6c47a7083c89618fe7b073cf5ce8a2c73665b72db2119b9dac434baeed8eb&cht=bvs&chd=s%3Atheresadifferencebetweenknowingthepathandwalkingthepath&chs=700x200&chxt=y&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&icretina=0&icac=fgribreau)

```
icretina=0
```

Here is a graph of 700 pixels x 200 pixels with retina, image output size as doubled and no pixel will be seen on retina displays.

![chart](https://image-charts.com/chart?ichm=eee5082545d27af84c7a3f2af95445080b1b1cc3b3d75a141af1d0c18a1fff27&cht=bvs&chd=s%3Atheresadifferencebetweenknowingthepathandwalkingthepath&chs=700x200&chxt=y&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&icretina=1&icac=fgribreau)

```
icretina=1
```
