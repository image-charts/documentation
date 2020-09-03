const charts = require("./gallery.json");
const _ = require("lodash");
const Url = require('url');
const querystring = require('querystring');


const global_style = `
<style>
  .gallery-flex{
    display:flex;
    flex-wrap: wrap;
  }

  .gallery-items{
    flex-basis: 30%;
    position: relative;
    border: 1px solid #ccc;
    margin-right: 22px;
    margin-bottom: 2em;
    border-radius: 5px;
    z-index: 1;
  }

  .gallery-label{
    width: 100%;
    background-color: aliceblue;
    color: #000;
    text-align: center;
    margin: 0 !important;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .gallery-items__img{
    border-radius: 5px;
    max-height: 135px;
    max-width: 100% !important;
  }

  @media (max-width: 425px) {
    .gallery-items{
      flex-basis: 100%;
      margin-right: 0px;
    }
    .gallery-items__img{
      max-height: inherit;
    }
  }
</style>`;

function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}

const chartByCategory = _.groupBy(charts, (chart) => chart.category);
const html = Object.keys(chartByCategory)
  .map((category_name) => {


    return (
      `## ${category_name}
<div class="gallery-flex">` +
      chartByCategory[category_name]
        .map((chart) => {
          const {protocol, hostname, pathname, search} = Url.parse(chart.url);
          if (search.includes("ichm")) {
          const query = querystring.stringify(querystring.parse(decodeURIComponent(search.substring(1))),"&","=",{ encodeURIComponent: (v) => fixedEncodeURIComponent(v) });
          const url = `${protocol}//${hostname}${pathname}?${query}`;
          return `<a class="gallery-items" href="${chart.url}"><img class="gallery-items__img" src="${chart.url}"><p class="gallery-label">${chart.title}</p></a>`;
          }
        })
        .join("\n") +
      `</div>`
    );
  })
  .join("\n");

console.log(global_style + html);

