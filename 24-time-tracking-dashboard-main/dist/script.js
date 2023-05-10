(function(){
    const dailyButton = document.querySelector('#daily');
    const weeklyButton = document.querySelector('#weekly');
    const monthlyButton = document.querySelector('#monthly');
    const titles = document.querySelectorAll('.title');
    const currentHrs = document.querySelectorAll('.currentHrs');
    const previousHrs = document.querySelectorAll('.previousHrs');


    async function logJsonData() {
        try {

            url = '../data.json'

            await fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                
                let lastClicked = dailyButton;
                dailyButton.focus();
                

                for(let i = 0; i < data.length; i++) {
                    titles[i].textContent =  data[i].title;
                    currentHrs[i].textContent = `${data[i].timeframes.daily.current}hrs`;    
                    previousHrs[i].textContent = `Last Day - ${data[i].timeframes.daily.previous}hrs`;  
                };


                dailyButton.addEventListener('focus', () => {
                    dailyButton.classList.add("focus");
                    lastClicked = dailyButton;
                    for(let i = 0; i < data.length; i++) {
                        titles[i].textContent =  data[i].title;
                        currentHrs[i].textContent = `${data[i].timeframes.daily.current}hrs`;    
                        previousHrs[i].textContent = `Last Day - ${data[i].timeframes.daily.previous}hrs`;  
                    };
                });
                
                weeklyButton.addEventListener('focus', () => {
                    weeklyButton.classList.add("focus");
                    lastClicked = weeklyButton;
                    for(let i = 0; i < data.length; i++) {
                        titles[i].textContent =  data[i].title;
                        currentHrs[i].textContent = `${data[i].timeframes.weekly.current}hrs`;    
                        previousHrs[i].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;  
                    };
                });

                monthlyButton.addEventListener('focus', () => {
                    monthlyButton.classList.add("focus");
                    lastClicked = monthlyButton;
                    for(let i = 0; i < data.length; i++) {
                        titles[i].textContent =  data[i].title;
                        currentHrs[i].textContent = `${data[i].timeframes.monthly.current}hrs`;    
                        previousHrs[i].textContent = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;  
                    };
                });

                document.addEventListener("click", (event) => {
                    if (event.target !== dailyButton && event.target !== weeklyButton && event.target !== monthlyButton) {
                        event.preventDefault();
                        lastClicked.focus();
                      }
                });
                
            });

        } catch(e) {
            console.log(e);
        };
    };
    logJsonData();
})()


