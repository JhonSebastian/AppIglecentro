import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { AnunciosService, anuncio } from '../../servicios/anuncios.service';
import { LoadingController } from '@ionic/angular';


import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { FCM } from '@ionic-native/fcm/ngx';



@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage implements OnInit {


  versiculos = [
    {
      "id":1,
      "versiculo":"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar",
      "cita":"Mateo 11:28"
    },
    {
      "id":2,
      "versiculo":"Porque las cosas que se escribieron antes, para nuestra enseñanza se escribieron, a fin de que por la paciencia y la consolación de las Escrituras, tengamos esperanza.",
      "cita":"Romanos 5:4"
    },
    {
      "id":3,
      "versiculo":"Dad, y se os dará; medida buena, apretada, remecida y rebosando darán en vuestro regazo; porque con la misma medida con que medís, os volverán a medir.",
      "cita":"Lucas 6:38"
    },
    {
      "id":4,
      "versiculo":"Porque la paga del pecado es muerte, mientras que la dádiva de Dios es vida eterna en Cisto Jesús, nuestro señor.",
      "cita":"Romanos 6:23 NVI"
    },
    {
      "id":5,
      "versiculo":"Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder.",
      "cita":"Mateo 5:14"
    },
    {
      "id":6,
      "versiculo":"Si alguno dice: Yo amo a Dios, y aborrece a su hermano, es mentiroso. Pues el que no ama a su hermano a quien ha visto, ¿cómo puede amar a Dios a quien no ha visto?",
      "cita":"1 Juan 4:20"
    },
    {
      "id":7,
      "versiculo":"Porque el que se avergonzare de mí y de mis palabras en esta generación adúltera y pecadora, el Hijo del Hombre se avergonzará también de él, cuando venga en la gloria de su Padre con los santos ángeles.",
      "cita":"Marcos 8:38"
    },
    {
      "id":8,
      "versiculo":"Engañosa es la gracia, y vana la hermosura; La mujer que teme a Jehová, ésa será alabada.",
      "cita":"Proverbios 31-30"
    },
    {
      "id":9,
      "versiculo":"Pero de ninguna cosa hago caso, ni estimo preciosa mi vida para mí mismo, con tal que acabe mi carrera con gozo, y el ministerio que recibí del Señor Jesús, para dar testimonio del evangelio de la gracia de Dios. ",
      "cita":"Hechos 20:24"
    },
    {
      "id":10,
      "versiculo":"La luz en las tinieblas resplandece, y las tinieblas no prevalecieron contra ella.",
      "cita":"Juan 1:5"
    },
    {
      "id":11,
      "versiculo":"Pero vosotros, amados, edificándoos sobre vuestra santísima fe, orando en el Espíritu Santo, conservaos en el amor de Dios, esperando la misericordia de nuestro Señor Jesucristo para vida eterna.",
      "cita":"Judas 1:20-21"
    },
    {
      "id":12,
      "versiculo":"Por lo tanto, muestren humildad bajo la poderosa mano de Dios, para que él los exalte a su debido tiempo. Descarguen en él todas sus angustias, porque él tiene cuidado de ustedes.",
      "cita":"1 Pedro 5:6-7"
    },
    {
      "id":13,
      "versiculo":"El Señor es bueno; es un refugio en el día de la angustia. El Señor conoce a los que en él confían.",
      "cita":"Nahúm 1:7"
    },
    {
      "id":14,
      "versiculo":"Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.",
      "cita":"Isaias 53:5"
    },
    {
      "id":15,
      "versiculo":"El oído que escucha las amonestaciones de la vida, Entre los sabios morará.  El que tiene en poco la disciplina menosprecia su alma; Mas el que escucha la corrección tiene entendimiento.",
      "cita":"Proverbios 15: 31-32"
    },
    {
      "id":16,
      "versiculo":"Pues, ¿busco ahora el favor de los hombres, o el de Dios? ¿O trato de agradar a los hombres? Pues si todavía agradara a los hombres, no sería siervo de Cristo. ",
      "cita":"Galatas 1:10"
    },
    {
      "id":17,
      "versiculo":"Por lo tanto, muestren humildad bajo la poderosa mano de Dios, para que él los exalte a su debido tiempo. Descarguen en él todas sus angustias, porque él tiene cuidado de ustedes.",
      "cita":"1 Pedro 5:6-7"
    },
    {
      "id":18,
      "versiculo":"Porque Dios no es injusto para olvidar vuestra obra y el trabajo de amor que habéis mostrado hacia su nombre, habiendo servido a los santos y sirviéndoles aún.",
      "cita":"Hebreos 6:10"
    },
    {
      "id":19,
      "versiculo":"Mi carne y mi corazón desfallecen; Mas la roca de mi corazón y mi porción es Dios para siempre.",
      "cita":"Salmo 73:26"
    },
    {
      "id":20,
      "versiculo":"El cielo y la tierra pasarán, pero mis palabras no pasarán.",
      "cita":"Mateo 24:35"
    },
    {
      "id":21,
      "versiculo":"No se turbe su corazón. Ustedes creen en Dios; crean también en mí. ",
      "cita":"Juan 14:1"
    },
    {
      "id":22,
      "versiculo":"Porque donde hay celos y contención, allí hay perturbación y toda obra perversa.",
      "cita":"Santiago 3:16"
    },
    {
      "id":23,
      "versiculo":"Escucha el consejo, y recibe la corrección, Para que seas sabio en tu vejez. Muchos pensamientos hay en el corazón del hombre; Mas el consejo de Jehová permanecerá.",
      "cita":"Proverbios 19:20-21"
    },
    {
      "id":24,
      "versiculo":"Jehová está en medio de ti, poderoso, él salvará; se gozará sobre ti con alegría, callará de amor, se regocijará sobre ti con cánticos.",
      "cita":"Sofonías 3:17"
    },
    {
      "id":25,
      "versiculo":"Por tanto, os digo que todo lo que pidiereis orando, creed que lo recibiréis, y os vendrá.",
      "cita":"Marcos 11:24"
    },
    {
      "id":26,
      "versiculo":"Vestíos, pues, como escogidos de Dios, santos y amados, de entrañable misericordia, de benignidad, de humildad, de mansedumbre, de paciencia;",
      "cita":"Colosenses 3:12"
    },
    {
      "id":27,
      "versiculo":"Jehová se manifestó a mí hace ya mucho tiempo, diciendo: Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",
      "cita":"Jeremías 31:3"
    },
    {
      "id":28,
      "versiculo":"Seguid la paz con todos, y la santidad, sin la cual nadie verá al Señor. ",
      "cita":"Hebreos 12:14"
    },
    {
      "id":29,
      "versiculo":"Por tanto, os digo que todo lo que pidiereis orando, creed que lo recibiréis, y os vendrá.Mirad, pues, con diligencia cómo andéis, no como necios sino como sabios, aprovechando bien el tiempo, porque los días son malos.",
      "cita":"Efesios 5:15-16"
    },
    {
      "id":30,
      "versiculo":"Mi carne y mi corazón desfallecen; Mas la roca de mi corazón y mi porción es Dios para siempre.",
      "cita":"Salmo 73:26"
    },
    {
      "id":31,
      "versiculo":"Nunca se apartará de tu boca este libro de la ley, sino que de día y de noche meditarás en él, para que guardes y hagas conforme a todo lo que en él está escrito; porque entonces harás prosperar tu camino, y todo te saldrá bien.",
      "cita":"Josué 1:8"
    }
];
  //CAPTURA DE FECHA
  public today: number = Date.now();
  //ARRAY DE LOS ANUNCIOS
  public Arranuncios :any = [];
   //ARRAY DE LOS ANUNCIOS
   public Arrdevocional :any = [];

  // SLIDER
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    speed: 800
    
   };

  anun: string = "anuncios";
  loading:any;


  constructor(
    private authservice: AuthService,
    public anunciosservice : AnunciosService,
    private fcm: FCM,
    private iab :InAppBrowser,
    public loadingController: LoadingController
  ) {
    this.anun = "anuncios";
   }

   openSystem(link){
     this.iab.create(link,'_system')
   }

  ngOnInit() {
  
    //AUTORIZACION ANONIMA
    this.authservice.login();

    //ANUNCIOS
    this.anunciosservice.getAnuncios().subscribe( anuncios => {
      this.Arranuncios= anuncios;
    })
    //DEVOCIONALES
    this.anunciosservice.getDevocional().subscribe( devocionales => {
      this.Arrdevocional= devocionales;
    })

      //NOTIFICACIONES
    this.fcm.getToken().then(token => {
      console.log(token);
    });
  }

}
