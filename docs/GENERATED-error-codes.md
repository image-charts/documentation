- `IC_INVALID_SIGNATURE`: Invalid signature. Please check our [documentation and code examples](https://bit.ly/HMACENT)
- `IC_ACCOUNT_ID_NOT_FOUND`: ACCOUNT_ID not found, you must be an Image-Charts subscriber
- `IC_MISSING_ENT_PARAMETER`: The `icac` (ACCOUNT_ID) and `ichm` (HMAC-SHA256 request signature) query parameters must both be defined if specified. [Learn more](https://bit.ly/HMACENT)
- `IC_RETINA_ERROR`: The retina (high resolution image) feature is only available on [Enterprise+ subscriptions](https://www.image-charts.com/pricing). Please go to [Image-Charts website](https://www.image-charts.com) to subscribe or contact our [support](mailto:support@image-charts.com) to upgrade your subscription.
- `IC_LOCALE_ERROR`: Language localization feature is only available on [Enterprise+ subscriptions](https://www.image-charts.com/pricing). Contact our [support](mailto:support@image-charts.com) to upgrade your account. Read more on [our documentation](https://documentation.image-charts.com/reference/localization/)
- `IC_CHARTJS_RENDERING_ERROR`: Image-Charts could not render Chart.js chart
- `IC_UNAUTHORIZED_FONT_STYLE_ERROR`: Font-style feature is only available on [Enterprise+ subscriptions](https://www.image-charts.com/pricing)
- `IC_UNAUTHORIZED_FONT_FAMILY_ERROR`: Font-family feature is only available on [Enterprise+ subscriptions](https://www.image-charts.com/pricing)
- `IC_UNAUTHORIZED_STYLE_TITLE_ERROR`: Stylize title with font-family and/or font-style is only available on [Enterprise+ subscriptions](https://www.image-charts.com/pricing)
- `IC_UNAUTHORIZED_MULTI_AXIS_ERROR`: Simple axis (chxt=x,y) are free forever. Multiple axis feature (chxt=x,x,y,y,t,t,r,r) is only available for [Enterprise+ subscriptions](https://www.image-charts.com/pricing)
- `IC_UNAUTHORIZED_COMPOUND_CHART_ERROR`: Compound charts (line markers) feature is only available on [Enterprise+ subscriptions](https://www.image-charts.com/pricing)
- `IC_UNAUTHORIZED_BACKGROUND_IMAGE_CHART_ERROR`: Background images are only available on [Enterprise and Enterprise+ subscriptions](https://www.image-charts.com/pricing)
- `IS_VALIDATION_ERROR`: There is one or more request parameters that are malformed. Check the associated `x-ic-error-validation` response http header for details.
- `IC_GRAPHVIZ_INVALID_SYNTAX`: The GraphViz chart could not be generated because of invalid syntax. Check that the [chl](https://documentation.image-charts.com/graph-viz-charts/) request parameter is valid.
- `IC_GRAPHVIZ_ERROR`: The GraphViz chart could not be generated due to internal GraphViz error.
- `IC_GRAPHVIZ_MAX_EDGES_REACHED`: The requested Graph has reached the maximum allowed number of edges (`400`). See GraphViz [known limitations](https://documentation.image-charts.com/graph-viz-charts/#known-limitations) for more details.
- `IC_GRAPHVIZ_MAX_NODES_REACHED`: The requested Graph has reached the maximum allowed number of nodes (`200`). See GraphViz [known limitations](https://documentation.image-charts.com/graph-viz-charts/#known-limitations) for more details.
- `IC_QRCODE_TOO_MUCH_DATA`: QRCode maximum data size exceeded
- `IC_BAD_JSON_ERROR`: Value passed in query parameter `chart` (or `c'`) must be a json, ES5 json or a base64 encoded json
- `IC_BAD_BACKGROUND_COLOR_ERROR`: Background color must be a valid rgba, rgb, hex or text color
- `IC_BAD_BACKGROUND_IMAGE_MAX_SIZE_REACHED_ERROR`: Background image size is too big. It should not exceed `1048576` bytes
- `IC_BAD_BACKGROUND_IMAGE_MAX_REDIRECTS_REACHED_ERROR`: Could not download the image, max request redirects limit (`2`) reached
- `IC_BAD_BACKGROUND_IMAGE_MAX_TIMEOUT_REACHED_ERROR`: Could not download the image, the request timeout is reached (`2500`ms)
- `IC_BAD_BACKGROUND_IMAGE_COULD_BE_DOWNLOADED_ERROR`: Could not download the image, an error related to DNS or Network occurred
- `IC_BAD_DATA_FORMAT`: .data attribute must contain a "datasets" attribute with a "data" array inside it. For instance: 
  ```{
    type: 'bar',
    data: {
        datasets: [{
            data: [10, 20, 30, 40]
        }]
    }
  }```
  
- `IC_EMAIL_NOT_SENT`: Could not send email
- `IC_SEND_EMAIL_MISSING`: email attribute missing, could not sent email
- `IC_CONTACT_NOT_UPDATED`: Could not update contact
- `IC_METADATA_EMAIL_MISSING`: email attribute missing, could not create or update metadata
- `IC_UPDATE_METADATA_FAILED`: Could not create or update Metadata
- `IC_CUSTOMER_SEARCH_FAILED`: Customer search failed
- `IC_DATA_LOADING_FAILED`: Data loading failed