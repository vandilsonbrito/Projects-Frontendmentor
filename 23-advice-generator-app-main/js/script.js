(function() {
    const info = document.querySelector('.info')
    const btn = document.querySelector('button');
    const estilo = document.getElementsByClassName('load');

    
    btn.addEventListener('click', () => {
        //show load gif
        estilo[0].style.visibility = "visible";
        

        function toggleDisabled(el) {
            el.disabled = !el.disabled;
        };
        
        function buttonWait(el) {
            el.disabled = true;

            setTimeout(function(){
                toggleDisabled(el)
            }, 500)

        };  
        buttonWait(btn)
        
        function deleteElements() {
            while(info.firstChild) {
                info.removeChild(info.firstChild);
            }

        }
        deleteElements();

        async function logJsonData() {
            let slipId = (Math.random(0, 1) * 224);
            slipId = parseInt(slipId);
           
            try {
                const url = `https://api.adviceslip.com/advice/${slipId}`;
    
                await fetch(url)
                .then((resp) => resp.json())
                .then(function(data) {

                    let p = document.createElement('p');
                    p.textContent = `Advice #${data.slip.id}`;

                    let h1 = document.createElement('h1');
                    h1.textContent = data.slip.advice;

                    let img = document.createElement('img');
                    img.src = 'images/pattern-divider-mobile.svg';
                    if(window.innerWidth > 1020) {
                        img.src = 'images/pattern-divider-desktop.svg';
                    }
                    img.classList.add('patternDivider');

                    info.appendChild(p);
                    info.appendChild(h1);
                    info.appendChild(img);

                    // Hide load gif
                    estilo[0].style.visibility = "hidden";
                })
    
            } catch(e) {
                console.error('Error fetching data:', error);

                estilo[0].style.visibility = "hidden";
                let h1 = document.createElement('h1');
                h1.textContent = 'Something got wrong, Try Again.';
                info.appendChild(h1);

            }
        }
        logJsonData();
        
    })
    

})();