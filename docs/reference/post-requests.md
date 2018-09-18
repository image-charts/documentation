Specifying your chart as a URL in your browser or an `<img>` tag is called a `GET` request. Making a GET request is simple, but GET URLs are limited to 2K characters. What if you have more data than that?

Luckily, the Chart API supports HTTP POST for chart requests up to 300 Kilobytes long (*Google Image Charts API limit was 16Ko*). The trade-off is the added complexity of using POST.

Here's an example of the most basic kind of POST request: using a `<form>` element:

```
<form action='https://image-charts.com/chart' method='POST'>
    <input type="hidden" name="cht" value="lc"  />
    <input type="hidden" name="chtt" value="This is my chart"  />
    <input type='hidden' name='chs' value='300x200' />
    <input type="hidden" name="chxt" value="x" />
    <input type='hidden' name='chd' value='t:40,20,50,20,100'/>
    <input type="submit" />
</form>
```

[Demo on JSFiddle](https://jsfiddle.net/FGRibreau/9nw2qfqt/3/).

The response to a valid POST request is a PNG chart, the same as a GET request response.

There are a number of ways to use POST, and all of them require additional coding either in the page code or on the server hosting the page. To use POST, you will typically create a separate page for each chart, and embed or link to these pages in your main page using `<iframe>` or as an `<img>` tags as shown below.

Here is another example of using POST with CURL.

#### Using Curl for POST Requests

```
curl -X POST https://image-charts.com/chart?cht=bvg&chd=t:10,15,25,30,40,80&chs=700x300&chxt=x,y&chxl=0:%7CMarch%20%2718%7CApril%20%2718%7CMay%20%2718%7CJune%20%2718%7CJuly%20%2718%7CAugust%20%2718%7C&chdl=Visitors%20(in%20thousands%29&chf=b0,lg,90,05B142,1,0CE858,0.2&chxs=1N**K&chtt=Visitors%20report&chma=0,0,10,10 > my-chart.png
```

Here are examples of using POST with both JavaScript and PHP.

#### Using JavaScript for POST Requests

The easiest way to make a JavaScript POST request is to create a page that hosts a form with chart data in `<input>` elements, and have the page POST the request in its onLoad() handler, and the page will be replaced by the chart PNG. The page that hosts this chart should include this page using an `<iframe>`. Here's the code for the chart page:

**post_chart.html**

```js
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <script type='application/javascript'>
    // Send the POST when the page is loaded,
    // which will replace this whole page with the retrieved chart.
    function loadGraph() {
      var frm = document.getElementById('post_form');
      if (frm) {
       frm.submit();
      }
    }
  </script>
  </head>
  <body onload="loadGraph()">
    <form action='https://image-charts.com/chart' method='POST' id='post_form'>
      <input type='hidden' name='cht' value='lc'/>
      <input type='hidden' name='chtt' value='This is my chart'/>
      <input type='hidden' name='chs' value='300x200'/>
      <input type='hidden' name='chxt' value='x'/>
      <input type='hidden' name='chd' value='t:40,20,50,20,100'/>
      <input type='submit'/>
    </form>
  </body>
</html>
```

[Demo on JSFiddle](https://jsfiddle.net/FGRibreau/8ctwd87n/).

If you use a <form> element, you do not need to URL-encode your strings.).

This chart can then be loaded into another page by using an `<iframe>` in your host page, such as this:

**another_page.html**

```html
<iframe src="post_chart.html" width="300" height="200"></iframe>
```

#### Using PHP for POST Requests

Most server-side languages support explicit POST requests. Here's an example of making a POST request using PHP. This example demonstrates a page that generates a line chart with 150 random values. To use this yourself, you would customize the `$chart` array to include your own values.

**chartserver-image.php**

```php
<?php
  // Create some random text-encoded data for a line chart.
  header('content-type: image/png');
  $url = 'https://image-charts.com/chart';
  $chd = 't:';
  for ($i = 0; $i < 150; ++$i) {
    $data = rand(0, 100000);
    $chd .= $data . ',';
  }
  $chd = substr($chd, 0, -1);

  // Add data, chart type, chart size, and scale to params.
  $chart = array(
    'cht' => 'lc',
    'chs' => '600x200',
    'chds' => '0,100000',
    'chd' => $chd);

  // Send the request, and print out the returned bytes.
  $context = stream_context_create(
    array('http' => array(
      'method' => 'POST',
      'content' => http_build_query($chart))));
  fpassthru(fopen($url, 'r', false, $context));
?>
```

Embedding this chart is easier than the JavaScript example, because you can simply point to your POST page with an `<img>` tag, as shown here:

**another_page.html**

```html
<img width='600' height='200' src='chartserver-image.php'>
```
