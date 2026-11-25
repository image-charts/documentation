---
title: GraphViz API, render DOT graphs as PNG or SVG
sidebar_label: GraphViz Charts
description: "Render a GraphViz DOT graph as a PNG or SVG image from one URL: cht=gv plus your DOT code in chl. Six layout engines (dot, neato, fdp, circo, twopi, osage), examples and limits."
sidebar_position: 8
---

# GraphViz charts: render DOT graphs as images

Image-Charts renders [GraphViz](https://graphviz.org/) graphs on its servers. You put your graph, written in the DOT language, in a URL and get back a PNG (or SVG) image of the diagram. There is nothing to install, so the same URL works in an `<img>` tag, a Markdown README, an email, a Slack message or a PDF report.

## How do I turn DOT code into an image?

URL-encode your DOT code into the `chl` parameter and set `cht=gv`. The DOT code `digraph {a->b; b->c; a->c}` becomes:

```
https://image-charts.com/chart?cht=gv&chl=digraph%20%7Ba-%3Eb;b-%3Ec;a-%3Ec%7D
```

The response is a PNG image of the graph. Add `&chof=.svg` for a vector image, and `:<engine>` after `gv` to pick a layout engine, for example `cht=gv:neato`.

## Parameters

GraphViz charts *support a different set of required parameters*:

- `cht=gv[:<opt_engine>]` **Required**: see [GraphViz chart types](#chart-types)

- `chl=<DOT_string>` **Required**: The chart to draw, in DOT language notation, URL-encoded. You can find the DOT language reference on the [GraphViz website](https://graphviz.org/doc/info/lang.html), and more examples in [this DOT tutorial](https://graphs.grevian.org/example).

- `chof` *Optional*: `.png` (default) or `.svg`, see [output format](#output-format).

- `chd` *Not used* GraphViz rely on `chl` not `chd` to get its input data, we are following here the (weird) Google Image Charts API.

- `chs` *Not used* GraphViz computes the image size from the graph itself; a `chs` value is accepted and ignored.

## Examples

GraphViz is a package of open source tools for visualizing connectivity graphs. Each example below shows the rendered image (click it to open the chart in the editor) and the DOT code sent in `chl`.

#### Simple Graph

[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b;b%20--%20c;a%20--%20c;d%20--%20c;e%20--%20c;e%20--%20a;%7D&icac=documentation&ichm=53f9b2bc788829947c7d5f8798387b515c0786ed27a40b94aa912b0bb2909c02)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b;b%20--%20c;a%20--%20c;d%20--%20c;e%20--%20c;e%20--%20a;%7D&icac=documentation&ichm=53f9b2bc788829947c7d5f8798387b515c0786ed27a40b94aa912b0bb2909c02)

```
cht=gv
chl=graph {
    a -- b;
    b -- c;
    a -- c;
    d -- c;
    e -- c;
    e -- a;
}
```

#### K6

[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b;b%20--%20c;c%20--%20d;d%20--%20e;e%20--%20f;a%20--%20f;a%20--%20c;a%20--%20d;a%20--%20e;b%20--%20d;b%20--%20e;b%20--%20f;c%20--%20e;c%20--%20f;d%20--%20f;%7D&icac=documentation&ichm=097e9a0df3a4f2d3e8d3175684bfc59af8c72d22ab16801ede0adc788fe91b61)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b;b%20--%20c;c%20--%20d;d%20--%20e;e%20--%20f;a%20--%20f;a%20--%20c;a%20--%20d;a%20--%20e;b%20--%20d;b%20--%20e;b%20--%20f;c%20--%20e;c%20--%20f;d%20--%20f;%7D&icac=documentation&ichm=097e9a0df3a4f2d3e8d3175684bfc59af8c72d22ab16801ede0adc788fe91b61)

```
cht=gv
chl=graph {
    a -- b;
    b -- c;
    c -- d;
    d -- e;
    e -- f;
    a -- f;
    a -- c;
    a -- d;
    a -- e;
    b -- d;
    b -- e;
    b -- f;
    c -- e;
    c -- f;
    d -- f;
}
```

#### Simple Digraph

[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%7Ba%20-%3E%20b;b%20-%3E%20c;c%20-%3E%20d;d%20-%3E%20a;%7D&icac=documentation&ichm=1c0bdf95564661b3a33db3283308fd3ad6ae6792c9dcc276456e8abbe4645139)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%7Ba%20-%3E%20b;b%20-%3E%20c;c%20-%3E%20d;d%20-%3E%20a;%7D&icac=documentation&ichm=1c0bdf95564661b3a33db3283308fd3ad6ae6792c9dcc276456e8abbe4645139)

```
cht=gv
chl=digraph {
    a -> b;
    b -> c;
    c -> d;
    d -> a;
}
```

#### Full Digraph

[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20%7Ba%20-%3E%20b%5Blabel=%220.2%22,weight=%220.2%22%5D;a%20-%3E%20c%5Blabel=%220.4%22,weight=%220.4%22%5D;c%20-%3E%20b%5Blabel=%220.6%22,weight=%220.6%22%5D;c%20-%3E%20e%5Blabel=%220.6%22,weight=%220.6%22%5D;e%20-%3E%20e%5Blabel=%220.1%22,weight=%220.1%22%5D;e%20-%3E%20b%5Blabel=%220.7%22,weight=%220.7%22%5D;%7D&icac=documentation&ichm=9c120a955ec70ff13d039a16f28f6eb780ab71c3da345d33439230a266887b7b)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20%7Ba%20-%3E%20b%5Blabel=%220.2%22,weight=%220.2%22%5D;a%20-%3E%20c%5Blabel=%220.4%22,weight=%220.4%22%5D;c%20-%3E%20b%5Blabel=%220.6%22,weight=%220.6%22%5D;c%20-%3E%20e%5Blabel=%220.6%22,weight=%220.6%22%5D;e%20-%3E%20e%5Blabel=%220.1%22,weight=%220.1%22%5D;e%20-%3E%20b%5Blabel=%220.7%22,weight=%220.7%22%5D;%7D&icac=documentation&ichm=9c120a955ec70ff13d039a16f28f6eb780ab71c3da345d33439230a266887b7b)

```
cht=gv
chl=digraph {
    a -> b[label="0.2",weight="0.2"];
    a -> c[label="0.4",weight="0.4"];
    c -> b[label="0.6",weight="0.6"];
    c -> e[label="0.6",weight="0.6"];
    e -> e[label="0.1",weight="0.1"];
    e -> b[label="0.7",weight="0.7"];
}
```

#### Showing A Path

[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b%5Bcolor=red,penwidth=3.0%5D;b%20--%20c;c%20--%20d%5Bcolor=red,penwidth=3.0%5D;d%20--%20e;e%20--%20f;a%20--%20d;b%20--%20d%5Bcolor=red,penwidth=3.0%5D;c%20--%20f%5Bcolor=red,penwidth=3.0%5D;%7D&icac=documentation&ichm=aaa27782ccd31665a5c5647481aceaa2bcbcaf20bd654a427b64c29e5cbc439d)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b%5Bcolor=red,penwidth=3.0%5D;b%20--%20c;c%20--%20d%5Bcolor=red,penwidth=3.0%5D;d%20--%20e;e%20--%20f;a%20--%20d;b%20--%20d%5Bcolor=red,penwidth=3.0%5D;c%20--%20f%5Bcolor=red,penwidth=3.0%5D;%7D&icac=documentation&ichm=aaa27782ccd31665a5c5647481aceaa2bcbcaf20bd654a427b64c29e5cbc439d)


```
cht=gv
chl=graph {
    a -- b[color=red,penwidth=3.0];
    b -- c;
    c -- d[color=red,penwidth=3.0];
    d -- e;
    e -- f;
    a -- d;
    b -- d[color=red,penwidth=3.0];
    c -- f[color=red,penwidth=3.0];
}
```

Note that there's also a shorthand method as follows:

[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b%20--%20d%20--%20c%20--%20f%5Bcolor=red,penwidth=3.0%5D;b%20--%20c;d%20--%20e;e%20--%20f;a%20--%20d;%7D&icac=documentation&ichm=830e5825a4fd142d3647e3c3ff670ebf27e5f510cdab7437bfb60b8a8408abf8)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b%20--%20d%20--%20c%20--%20f%5Bcolor=red,penwidth=3.0%5D;b%20--%20c;d%20--%20e;e%20--%20f;a%20--%20d;%7D&icac=documentation&ichm=830e5825a4fd142d3647e3c3ff670ebf27e5f510cdab7437bfb60b8a8408abf8)

```
cht=gv
chl=graph {
    a -- b -- d -- c -- f[color=red,penwidth=3.0];
    b -- c;
    d -- e;
    e -- f;
    a -- d;
}
```

#### Subgraphs

Please note there are some quirks here, First the name of the subgraphs are important, to be visually separated they must be prefixed with cluster_ as shown below, and second only the `cht=gv:dot` and `cht=gv:fdp` layout support subgraphs (See the graph generation page for more information on the layout methods)

[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20%7Bsubgraph%20cluster_0%20%7Blabel=%22Subgraph%20A%22;a%20-%3E%20b;b%20-%3E%20c;c%20-%3E%20d;%7Dsubgraph%20cluster_1%20%7Blabel=%22Subgraph%20B%22;a%20-%3E%20f;f%20-%3E%20c;%7D%7D&icac=documentation&ichm=65f7486e4f496421484ee469175a7a9cfcd2a61bdf7d66490531e6a8c1bf6017)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20%7Bsubgraph%20cluster_0%20%7Blabel=%22Subgraph%20A%22;a%20-%3E%20b;b%20-%3E%20c;c%20-%3E%20d;%7Dsubgraph%20cluster_1%20%7Blabel=%22Subgraph%20B%22;a%20-%3E%20f;f%20-%3E%20c;%7D%7D&icac=documentation&ichm=65f7486e4f496421484ee469175a7a9cfcd2a61bdf7d66490531e6a8c1bf6017)

```
cht=gv
chl=digraph {
    subgraph cluster_0 {
        label="Subgraph A";
        a -> b;
        b -> c;
        c -> d;
    }

    subgraph cluster_1 {
        label="Subgraph B";
        a -> f;
        f -> c;
    }
}
```


Another Example of a Subgraph, In this example I group nodes together seperately from their edges, And also uses the graph attribute splines=line; to specify that edges should be drawn only as straight lines, no curves allowed.

[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Bsplines=line;subgraph%20cluster_0%20%7Blabel=%22Subgraph%20A%22;a;%20b;%20c%7Dsubgraph%20cluster_1%20%7Blabel=%22Subgraph%20B%22;d;%20e;%7Da%20--%20e;a%20--%20d;b%20--%20d;b%20--%20e;c%20--%20d;c%20--%20e;%7D&icac=documentation&ichm=e131081320f7f2a27ce6b1bccd2a5a1190f6f79e7d330b9deebc3e77e8f6c8cb)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Bsplines=line;subgraph%20cluster_0%20%7Blabel=%22Subgraph%20A%22;a;%20b;%20c%7Dsubgraph%20cluster_1%20%7Blabel=%22Subgraph%20B%22;d;%20e;%7Da%20--%20e;a%20--%20d;b%20--%20d;b%20--%20e;c%20--%20d;c%20--%20e;%7D&icac=documentation&ichm=e131081320f7f2a27ce6b1bccd2a5a1190f6f79e7d330b9deebc3e77e8f6c8cb)

```
cht=gv
chl=graph {
    splines=line;
    subgraph cluster_0 {
        label="Subgraph A";
        a; b; c
    }

    subgraph cluster_1 {
        label="Subgraph B";
        d; e;
    }

    a -- e;
    a -- d;
    b -- d;
    b -- e;
    c -- d;
    c -- e;
}
```

#### Record nodes

A record node is a box with fields represented by alternating rows of horizontal or vertical subboxes. Flipping between horizontal and vertical layouts is done by nesting fields in braces `{...}`. ([Learn more about record nodes.](https://www.graphviz.org/doc/info/shapes.html#record))

[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20structs%20%7Bnode%20%5Bshape=record%5D;struct1%20%5Blabel=%22%3Cf0%3E%20left%7C%3Cf1%3E%20middle%7C%3Cf2%3E%20right%22%5D;struct2%20%5Blabel=%22%3Cf0%3E%20one%7C%3Cf1%3E%20two%22%5D;struct3%20%5Blabel=%22hello%20world%20%7C%7B%20b%20%7C%7Bc%7C%3Chere%3E%20d%7Ce%7D%7C%20f%7D%7C%20g%20%7C%20h%22%5D;struct1:f1%20-%3E%20struct2:f0;struct1:f2%20-%3E%20struct3:here;%7D&icac=documentation&ichm=d91d9796936edad0e997b8ccb78d30a8f9b707c89b1ef776d812279315030d6e)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20structs%20%7Bnode%20%5Bshape=record%5D;struct1%20%5Blabel=%22%3Cf0%3E%20left%7C%3Cf1%3E%20middle%7C%3Cf2%3E%20right%22%5D;struct2%20%5Blabel=%22%3Cf0%3E%20one%7C%3Cf1%3E%20two%22%5D;struct3%20%5Blabel=%22hello%20world%20%7C%7B%20b%20%7C%7Bc%7C%3Chere%3E%20d%7Ce%7D%7C%20f%7D%7C%20g%20%7C%20h%22%5D;struct1:f1%20-%3E%20struct2:f0;struct1:f2%20-%3E%20struct3:here;%7D&icac=documentation&ichm=d91d9796936edad0e997b8ccb78d30a8f9b707c89b1ef776d812279315030d6e)

```
digraph structs {
    node [shape=record];
    struct1 [label="<f0> left|<f1> middle|<f2> right"];
    struct2 [label="<f0> one|<f1> two"];
    struct3 [label="hello world |{ b |{c|<here> d|e}| f}| g | h"];
    struct1:f1 -> struct2:f0;
    struct1:f2 -> struct3:here;
}
```

#### Large Graphs

To make it easier to input large graph descriptions, One may group edges together with a set of braces, It may also help to lay the graph out left to right instead of top to bottom.

[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Brankdir=LR;a%20--%20%7B%20b%20c%20d%20%7D;b%20--%20%7B%20c%20e%20%7D;c%20--%20%7B%20e%20f%20%7D;d%20--%20%7B%20f%20g%20%7D;e%20--%20h;f%20--%20%7B%20h%20i%20j%20g%20%7D;g%20--%20k;h%20--%20%7B%20o%20l%20%7D;i%20--%20%7B%20l%20m%20j%20%7D;j%20--%20%7B%20m%20n%20k%20%7D;k%20--%20%7B%20n%20r%20%7D;l%20--%20%7B%20o%20m%20%7D;m%20--%20%7B%20o%20p%20n%20%7D;n%20--%20%7B%20q%20r%20%7D;o%20--%20%7B%20s%20p%20%7D;p%20--%20%7B%20s%20t%20q%20%7D;q%20--%20%7B%20t%20r%20%7D;r%20--%20t;s%20--%20z;t%20--%20z;%7D&icac=documentation&ichm=5fc49c48168d7c7adf7cac3be7b86ab486684fa23128318e977ae24504fa3345)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Brankdir=LR;a%20--%20%7B%20b%20c%20d%20%7D;b%20--%20%7B%20c%20e%20%7D;c%20--%20%7B%20e%20f%20%7D;d%20--%20%7B%20f%20g%20%7D;e%20--%20h;f%20--%20%7B%20h%20i%20j%20g%20%7D;g%20--%20k;h%20--%20%7B%20o%20l%20%7D;i%20--%20%7B%20l%20m%20j%20%7D;j%20--%20%7B%20m%20n%20k%20%7D;k%20--%20%7B%20n%20r%20%7D;l%20--%20%7B%20o%20m%20%7D;m%20--%20%7B%20o%20p%20n%20%7D;n%20--%20%7B%20q%20r%20%7D;o%20--%20%7B%20s%20p%20%7D;p%20--%20%7B%20s%20t%20q%20%7D;q%20--%20%7B%20t%20r%20%7D;r%20--%20t;s%20--%20z;t%20--%20z;%7D&icac=documentation&ichm=5fc49c48168d7c7adf7cac3be7b86ab486684fa23128318e977ae24504fa3345)

```
cht=gv
chl=graph {
    rankdir=LR; // Left to Right, instead of Top to Bottom
    a -- { b c d };
    b -- { c e };
    c -- { e f };
    d -- { f g };
    e -- h;
    f -- { h i j g };
    g -- k;
    h -- { o l };
    i -- { l m j };
    j -- { m n k };
    k -- { n r };
    l -- { o m };
    m -- { o p n };
    n -- { q r };
    o -- { s p };
    p -- { s t q };
    q -- { t r };
    r -- t;
    s -- z;
    t -- z;
}
```

#### Advanced graph

The dot language is really powerful, they are lot of ways to customize your graph, if you wish to read more take a look at the [dot guide](https://www.graphviz.org/pdf/dotguide.pdf).

```
digraph G {
  size ="4,4";
  main [shape=box];
  main -> parse [weight=8];
  parse -> execute;
  main -> init [style=dotted];
  main -> cleanup;
  execute -> { make_string; printf}
  init -> make_string;
  edge [color=red];
  main -> printf [style=bold,label="100 times"];
  make_string [label="make a\nstring"];
  node [shape=box,style=filled,color=".7 .3 1.0"];
  execute -> compare;
}
```

[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20G%20%7Bsize%20%3D%224%2C4%22%3Bmain%20%5Bshape%3Dbox%5D%3Bmain%20-%3E%20parse%20%5Bweight%3D8%5D%3Bparse%20-%3E%20execute%3Bmain%20-%3E%20init%20%5Bstyle%3Ddotted%5D%3Bmain%20-%3E%20cleanup%3Bexecute%20-%3E%20%7B%20make_string%3B%20printf%7Dinit%20-%3E%20make_string%3Bedge%20%5Bcolor%3Dred%5D%3Bmain%20-%3E%20printf%20%5Bstyle%3Dbold%2Clabel%3D%22100%20times%22%5D%3Bmake_string%20%5Blabel%3D%22make%20a%0Astring%22%5D%3Bnode%20%5Bshape%3Dbox%2Cstyle%3Dfilled%2Ccolor%3D%22.7%20.3%201.0%22%5D%3Bexecute%20-%3E%20compare%3B%7D&icac=documentation&ichm=4925b0ec907e331ed56a978ec9acd256a54c02d95e29b186d24f18cddd60eca0)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20G%20%7Bsize%20%3D%224%2C4%22%3Bmain%20%5Bshape%3Dbox%5D%3Bmain%20-%3E%20parse%20%5Bweight%3D8%5D%3Bparse%20-%3E%20execute%3Bmain%20-%3E%20init%20%5Bstyle%3Ddotted%5D%3Bmain%20-%3E%20cleanup%3Bexecute%20-%3E%20%7B%20make_string%3B%20printf%7Dinit%20-%3E%20make_string%3Bedge%20%5Bcolor%3Dred%5D%3Bmain%20-%3E%20printf%20%5Bstyle%3Dbold%2Clabel%3D%22100%20times%22%5D%3Bmake_string%20%5Blabel%3D%22make%20a%0Astring%22%5D%3Bnode%20%5Bshape%3Dbox%2Cstyle%3Dfilled%2Ccolor%3D%22.7%20.3%201.0%22%5D%3Bexecute%20-%3E%20compare%3B%7D&icac=documentation&ichm=4925b0ec907e331ed56a978ec9acd256a54c02d95e29b186d24f18cddd60eca0)

## Chart Types

Specifies a GraphViz chart. You can optionally specify a GraphViz engine (default is `dot` layout engine).

#### Syntax

```
cht=gv[:<opt_engine>]
```

If you want to specify a layout engine, add a colon `:` and one of the following strings for `<opt_engine>`. Any other engine name (for example `sfdp`) returns a `400` validation error.

- `dot`: "hierarchical" or layered drawings of directed graphs. This is the default tool to use if edges have directionality.

- `neato`: "spring model'' layouts.  This is the default tool to use if the graph is not too large (about 100 nodes) and you don't know anything else about it. Neato attempts to minimize a global energy function, which is equivalent to statistical multi-dimensional scaling.

- `fdp`: "spring model'' layouts similar to those of neato, but does this by reducing forces rather than working with energy.

- `twopi`: radial layouts, after Graham Wills 97. Nodes are placed on concentric circles depending their distance from a given root node.

- `circo`: circular layout, after Six and Tollis 99, Kauffman and Wiese 02. This is suitable for certain diagrams of multiple cyclic structures, such as certain telecommunications networks.

- `osage`: clustered layout. It draws each cluster (`subgraph cluster_*`) as a packed box, useful for grouping nodes without many edges.

Which engine to pick:

| Your graph | Engine |
|---|---|
| Directed flow: pipeline, dependency tree, state machine, org chart | `dot` (default) |
| Undirected network under about 100 nodes | `neato` or `fdp` |
| One central node with rings around it | `twopi` |
| Rings and cycles, network loops | `circo` |
| Groups of nodes in clusters | `osage` |

## Output format

Graphs can be rendered in different format using `chof` query parameter. Without `chof`, the API returns a PNG.

- `chof=.png`: `png` bitmap image file format (default)
- `chof=.svg`: `svg` vector image file format

Example below is a graph generated as a png image:

![Dependency graph as a png image](https://image-charts.com/chart?chl=graph%20%7Ba%20--%20b%3Bb%20--%20c%3Bc%20--%20d%3Bd%20--%20e%3Be%20--%20f%3Ba%20--%20f%3Ba%20--%20c%3Ba%20--%20d%3Ba%20--%20e%3Bb%20--%20d%3Bb%20--%20e%3Bb%20--%20f%3Bc%20--%20e%3Bc%20--%20f%3Bd%20--%20f%3B%7D&chof=.png&chs=700x200&cht=gv&icac=documentation&ichm=143d52fab1fcd4694c5c4f8a89b36740263b7e4a82a796fedab9bb6c9c7d3318)

Here is the same graph generated as an svg image:

![Dependency graph as a svg image](https://image-charts.com/chart?chl=graph%20%7Ba%20--%20b%3Bb%20--%20c%3Bc%20--%20d%3Bd%20--%20e%3Be%20--%20f%3Ba%20--%20f%3Ba%20--%20c%3Ba%20--%20d%3Ba%20--%20e%3Bb%20--%20d%3Bb%20--%20e%3Bb%20--%20f%3Bc%20--%20e%3Bc%20--%20f%3Bd%20--%20f%3B%7D&chof=.svg&chs=700x200&cht=gv&icac=documentation&ichm=6eb410d0b3e6ff40053520157edbf202458ed812ba9d030000d572b62a00b4b7)

## Known limitations

Here are some tips and known limitations in the current GraphViz charts:

- Animation through `chan` is not supported: a GraphViz URL with `chan` still returns a PNG
- The `graph` attribute size should be not be used; `chs` is also not supported
- The maximum number of nodes is 200, and the maximum for edges is 400. [Contact us if you need more](mailto:support@image-charts.com)
- Anti-aliasing, transparency, and alternate fonts are not supported
- The `node` attributes `image` and `shapefile` are not supported and will be silently ignored if present
- The graph attributes ratio, margin, and pad are not supported and will be ignored if present

## Errors

A DOT syntax error returns HTTP `400` with the error code `IC_GRAPHVIZ_INVALID_SYNTAX` in the `x-ic-error-code` response header, and the parser message in `x-ic-error-validation`, for example:

```
In `chl` parameter, Expected "subgraph", "{", comment, identifier or whitespace but "}" found.
```

The full list of codes is on the [errors page](/errors).

## Coming from Google Image Charts?

Google Image Charts had the same `cht=gv` chart and has been shut down. Image-Charts accepts the same `cht=gv` and `chl` parameters, so you only change the host of your URLs to `image-charts.com` (see [migrating from Google Image Charts](https://www.image-charts.com/migrating-from-google-image-charts)).

## FAQ

### Is there a GraphViz API that returns an image from a URL?

Yes. Send your DOT code in `chl` with `cht=gv` to `https://image-charts.com/chart` and the response is the rendered image, PNG by default or SVG with `chof=.svg`. No GraphViz install and no server on your side.

### Which layout engines are supported?

`dot` (default), `neato`, `fdp`, `twopi`, `circo` and `osage`. Choose one with `cht=gv:<engine>`, for example `cht=gv:circo`.

### How do I set the image size?

You cannot set it with `chs`, because the size comes from the graph. To get a smaller or larger image, change the graph itself (`rankdir=LR`, node `fontsize`, `nodesep`, `ranksep`), or request an SVG with `chof=.svg` and scale it in your page.

### How big can the graph be?

Up to 200 nodes and 400 edges. [Contact us](mailto:support@image-charts.com) if you need more.

### Why does my URL return an error image?

Most of the time the DOT code is not URL-encoded (`#`, `&` and `+` must be encoded inside `chl`) or has a syntax error. The `x-ic-error-validation` response header gives the parser message.
