# Limits and Quotas on API Requests

This document describes the limits and quotas of requesting the Image-Charts API.

Image-Charts is used by millions of sites. We put limits and quotas on chart generation requests to protect the system from receiving more data than it can handle, and to ensure an equitable distribution of the system resources. The limits and quotas are subject to change.


## General quota limits

The following quotas apply to Image-Charts API;

- 4 queries per second (QPS) per **IP address**

!!! tip 
    Please [contact our support team](mailto:support@image-charts.com) if you have special needs.


## Exceeding quota limits

If the quota of requesting Image-Charts API is exceeded, the API returns an error code `429` and a message that the account has exceeded the quota. When the threshold is met, the client will be blocked **for 1 minute**. 
