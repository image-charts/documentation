!!! info "Enterprise subscription only"
    Iclocale support is only enabled in **Enterprise** subscriptions

#### Iclocale

Some charts might be rendered for customers over various location with different currency and localization requirements. `iclocale` is a query parameter to specify in what localization the chart should be rendered.

It allows you to modify, depending on its location, the location of the country's currency sign.

#### Syntax

```
iclocale=<iclocale_activation>
```

- **`<iclocale_activation>`** Currently supported values are: `en`, `fr`, `de`. <br> Need another locale ? [Contact us](mailto:support@image-charts.com)


#### Example

The position of the "€" sign is in front for `en` and behind for` fr` and `de`.

Here is a graphic with iclocale. Here it has the value "en" defining the english location.

[![chart](https://image-charts.com/chart?chco=ffb31a&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=B%2Cffcc66%2C0%2C0%2C0&chs=700x400&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1N%2AcEUR%2A%2C00000%2C18%2C0&chxt=x%2Cy&icac=documentation&icff=Dosis&icfs=normal&iclocale=en&icretina=1&ichm=6ffe342c4cfdc87084fe902fb8ff457fda12e85277a18b7d86b57d1d6d7c6007)](https://editor.image-charts.com/chart?chco=ffb31a&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=B%2Cffcc66%2C0%2C0%2C0&chs=700x400&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1N%2AcEUR%2A%2C00000%2C18%2C0&chxt=x%2Cy&icac=documentation&icff=Dosis&icfs=normal&iclocale=en&icretina=1&ichm=6ffe342c4cfdc87084fe902fb8ff457fda12e85277a18b7d86b57d1d6d7c6007)

```
iclocale=en
```

Here is a graphic with iclocale. Here it has the value "fr" defining the french location.

[![chart](https://image-charts.com/chart?chco=ffb31a&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=B%2Cffcc66%2C0%2C0%2C0&chs=700x400&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1N%2AcEUR%2A%2C00000%2C18%2C0&chxt=x%2Cy&icac=documentation&icff=Dosis&icfs=normal&iclocale=fr&icretina=1&ichm=41d5eec30d377549c3c4674e46395dfe084dfdbb8de6d83b809d520b904abfbd)](https://editor.image-charts.com/chart?chco=ffb31a&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=B%2Cffcc66%2C0%2C0%2C0&chs=700x400&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1N%2AcEUR%2A%2C00000%2C18%2C0&chxt=x%2Cy&icac=documentation&icff=Dosis&icfs=normal&iclocale=fr&icretina=1&ichm=41d5eec30d377549c3c4674e46395dfe084dfdbb8de6d83b809d520b904abfbd)

```
iclocale=fr
```

Here is a graphic with iclocale. Here it has the value "de" defining the deutsch location.

[![chart](https://image-charts.com/chart?chco=ffb31a&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=B%2Cffcc66%2C0%2C0%2C0&chs=700x400&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1N%2AcEUR%2A%2C00000%2C18%2C0&chxt=x%2Cy&icac=documentation&icff=Dosis&icfs=normal&iclocale=de&icretina=1&ichm=6fb04852d3044c014864dddce9439fc0f4aad7e5f842105e721ee36a07fe5b52)](https://editor.image-charts.com/chart?chco=ffb31a&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=B%2Cffcc66%2C0%2C0%2C0&chs=700x400&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1N%2AcEUR%2A%2C00000%2C18%2C0&chxt=x%2Cy&icac=documentation&icff=Dosis&icfs=normal&iclocale=de&icretina=1&ichm=6fb04852d3044c014864dddce9439fc0f4aad7e5f842105e721ee36a07fe5b52)

```
iclocale=de
```
