import * as cheerio from 'cheerio';
import axios from 'axios';

const main = async () => {
    const recetas = [];

    for (let i = 1; i <= 4; i++) {
        const webScraped = await axios.get(`https://tienda.consum.es/es/c/ofertas-supermercado/99999?showRecommendations=false&orderById=1&page=${i}`);
        const consumOfertas = webScraped.data;
        const $ = cheerio.load(consumOfertas);
        
        $('a.u-no-link ng-tns-c1280268831-402 ng-star-inserted')
        .toArray()
        .forEach((element) => {
            recetas.push($(element).text());
        });
    }

    console.log(recetas);
};

main();