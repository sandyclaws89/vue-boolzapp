const app = new Vue({
    el:'#root',
    data :{
        chatList:[
            {
                pic:"../img/avatar_1.jpg",
                name:"Michele",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                chat:['1','2'],
            },
            {
                pic:"../img/avatar_2.jpg",
                name:"Fabio",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                chat:['3','4'],
            },
            {
                pic:"../img/avatar_3.jpg",
                name:"Samuele",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                chat:['5','6'],
            },
            {
                pic:"../img/avatar_4.jpg",
                name:"Alessandro B.",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                chat:['7','8']
            },
            {
                pic:"../img/avatar_5.jpg",
                name:"Claudia",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                chat:['9','10']
            },
            {
                pic:"../img/avatar_6.jpg",
                name:"Federico",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                chat:['11','12']
            },
            {
                pic:"../img/avatar_7.jpg",
                name:"Michele",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                chat:['13','14']
            },
            {
                pic:"../img/avatar_8.jpg",
                name:"Davide",
                lastMessage: "Ultimo messaggio inviato",
                time:"12.00",
                text:'',
                chat:['15','16']
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