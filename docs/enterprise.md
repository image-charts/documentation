# Enterprise version

This section is dedicated to the paying enterprise version. This plan use the same API but is **watermark free** and you can setup your **own sub-domain** for the perfect integration.

Once subscribed to the enterprise plan you will receive an `account id` and a `secret key`. These two keys are mandatory to sign your request and remove the watermark.

## Remove Image-Charts watermark by signing URLs

Signing request must be done server-side otherwise anyone will be able to reuse your `secret key`. Beside signing there are no other process involved server-side. Image-Charts is still the fastest option compared to server-side charts setup and generation.

You will need to sign the url using `HMAC-SHA256` hash algorithm. Before hashing the URL add your account id inside it using the `&icac=YOUR_ACCOUNT_ID` parameter, then hash it and at the resulting hash in the `&ichm=GENERATED_HASH` query parameter. **Don't forget to convert URL-unsafe characters** before generating the signature.

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


```python tab="Python 3" linenums="1"
{!enterprise/hmac_.py!}
```


```php tab="PHP 5+" linenums="1"
{!enterprise/hmac_.php!}
```

```csharp tab="C#" linenums="1"
{!enterprise/hmac_.cs!}
```

```java tab="Java" linenums="1"
{!enterprise/java/src/hmac_.java!}
```

```ruby tab="Ruby 2.x" linenums="1"
{!enterprise/hmac_.rb!}
```

!!! tip "Want more?"
    Don't see your favorite language here? [Just ask us :angel:](mailto:support@image-charts.com) !

## Online Url Generator

The easiest way to generate a watermark-free Image-Charts is to use our [online url generator](https://codepen.io/FGRibreau/full/ZKoOGo/).
