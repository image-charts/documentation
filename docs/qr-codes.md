---
meta_description: "Generate qr code charts as image using Image-charts API. From simple or custom qr charts to output format or background color, we handle everything!"
---
# QR Codes

This section describes how to create a QR Code on the fly with a URL GET request using the Image-Chart QRCode web service generation.

## Overview

QR codes are a popular type of two-dimensional barcode. They are also known as hardlinks or physical world hyperlinks. QR Codes store up to 4,296 alphanumeric characters of arbitrary text. This text can be anything, for example a website URL, contact information, a telephone number, even a poem! QR codes can be read by an optical device with the appropriate software. Such devices range from dedicated QR code readers to smartphones.

#### Example

[![chart](https://image-charts.com/chart?chs=150x150&cht=qr&chl=Hello%20world&choe=UTF-8)](https://editor.image-charts.com/?tab_viewer=image&tab_editor=form#https:/image-charts.com/chart?chs=150x150&cht=qr&chl=Hello%20world&choe=UTF-8)
<center>
[https://image-charts.com/chart?<br/>
chs=150x150&cht=qr&chl=Hello%20world&choe=UTF-8](https://image-charts.com/chart?chs=150x150&cht=qr&chl=Hello%20world&choe=UTF-8)
</center>
```
chs=150x150
cht=qr
chl=Hello world
choe=UTF-8
```

We've just generated a QR Code that contains the `Hello world` information!

#### Syntax

```
cht=qr
```

The QR Code chart type (`cht=qr`), size parameter (`chs=<width>x<height>`) and data (`chl=<data>`) are all required parameters.

[![chart](https://image-charts.com/chart?chs=200x200&cht=qr&chl=This%20is%20so%20awesome&choe=UTF-8)](https://editor.image-charts.com/?tab_viewer=image&tab_editor=form#https:/image-charts.com/chart?chs=200x200&cht=qr&chl=This%20is%20so%20awesome&choe=UTF-8)
<center>
[https://image-charts.com/chart?
chs=200x200&cht=qr&chl=This%20is%20so%20awesome&choe=UTF-8](https://image-charts.com/chart?chs=200x200&cht=qr&chl=This%20is%20so%20awesome&choe=UTF-8)
</center>
```
cht=qr
chs=200x200
```

## QR Code data

`chl=<data>`

The data to encode. Data can be digits (0-9), alphanumeric characters, binary bytes of data, or Kanji. You cannot mix data types within a QR code. The data must be UTF-8 URL-encoded. Note that URLs have a 2K maximum length, so if you want to encode more than 2K bytes (minus the other URL characters), you will have to send your [data using POST](/reference/post-requests).

## Data encoding

`choe=<output_encoding>`

How to encode the data in the QR code. Currently only UTF-8 is supported.

<!-- * UTF-8 [Default]
* Shift_JIS
* ISO-8859-1 -->

## Output format

QRCode image can be generated in two format:

- (default) `png` bitmap image file format 
- `svg` vector image file format 

Select the output format you want with the query parameter `chof`:

- `chof=.svg` will output QRCode in svg format
- `chof=.png` will output QRCode in png format

[![chart](https://image-charts.com/chart?chs=200x200&cht=qr&chl=This%20is%20so%20awesome&choe=UTF-8&chof=.svg)](https://editor.image-charts.com/?tab_viewer=image&tab_editor=form#https:/image-charts.com/chart?chs=200x200&cht=qr&chl=This%20is%20so%20awesome&choe=UTF-8&chof=.svg)

```
chs=200x200
cht=qr
chl=This is so awesome
choe=UTF-8
chof=.svg
```

## Background color

Specify the background color for QRCode with the following syntax :

#### Syntax

`icqrb=<color>`

`<color>` : QRCode background color, in [RRGGBB[AA] hexadecimal format](/reference/color-format). Default is `FFFFFF` (white)

[![chart](https://image-charts.com/chart?chs=200x200&cht=qr&chl=This%20is%20so%20awesome&choe=UTF-8&icqrb=CAF3C37C)](https://editor.image-charts.com/?tab_viewer=image&tab_editor=form#https:/image-charts.com/chart?chs=200x200&cht=qr&chl=This%20is%20so%20awesome&choe=UTF-8&icqrb=CAF3C37C)

## Foreground Color

Specify the foreground color for QRCode with the following syntax :

#### Syntax

`icqrf=<color>`

`<color>` : QRCode foreground color, in [RRGGBB[AA] hexadecimal format](/reference/color-format). Default is `000000` (black)

[![chart](https://image-charts.com/chart?chs=200x200&cht=qr&chl=This%20is%20so%20awesome&choe=UTF-8&icqrf=0096887C)](https://editor.image-charts.com/?tab_viewer=image&tab_editor=form#https:/image-charts.com/chart?chs=200x200&cht=qr&chl=This%20is%20so%20awesome&choe=UTF-8&icqrf=0096887C)

## Error correction level and margin

`chld=<error_correction_level>|<margin>`

* *error_correction_level* - QR codes support four levels of error correction to enable recovery of missing, misread, or obscured data. Greater redundancy is achieved at the cost of being able to store less data. Here are the supported values:
    * L - [Default] Allows recovery of up to 7% data loss
    * M - Allows recovery of up to 15% data loss
    * Q - Allows recovery of up to 25% data loss
    * H - Allows recovery of up to 30% data loss
* *margin* - The width of the white border around the data portion of the code. This is in rows, not in pixels. The default value is 4.
