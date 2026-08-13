---
title: Image-Charts MCP server (AI agents)
description: "Give AI agents and MCP clients a tool that returns a permanent, hosted Image-Charts image URL that renders anywhere an <img> works, with no chart library and no runtime on the client."
sidebar_position: 20
---

# Image-Charts MCP server (AI agents)

The [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server turns an agent's chart request into a **permanent, hosted Image-Charts image URL**.

The agent gets back a string. That string renders server-side and embeds anywhere an image does: Markdown `![](url)`, HTML `<img src>`, email, Slack, Notion, a PDF report, a Jira ticket, or any no-code and low-code tool. There is **no chart library and no runtime on the client**. The receiving surface needs nothing but the ability to display an image.

## Why a URL

Most chart tooling hands an agent raw bytes or an in-memory preview that dies with the session. A hosted URL is different:

- **Persistent.** The same link keeps rendering long after the conversation ends.
- **Portable.** Paste it into an email, a Notion page, a Slack message, a PDF. It shows up.
- **Zero-runtime.** No JavaScript, no build step, no dependency on the receiving side.
- **Deterministic.** The chart is fully described by the URL, so it is cacheable and reproducible.

## Install & run

No install step. Run it straight from npm:

```bash
npx -y image-charts-mcp
```

That starts the server on the **stdio** transport, which is what MCP clients use. A stateless **StreamableHTTP** transport is also available:

```bash
npx -y image-charts-mcp --transport http --port 3000
# served at http://127.0.0.1:3000/mcp
```

## Client configuration

Add the server to any MCP-capable host (Claude Desktop, Claude Code, Cursor, …):

```json
{
  "mcpServers": {
    "image-charts": {
      "command": "npx",
      "args": ["-y", "image-charts-mcp"],
      "env": {
        "IMAGE_CHARTS_SECRET": "",
        "IMAGE_CHARTS_HOST": ""
      }
    }
  }
}
```

Both environment variables are **optional**. Leave them empty for the free, watermarked tier:

| Variable | Purpose |
|-|-|
| `IMAGE_CHARTS_SECRET` | [Enterprise](/enterprise) HMAC signing key. When set together with an account id (`icac`), every URL is HMAC-SHA256 signed. Stays server-side, never logged. |
| `IMAGE_CHARTS_HOST` | Dedicated Cloud host (e.g. `charts.acme.com`). URLs point at this host and are never signed. |

## The tools

The server exposes three tools.

### `create_chart`: describe a chart, get a URL

The high-level, Image-Charts-native tool. Pick a semantic `type` and supply data; the server maps it to the right Image-Charts parameters.

`type` is one of: `bar`, `bar_grouped`, `bar_stacked`, `bar_horizontal`, `line`, `area`, `pie`, `doughnut`, `radar`, `scatter`, `qr`, `graph`, `gauge`.

Common fields: `title`, `series` (`{ name?, data: number[] }`, or `{ name?, points: {x,y}[] }` for scatter), `labels`, `colors` (hex without `#`), `legend` (`true` / `"top"` / `"bottom"` / `"left"` / `"right"`), `size` (`{ width, height }`), plus the `qr` / `graph` / `gauge` option objects, `icac`, and `format` (`url` / `png` / `both`).

**Bar chart**

```json
{
  "type": "bar",
  "title": "Quarterly revenue",
  "series": [
    { "name": "EU", "data": [120, 90, 140] },
    { "name": "US", "data": [80, 130, 100] }
  ],
  "labels": ["Q1", "Q2", "Q3"],
  "colors": ["4285F4", "DB4437"],
  "legend": "bottom"
}
```

returns:

[![Quarterly revenue bar chart](https://image-charts.com/chart?cht=bvg&chd=a%3A120%2C90%2C140%7C80%2C130%2C100&chs=700x400&chxt=x%2Cy&chxl=0%3A%7CQ1%7CQ2%7CQ3&chco=4285F4%2CDB4437&chdl=EU%7CUS&chdlp=b&chtt=Quarterly+revenue)](https://editor.image-charts.com/chart?cht=bvg&chd=a%3A120%2C90%2C140%7C80%2C130%2C100&chs=700x400&chxt=x%2Cy&chxl=0%3A%7CQ1%7CQ2%7CQ3&chco=4285F4%2CDB4437&chdl=EU%7CUS&chdlp=b&chtt=Quarterly+revenue)

```
https://image-charts.com/chart?cht=bvg&chd=a:120,90,140|80,130,100&chs=700x400&chxt=x,y&chxl=0:|Q1|Q2|Q3&chco=4285F4,DB4437&chdl=EU|US&chdlp=b&chtt=Quarterly+revenue
```

**Pie chart**

```json
{
  "type": "pie",
  "title": "Traffic sources",
  "series": [{ "data": [40, 35, 25] }],
  "labels": ["Search", "Direct", "Social"],
  "colors": ["4285F4", "0F9D58", "F4B400"]
}
```

returns:

[![Traffic sources pie chart](https://image-charts.com/chart?cht=p&chd=a%3A40%2C35%2C25&chs=500x400&chl=Search%7CDirect%7CSocial&chco=4285F4%2C0F9D58%2CF4B400&chtt=Traffic+sources)](https://editor.image-charts.com/chart?cht=p&chd=a%3A40%2C35%2C25&chs=500x400&chl=Search%7CDirect%7CSocial&chco=4285F4%2C0F9D58%2CF4B400&chtt=Traffic+sources)

```
https://image-charts.com/chart?cht=p&chd=a:40,35,25&chs=500x400&chl=Search|Direct|Social&chco=4285F4,0F9D58,F4B400&chtt=Traffic+sources
```

**QR code**

```json
{
  "type": "qr",
  "qr": { "data": "https://www.image-charts.com", "errorCorrection": "M", "margin": 4 },
  "size": { "width": 300, "height": 300 }
}
```

returns:

[![QR code](https://image-charts.com/chart?cht=qr&chl=https%3A%2F%2Fwww.image-charts.com&choe=UTF-8&chld=M%7C4&chs=300x300)](https://editor.image-charts.com/chart?cht=qr&chl=https%3A%2F%2Fwww.image-charts.com&choe=UTF-8&chld=M%7C4&chs=300x300)

```
https://image-charts.com/chart?cht=qr&chl=https://www.image-charts.com&choe=UTF-8&chld=M|4&chs=300x300
```

> URLs are shown decoded for readability; the tool returns them percent-encoded.

### `image_charts_url`: raw parameter passthrough

The escape hatch. Pass raw Image-Charts parameters ([`cht`](/reference/chart-type), [`chd`](/reference/data-format), [`chs`](/reference/chart-size), [`chco`](/reference/color-format), [`chxt`](/reference/chart-axis), `chxl`, [`chm`](/reference/markers), `chbh`, …) and get the hosted URL, signed automatically when applicable. Use it for anything `create_chart` does not cover.

```json
{ "cht": "lc", "chd": "a:10,40,25,60", "chs": "600x300", "chco": "4285F4", "chm": "B,4285F433,0,0,0" }
```

returns:

[![Line chart with area fill](https://image-charts.com/chart?cht=lc&chd=a%3A10%2C40%2C25%2C60&chs=600x300&chco=4285F4&chm=B%2C4285F433%2C0%2C0%2C0)](https://editor.image-charts.com/chart?cht=lc&chd=a%3A10%2C40%2C25%2C60&chs=600x300&chco=4285F4&chm=B%2C4285F433%2C0%2C0%2C0)

### `list_chart_types`: discovery

Returns every semantic `type`, the Image-Charts `cht` it maps to, a description, the inputs it reads, and the concepts Image-Charts cannot render (funnel, treemap, sankey, heatmap, and so on). Call it first when you are unsure which type to use.

## Enterprise signing

[Image-Charts Enterprise](/enterprise) requires each URL to carry an HMAC-SHA256 signature. The server handles it for you:

1. Set `IMAGE_CHARTS_SECRET` in the server's environment (it stays server-side and is never logged).
2. Pass your account id as `icac` on `create_chart` or `image_charts_url`.

When both are present, the returned URL includes `&ichm=…`:

```
https://image-charts.com/chart?icac=ic_demo_account&cht=bvg&chd=a:1,2,3&chs=700x400&…&ichm=26d6d5b3…
```

If the secret is not configured, a bare `icac` cannot be signed, so it is dropped and you get a valid free-tier URL instead of a broken one.

On **Dedicated Cloud** (`IMAGE_CHARTS_HOST`), signing is not used at all. The dedicated host handles authorization at the edge, so `create_chart` and `image_charts_url` return unsigned URLs pointing at your host.

## See also

- [SDK and Libraries](/sdk-and-libraries): official libraries when you sign and build URLs in application code.
- [Enterprise](/enterprise): HMAC signing, custom fonts, retina, and more.
- [Chart types reference](/reference/chart-type): every `cht` value behind the semantic types above.
