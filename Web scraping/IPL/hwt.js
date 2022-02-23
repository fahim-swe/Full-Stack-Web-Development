const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard';

const request = require('request');
const cheerio = require('cheerio');


console.log("Before");

request(url, cb);

function cb(err, response, html)
{
    if(err){
        console.log(err);
    }
    else{
        extractHTML(html);
    }
}


function extractHTML(html)
{
    let $ = cheerio.load(html);
 
    let teamsArr = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .team ');
    
    // console.log(teamsArr.text());

    for(let i = 0; i < teamsArr.length; i++)
    {
        let hasclass = $(teamsArr[i]).hasClass('team-gray');
        if(hasclass == false){
            
            let teamNameElem = $(teamsArr[i]).find('.name');
            console.log(teamNameElem.text());
        }
    }


}
