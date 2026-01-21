---
title: Limits and Quotas on API Requests
description: "Limits brings reliability. Learn what Image-Charts API limits are."
sidebar_position: 17
---

# Limits and Quotas on API Requests

This document describes the limits and quotas of requesting the Image-Charts API.

Image-Charts is used by millions of sites. We put limits and quotas on chart generation requests to protect the system from receiving more data than it can handle, and to ensure an equitable distribution of the system resources. The limits and quotas are subject to change.


## General quota limits

The following quotas apply to Image-Charts API;

- 90 queries per 10 seconds per **IP address** (thus 9 queries per second (QPS))

:::tip
Please [contact our support team](mailto:support@image-charts.com) if you have special needs.
:::


## Free API usage quota limits

The following quotas apply to Image-Charts API calls without authentication (`ichm` and `icac`)

- 10 queries per 1 minute per **IP address**

:::tip
If you wish to get higher throughput [please subscribe](https://www.image-charts.com/pricing).
:::

## Exceeding quota limits

If the quota of requesting Image-Charts API is exceeded, the API returns an error code `429` and a message that the account has exceeded the quota. When the threshold is met, the client will be blocked **for 1 minute**.
