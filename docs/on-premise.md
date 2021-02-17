---
meta_description: "Deploy and host Image-Charts inside your own infrastructure with our On-Premise docker container."
---
# On Premise Virtual Appliance

This section is dedicated to the [Image-Charts paying On Premise version](https://www.image-charts.com/pricing). This virtual appliance is a special docker image that can be deployed on your own server(s) in your own datacenter(s) or infrastructure.

## Features

- No **[rate-limits (quotas)](https://documentation.image-charts.com/limits-and-quotas/)**, you have full control over your deployment
- Every Enterprise and Enterprise+ plan features :
    - [retina mode](/reference/retina/)
    - [compound charts](/reference/compound-charts/)
    - [multiple axis](/reference/chart-axis/#visible-axes)
- **Removes** the need to sign URL with `ichm` and `icac` that exists for SaaS [Enterprise plans](/enterprise).

## Limitation

- There is no trial available for Image-Charts On Premise. Please try out Image-Charts through [our SaaS version](/).
- Font support is currently unavailable in Image-Charts On Premise.

## Download the container image

First contact [our support](mailto:support@image-charts.com) with your needs in term of traffic volume and number of deployments (replicas) wanted. Once subscribed to the On Premise plan you will receive a `license_file`. It contains the license expiration date as well as the serial number, it's mandatory to start the API. The email will also contains a **download link**.

```
curl "[download_link]" | docker load
```

!!! info "Download link expiration"
    Image-Charts download link will only be active for **7 days**

## Run the Image Charts service

```
docker run -it \
        -p 8080:8080 \
        --log-opt max-size=10m --log-opt max-file=5 \
        --restart=always \
        -v /path/to/your_license.lic:/license.lic \
        -e LICENSE_FILE_PATH=/license.lic \
        --entrypoint=/usr/src/app/image-charts \
        image-charts-on-premise:X.X.X
```

## Monitor the API

- Health check is available at `http://localhost:8080/_health`
- If the container receive a `SIGTERM` (e.g. `docker stop {container_id}`) `http://localhost:8080/_health` will yield a `500` HTTP error code but will still serve chart generation requests

## Stop the container

Send a `SIGKILL` to stop the container

```
docker kill {container_id}
```

## Environment variables

[Environment variables are the perfect way](https://12factor.net/config) to configure Image-Charts On Premise application.

- `PORT` (default `8080`): port to listen to

## Requirements

- CPU: 1 CPU per Image-Charts container
- Memory: 1Go minimum - 2Go recommended per Image-Charts container
- Disk: 2Gb
