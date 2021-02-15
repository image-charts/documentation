---
meta_description: "Progress bar charts as image using Image-charts API. Generate progress bar images in email based on your customer behaviour."
---

# Progress bar chart

This section describes how to create a progress bar chart using the Image-Chart API.  Progress bar are excellent to show the progress of something associated with your customer, your product or anything else. We have made it really easy to setup.

If you are already sending email including progress bars, but it takes a lot of resource to build and is not live, or, if you've thinking of ways to include a progress bar in your email - this is the solution.

## Overview

Progress bars are a great way to show a customer the status of their loyalty points live via email.

#### Simple

Progress bars are nothing else that horizontal [bar charts](./bar-charts.md) with negative [margins](./reference/chart-margin.md) (`left_margin`: -10px, `bottom_margin`: -10px):

```
chma=-10,0,0,-10
```

The chart below displays a 65% completion. The white part has 35% width:

```
chd=a:65|35
```


[![progress bar image with linear gradient](https://image-charts.com/chart?chco=3B5F92%2CFFFFFF&chd=a%3A65%7C35&chf=bg%2Cs%2CFFFFFF00%7Cb0%2Clg%2C0%2C0CE858%2C0.9%2C05B142%2C0.2&chma=-10%2C0%2C0%2C-10&chs=700x80&cht=bhs&chxs=0%2CFFFFFF00%2C0%2C-1%2C_%2CFFFFFF00%2CFFFFFF00%7C1%2CFFFFFF00%2C0%2C-1%2C_%2CFFFFFF00%2CFFFFFF00&chxt=x%2Cy)](https://editor.image-charts.com/chart?chco=3B5F92%2CFFFFFF&chd=a%3A65%7C35&chf=bg%2Cs%2CFFFFFF00%7Cb0%2Clg%2C0%2C0CE858%2C0.9%2C05B142%2C0.2&chma=-10%2C0%2C0%2C-10&chs=700x80&cht=bhs&chxs=0%2CFFFFFF00%2C0%2C-1%2C_%2CFFFFFF00%2CFFFFFF00%7C1%2CFFFFFF00%2C0%2C-1%2C_%2CFFFFFF00%2CFFFFFF00&chxt=x%2Cy)


#### Gradient background

Of course we might want to display some progress from a bad state to a good state and express this with color. We can then leverage [gradients](./reference/background-fill.md) to do that:

```
chf=bg,s,FFFFFF00|b0,lg,0,03A9F4,0.5,EA469E,0.1
```

- The first background fill `bg,s,FFFFFF00` tells our API to render the chart with a transparent background color.
- The second background fill `b0,lg,0,03A9F4,0.5,EA469E,0.1`, tells that the first bar from our chart (`b0`), must have a linear gradient (`lg`) with a 0 degres angle (`0`) starting from color `03A9F4` to color `EA469E`. Read more about [gradients here](./reference/background-fill.md). 

[![progressbar image with gradient](https://image-charts.com/chart?chco=FFFFFF&chd=a%3A65%7C35&chf=bg%2Cs%2CFFFFFF00%7Cb0%2Clg%2C0%2C03A9F4%2C0.5%2CEA469E%2C0.1&chma=-10%2C0%2C0%2C-10&chs=700x80&cht=bhs&chxs=0%2CFFFFFF00%2C0%2C-1%2C_%2CFFFFFF00%2CFFFFFF00%7C1%2CFFFFFF00%2C0%2C-1%2C_%2CFFFFFF00%2CFFFFFF00&chxt=x%2Cy)](https://editor.image-charts.com/chart?chco=FFFFFF&chd=a%3A65%7C35&chf=bg%2Cs%2CFFFFFF00%7Cb0%2Clg%2C0%2C03A9F4%2C0.5%2CEA469E%2C0.1&chma=-10%2C0%2C0%2C-10&chs=700x80&cht=bhs&chxs=0%2CFFFFFF00%2C0%2C-1%2C_%2CFFFFFF00%2CFFFFFF00%7C1%2CFFFFFF00%2C0%2C-1%2C_%2CFFFFFF00%2CFFFFFF00&chxt=x%2Cy)


#### Multiple colors

If we wish to have something else that a white background for the uncompleted part, [series colors](/bar-charts/#series-colors) are what we want! If you wish to send an email campaign for gold membership, leverage series colors:

```
chco=CFB948,E3E3E3
```

- `CFB948` is the gold [hexadecimal color](./reference/color-format.md) of the progress bar first part
- `E3E3E3` is the gray [hexadecimal color](./reference/color-format.md) of the progress bar second part

[![goldmembership email progressbar](https://image-charts.com/chart?chco=CFB948%2CE3E3E3&chd=a%3A65%7C35&chf=bg%2Cs%2CE3E3E300&chma=-10%2C0%2C0%2C-10&chs=700x80&cht=bhs&chxs=0%2CFFFFFF00%2C0%2C-1%2C_%2CFFFFFF00%2CFFFFFF00%7C1%2CFFFFFF00%2C0%2C-1%2C_%2CFFFFFF00%2CFFFFFF00&chxt=x%2Cy)](https://editor.image-charts.com/chart?chco=CFB948%2CE3E3E3&chd=a%3A65%7C35&chf=bg%2Cs%2CE3E3E300&chma=-10%2C0%2C0%2C-10&chs=700x80&cht=bhs&chxs=0%2CFFFFFF00%2C0%2C-1%2C_%2CFFFFFF00%2CFFFFFF00%7C1%2CFFFFFF00%2C0%2C-1%2C_%2CFFFFFF00%2CFFFFFF00&chxt=x%2Cy)


