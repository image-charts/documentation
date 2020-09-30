---
meta_description: "Image-charts API offers several types of charts such as graph viz charts. This documentation shows you how to use the API url parameters to generate a chart."
---
# GraphViz Charts

This section describes how to create graph charts using Image-Chart API.

## Overview

GraphViz is a package of open source tools for visualizing connectivity graphs. You can create GraphViz graphs using the [DOT language](https://graphs.grevian.org/example) and your choice of layout engines.

GraphViz charts *support a different set of required parameters*:

- `cht=gv[:<opt_engine>]` **Required**: see [GraphViz chart types](#chart-types)

- `chd` *Not used* GraphViz rely on `chl` not `chd` to get its input data, we are following here the (weird) Google Image Charts API.

- `chs` *Not used* you do not need to specify a chart size, output image format will be a scalable vector graphic (svg).

- `chl=<DOT_string>` **Required**: The chart to draw, in DOT language notation. You can find the DOT language reference on the GraphViz website.

#### Simple Graph

<center>
[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b;b%20--%20c;a%20--%20c;d%20--%20c;e%20--%20c;e%20--%20a;%7D)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b;b%20--%20c;a%20--%20c;d%20--%20c;e%20--%20c;e%20--%20a;%7D)
</center>

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

<center>
[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b;b%20--%20c;c%20--%20d;d%20--%20e;e%20--%20f;a%20--%20f;a%20--%20c;a%20--%20d;a%20--%20e;b%20--%20d;b%20--%20e;b%20--%20f;c%20--%20e;c%20--%20f;d%20--%20f;%7D)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b;b%20--%20c;c%20--%20d;d%20--%20e;e%20--%20f;a%20--%20f;a%20--%20c;a%20--%20d;a%20--%20e;b%20--%20d;b%20--%20e;b%20--%20f;c%20--%20e;c%20--%20f;d%20--%20f;%7D)
</center>

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

<center>
[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%7Ba%20-%3E%20b;b%20-%3E%20c;c%20-%3E%20d;d%20-%3E%20a;%7D)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%7Ba%20-%3E%20b;b%20-%3E%20c;c%20-%3E%20d;d%20-%3E%20a;%7D)
</center>

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

<center>
[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20%7Ba%20-%3E%20b%5Blabel=%220.2%22,weight=%220.2%22%5D;a%20-%3E%20c%5Blabel=%220.4%22,weight=%220.4%22%5D;c%20-%3E%20b%5Blabel=%220.6%22,weight=%220.6%22%5D;c%20-%3E%20e%5Blabel=%220.6%22,weight=%220.6%22%5D;e%20-%3E%20e%5Blabel=%220.1%22,weight=%220.1%22%5D;e%20-%3E%20b%5Blabel=%220.7%22,weight=%220.7%22%5D;%7D)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20%7Ba%20-%3E%20b%5Blabel=%220.2%22,weight=%220.2%22%5D;a%20-%3E%20c%5Blabel=%220.4%22,weight=%220.4%22%5D;c%20-%3E%20b%5Blabel=%220.6%22,weight=%220.6%22%5D;c%20-%3E%20e%5Blabel=%220.6%22,weight=%220.6%22%5D;e%20-%3E%20e%5Blabel=%220.1%22,weight=%220.1%22%5D;e%20-%3E%20b%5Blabel=%220.7%22,weight=%220.7%22%5D;%7D)
</center>

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

<center>
[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b%5Bcolor=red,penwidth=3.0%5D;b%20--%20c;c%20--%20d%5Bcolor=red,penwidth=3.0%5D;d%20--%20e;e%20--%20f;a%20--%20d;b%20--%20d%5Bcolor=red,penwidth=3.0%5D;c%20--%20f%5Bcolor=red,penwidth=3.0%5D;%7D)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b%5Bcolor=red,penwidth=3.0%5D;b%20--%20c;c%20--%20d%5Bcolor=red,penwidth=3.0%5D;d%20--%20e;e%20--%20f;a%20--%20d;b%20--%20d%5Bcolor=red,penwidth=3.0%5D;c%20--%20f%5Bcolor=red,penwidth=3.0%5D;%7D)
</center>


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

<center>
[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b%20--%20d%20--%20c%20--%20f%5Bcolor=red,penwidth=3.0%5D;b%20--%20c;d%20--%20e;e%20--%20f;a%20--%20d;%7D)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b%20--%20d%20--%20c%20--%20f%5Bcolor=red,penwidth=3.0%5D;b%20--%20c;d%20--%20e;e%20--%20f;a%20--%20d;%7D)
</center>

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

<center>
[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20%7Bsubgraph%20cluster_0%20%7Blabel=%22Subgraph%20A%22;a%20-%3E%20b;b%20-%3E%20c;c%20-%3E%20d;%7Dsubgraph%20cluster_1%20%7Blabel=%22Subgraph%20B%22;a%20-%3E%20f;f%20-%3E%20c;%7D%7D)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20%7Bsubgraph%20cluster_0%20%7Blabel=%22Subgraph%20A%22;a%20-%3E%20b;b%20-%3E%20c;c%20-%3E%20d;%7Dsubgraph%20cluster_1%20%7Blabel=%22Subgraph%20B%22;a%20-%3E%20f;f%20-%3E%20c;%7D%7D)
</center>

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

<center>
[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Bsplines=line;subgraph%20cluster_0%20%7Blabel=%22Subgraph%20A%22;a;%20b;%20c%7Dsubgraph%20cluster_1%20%7Blabel=%22Subgraph%20B%22;d;%20e;%7Da%20--%20e;a%20--%20d;b%20--%20d;b%20--%20e;c%20--%20d;c%20--%20e;%7D)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Bsplines=line;subgraph%20cluster_0%20%7Blabel=%22Subgraph%20A%22;a;%20b;%20c%7Dsubgraph%20cluster_1%20%7Blabel=%22Subgraph%20B%22;d;%20e;%7Da%20--%20e;a%20--%20d;b%20--%20d;b%20--%20e;c%20--%20d;c%20--%20e;%7D)
</center>

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

A record node is a box with fields represented by alternating rows of horizontal or vertical subboxes. Flipping between horizontal and vertical layouts is done by nesting fields in braces "{...}". ([Learn more about record nodes.](https://www.graphviz.org/doc/info/shapes.html#record))

<center>
[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20structs%20%7Bnode%20%5Bshape=record%5D;struct1%20%5Blabel=%22%3Cf0%3E%20left%7C%3Cf1%3E%20middle%7C%3Cf2%3E%20right%22%5D;struct2%20%5Blabel=%22%3Cf0%3E%20one%7C%3Cf1%3E%20two%22%5D;struct3%20%5Blabel=%22hello%20world%20%7C%7B%20b%20%7C%7Bc%7C%3Chere%3E%20d%7Ce%7D%7C%20f%7D%7C%20g%20%7C%20h%22%5D;struct1:f1%20-%3E%20struct2:f0;struct1:f2%20-%3E%20struct3:here;%7D)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20structs%20%7Bnode%20%5Bshape=record%5D;struct1%20%5Blabel=%22%3Cf0%3E%20left%7C%3Cf1%3E%20middle%7C%3Cf2%3E%20right%22%5D;struct2%20%5Blabel=%22%3Cf0%3E%20one%7C%3Cf1%3E%20two%22%5D;struct3%20%5Blabel=%22hello%20world%20%7C%7B%20b%20%7C%7Bc%7C%3Chere%3E%20d%7Ce%7D%7C%20f%7D%7C%20g%20%7C%20h%22%5D;struct1:f1%20-%3E%20struct2:f0;struct1:f2%20-%3E%20struct3:here;%7D)
</center>

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

<center>
[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Brankdir=LR;a%20--%20%7B%20b%20c%20d%20%7D;b%20--%20%7B%20c%20e%20%7D;c%20--%20%7B%20e%20f%20%7D;d%20--%20%7B%20f%20g%20%7D;e%20--%20h;f%20--%20%7B%20h%20i%20j%20g%20%7D;g%20--%20k;h%20--%20%7B%20o%20l%20%7D;i%20--%20%7B%20l%20m%20j%20%7D;j%20--%20%7B%20m%20n%20k%20%7D;k%20--%20%7B%20n%20r%20%7D;l%20--%20%7B%20o%20m%20%7D;m%20--%20%7B%20o%20p%20n%20%7D;n%20--%20%7B%20q%20r%20%7D;o%20--%20%7B%20s%20p%20%7D;p%20--%20%7B%20s%20t%20q%20%7D;q%20--%20%7B%20t%20r%20%7D;r%20--%20t;s%20--%20z;t%20--%20z;%7D)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Brankdir=LR;a%20--%20%7B%20b%20c%20d%20%7D;b%20--%20%7B%20c%20e%20%7D;c%20--%20%7B%20e%20f%20%7D;d%20--%20%7B%20f%20g%20%7D;e%20--%20h;f%20--%20%7B%20h%20i%20j%20g%20%7D;g%20--%20k;h%20--%20%7B%20o%20l%20%7D;i%20--%20%7B%20l%20m%20j%20%7D;j%20--%20%7B%20m%20n%20k%20%7D;k%20--%20%7B%20n%20r%20%7D;l%20--%20%7B%20o%20m%20%7D;m%20--%20%7B%20o%20p%20n%20%7D;n%20--%20%7B%20q%20r%20%7D;o%20--%20%7B%20s%20p%20%7D;p%20--%20%7B%20s%20t%20q%20%7D;q%20--%20%7B%20t%20r%20%7D;r%20--%20t;s%20--%20z;t%20--%20z;%7D)
</center>

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

<center>
[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20G%20%7Bsize%20%3D%224%2C4%22%3Bmain%20%5Bshape%3Dbox%5D%3Bmain%20-%3E%20parse%20%5Bweight%3D8%5D%3Bparse%20-%3E%20execute%3Bmain%20-%3E%20init%20%5Bstyle%3Ddotted%5D%3Bmain%20-%3E%20cleanup%3Bexecute%20-%3E%20%7B%20make_string%3B%20printf%7Dinit%20-%3E%20make_string%3Bedge%20%5Bcolor%3Dred%5D%3Bmain%20-%3E%20printf%20%5Bstyle%3Dbold%2Clabel%3D%22100%20times%22%5D%3Bmake_string%20%5Blabel%3D%22make%20a%0Astring%22%5D%3Bnode%20%5Bshape%3Dbox%2Cstyle%3Dfilled%2Ccolor%3D%22.7%20.3%201.0%22%5D%3Bexecute%20-%3E%20compare%3B%7D)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20G%20%7Bsize%20%3D%224%2C4%22%3Bmain%20%5Bshape%3Dbox%5D%3Bmain%20-%3E%20parse%20%5Bweight%3D8%5D%3Bparse%20-%3E%20execute%3Bmain%20-%3E%20init%20%5Bstyle%3Ddotted%5D%3Bmain%20-%3E%20cleanup%3Bexecute%20-%3E%20%7B%20make_string%3B%20printf%7Dinit%20-%3E%20make_string%3Bedge%20%5Bcolor%3Dred%5D%3Bmain%20-%3E%20printf%20%5Bstyle%3Dbold%2Clabel%3D%22100%20times%22%5D%3Bmake_string%20%5Blabel%3D%22make%20a%0Astring%22%5D%3Bnode%20%5Bshape%3Dbox%2Cstyle%3Dfilled%2Ccolor%3D%22.7%20.3%201.0%22%5D%3Bexecute%20-%3E%20compare%3B%7D)
</center>

<!--

Another feature that can make large graphs manageable is to group nodes together at the same rank, the graph above for example is copied from a specific assignment, but doesn't look the same because of how the nodes are shifted around to fit in a more space optimal, but less visually simple way. We can make it look much more similar by grouping the nodes together for display as is done in the assignment with rank, as follows

<center>
[![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Brankdir=LR;a%20--%20%7B%20b%20c%20d%20%7D;%20b%20--%20%7B%20c%20e%20%7D;%20c%20--%20%7B%20e%20f%20%7D;%20d%20--%20%7B%20f%20g%20%7D;%20e%20--%20h;f%20--%20%7B%20h%20i%20j%20g%20%7D;%20g%20--%20k;%20h%20--%20%7B%20o%20l%20%7D;%20i%20--%20%7B%20l%20m%20j%20%7D;%20j%20--%20%7B%20m%20n%20k%20%7D;k%20--%20%7B%20n%20r%20%7D;%20l%20--%20%7B%20o%20m%20%7D;%20m%20--%20%7B%20o%20p%20n%20%7D;%20n%20--%20%7B%20q%20r%20%7D;o%20--%20%7B%20s%20p%20%7D;%20p%20--%20%7B%20s%20t%20q%20%7D;%20q%20--%20%7B%20t%20r%20%7D;%20r%20--%20t;%20s%20--%20z;%20t%20--%20z;%7B%20rank=same;%20b,%20c,%20d%20%7D%7B%20rank=same;%20e,%20f,%20g%20%7D%7B%20rank=same;%20h,%20i,%20j,%20k%20%7D%7B%20rank=same;%20l,%20m,%20n%20%7D%7B%20rank=same;%20o,%20p,%20q,%20r%20%7D%7B%20rank=same;%20s,%20t%20%7D%7D)](https://editor.image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Brankdir=LR;a%20--%20%7B%20b%20c%20d%20%7D;%20b%20--%20%7B%20c%20e%20%7D;%20c%20--%20%7B%20e%20f%20%7D;%20d%20--%20%7B%20f%20g%20%7D;%20e%20--%20h;f%20--%20%7B%20h%20i%20j%20g%20%7D;%20g%20--%20k;%20h%20--%20%7B%20o%20l%20%7D;%20i%20--%20%7B%20l%20m%20j%20%7D;%20j%20--%20%7B%20m%20n%20k%20%7D;k%20--%20%7B%20n%20r%20%7D;%20l%20--%20%7B%20o%20m%20%7D;%20m%20--%20%7B%20o%20p%20n%20%7D;%20n%20--%20%7B%20q%20r%20%7D;o%20--%20%7B%20s%20p%20%7D;%20p%20--%20%7B%20s%20t%20q%20%7D;%20q%20--%20%7B%20t%20r%20%7D;%20r%20--%20t;%20s%20--%20z;%20t%20--%20z;%7B%20rank=same;%20b,%20c,%20d%20%7D%7B%20rank=same;%20e,%20f,%20g%20%7D%7B%20rank=same;%20h,%20i,%20j,%20k%20%7D%7B%20rank=same;%20l,%20m,%20n%20%7D%7B%20rank=same;%20o,%20p,%20q,%20r%20%7D%7B%20rank=same;%20s,%20t%20%7D%7D)
</center>

```
cht=gv
chl=graph {
    rankdir=LR;
    a -- { b c d }; b -- { c e }; c -- { e f }; d -- { f g }; e -- h;
    f -- { h i j g }; g -- k; h -- { o l }; i -- { l m j }; j -- { m n k };
    k -- { n r }; l -- { o m }; m -- { o p n }; n -- { q r };
    o -- { s p }; p -- { s t q }; q -- { t r }; r -- t; s -- z; t -- z;
    { rank=same; b, c, d }
    { rank=same; e, f, g }
    { rank=same; h, i, j, k }
    { rank=same; l, m, n }
    { rank=same; o, p, q, r }
    { rank=same; s, t }
}
```

-->

## Chart Types

Specifies a GraphViz chart. You can optionally specify a GraphViz engine (default is `dot` layout engine).

#### Syntax

```
cht=gv[:<opt_engine>]
```

If you want to specify a layout engine, include the semicolon : mark and specify one of the following strings for _<opt_engine>_:

- `dot`: "hierarchical" or layered drawings of directed graphs. This is the default tool to use if edges have directionality.

- `neato`: "spring model'' layouts.  This is the default tool to use if the graph is not too large (about 100 nodes) and you don't know anything else about it. Neato attempts to minimize a global energy function, which is equivalent to statistical multi-dimensional scaling.

- `fdp`: "spring model'' layouts similar to those of neato, but does this by reducing forces rather than working with energy.

- `twopi`: radial layouts, after Graham Wills 97. Nodes are placed on concentric circles depending their distance from a given root node.

- `circo`: circular layout, after Six and Tollis 99, Kauffman and Wiese 02. This is suitable for certain diagrams of multiple cyclic structures, such as certain telecommunications networks.

## Output format

Graphs can be rendered in different format using `chof` query parameter:  

- `chof=.png`: `png` bitmap image file format (default)   
- `chof=.svg`: `svg` vector image file format

Example below is a graph generated as a png image:

![Dependency graph as a png image](https://image-charts.com/chart?chl=graph%20%7Ba%20--%20b%3Bb%20--%20c%3Bc%20--%20d%3Bd%20--%20e%3Be%20--%20f%3Ba%20--%20f%3Ba%20--%20c%3Ba%20--%20d%3Ba%20--%20e%3Bb%20--%20d%3Bb%20--%20e%3Bb%20--%20f%3Bc%20--%20e%3Bc%20--%20f%3Bd%20--%20f%3B%7D&chof=.png&chs=700x200&cht=gv&icac=documentation&ichm=143d52fab1fcd4694c5c4f8a89b36740263b7e4a82a796fedab9bb6c9c7d3318)

Here is the same graph generated as an svg image:

![Dependency graph as a svg image](https://image-charts.com/chart?chl=graph%20%7Ba%20--%20b%3Bb%20--%20c%3Bc%20--%20d%3Bd%20--%20e%3Be%20--%20f%3Ba%20--%20f%3Ba%20--%20c%3Ba%20--%20d%3Ba%20--%20e%3Bb%20--%20d%3Bb%20--%20e%3Bb%20--%20f%3Bc%20--%20e%3Bc%20--%20f%3Bd%20--%20f%3B%7D&chof=.svg&chs=700x200&cht=gv&icac=documentation&ichm=6eb410d0b3e6ff40053520157edbf202458ed812ba9d030000d572b62a00b4b7)

## Known limitations

Here are some tips and known limitations in the current GraphViz charts:

- Animation through `chan` is not supported
- The `graph` attribute size should be not be used; `chs` is also not supported
- The maximum number of nodes is 200, and the maximum for edges is 400. [Contact us if you need more](mailto:support@image-charts.com)
- Anti-aliasing, transparency, and alternate fonts are not supported
- The `node` attributes `image` and `shapefile` are not supported and will be silently ignored <!--result in an error--> if present
- The graph attributes ratio, margin, and pad are not supported and will be ignored if present
