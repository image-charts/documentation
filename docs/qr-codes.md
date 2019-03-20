# QR Codes

This section describes how to create a QR Code on the fly with a URL GET request using the Image-Chart API.

!!! warning "No watermark?"
    QR Code feature is currently in beta, the API **won't change** however once out of beta we will add a watermark at the top right and corner to support our freemium model. The QR Code will still be valid 👌.

    If you wish to be future proof right now, please [take an Enterprise subscription](https://www.image-charts.com/) and [make signed request today](https://documentation.image-charts.com/enterprise/) so even when our QR Code feature will be out of beta you will never see/have the watermark.


## Overview

QR codes are a popular type of two-dimensional barcode. They are also known as hardlinks or physical world hyperlinks. QR Codes store up to 4,296 alphanumeric characters of arbitrary text. This text can be anything, for example a website URL, contact information, a telephone number, even a poem! QR codes can be read by an optical device with the appropriate software. Such devices range from dedicated QR code readers to smartphones.

#### Example

![chart](https://image-charts.com/chart?chs=150x150&cht=qr&chl=Hello%20world&choe=UTF-8)

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

![chart](https://image-charts.com/chart?chs=200x200&cht=qr&chl=This%20is%20so%20awesome&choe=UTF-8)

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

## Error correction level and margin

`chld=<error_correction_level>|<margin>`

* *error_correction_level* - QR codes support four levels of error correction to enable recovery of missing, misread, or obscured data. Greater redundancy is achieved at the cost of being able to store less data. Here are the supported values:
    * L - [Default] Allows recovery of up to 7% data loss
    * M - Allows recovery of up to 15% data loss
    * Q - Allows recovery of up to 25% data loss
    * H - Allows recovery of up to 30% data loss
* *margin* - The width of the white border around the data portion of the code. This is in rows, not in pixels. The default value is 4.
