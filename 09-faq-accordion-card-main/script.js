
window.onload=function(){
    function arrowUp() {
        const arrow = document.querySelectorAll('.questions_box');
        const faq_list = document.querySelectorAll('.faq_list');
        /*querySelector return a nodeList (an array with the elements)*/ 
        faq_list.forEach((list) => {
            
            list.addEventListener('click', () => {
                faq_list.forEach((list) => {   
                    console.log(list.childNodes) 
                    list.childNodes[3].classList.remove('selected') /* Hide answers*/
                })
                list.childNodes[3].classList.add('selected') /* Show answers*/ 
            })
        })
        arrow.forEach((el) => {
            el.addEventListener('click', () => {
                arrow.forEach((el) => {
                    el.childNodes[1].classList.remove("selected") /* Questions */
                    el.childNodes[3].classList.remove("selected") /* Arrow */
                         
                })
                el.childNodes[1].classList.add("selected")
                el.childNodes[3].classList.add("selected") 
            })
                
        }) 
        arrow.forEach((el) => {
            el.addEventListener('dblclick', () => {
                    el.childNodes[1].classList.remove("selected")
                    el.childNodes[3].classList.remove("selected")           
            })
        }) 
       faq_list.forEach((list) => {
            list.addEventListener('dblclick', () => {
                list.childNodes[3].classList.remove('selected') 
            })
        }) 
       
        
    }
    arrowUp()
}