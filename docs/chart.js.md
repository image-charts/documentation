# Chart.js

Chart.js is most popular open-source charting library. Image-Charts supports [Chart.js](https://www.chartjs.org/docs/2.8.0/) configuration object format. This document describe how to generate image of chart.js charts.

## Overview

Image Charts is compatible with Chart.js configuration object. Put your Chart.js definition directly in the URL like the example below: 

```
https://image-charts.com/chart.js/2.8.0?bkg=white&c={"type": "bar","data": {"labels": ["January","February","March"],"datasets": [{"data": [-31,-70,-30]}]},"options": {"legend": {"display": false}}}
````

![chart](https://image-charts.com/chart.js/2.8.0?backgroundColor=white&c=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22January%22%2C%22February%22%2C%22March%22%5D%2C%22datasets%22%3A%5B%7B%22data%22%3A%5B-31%2C-70%2C-30%5D%7D%5D%7D%2C%22options%22%3A%7B%22legend%22%3A%7B%22display%22%3Afalse%7D%7D%7D)

## Version

Image-Charts API can handles multiple version of chart.js definition object depending on your project requirements and usage. Chart.js version is defined as follow:

```
https://image-charts/chart.js/{version}
```

Current versions supported:

- `2.8.0` ([documentation](https://www.chartjs.org/docs/2.8.0/)
- Need another version for your project? [Contact us](mailto:support@image-charts.com)

## Parameters

### Chart definition

A Chart.js definition is represented in JavaScript Object Notation (JSON). Take a look at [Chart.js documentation](https://www.chartjs.org/docs/2.8.0/charts/) to learn what are the available parameters.

Some JSON character do not work well inside URLs. We recommend you to **always URL-encode your chart definition**.

#### Syntax

```
chart=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22January%22%2C%22February%22%2C%22March%22%5D%2C%22datasets%22%3A%5B%7B%22data%22%3A%5B-31%2C-70%2C-30%5D%7D%5D%7D%2C%22options%22%3A%7B%22legend%22%3A%7B%22display%22%3Afalse%7D%7D%7D
c=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22January%22%2C%22February%22%2C%22March%22%5D%2C%22datasets%22%3A%5B%7B%22data%22%3A%5B-31%2C-70%2C-30%5D%7D%5D%7D%2C%22options%22%3A%7B%22legend%22%3A%7B%22display%22%3Afalse%7D%7D%7D
```

Use `chart` or `c` parameter

**Examples :**

![chart](https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7Btype%3A%27line%27%2Cdata%3A%7Blabels%3A%5B%27Jan%27%2C%27Feb%27%2C%27Mar%27%2C%27Apr%27%2C%27May%27%2C%27Jun%27%2C%27Jul%27%2C%27Aug%27%5D%2Cdatasets%3A%5B%7BbackgroundColor%3A%27rgba(255%2C150%2C150%2C0.5)%27%2CborderColor%3A%27rgb(255%2C150%2C150)%27%2Cdata%3A%5B-23%2C64%2C21%2C53%2C-39%2C-30%2C28%2C-10%5D%2Clabel%3A%27Dataset%27%2Cfill%3A%27origin%27%7D%5D%7D%7D)
```
bkg=white
c={type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],datasets:[{backgroundColor:'rgba(255,150,150,0.5)',borderColor:'rgb(255,150,150)',data:[-23,64,21,53,-39,-30,28,-10],label:'Dataset',fill:'origin'}]}}
```

![chart](https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7Btype%3A%27pie%27%2Cdata%3A%7Bdatasets%3A%5B%7Bdata%3A%5B84%2C28%2C57%2C19%2C97%5D%2CbackgroundColor%3A%5B%27rgba(255%2C99%2C132%2C0.5)%27%2C%27rgba(255%2C159%2C64%2C0.5)%27%2C%27rgba(255%2C205%2C86%2C0.5)%27%2C%27rgba(75%2C192%2C192%2C0.5)%27%2C%27rgba(54%2C162%2C235%2C0.5)%27%2C%5D%7D%5D%7D%2C%7D)
```
bkg=white
chart={type:'pie',data:{datasets:[{data:[84,28,57,19,97],backgroundColor:['rgba(255,99,132,0.5)','rgba(255,159,64,0.5)','rgba(255,205,86,0.5)','rgba(75,192,192,0.5)','rgba(54,162,235,0.5)']}]}}
```

### Background color

You can define background color of chart. Image charts accepts rgb (rgb(255,255,120)), colors (red), and url-encoded hex values (%23ff00ff). Default values `black`

#### Syntax

```
bakcgroundColor=white
bkg=rgb(0,0,0)
```

Use `backgroundColor` or `bkg` parameter

**Examples :**

![chart](https://image-charts.com/chart.js/2.8.0?bkg=%23FCFCFC&c=%7Btype%3A%22bubble%22%2Cdata%3A%7Bdatasets%3A%5B%7BbackgroundColor%3A%22rgba(255%2C99%2C132%2C0.5)%22%2CborderColor%3A%22rgb(255%2C99%2C132)%22%2CborderWidth%3A1%2Cdata%3A%5B%7Bx%3A62%2Cy%3A94%2Cr%3A9.8%2C%7D%2C%7Bx%3A-62%2Cy%3A-34%2Cr%3A7.4%2C%7D%2C%7Bx%3A8%2Cy%3A60%2Cr%3A1.8%2C%7D%2C%7Bx%3A-44%2Cy%3A59%2Cr%3A9.4%2C%7D%2C%7Bx%3A64%2Cy%3A46%2Cr%3A6.8%2C%7D%2C%7Bx%3A16%2Cy%3A-95%2Cr%3A10.8%2C%7D%2C%7Bx%3A95%2Cy%3A-80%2Cr%3A1.8%2C%7D%2C%5D%2C%7D%2C%7B%22backgroundColor%22%3A%22rgba(54%2C162%2C235%2C0.5)%22%2C%22borderColor%22%3A%22rgb(54%2C162%2C235)%22%2CborderWidth%3A1%2Cdata%3A%5B%7Bx%3A-15%2Cy%3A-28%2Cr%3A14.8%2C%7D%2C%7Bx%3A-31%2Cy%3A-53%2Cr%3A11%2C%7D%2C%7Bx%3A-70%2Cy%3A-74%2Cr%3A14%2C%7D%2C%7Bx%3A-48%2Cy%3A-6%2Cr%3A7%2C%7D%2C%7Bx%3A-82%2Cy%3A34%2Cr%3A13.6%2C%7D%2C%7Bx%3A-89%2Cy%3A-71%2Cr%3A16.8%2C%7D%2C%7Bx%3A15%2Cy%3A-38%2Cr%3A0.2%2C%7D%2C%5D%7D%5D%7D%2C%22options%22%3A%7B%22legend%22%3A%7B%22display%22%3Afalse%7D%7D%7D)

```
bkg=%23FCFCFC
c={type:'bubble',data:{datasets:[{backgroundColor:'rgba(255,99,132,0.5)',borderColor:'rgb(255,99,132)',borderWidth:1,data:[{x:62,y:94,r:9.8,},{x:-62,y:-34,r:7.4,},{x:8,y:60,r:1.8,},{x:-44,y:59,r:9.4,},{x:64,y:46,r:6.8,},{x:16,y:-95,r:10.8,},{x:95,y:-80,r:1.8,},],},{"backgroundColor":"rgba(54,162,235,0.5)","borderColor":"rgb(54,162,235)",borderWidth:1,data:[{x:-15,y:-28,r:14.8,},{x:-31,y:-53,r:11,},{x:-70,y:-74,r:14,},{x:-48,y:-6,r:7,},{x:-82,y:34,r:13.6,},{x:-89,y:-71,r:16.8,},{x:15,y:-38,r:0.2,},]}]},"options":{"legend":{"display":false}}}
```

![chart](https://image-charts.com/chart.js/2.8.0?bkg=rgb(255,255,255)&c=%7Btype%3A%22bubble%22%2Cdata%3A%7Bdatasets%3A%5B%7BbackgroundColor%3A%22rgba(255%2C99%2C132%2C0.5)%22%2CborderColor%3A%22rgb(255%2C99%2C132)%22%2CborderWidth%3A1%2Cdata%3A%5B%7Bx%3A62%2Cy%3A94%2Cr%3A9.8%2C%7D%2C%7Bx%3A-62%2Cy%3A-34%2Cr%3A7.4%2C%7D%2C%7Bx%3A8%2Cy%3A60%2Cr%3A1.8%2C%7D%2C%7Bx%3A-44%2Cy%3A59%2Cr%3A9.4%2C%7D%2C%7Bx%3A64%2Cy%3A46%2Cr%3A6.8%2C%7D%2C%7Bx%3A16%2Cy%3A-95%2Cr%3A10.8%2C%7D%2C%7Bx%3A95%2Cy%3A-80%2Cr%3A1.8%2C%7D%2C%5D%2C%7D%2C%7B%22backgroundColor%22%3A%22rgba(54%2C162%2C235%2C0.5)%22%2C%22borderColor%22%3A%22rgb(54%2C162%2C235)%22%2CborderWidth%3A1%2Cdata%3A%5B%7Bx%3A-15%2Cy%3A-28%2Cr%3A14.8%2C%7D%2C%7Bx%3A-31%2Cy%3A-53%2Cr%3A11%2C%7D%2C%7Bx%3A-70%2Cy%3A-74%2Cr%3A14%2C%7D%2C%7Bx%3A-48%2Cy%3A-6%2Cr%3A7%2C%7D%2C%7Bx%3A-82%2Cy%3A34%2Cr%3A13.6%2C%7D%2C%7Bx%3A-89%2Cy%3A-71%2Cr%3A16.8%2C%7D%2C%7Bx%3A15%2Cy%3A-38%2Cr%3A0.2%2C%7D%2C%5D%7D%5D%7D%2C%22options%22%3A%7B%22legend%22%3A%7B%22display%22%3Afalse%7D%7D%7D)

```
bkg=rgb(255,255,255)
chart={type:'bubble',data:{datasets:[{backgroundColor:'rgba(255,99,132,0.5)',borderColor:'rgb(255,99,132)',borderWidth:1,data:[{x:62,y:94,r:9.8,},{x:-62,y:-34,r:7.4,},{x:8,y:60,r:1.8,},{x:-44,y:59,r:9.4,},{x:64,y:46,r:6.8,},{x:16,y:-95,r:10.8,},{x:95,y:-80,r:1.8,},],},{"backgroundColor":"rgba(54,162,235,0.5)","borderColor":"rgb(54,162,235)",borderWidth:1,data:[{x:-15,y:-28,r:14.8,},{x:-31,y:-53,r:11,},{x:-70,y:-74,r:14,},{x:-48,y:-6,r:7,},{x:-82,y:34,r:13.6,},{x:-89,y:-71,r:16.8,},{x:15,y:-38,r:0.2,},]}]},"options":{"legend":{"display":false}}}
```

### Height & Width

You can define height and width of chart. Default values : `height:300`, `width:400`

#### Syntax

```
width=300
height=400
```

#### Examples

![chart](https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7B"type"%3A"bar"%2C"data"%3A%7B"labels"%3A%5B"January"%2C"February"%2C"March"%2C"April"%2C"May"%2C"June"%2C"July"%5D%2C"datasets"%3A%5B%7B"backgroundColor"%3A"rgba(54%2C162%2C235%2C0.5)"%2C"borderColor"%3A"rgb(54%2C162%2C235)"%2C"borderWidth"%3A1%2C"data"%3A%5B73%2C41%2C29%2C61%2C-65%2C59%2C38%5D%7D%5D%7D%2C"options"%3A%7B"legend"%3A%7B"display"%3Afalse%7D%7D%7D&width=300&height=200)
```
bkg=white
c={"type":"bar","data":{"labels":["January","February","March","April","May","June","July"],"datasets":[{"backgroundColor":"rgba(54,162,235,0.5)","borderColor":"rgb(54,162,235)","borderWidth":1,"data":[73,41,29,61,-65,59,38]}]},"options":{"legend":{"display":false}}}
width=300
height=200
```

### Encoding

You can encode your chart definition to it's reduce size. Accepted values are `url` and `base64`. Default values is `url`

#### Syntax

```
encoding=url
encoding=base64
```

#### Examples

![chart](https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7Btype%3A%27polarArea%27%2Cdata%3A%7Bdatasets%3A%5B%7Bdata%3A%5B3%2C56%2C61%2C78%2C83%5D%2CbackgroundColor%3A%5B%27rgba(255%2C99%2C132%2C0.5)%27%2C%27rgba(255%2C159%2C64%2C0.5)%27%2C%27rgba(255%2C205%2C86%2C0.5)%27%2C%27rgba(75%2C192%2C192%2C0.5)%27%2C%27rgba(54%2C162%2C235%2C0.5)%27%2C%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Chart.jsPolarAreaChart%27%2C%7D%7D%7D&encoding=url)

```
bkg=white
c={type:'polarArea',data:{datasets:[{data:[3,56,61,78,83],backgroundColor:['rgba(255,99,132,0.5)','rgba(255,159,64,0.5)','rgba(255,205,86,0.5)','rgba(75,192,192,0.5)','rgba(54,162,235,0.5)',]}]},options:{title:{display:true,text:'Chart.jsPolarAreaChart',}}}
encoding=url
```

![chart](https://image-charts.com/chart.js/2.8.0?bkg=white&c=ewogIHR5cGU6ICdyYWRhcicsCiAgZGF0YTogewogICAgbGFiZWxzOiBbCiAgICAgIFsnRWF0aW5nJywgJ0Rpbm5lciddLAogICAgICBbJ0RyaW5raW5nJywgJ1dhdGVyJ10sCiAgICAgICdTbGVlcGluZycsCiAgICAgIFsnRGVzaWduaW5nJywgJ0dyYXBoaWNzJ10sCiAgICAgICdDb2RpbmcnLAogICAgICAnQ3ljbGluZycsCiAgICAgICdSdW5uaW5nJywKICAgIF0sCiAgICBkYXRhc2V0czogWwogICAgICB7CiAgICAgICAgbGFiZWw6ICdNeSBGaXJzdCBkYXRhc2V0JywKICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKScsCiAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsCiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsCiAgICAgICAgZGF0YTogWzI2LCA5LCA0MiwgMjMsIDQyLCAyNiwgMTBdLAogICAgICB9LAogICAgICB7CiAgICAgICAgbGFiZWw6ICdNeSBTZWNvbmQgZGF0YXNldCcsCiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg1NCwgMTYyLCAyMzUsIDAuMiknLAogICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDU0LCAxNjIsIDIzNSknLAogICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAncmdiKDU0LCAxNjIsIDIzNSknLAogICAgICAgIGRhdGE6IFs2LCA5OCwgMjcsIDU4LCA1MiwgMzksIDM1XSwKICAgICAgfSwKICAgIF0sCiAgfSwKICBvcHRpb25zOiB7CiAgICB0aXRsZTogewogICAgICBkaXNwbGF5OiB0cnVlLAogICAgICB0ZXh0OiAnQ2hhcnQuanMgUmFkYXIgQ2hhcnQnLAogICAgfSwKICB9LAp9Cg==&encoding=base64)

```
bkg=white
c=ewogIHR5cGU6ICdyYWRhcicsCiAgZGF0YTogewogICAgbGFiZWxzOiBbCiAgICAgIFsnRWF0aW5nJywgJ0Rpbm5lciddLAogICAgICBbJ0RyaW5raW5nJywgJ1dhdGVyJ10sCiAgICAgICdTbGVlcGluZycsCiAgICAgIFsnRGVzaWduaW5nJywgJ0dyYXBoaWNzJ10sCiAgICAgICdDb2RpbmcnLAogICAgICAnQ3ljbGluZycsCiAgICAgICdSdW5uaW5nJywKICAgIF0sCiAgICBkYXRhc2V0czogWwogICAgICB7CiAgICAgICAgbGFiZWw6ICdNeSBGaXJzdCBkYXRhc2V0JywKICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKScsCiAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsCiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsCiAgICAgICAgZGF0YTogWzI2LCA5LCA0MiwgMjMsIDQyLCAyNiwgMTBdLAogICAgICB9LAogICAgICB7CiAgICAgICAgbGFiZWw6ICdNeSBTZWNvbmQgZGF0YXNldCcsCiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg1NCwgMTYyLCAyMzUsIDAuMiknLAogICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDU0LCAxNjIsIDIzNSknLAogICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAncmdiKDU0LCAxNjIsIDIzNSknLAogICAgICAgIGRhdGE6IFs2LCA5OCwgMjcsIDU4LCA1MiwgMzksIDM1XSwKICAgICAgfSwKICAgIF0sCiAgfSwKICBvcHRpb25zOiB7CiAgICB0aXRsZTogewogICAgICBkaXNwbGF5OiB0cnVlLAogICAgICB0ZXh0OiAnQ2hhcnQuanMgUmFkYXIgQ2hhcnQnLAogICAgfSwKICB9LAp9Cg==
encoding=base64
```

