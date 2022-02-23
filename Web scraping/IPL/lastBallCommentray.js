// install cheerio request: npm i cheerio request

const request = require('request');
const cheerio = require('cheerio');

let url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary';


request(url, cp);

function cp(err, response, html)
{
    if(err){
        console.log("Error: " + err);
    }
    else{
        extractHTML(html);
    }
}

function extractHTML(html)
{
    let $ = cheerio.load(html);
    
    let elemsArr = $('match-comment-long-text');
    
    console.log(elemsArr.length);
    for(let i = 0; i < elemsArr.length; i++){
        let data = $(elemsArr[i]).text();
        console.log("" + data);
    }
    
}

