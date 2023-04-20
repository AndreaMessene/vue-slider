const { createApp } = Vue

createApp({
    data() {
    return {
        //impostiamo un parametro che prendera traccia della posizione dell'immagine interessaata
        imgAttuale: 0,

        slides: [
            {
                image: './assets/img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: './assets/img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: './assets/img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: './assets/img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: './assets/img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            
            
        
        }
    },

    //essenziale per attivare la temporizzazione 
    created(){
        this.autoScroll()
    },


    methods: {
        
        /*tramite un funzione originata dall'elemento '@click' 
        creiamo un sistema che ci permetta di passare all'immagine successiva*/
        next(){

            console.log('next')
            
            this.imgAttuale++

            /* se il nostro soldatino è supereiore alla posizione del nostro ultimo oggetto, la classe
            active ritorna al primo oggetto  */
            if(this.imgAttuale > this.slides.length - 1){

                this.imgAttuale = 0
            }
        },

        prev(){

            console.log('prev')
            
            this.imgAttuale--

            /* se il nostro soldatino è inferiore alla posizione del primo oggetto, la classe
            active ritorna all'ultimo oggetto  */
            if(this.imgAttuale < 0 ){

                this.imgAttuale = this.slides.length - 1
            }
        },

        /* creiamo una funzione che ci permetterà  di temporizzare e rendere automatico il @click di next  */
        autoScroll(){
            setInterval( () =>{
                this.next()
            }, 2000 ) 
        }

    }
}).mount('#app')