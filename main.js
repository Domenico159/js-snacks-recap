/**
 * SNACK 1
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
 */


const array = ['PaolO','doMENico','frANCESCO','LORENZO','MICHeale','SOFIA','LUISA'];

const newArray =  array.map((e) =>{

    return e[0].toUpperCase() + e.slice(1).toLowerCase()

})


console.log(newArray);



/**
 * SNACK 2
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l'indice della tab aperta nell'array:
{
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
}
Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.
 */


const windows = {

    tab:['Facebook','Gmail','GitHub','Youtube','Twitch'],
    activeTab: 0,
}

   windows.tab.forEach((e,index,array) =>{

    if(index == windows.activeTab){

       array.splice(windows.activeTab,1)

    }

   })


   console.log(windows);


   /**
    * SNACK 4 -> VUE 
      Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
      Andiamo a stampare nome cognome e numero dentro una lista.
      Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero. Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero
    */


      const main = new Vue({

        el:'#main',
        data:{

            contatti:[
                {
                    nome:'Giuseppe',
                    cognome:'Rossi',
                    cellulare:2163546556464,
                    attivo:true,
                },
                {
                    nome:'Francesco',
                    cognome:'Totti',
                    cellulare:2163546556464,
                    attivo:false,
                },
                {
                    nome:'Luisa',
                    cognome:'Bianchi',
                    cellulare:32546848946514,
                    attivo:true,
                },
                {
                    nome:'Manuele',
                    cognome:'Visconti',
                    cellulare:3546846341687,
                    attivo:true,
                },
                {
                    nome:'Paolo',
                    cognome:'Duzioni',
                    cellulare:6548951845,
                    attivo:false,
                },
                {
                    nome:'Lorenzo',
                    cognome:'Balsano',
                    cellulare:687641612354,
                    attivo:true,
                },
            ],
            active:0,

        },
        methods:{

            item(index){

                this.active = index;

            }

        },
        
      })