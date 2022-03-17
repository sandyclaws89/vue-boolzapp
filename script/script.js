const app = new Vue({
    el:'#root',
    data :{
        test : 0,
        newMessage : {
            date: '10/01/2020 15:30:55',
            message: '',
            sent: false,
        },
        chatList:[
            {
                pic:"../img/avatar_1.jpg",
                name:"Michele",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        sent: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        sent: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        sent: true,
                    }

                ],
            },
            {
                pic:"../img/avatar_2.jpg",
                name:"Fabio",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        sent: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        sent: true,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        sent: false,
                    }
                ],
            },
            {
                pic:"../img/avatar_3.jpg",
                name:"Samuele",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                       sent: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        sent: true,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        sent: false,
                    }
                ],
            },
            {
                pic:"../img/avatar_4.jpg",
                name:"Alessandro B.",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        sent: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        sent: false,

                    }
                ],
            },
            {
                pic:"../img/avatar_5.jpg",
                name:"Claudia",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        sent: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        sent: false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        sent: true,                    
                    }
                ],
            },
            {
                pic:"../img/avatar_6.jpg",
                name:"Federico",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        sent: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        sent: false,
                    }
                ],
            },
            {
                pic:"../img/avatar_7.jpg",
                name:"Michele",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                pic:"../img/avatar_8.jpg",
                name:"Davide",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            },
        ],
      
    },
    
    methods: {
        addNewMessage() {
        //   newMessage = this.chatList[test].messages[test].message;
        // newMessage = this.chatList[this.test].messages[this.test].message      
        //   console.log(this.chatList[this.test].messages[this.test].message)  
        console.log(this.newMessage)
            this.chatList[this.test].messages[this.test].push(...this.newMessage);
        
        // DEVO PUSHARE ALL'ARRAY MESSAGES UN NUOVO OGGETTO    CHE ABBIA DATE MESSAGE E STATUS
        // QUINDI DEVO ESPLODERE ARRAY MESSAGES
    }

        
    }
});

// let bigTest : {
//     newTest: 'ciao',
//     arrTest: [{
//         test1: 'value test1',
//         test2: 'value test2',
//     }],
// };

// console.log(pere.newTest);

// console.log(chatList.pic)