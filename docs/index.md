---
meta_description: "📨 Embed charts in emails, pdf reports, blog post or markdown files. 1 url = 1 chart."
---
# Welcome to Image-Charts documentation

Welcome to the Image-charts developer hub. You'll find comprehensive guides and documentation to help you start working with Image-charts as quickly as possible, as well as support if you get stuck. Let's jump right in!

First you might want to start with the [getting started](#getting-started) guide and then take a look at Image-Charts API reference.

If you wonder what kind of charts Image-Charts can generate? Take a look at our [gallery](/gallery).

We are constantly updating Image-Charts, check out our [changelog](https://headwayapp.co/image-charts-changelog) for the latest updates.

Need any help? [Our community](https://stackoverflow.com/questions/tagged/image-charts) is there!

# Getting Started

The Image-Charts API returns a chart image in response to a URL GET or POST request. The API can generate many kinds of charts, from pie or line charts to bar charts and radars. All the information about the chart that you want, such as chart data, size, colors, and labels, are part of the URL. <!--(For POST requests, it's a little different, but don't worry about that now).-->

To make the simplest chart possible, all your URL needs to specify is the chart type, data, and size. You can type this URL directly in your browser, or point to it with an `<img>` tag in your web page. For example, follow this link for a pie chart:

<center>
[https://image-charts.com/chart?chs=700x190&chd=t:60,40&cht=p3&chl=Hello%7CWorld&chan&chf=...](https://image-charts.com/chart?chs=700x190&chd=t:60,40&cht=p3&chl=Hello%7CWorld&chan&chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1)
</center>


The preceding link is an example of a basic Chart API URL. All Chart URLs have the following format:

```
https://image-charts.com/chart
?cht=<chart_type>
&chd=<chart_data>
&chs=<chart_size>
&...additional_parameters...
```

All URLs start with `https://image-charts.com/chart?` followed by the parameters that specify chart data and appearance. Parameters are name=value pairs, separated by an ampersand character (`&`), and parameters can be in any order, after the `?`. All charts require at minimum the following parameters: `cht` (chart type), `chd` (data), and `chs` (chart size). However, there are many more parameters for additional options, and you can specify as many additional parameters as the chart supports.

Let's examine the URL above in more detail:

[![chart](https://image-charts.com/chart?chan&chd=t%3A60%2C40&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf44336%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C009688%2C1&chl=Hello%7CWorld&chs=700x190&cht=p3&icac=documentation&icretina=1&ichm=abebee2af2cf02e577c59bb8516fdabd6ad5e9ec95303e01c3f54f76895225c2)](https://editor.image-charts.com/chart?chan&chd=t%3A60%2C40&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf44336%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C009688%2C1&chl=Hello%7CWorld&chs=700x190&cht=p3&icac=documentation&icretina=1&ichm=abebee2af2cf02e577c59bb8516fdabd6ad5e9ec95303e01c3f54f76895225c2)

```
https://image-charts.com/chart
?cht=p3
&chs=700x100
&chd=t:60,40
&chl=Hello|World
&chan
&chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1
```

- **`https://image-charts.com/chart?`** This is the base URL for all chart requests. (However, see Improving Performance on Pages with Many Charts below for an optional variation for pages with multiple charts.)
- **`cht=p3`** The chart type: here, a 3D pie chart.
- **`chs=700x100`** The chart size (*width x height*), in pixels. <!-- See the maximum values here.-->
- **`chd=t:60,40`** The chart data. This data is in simple text format, but [there are other formats](/reference/data-format).
- **`chl=Hello|World`** The slice labels.
- **`chan`** [Animate the chart](/reference/animation), renders a gif
- **`chf=ps...`** Specify a linear gradient to each pie slice
- **`&`** Parameters are separated by an ampersand. **Note**: When embedding an URL in HTML, for example as the *src* attribute of an <img> tag, you should replace the **&** between parameters with the characters **&amp;** This includes when you generate page HTML with PHP or some other language. However, when typing a URL in the browser, or when *calling* a URL in code, for example when fetching a URL in PHP or Perl, you should use the **&** mark.


Copy and paste this URL in your browser and try making a few changes: add additional values to the data (don't forget to add a comma before each new data value). Add new labels (put a `|` mark before each new value). Make the chart bigger.
