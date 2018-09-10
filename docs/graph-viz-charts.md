# Graph Viz Charts

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
![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b;b%20--%20c;a%20--%20c;d%20--%20c;e%20--%20c;e%20--%20a;%7D)
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
![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b;b%20--%20c;c%20--%20d;d%20--%20e;e%20--%20f;a%20--%20f;a%20--%20c;a%20--%20d;a%20--%20e;b%20--%20d;b%20--%20e;b%20--%20f;c%20--%20e;c%20--%20f;d%20--%20f;%7D)
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
![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%7Ba%20-%3E%20b;b%20-%3E%20c;c%20-%3E%20d;d%20-%3E%20a;%7D)
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
![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20%7Ba%20-%3E%20b%5Blabel=%220.2%22,weight=%220.2%22%5D;a%20-%3E%20c%5Blabel=%220.4%22,weight=%220.4%22%5D;c%20-%3E%20b%5Blabel=%220.6%22,weight=%220.6%22%5D;c%20-%3E%20e%5Blabel=%220.6%22,weight=%220.6%22%5D;e%20-%3E%20e%5Blabel=%220.1%22,weight=%220.1%22%5D;e%20-%3E%20b%5Blabel=%220.7%22,weight=%220.7%22%5D;%7D)
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
![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b%5Bcolor=red,penwidth=3.0%5D;b%20--%20c;c%20--%20d%5Bcolor=red,penwidth=3.0%5D;d%20--%20e;e%20--%20f;a%20--%20d;b%20--%20d%5Bcolor=red,penwidth=3.0%5D;c%20--%20f%5Bcolor=red,penwidth=3.0%5D;%7D)
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
![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Ba%20--%20b%20--%20d%20--%20c%20--%20f%5Bcolor=red,penwidth=3.0%5D;b%20--%20c;d%20--%20e;e%20--%20f;a%20--%20d;%7D)
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
![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20%7Bsubgraph%20cluster_0%20%7Blabel=%22Subgraph%20A%22;a%20-%3E%20b;b%20-%3E%20c;c%20-%3E%20d;%7Dsubgraph%20cluster_1%20%7Blabel=%22Subgraph%20B%22;a%20-%3E%20f;f%20-%3E%20c;%7D%7D)
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
![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Bsplines=line;subgraph%20cluster_0%20%7Blabel=%22Subgraph%20A%22;a;%20b;%20c%7Dsubgraph%20cluster_1%20%7Blabel=%22Subgraph%20B%22;d;%20e;%7Da%20--%20e;a%20--%20d;b%20--%20d;b%20--%20e;c%20--%20d;c%20--%20e;%7D)
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
![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=digraph%20structs%20%7Bnode%20%5Bshape=record%5D;struct1%20%5Blabel=%22%3Cf0%3E%20left%7C%3Cf1%3E%20middle%7C%3Cf2%3E%20right%22%5D;struct2%20%5Blabel=%22%3Cf0%3E%20one%7C%3Cf1%3E%20two%22%5D;struct3%20%5Blabel=%22hello%20world%20%7C%7B%20b%20%7C%7Bc%7C%3Chere%3E%20d%7Ce%7D%7C%20f%7D%7C%20g%20%7C%20h%22%5D;struct1:f1%20-%3E%20struct2:f0;struct1:f2%20-%3E%20struct3:here;%7D)
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
![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Brankdir=LR;a%20--%20%7B%20b%20c%20d%20%7D;b%20--%20%7B%20c%20e%20%7D;c%20--%20%7B%20e%20f%20%7D;d%20--%20%7B%20f%20g%20%7D;e%20--%20h;f%20--%20%7B%20h%20i%20j%20g%20%7D;g%20--%20k;h%20--%20%7B%20o%20l%20%7D;i%20--%20%7B%20l%20m%20j%20%7D;j%20--%20%7B%20m%20n%20k%20%7D;k%20--%20%7B%20n%20r%20%7D;l%20--%20%7B%20o%20m%20%7D;m%20--%20%7B%20o%20p%20n%20%7D;n%20--%20%7B%20q%20r%20%7D;o%20--%20%7B%20s%20p%20%7D;p%20--%20%7B%20s%20t%20q%20%7D;q%20--%20%7B%20t%20r%20%7D;r%20--%20t;s%20--%20z;t%20--%20z;%7D)
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

<!--

Another feature that can make large graphs manageable is to group nodes together at the same rank, the graph above for example is copied from a specific assignment, but doesn't look the same because of how the nodes are shifted around to fit in a more space optimal, but less visually simple way. We can make it look much more similar by grouping the nodes together for display as is done in the assignment with rank, as follows

<center>
![chart](https://image-charts.com/chart?chs=700x200&cht=gv&chl=graph%20%7Brankdir=LR;a%20--%20%7B%20b%20c%20d%20%7D;%20b%20--%20%7B%20c%20e%20%7D;%20c%20--%20%7B%20e%20f%20%7D;%20d%20--%20%7B%20f%20g%20%7D;%20e%20--%20h;f%20--%20%7B%20h%20i%20j%20g%20%7D;%20g%20--%20k;%20h%20--%20%7B%20o%20l%20%7D;%20i%20--%20%7B%20l%20m%20j%20%7D;%20j%20--%20%7B%20m%20n%20k%20%7D;k%20--%20%7B%20n%20r%20%7D;%20l%20--%20%7B%20o%20m%20%7D;%20m%20--%20%7B%20o%20p%20n%20%7D;%20n%20--%20%7B%20q%20r%20%7D;o%20--%20%7B%20s%20p%20%7D;%20p%20--%20%7B%20s%20t%20q%20%7D;%20q%20--%20%7B%20t%20r%20%7D;%20r%20--%20t;%20s%20--%20z;%20t%20--%20z;%7B%20rank=same;%20b,%20c,%20d%20%7D%7B%20rank=same;%20e,%20f,%20g%20%7D%7B%20rank=same;%20h,%20i,%20j,%20k%20%7D%7B%20rank=same;%20l,%20m,%20n%20%7D%7B%20rank=same;%20o,%20p,%20q,%20r%20%7D%7B%20rank=same;%20s,%20t%20%7D%7D)
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

## Known limitations

Here are some tips and known limitations in the current GraphViz charts:

- Output image format is `svg` format, not png.
- Animation through `chan` are not supported.
- The `graph` attribute size should be not be used; `chs` is also not supported.
- The maximum number of nodes is 200, and the maximum for edges is 400.
- Anti-aliasing, transparency, and alternate fonts are not supported.
- The `node` attributes `image` and `shapefile` are not supported, and will be silently ignored <!--result in an error--> if present.
- The graph attributes ratio, margin, and pad are not supported, and will be ignored if present.

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

- `sfdp`: multiscale version of fdp for the layout of large graphs.

- `twopi`: radial layouts, after Graham Wills 97. Nodes are placed on concentric circles depending their distance from a given root node.

- `circo`: circular layout, after Six and Tollis 99, Kauffman and Wiese 02. This is suitable for certain diagrams of multiple cyclic structures, such as certain telecommunications networks.
