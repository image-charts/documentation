---
meta_description: "Image-charts API propose to customize your graphics as for example with localization. This documentation shows you how to use the API url parameters to generate a chart."
---
!!! info "Enterprise subscription only"
    Language localization is only enabled in **Enterprise** subscriptions

#### Localization

Some charts might be rendered for customers over various location with different currency and localization requirements. `iclocale` is a query parameter to specify in what localization the chart should be rendered.

It allows you to modify, depending on its location, the location of the country's currency sign.

#### Syntax

```
iclocale=<locale>
```

- **`<locale>`** Currently supported values are: `en`, `fr`, `de`. Need another locale ? [Contact us](mailto:support@image-charts.com)


#### Example

In the example below, the position of the `€` currency sign will be first with `iclocale=en` and behind with `iclocale=fr` and `iclocale=de`. Also not the variations in thousands and decimal separators.

The chart below has a english locale:

```
iclocale=en
```

[![chart](https://image-charts.com/chart?chbr=8&chco=ED6D85%7CF7CF6B%7C56A1E5%7CF2A254%7C85e085&chd=a%3A140000%2C45000%2C48000%2C84000%2C165000&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=N%2AcEURsz%2A%2CFFFFFF%2C0%2C-1%2C10%2CDosis%2Cnormal&chs=700x400&cht=bvg&chxl=1%3A%7CBMW%20i8%7CTesla%203%7CFord%20Mustang%7CAudi%20RS5%7CPorshe%20Taycan&chxs=0N%2AcEURzs%2A%2C00000%2C13%2C0%7C1N%2A%2A%2C00000%2C13%2C0&chxt=y%2Cx&icac=documentation&icff=Domine&icfs=normal&iclocale=en&icretina=1&ichm=d7e25e133d9f9af640877bebe6e47d2286fe7187a98bdeeec96803a5845f5310)](https://editor.image-charts.com/chart?chbr=8&chco=ED6D85%7CF7CF6B%7C56A1E5%7CF2A254%7C85e085&chd=a%3A140000%2C45000%2C48000%2C84000%2C165000&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=N%2AcEURsz%2A%2CFFFFFF%2C0%2C-1%2C10%2CDosis%2Cnormal&chs=700x400&cht=bvg&chxl=1%3A%7CBMW%20i8%7CTesla%203%7CFord%20Mustang%7CAudi%20RS5%7CPorshe%20Taycan&chxs=0N%2AcEURzs%2A%2C00000%2C13%2C0%7C1N%2A%2A%2C00000%2C13%2C0&chxt=y%2Cx&icac=documentation&icff=Domine&icfs=normal&iclocale=en&icretina=1&ichm=d7e25e133d9f9af640877bebe6e47d2286fe7187a98bdeeec96803a5845f5310)

Here is another chart localized for French:

```
iclocale=fr
```

[![chart](https://image-charts.com/chart?chbr=8&chco=ED6D85%7CF7CF6B%7C56A1E5%7CF2A254%7C85e085&chd=a%3A140000%2C45000%2C48000%2C84000%2C165000&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=N%2AcEURsz%2A%2CFFFFFF%2C0%2C-1%2C10%2CDosis%2Cnormal&chs=700x400&cht=bvg&chxl=1%3A%7CBMW%20i8%7CTesla%203%7CFord%20Mustang%7CAudi%20RS5%7CPorshe%20Taycan&chxs=0N%2AcEURzs%2A%2C00000%2C13%2C0%7C1N%2A%2A%2C00000%2C13%2C0&chxt=y%2Cx&icac=documentation&icff=Domine&icfs=normal&iclocale=fr&icretina=1&ichm=6c22f6db819c1f722c6ea560331bfd0093870d54c6ce24e507b65eef21515d1d)](https://editor.image-charts.com/chart?chbr=8&chco=ED6D85%7CF7CF6B%7C56A1E5%7CF2A254%7C85e085&chd=a%3A140000%2C45000%2C48000%2C84000%2C165000&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=N%2AcEURsz%2A%2CFFFFFF%2C0%2C-1%2C10%2CDosis%2Cnormal&chs=700x400&cht=bvg&chxl=1%3A%7CBMW%20i8%7CTesla%203%7CFord%20Mustang%7CAudi%20RS5%7CPorshe%20Taycan&chxs=0N%2AcEURzs%2A%2C00000%2C13%2C0%7C1N%2A%2A%2C00000%2C13%2C0&chxt=y%2Cx&icac=documentation&icff=Domine&icfs=normal&iclocale=fr&icretina=1&ichm=6c22f6db819c1f722c6ea560331bfd0093870d54c6ce24e507b65eef21515d1d)

... and another one for Deutsch:

```
iclocale=de
```

[![chart](https://image-charts.com/chart?chbr=8&chco=ED6D85%7CF7CF6B%7C56A1E5%7CF2A254%7C85e085&chd=a%3A140000%2C45000%2C48000%2C84000%2C165000&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=N%2AcEURsz%2A%2CFFFFFF%2C0%2C-1%2C10%2CDosis%2Cnormal&chs=700x400&cht=bvg&chxl=1%3A%7CBMW%20i8%7CTesla%203%7CFord%20Mustang%7CAudi%20RS5%7CPorshe%20Taycan&chxs=0N%2AcEURzs%2A%2C00000%2C13%2C0%7C1N%2A%2A%2C00000%2C13%2C0&chxt=y%2Cx&icac=documentation&icff=Domine&icfs=normal&iclocale=de&icretina=1&ichm=bd8a2747d9b6bc2d00f3e30bb5ea0bb92ecc099543dd92722738b8431ff15e20)](https://editor.image-charts.com/chart?chbr=8&chco=ED6D85%7CF7CF6B%7C56A1E5%7CF2A254%7C85e085&chd=a%3A140000%2C45000%2C48000%2C84000%2C165000&chg=20%2C50%2C5%2C5&chls=2.0%2C0.0%2C0.0&chm=N%2AcEURsz%2A%2CFFFFFF%2C0%2C-1%2C10%2CDosis%2Cnormal&chs=700x400&cht=bvg&chxl=1%3A%7CBMW%20i8%7CTesla%203%7CFord%20Mustang%7CAudi%20RS5%7CPorshe%20Taycan&chxs=0N%2AcEURzs%2A%2C00000%2C13%2C0%7C1N%2A%2A%2C00000%2C13%2C0&chxt=y%2Cx&icac=documentation&icff=Domine&icfs=normal&iclocale=de&icretina=1&ichm=bd8a2747d9b6bc2d00f3e30bb5ea0bb92ecc099543dd92722738b8431ff15e20)
