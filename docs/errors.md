---
title: Errors
description: "Learn how to handle and recover from errors received from the Image Charts API"
sidebar_position: 16
---

import GeneratedErrorCodes from './GENERATED-error-codes.md';

# Errors

Image-Charts uses conventional HTTP response codes to indicate the success or failure of an API request. In general:

- `2xx` success status codes confirm that your request generated a chart
- `4xx` error status codes indicate an error because of the information provided (e.g., a required parameter was omitted or specified with an unsupported format, etc.).
- `5xx` error status codes are rare and indicate an error with Image-Charts's servers

Error HTTP responses can also contains [error codes](#error-codes), some of them can be [retried](#error-retries).

## HTTP Status Code

- `200` OK - The chart was generated as expected.
- `400` Bad Request - The request was unacceptable, often due to missing required parameter or malformed one. Check [error code and error details](#error-codes) for more information.
- `401` Unauthorized - No valid API key provided.
- `403` Forbidden - The API key doesn't have permissions to perform the request.
- `429` Too Many Requests - The request reach the limits, see [error retries](#error-retries).
- `500` Server Errors - Something went wrong on Image-Charts's end. (These are very rare.)
- `502` Bad Gateway - Something went wrong on Image-Charts's end (rare case), see [error retries](#error-retries).


## Error codes

Some `4xx` errors that could be handled programmatically (e.g., a parameter is malformed) include an error code in the `x-ic-error-code` HTTP header response parameter. Below is a list of possible error codes that can be returned, along with additional information about how to resolve them.
Regarding the error code an additional `x-ic-error-validation` http header parameter with further details is also sometimes included.

<GeneratedErrorCodes />

## Error handling

Your Image-Charts integration might have to deal with errors at some point when making requests to the Image-Charts API.
These errors fall into three major categories:

- [Content error](#content-errors) -- Invalid content in the API request
- [Network error](#network-errors) -- Intermittent communication problems between client and server.
- [Server error](#server-errors) -- A problem on Image-Charts's servers.

### Content Errors

Content errors are the result of the contents of an API request being invalid and return an HTTP response with a `4xx` error code.
For example, the API servers might return a 401 if an invalid [account_id or signature](/enterprise) was provided, or a `400` if a required parameter was missing.
Integrations should correct the original request, and try again.
Depending on the type of user error (e.g., a malformed data parameter), it may be possible to handle the problem programmatically.
In these cases, include a code field to help an integration react appropriately. See [error codes](#error-codes) for more details.

### Network Errors

Network errors are the result of connectivity problems between client and server and return low-level errors like socket or timeout exceptions.
For example, a client might time out while trying to read from Image-Charts's servers, or an API response might never be received because a connection terminates prematurely.
A network error wouldn't necessarily have otherwise been a successful request--it can also be another type of error that's been cloaked by an intermittent problem.

This class of errors is where the value of request retries is most obvious.
When intermittent problems occur, clients are usually left in a state where they don't know whether or not the server received the request.
To get a definitive answer, they should retry such requests with the same parameters until they're able to receive a result from the server.

Most client libraries can generate retry requests automatically, but need to be configured to do so.
They perform their first retry quickly after the first failure, and subsequent retries on an exponential backoff schedule (see [error retries](#error-retries) for more details), the assumption being that a single failure is often a random occurrence, but a pattern of repeated failures likely represents a chronic problem.

### Server Errors

Server errors are the result of a problem with Image-Charts's servers and return an HTTP response with a `5xx` error code.
These errors are the most difficult to handle and we work to make them as rare as possible but integrations should be able to handle them when they do arise.

You should treat the result of a `500` request as indeterminate. The most likely time to observe one is during a production incident, and generally during such an incident's remediation. Image-Charts engineers will examine failed requests that result in 500s and fix them.

## Error retries

Clients may retry on [network errors](#network-errors), `429` and `502` http status code errors with exponential backoff. The minimum delay should be 1s.

When a client retry calls without waiting, it can produce a heavy load on the Image-Charts servers.
Image-Charts infrastructure automatically [limits IP](/limits-and-quotas) that generate excessive load.

To avoid triggering these limits, you are strongly encouraged to implement truncated exponential backoff with introduced jitter.

Truncated exponential backoff is a standard error-handling strategy for network applications.
In this approach, a client periodically retries a failed request with increasing delays between requests.
Clients should use truncated exponential backoff for all requests to Image-Charts that return HTTP `502` and `429` response codes.
