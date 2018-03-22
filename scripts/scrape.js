//Where Scrape happens

//require packages
const cheerio = require('cheerio');


//Make the request to BBC
module.exports = request("http://www.bbc.com/news", function (error, response, html) {
    if (error) {
        console.log("ERROR: " + error);

    } else {
        // console.log(response);
        // Load the body of the HTML into cheerio
        var $ = cheerio.load(html);

        var numArticles = 0;
        var results = [];

        $("a.gs-c-promo-heading").each(function (i, element) {
            var title = $(element).children().text();
            var url = "bbc.com" + $(element).attr("href");;
            var date = $(element).find("li").attr("gs-c-timestamp");
            var description = $(element).children().text().trim();

            var articleData = {
                "index": i,
                "title": title,
                "url": url,
                "date": date,
                "description": description
            }

            results.push(articleData);
        })
        console.log(results);
    }
});

module.exports = 