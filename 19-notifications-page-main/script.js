const cards_wrapper = document.querySelector('.cards_wrapper')
const cards = document.querySelectorAll('.card')
const number_unread_notifications = document.getElementById('number_unread_notifications')
const mark_as_read = document.querySelector('.mark_as_read')
const symbol_unread = document.querySelectorAll('.symbol_unread_notification')

/* console.log(cards_wrapper.childNodes) */
let amount_notification = 3
let counter = amount_notification
function create_unread_notifications() {
    // this function is gonna create the amount of unread notifications, in this case, it will be 3

    for(let i = 0; i < (amount_notification * 2); i++) {

        if(cards_wrapper.childNodes[i].classList == 'card') {
            cards_wrapper.childNodes[i].classList?.add('unread_notifications')
            let arr = Array.from(cards_wrapper.childNodes[i].children)
            arr = Array.from(arr[1].children)

            arr[1].classList.add('symbol_unread_notification')
        }
    }   
    return amount_notification
}
create_unread_notifications()

function read_all() {
    mark_as_read.addEventListener('click', () => {
        cards.forEach((card) => {
            card.classList.remove('unread_notifications')
            
            collection = card.childNodes[3].children
            collection = collection.item(1)
            if((collection?.classList.contains('symbol_unread_notification'))) {
                collection.classList.remove('symbol_unread_notification')
            }
            counter = 0
            number_unread_notifications.textContent = counter 
        })  
    })
}
read_all() 

function read_notification() {
    cards.forEach((card) => {
        card.addEventListener('click', () => {

            collection = card.childNodes[3].children
            collection = collection.item(1)

            if((card.classList.contains('unread_notifications'))) {
                card.classList.remove('unread_notifications')
                counter-- 

                if((collection.classList.contains('symbol_unread_notification'))) {
                    collection.classList.remove('symbol_unread_notification')
                }
            }
            counter < 0 ? counter = 0 : counter
            number_unread_notifications.textContent = counter
        })
    })
}
read_notification()


