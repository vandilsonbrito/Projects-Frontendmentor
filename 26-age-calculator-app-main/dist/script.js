(function(){

    const label = document.querySelectorAll('.label');
    let day = document.querySelector('.day');
    let month = document.querySelector('.month');
    let year = document.querySelector('.year');
    const btn = document.querySelector('#btn');
    const fillDay = document.querySelector('#fill-day');
    const fillMonth = document.querySelector('#fill-month');
    const fillYear = document.querySelector('#fill-year');
    /* console.log(day)
    console.log(month)
    console.log(year) */


    btn.addEventListener('click', () => {
        inputValidation();
    })

    function inputValidation() {
       
        dayValue = parseInt(day.value);
        monthValue = parseInt(month.value);
        yearValue = parseInt(year.value);
        let currentYear = new Date();
        currentYear = currentYear.getFullYear();

        // DAY
        if(!dayValue) {
            document.getElementById('invalid-input-day').classList.remove('hidden');
            errorInput();
        }
        else if(dayValue < 1 || dayValue > 31) {
            let dayInput = document.querySelector('#invalid-input-day');
            dayInput.classList.remove('hidden');
            dayInput.textContent = 'Must be a valid day';
            errorInput();
        }
        else if(dayValue >= 1 && dayValue <= 31) {
            document.getElementById('invalid-input-day').classList.add('hidden');
        }

        // MONTH
        if(!monthValue) {
            document.getElementById('invalid-input-month').classList.remove('hidden');
            errorInput();
        }
        else if(monthValue < 1 || monthValue > 12) {
            let monthInput = document.querySelector('#invalid-input-month');
            monthInput.classList.remove('hidden');
            monthInput.textContent = 'Must be a valid month';
            errorInput();
        }
        else if(monthValue >= 1 && monthValue <= 12) {
            document.getElementById('invalid-input-month').classList.add('hidden');
        }

        // YEAR
        if(!yearValue) {
            document.getElementById('invalid-input-year').classList.remove('hidden');
            errorInput();
        }
        else if(yearValue > currentYear) {
            let yearInput = document.querySelector('#invalid-input-year');
            yearInput.classList.remove('hidden');
            yearInput.textContent = 'Must be in the past';
            errorInput();
        }
        else if(yearValue <= currentYear) {
            document.getElementById('invalid-input-year').classList.add('hidden');
            calculateAge(dayValue, monthValue, yearValue);
            inputChecked()
        }
    }
    
    function errorInput() {
        day.classList.remove('border-Light-grey');
        month.classList.remove('border-Light-grey');
        year.classList.remove('border-Light-grey');
        console.log("AQUIUIUIUI")
        day.classList.add('border-Light-red');
        month.classList.add('border-Light-red');
        year.classList.add('border-Light-red');
        label.forEach((label) => {
            label.classList.remove('text-Smokey-grey');
            label.classList.add('text-Light-red');
        })
 
    }

    function inputChecked() {
        day.classList.add('border-Light-grey');
        month.classList.add('border-Light-grey');
        year.classList.add('border-Light-grey');

        day.classList.remove('border-Light-red');
        month.classList.remove('border-Light-red');
        year.classList.remove('border-Light-red');
        label.forEach((label) => {
            label.classList.add('text-Smokey-grey');
            label.classList.remove('text-Light-red');
        })
    }

    function calculateAge(dayValue, monthValue, yearValue) {
        const currentDate = new Date();
        const birthDate = new Date(yearValue, monthValue - 1, dayValue);
      
        let ageYear = currentDate.getFullYear() - birthDate.getFullYear();
        let ageMonths = currentDate.getMonth() - birthDate.getMonth();
        let ageDays = currentDate.getDate() - birthDate.getDate();
      
        // Verificar se a data de aniversário ainda não ocorreu este ano
        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
          ageYear--;
          ageMonths += 12;
        }
      
        // Atualizar a idade para exibir apenas meses completos
        if (ageDays < 0) {
          const lastMonthDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            0
          );
          ageDays += lastMonthDate.getDate();
          ageMonths--;
        }
      
        fillYear.textContent = ageYear;
        fillMonth.textContent = ageMonths;
        fillDay.textContent = ageDays;
      }


})()