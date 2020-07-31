const charts = require("./gallery.json");
const _ = require("lodash");

const global_style = `
<style>
  .flex{
    display:flex;
    flex-wrap: wrap;
  }

  .items{
    flex-basis: 30%;
    position: relative;
    border: 1px solid #ccc;
    margin-right: 22px;
    margin-bottom: 2em;
    border-radius: 5px;
    z-index: 1;
  }

  .label{
    width: 100%;
    background-color: aliceblue;
    color: #000;
    text-align: center;
    margin: 0 !important;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .items__img{
    border-radius: 5px;
    width: 100%;
  }

</style>`;

const chartByCategory = _.groupBy(charts, (chart) => chart.category);
const html = Object.keys(chartByCategory)
  .map((category_name) => {
    return (
      `## ${category_name}
<div class="flex">` +
      chartByCategory[category_name]
        .map((chart) => `<a class="items" href="${chart.url}"><img class="items__img" src="${chart.url}"><p class="label">${chart.title}</p></a>`)
        .join("\n") +
      `</div>`
    );
  })
  .join("\n");

console.log(global_style + html);
