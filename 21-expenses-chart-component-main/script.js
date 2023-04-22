const chart = document.querySelectorAll('.chart')
const chart_bar = document.querySelectorAll('.chart_bar')
const revenue_days = document.querySelectorAll('.chart_revenue_days')


function getToday() {
    const options = { weekday: 'short' };
    const day = new Date().toLocaleDateString('en-US', options);
    return day.toLowerCase()
}


async function logJsonData() {
    try {
        const response = await fetch("./data.json")
        const jsonData = await response.json();
        
        let i = 0
        chart_bar.forEach((bar) => {

            // Building bar's height
            chart_bar[i].style.height = `${jsonData[i]['amount'] * 3.5}px`
            if(window.innerHeight < 830) {
                chart_bar[i].style.height = `${jsonData[i]['amount'] * 2.5}px`
            }
            else if(window.innerWidth >= 720 && window.innerWidth <= 1100) {
                chart_bar[i].style.height = `${jsonData[i]['amount'] * 4}px`
            }
        
            // getting current day and filling background color
            if(getToday() === jsonData[i]['day']) {
                chart_bar[i].style.backgroundColor = 'var(--Cyan)'
                bar.addEventListener('mouseover', function() {
                    bar.style.backgroundColor = 'hsl(185, 39%, 70%)'
                })
                bar.addEventListener('mouseout', function() {
                    bar.style.backgroundColor = 'var(--Cyan)'
                })
            }

            // hover states showing the amount on the right day
            revenue_days.forEach(() => {
                revenue_days[i].textContent = `$${jsonData[i]['amount']}`
            })
            i++
        })
    } catch (error) {
        console.error('Error fetching data:', error);
        return null
    }
}

logJsonData()


function showRevenueDays() {
    chart.forEach((bar) => {
        bar.addEventListener('mouseover', function() {
            bar.childNodes[1].style.display = 'block'
        })
        bar.addEventListener('mouseout', function() {
            bar.childNodes[1].style.display = 'none'
        })
    })
}

showRevenueDays()


