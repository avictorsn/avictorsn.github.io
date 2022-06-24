import ptJSON from '../src/i18n/pt.js';
import enJSON from '../src/i18n/en.js';
import esJSON from '../src/i18n/es.js';

$(document).ready(function(){

   $(".visible_tab").click(function(){
   		$(this).find(".hidden_div").slideToggle("slow");
   });
   __init__();

   $('#current-language').click(
		function languageHandler(event) {
			if(event.target.src.includes(countriesURLS.br)) {
				event.target.src = countriesURLS.en;
				event.target.alt = 'United States';
				event.target.title = 'United States';
				i18next.changeLanguage('en');
				updateTexts();
			} else if(event.target.src.includes(countriesURLS.en)) {
				event.target.src = countriesURLS.es;
				event.target.alt = 'España';
				event.target.title = 'España';
				i18next.changeLanguage('es');
				updateTexts();
			} else if(event.target.src.includes(countriesURLS.es)) {
				event.target.src = countriesURLS.br;
				event.target.alt = 'Brasil';
				event.target.title = 'Brasil';
				i18next.changeLanguage('pt');
				updateTexts();
			} else {
				event.target.src = countriesURLS.br;
				event.target.alt = 'Brasil';
				event.target.title = 'Brasil';
				i18next.changeLanguage('pt');
				updateTexts();
			}
		}
   );

}); 

function __init__() {
	i18next.init({
		lng: 'pt', // if you're using a language detector, do not define the lng option
		debug: true,
		resources: {
		  en: {
			translation: enJSON
		  },
		  pt: {
			translation: ptJSON
		  },
		  es: {
			translation: esJSON
		  },
		}
	  }).then(function(t) {
		// initialized and ready to go!
		updateTexts();
	  });
}


const countriesURLS = {
	br: 'src/assets/flags/br.png',
	en: 'src/assets/flags/usa.png',
	es: 'src/assets/flags/es.png'
}

function updateTexts () {
	switch(i18next.language) {
		case 'pt':
			for(let prop in ptJSON) {
				document.getElementById(prop).innerText = i18next.t(prop);
			}
			break;
		case 'en':
			for(let prop in enJSON) {		
				document.getElementById(prop).innerText = i18next.t(prop);
			}
			break;
		case 'es':
			for(let prop in esJSON) {
				document.getElementById(prop).innerText = i18next.t(prop);
			}
			break;
		default:
				for(let prop in ptJSON) {
					document.getElementById(prop).innerText = i18next.t(prop);
				}
	}
}

export const outputs = {
	hint: 'dev'
}