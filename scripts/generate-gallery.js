const charts = require("./gallery.json");
const _ = require("lodash");
const Url = require('url');
const querystring = require('querystring');
// HMAC Helper
const crypto = require('crypto');
const qs = require('querystring');
const assert = require("assert");
require('custom-env').env()

function sign(secretKey, query) {
  return crypto
    .createHmac('sha256', secretKey)
    .update(query)
    .digest('hex');
}

const ACCOUNT_ID = process.env.ACCOUNT_ID;
const SECRET_KEY = process.env.SECRET_KEY;
assert(ACCOUNT_ID && ACCOUNT_ID.length > 1, 'ACCOUNT_ID env. var. must be specified');
assert(SECRET_KEY && SECRET_KEY.length > 1, 'SECRET_KEY env. var. must be specified');

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
          const parameters = querystring.parse(decodeURIComponent(search.substring(1)));
          delete parameters["ichm"];
          delete parameters["icac"];
          if (pathname === "/chart") {
            parameters.icac = ACCOUNT_ID;
            const rawQuerystring = qs.stringify(parameters, null, null);
            const signature = sign(SECRET_KEY, rawQuerystring);
            var publicUrl = `https://image-charts.com/chart?${rawQuerystring}&ichm=${signature}`;
          }
          if (pathname === "/chart.js/2.8.0") {
            const queryBase64 = Buffer.from(parameters.c).toString("base64");
            const queryObject = {
              bkg: "white",
              icac: ACCOUNT_ID,
              c: queryBase64,
              encoding: "base64",
            };
            const rawQuerystring = qs.stringify(queryObject, null, null);
            const signature = sign(SECRET_KEY, rawQuerystring);
            var publicUrl = `https://image-charts.com/chart.js/2.8.0?${rawQuerystring}&ichm=${signature}`;
          }
        return `<a class="gallery-items" href="${publicUrl}"><img class="gallery-items__img" src="${publicUrl}"><p class="gallery-label">${chart.title}</p></a>`;
        })
        .join("\n") +
      `</div>`
    );
  })
  .join("\n");

console.log(global_style + html);

