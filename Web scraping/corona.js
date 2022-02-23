
// install cheerio: npm install cheerio
// web scribing library


// install chalk: npm install chalk


const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');

const { writeHeapSnapshot } = require('v8');

console.log("Before");

request('https://www.worldometers.info/coronavirus/', cp);




function cp(error, response, html) {
    if(error){
        console.log('error: ', error);
    }
    else{
        handlehtml(html);
    }
    
}

function handlehtml(html)
{
    let selTool = cheerio.load(html);

    // console.log(selTool('h1'));

    let contentArr = selTool('#maincounter-wrap span');
    
    // console.log(contentArr.text());

    // for(let i = 0; i < contentArr.length; i++){
    //     let data = selTool(contentArr[i]).text();

    //     console.log(data);
    // }

    let total = selTool(contentArr[0]).text();
    let deaths = selTool(contentArr[1]).text();
    let recover = selTool(contentArr[2]).text();

    console.log(chalk.gray("Totall Case :" + total));
    console.log(chalk.red("Death : " + deaths));
    console.log(chalk.green("Recover : "+ recover));
}
  

console.log("After");