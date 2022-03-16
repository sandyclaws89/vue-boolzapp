const app = new Vue({
    el:'#root',
    data :{
        test : 0,
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
        myMessage:[{
            chat1:[ 'Hai portato a spasso il cane?',
                    'ricordati di stendere i panni'],
            chat2:['Ciao non ci sentiamo da tanto','come stai?'],
            chat3:['Non credo','perché lo so'],
            chat4:['Oggi sto male','ho la febbre'],
            chat5:['Ho comprato una radio','mi piaceva'],
            chat6:['Domani ho la partita','il torneo'],
            chat7:['Usciamo','bene'],
            chat8:['Fa freddo oggi','qui piove'],
        }]
    },
});
// console.log(chatList.pic)