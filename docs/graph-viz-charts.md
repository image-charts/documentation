from graphviz import Digraph

# Membuat swimlane diagram sederhana dengan Graphviz
dot = Digraph(comment="Flow Proses Warehouse NDS - Swimlane")
dot.attr(rankdir="LR")  # horizontal flow

# Subgraph untuk Salesman
with dot.subgraph(name="cluster_sales") as c:
    c.attr(label="Salesman", style="dashed")
    c.node("A", "Input Data\n(Wavelink:\nKode Motor & Warna)", shape="box", style="rounded,filled", fillcolor="lightblue")
    c.node("F", "Terima Info:\nUnit Siap Delivery", shape="box", style="rounded,filled", fillcolor="lightgray")

# Subgraph untuk Picker
with dot.subgraph(name="cluster_picker") as c:
    c.attr(label="Picker", style="dashed")
    c.node("B", "Ambil Unit\n(sesuai Request)", shape="box", style="rounded,filled", fillcolor="lightgreen")
    c.node("C", "Update Dashboard PDI\n(Wavelink)", shape="box", style="rounded,filled", fillcolor="lightyellow")

# Subgraph untuk PDI Man
with dot.subgraph(name="cluster_pdi") as c:
    c.attr(label="PDI Man", style="dashed")
    c.node("D", "Input Nosin\n& Tulis Nama Sales", shape="box", style="rounded,filled", fillcolor="lightpink")
    c.node("E", "Submit 'Selesai PDI'\n(Wavelink)", shape="box", style="rounded,filled", fillcolor="lightcoral")

# Alur antar aktor
dot.edge("A", "B")
dot.edge("B", "C")
dot.edge("C", "D")
dot.edge("D", "E")
dot.edge("E", "F")

# Render ke file
file_path = "/mnt/data/flow_proses_warehouse_nds_swimlane"
dot.render(file_path, format="png", cleanup=True)

file_path + ".png"
