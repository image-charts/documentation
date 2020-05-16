# Enterprise version

This section is dedicated to the paying enterprise version. This plan use the same API but is **watermark free** and you can setup your **own sub-domain** for the perfect integration.

Once subscribed to the enterprise plan you will receive an `account id` and a `secret key`. These two keys are mandatory to sign your request and remove the watermark.

## Remove Image-Charts watermark by signing URLs

Signing request **must be done server-side** otherwise anyone will be able to reuse your `secret key`. Beside signing there are no other computation involved server-side. Image-Charts is still the fastest option compared to server-side charts setup and generation.

You will need to sign the url using `HMAC-SHA256` hash algorithm. Before hashing the URL add your account id inside it using the `&icac=YOUR_ACCOUNT_ID` parameter, then hash it and at the resulting hash in the `&ichm=GENERATED_HASH` query parameter.

!!! tip "(easy) Prefer to not encode query parameters before computing the signature"
    In order to be easier to handle, **Image-Charts checks the signature for both encoded and decoded query params**. You do not need to worry about generating a string of the whole query with the right URL-safe characters anymore, if the basic query string check does not work, Image-Charts will also try to decode every query parameter pairs and then check the resulting query string against your signature (`ichm`).

    It means you don't have to worry about URL-encoding algorithm and you can generate the signature key based on an unencoded URL-unsafe query string and it will work.

    **Generating a signature based on unencoded URL parameters is the recommended way** as it's much more robust and abstract away the encoding the transportation uses (e.g. webmail proxies, web-browsers, enterprise proxies).

!!! tip "(advanced) What if I want to use special characters like `%` or `&` in my title, labels, legends... ?"
    If you want to use special characters like `%` or `&` in chart title, labels, legends... You will need to update our code examples below to encode every query parameter values before signing the query string. Image Charts API will detect that the signature (`ichm`) was computed against the already encoded querystring and will work as expected.


Note that Image-Chart supports `ichm` parameter both at the end of the query string (e.g. `https://image-charts.com/chart?{QUERY_STRING}&ichm=GENERATED_HASH`) and at the beginning (e.g `https://image-charts.com/chart?ichm=GENERATED_HASH&{QUERY_STRING}`).

As an example here is a graph signed, without watermark:

![chart](https://image-charts.com/chart?chtt=No%20watermark!&cht=lc&chd=t%3A40%2C20%2C10%2C20%2C40%2C20%2C20%2C40%2C10%2C20%2C40%2C60%7C55%2C35%2C5%2C45%2C25%2C45%2C45%2C45%2C25%2C15%2C55%2C45&chs=700x200&chof=.png&chf=b0%2Clg%2C90%2Cffeb3b%2C0.2%2Cf44336%2C1%7Cb1%2Clg%2C90%2C8bc34a%2C0.2%2C009688%2C1&icac=fgribreau&ichm=0785cf22a0381c2e0239e27c126de4181f501d117c2c81745611e9db928b0376)


```
&icac=fgribreau
&ichm=0785cf22a0381c2e0239e27c126de4181f501d117c2c81745611e9db928b0376
```

Signing your URLs will ensure that no-one beside you created it and Image-Charts will verify the generated hash to be sure you your account created it. Here are some examples in various languages:

```js tab="NodeJS 6+" linenums="1"
{!enterprise/hmac_.js!}
```

```js tab="Google Sheets (via Google Apps Script)" linenums="1"
{!enterprise/hmac_.googlesheets.js!}
```


```python tab="Python 3" linenums="1"
{!enterprise/hmac_.py!}
```


```php tab="PHP 5+" linenums="1"
{!enterprise/hmac_.php!}
```

```csharp tab="C#" linenums="1"
{!enterprise/csharp/hmac_.cs!}
```

```java tab="Java" linenums="1"
{!enterprise/java/src/hmac_.java!}
```

```ruby tab="Ruby 2.x" linenums="1"
{!enterprise/hmac_.rb!}
```

```ruby tab="C#" linenums="1"
{!enterprise/csharp/hmac_.cs!}
```

!!! tip "Want more?"
    Don't see your favorite language here? [Just ask us :angel:](mailto:support@image-charts.com) !

## Online static chart generator

The easiest way to generate a watermark-free Image-Charts — that is, to sign generated URL with HMAC algorithm — is to use our [online url generator](https://editor.image-charts.com/?tab_editor=enterprise#https:/image-charts.com/chart?chd=a:30010,-30000,50000,80000,20000&chdl=Income&chf=b0,lg,90,EA469EFF,1,03A9F47C,0.4&chl=2014|2015|2016|2017|2018&chof=1535403433426&chs=700x300&cht=bvs&chxs=0N*cEURs*&chxt=y).
