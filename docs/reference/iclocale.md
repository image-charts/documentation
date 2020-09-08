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

[![chart](https://image-charts.com/chart?chco=ffb31a&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=B%2Cffcc66%2C0%2C0%2C0&chs=700x400&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1N%2AcEUR%2A%2C00000%2C20%2C0%7C0%2C00000%2C20%2C0&chxt=x%2Cy&icac=documentation&icff=Dosis&icfs=normal&iclocale=en&icretina=1&ichm=e48a089269650b0290b9eb74937e17914dd73d81332a2615d7feb5ef0de26b27)](https://editor.image-charts.com/chart?chco=ffb31a&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=B%2Cffcc66%2C0%2C0%2C0&chs=700x400&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1N%2AcEUR%2A%2C00000%2C20%2C0%7C0%2C00000%2C20%2C0&chxt=x%2Cy&icac=documentation&icff=Dosis&icfs=normal&iclocale=en&icretina=1&ichm=e48a089269650b0290b9eb74937e17914dd73d81332a2615d7feb5ef0de26b27)

```
iclocale=en
```

Here is a graphic with iclocale. Here it has the value "fr" defining the french location.

[![chart](https://image-charts.com/chart?chco=ffb31a&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=B%2Cffcc66%2C0%2C0%2C0&chs=700x400&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1N%2AcEUR%2A%2C00000%2C20%2C0%7C0%2C00000%2C20%2C0&chxt=x%2Cy&icac=documentation&icff=Dosis&icfs=normal&iclocale=fr&icretina=1&ichm=5c71953a8007a5d5949dd7cdc39008239b0d6e747431c616c127efd2697b75e7)](https://editor.image-charts.com/chart?chco=ffb31a&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=B%2Cffcc66%2C0%2C0%2C0&chs=700x400&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1N%2AcEUR%2A%2C00000%2C20%2C0%7C0%2C00000%2C20%2C0&chxt=x%2Cy&icac=documentation&icff=Dosis&icfs=normal&iclocale=fr&icretina=1&ichm=5c71953a8007a5d5949dd7cdc39008239b0d6e747431c616c127efd2697b75e7)

```
iclocale=fr
```

Here is a graphic with iclocale. Here it has the value "de" defining the deutsch location.

[![chart](https://image-charts.com/chart?chco=ffb31a&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=B%2Cffcc66%2C0%2C0%2C0&chs=700x400&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1N%2AcEUR%2A%2C00000%2C20%2C0%7C0%2C00000%2C20%2C0&chxt=x%2Cy&icac=documentation&icff=Dosis&icfs=normal&iclocale=de&icretina=1&ichm=474e7dca7517ed4500234809aa39fd1c45e55a57cac1aff1834457cca28e9514)](https://editor.image-charts.com/chart?chco=ffb31a&chd=s%3AcEAELFJHHHKUju9uuXUcd&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=B%2Cffcc66%2C0%2C0%2C0&chs=700x400&cht=lc&chxr=0%2C0%2C20%2C1%7C1%2C0%2C100%2C20&chxs=1N%2AcEUR%2A%2C00000%2C20%2C0%7C0%2C00000%2C20%2C0&chxt=x%2Cy&icac=documentation&icff=Dosis&icfs=normal&iclocale=de&icretina=1&ichm=474e7dca7517ed4500234809aa39fd1c45e55a57cac1aff1834457cca28e9514)

```
iclocale=de
```
