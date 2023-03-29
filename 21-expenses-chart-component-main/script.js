const chart = document.querySelectorAll('.chart')
const chart_bar = document.querySelectorAll('.chart_bar')
const revenue_days = document.querySelectorAll('.chart_revenue_days')

async function chartData() {

    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroesText = await response.text();

    const superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    populateHeroes(superHeroes);

  }


function buildChartBars() {

}
buildChartBars()



function showRevenueDays() {
    chart.forEach((bar) => {
        bar.addEventListener('mouseover', function() {
            bar.childNodes[1].style.visibility = 'visible'
        })
        bar.addEventListener('mouseout', function() {
            bar.childNodes[1].style.visibility = 'hidden'
        })
    })
}
showRevenueDays()


