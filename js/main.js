



	//Variablen

		let timer_neustart_zeit = 120000;//in ms (1s = 1000ms) //diese Zeit muss laeger als die laengste Audiodatei + Rezipienten-Bedienzeit sein

		let var_rotation = 0;//Ausgabe an Bild
		let winkelposition1 = 0;//Aktuell
		let winkelposition2 = 0;//Angestrebt
		let rotieren = false;
		let gruppe = 0;//unwichtig, war für ältere Programmversion
		let gruppenstufe = 10;//unwichtig, war für ältere Programmversion

		//Zoom mitte
		let zoom = false;//ob gezoomt wird
		let var_zoom_mitte = 1.0;//Zoom aktuell
		let var_zoom_mitte_2 = 2.0;//Zoom Ziel
		

		//ohne rotieren (nur Bild 4)
		let ohnerotierien = false;

		//Deckkraft
		let deckkraftRingDunkel = 0.0;//muss in float //opacity wird zwischen 0 und 1 angegeben. die Variable stellt nur den Bereich nach dem Komma dar (0.x)
		let deckkraftRingTranzparenz = 0;

		let deckkraftInnenDunkel = 0;
		let deckkraftInnenTranzparenz = 0;
		let b = 0;//Temporaere Zaehlervariable
		let u = 0;//Temporaere Zaehlervariable

		let ringdunkelwinkelverschiebung = 0;//verschiebt den dunklen Ring, dieser ist auf 12 uhr offen
		let positonringdunkel = 0;
		let programmnummer = 0;//wichtig fuer programmablauf

		//Zoom und Verschiebe Variablen + Hilfsvariablen
		let zoom_ring = false;
		let h = 0;
		let var_verschieb_ring = 50;//als Betrag angegeben /erst in der Ausgabe ist ein - vorgesetzt//startet bei 50% -->mittig
		let g = 0;
		let var_zoom_ring = 1;

		//Maske-Personen
		let maske_person = false;
		let deckkraftMaske = 0.0;
		let e = 0;//Zaehler Maske oacity		

		let a = 1;
		let rotationsgeschwindigkeit = 30;

		let clickPlayerNr = 0;
		let var_audiobild = 0;
		let audio_sprechpart_dauer = 1000;//hier wird die Dauer der Sprechparts in ms gespeichert - 1000ms damit nicht leer


		let repeater;//
		let repeater2 = 0;//
		let repeater3 = 0;//
		let repeater4 = 0;

		//Story--------------------------------------------
		let ebene = 1;
		let naechste_ebene = ["leer wird nicht angezeigt", "Zunftmeister P9", "Bootsmann P15", "Zunftmeister P9", "Narrenmutter P8", "3 Soehne P1-P7", "Mueller & Muehle P13", "Aussenbilder", "Zunftmeister P9", "Ende1", "Ende2", "Ende3", "Ende4",];//ist fuer die Entwickler Info
		let anzahl_soehne = 0;//0-7 wird hochgezaehlt wenn Soehne angetippt wurden.
		let wie_viele_soehne_muss = 3//hier kann man einstellen wie viele Soehne man antippen muss.

		let anzahl_aussenbilder = 0;

		let sohn1 = 0;//Wird für die berechnung der Soehne benoetigt
		let sohn2 = 0;
		let sohn3 = 0;
		let sohn4 = 0;
		let sohn5 = 0;
		let sohn6 = 0;
		let sohn7 = 0;

		let person = 0;

		let audio_person = "person_8_5";//wird �berschrieben

		//schnelle Tabelle //Wichtig zum testen der Anwendung
		/*
		//array position 0 = das Extraaudio f�r Bild 8
		let audio_dauer_rand = [500, 2000, 2000, 2000, 5500, 1000, 2000, 2000, 2000,];

		let audio_dauer_person_1 = [2000, 2000, 2000, 2000, 5500, 1000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_2 = [2000, 2000, 2000, 2000, 2000, 1000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_3 = [2000, 2000, 2000, 2000, 2000, 1000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_4 = [2000, 2000, 2000, 2000, 2000, 1000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_5 = [2000, 2000, 2000, 2000, 2000, 1000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_6 = [2000, 2000, 2000, 2000, 2000, 1000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_7 = [2000, 2000, 2000, 2000, 2000, 1000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_8 = [2000, 2000, 2000, 2000, 5500, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_9 = [2000, 5500, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_10 = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_11 = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_12 = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_13 = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_14 = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_15 = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_16 = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_17 = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_18 = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		//Ende schnelle Tabelle


		//array position 0 = das Extraaudio f�r Bild 8
		let audio_dauer_rand = [7000, 45000, 41000, 42000, 40000, 40000, 39000, 41000, 51000,];
		//array position 0 = unwichtig //  1      2     3    4     5      6     7
		let audio_dauer_person_1 = [2000, 2000, 2000, 2000, 6000, 13000, 4000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_2 = [2000, 2000, 2000, 2000, 6000, 22000, 10000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_3 = [2000, 2000, 2000, 2000, 6000, 13000, 5000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_4 = [2000, 2000, 2000, 2000, 6000, 10000, 4000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_5 = [2000, 2000, 2000, 2000, 4000, 39000, 5000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_6 = [2000, 2000, 2000, 2000, 6000, 26000, 5000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_7 = [2000, 2000, 2000, 2000, 5000, 25000, 7000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_8 = [53000, 2000, 2000, 2000, 28000, 3000, 8000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_9 = [2000, 23000, 200, 2000, 9000, 4000, 24000, 24000, 97000, 2000, 2000, 2000,];
		let audio_dauer_person_10 = [2000, 2000, 2000, 2000, 5000, 4000, 40000, 17000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_11 = [2000, 2000, 2000, 2000, 5000, 2000, 17000, 26000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_12 = [2000, 2000, 2000, 2000, 12000, 5000, 31000, 22000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_13 = [2000, 2000, 2000, 2000, 9000, 4000, 66000, 26000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_14 = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_15 = [2000, 2000, 14000, 200, 10000, 3000, 8000, 16000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_16 = [2000, 2000, 2000, 2000, 6000, 4000, 24000, 21000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_17 = [2000, 2000, 2000, 2000, 4000, 4000, 2000, 26000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_18 = [0000, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 1000, 1100,];
		//tabelle vor neuen Audios
		*/

		//Tabelle für die Länge der Audio-Dateien
		//die Position im Array gibt an von welcher Ebene die Audio-Datei ist (Wenn Personen in einer Ebene nichts sagen, ist ein willkuerlicher Wert angegeben)
		//array position 0 = das Extraaudio f�r Bild 8
		let audio_dauer_rand = [8000, 42000, 40000, 45000, 43000, 35000, 37000, 45000, 45000,];
		//array position 0 = unwichtig //  1      2     3    4     5      6     7
		let audio_dauer_person_1 = [2000, 2000, 2000, 2000, 6000, 14000, 5000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_2 = [2000, 2000, 2000, 2000, 5000, 16000, 9000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_3 = [2000, 2000, 2000, 2000, 4000, 8000, 4000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_4 = [2000, 2000, 2000, 2000, 7000, 13000, 5000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_5 = [2000, 2000, 2000, 2000, 5000, 33000, 4000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_6 = [2000, 2000, 2000, 2000, 5000, 25000, 7000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_7 = [2000, 2000, 2000, 2000, 6000, 25000, 7000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_8 = [75000, 2000, 2000, 2000, 53000, 5000, 10000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_9 = [2000, 25000, 200, 2000, 9000, 5000, 20000, 22000, 109000, 2000, 2000, 2000,];
		let audio_dauer_person_10 = [2000, 2000, 2000, 2000, 6000, 4000, 31000, 14000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_11 = [2000, 2000, 2000, 2000, 4000, 3000, 12000, 19000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_12 = [2000, 2000, 2000, 2000, 9000, 5000, 32000, 22000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_13 = [2000, 2000, 2000, 2000, 10000, 5000, 77000, 25000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_14 = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_15 = [2000, 2000, 21000, 200, 6000, 4000, 7000, 14000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_16 = [2000, 2000, 2000, 2000, 7000, 5000, 27000, 22000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_17 = [2000, 2000, 2000, 2000, 5000, 5000, 16000, 23000, 2000, 2000, 2000, 2000,];
		let audio_dauer_person_18 = [0000, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 1000, 1100,];

		
		//evl mehrere extra var f�r die deaktivierung der einzelnen s�hne

		//Nach Anordnung des Tellers //wenn 1 dann dunkel mit Deckkraft. Weil die Variablen gezaehlt werden koennen. Boolesche Werte nicht.
		let aussenbilder_schatten_1 = 0;
		let aussenbilder_schatten_2 = 0;
		let aussenbilder_schatten_3 = 0;
		let aussenbilder_schatten_4 = 0;
		let aussenbilder_schatten_5 = 0;
		let aussenbilder_schatten_6 = 0;
		let aussenbilder_schatten_7 = 0;
		let aussenbilder_schatten_8 = 1;//letztes Bild Narrensamensaehen. Ist vorerst dunkel und wird erst wenn alle Aussenbilder angesehen wurden Hell.

		let min_aussenbilder = 7;//var gibt an wieviele Aussenbilder min angeschaut werden muessen bevor das letzte ausgewaehlt werden kann
		let rand_doppel = 0;


	document.addEventListener("keydown", TasteGedrueckt);
	//Buttons-----------------------

	//Reset-Button
	//function_reset_reload()
	document.getElementById("id_reset_button").addEventListener("click", function_reset_reload);
	document.getElementById("id_start_button").addEventListener("click", function_start_anwendung);
	//Button-Gruppen

	//�u�ere Gruppen
	//Gruppe-1
	document.getElementById("gruppe_01").addEventListener("click", function_gruppe_01);
	//Gruppe-2
	document.getElementById("gruppe_02").addEventListener("click", function_gruppe_02);
	//Gruppe-3 (Narrens�hen und das davor)
	document.getElementById("gruppe_03").addEventListener("click", function_gruppe_03);

	//innere Gruppen
	//Gruppe-4 (Narrenmutter mit S�hnen)
	document.getElementById("gruppe_04").addEventListener("click", function_gruppe_05);
	//Gruppe-5 (M�hle, rechts der M�hle und links der M�hle)
	document.getElementById("gruppe_05").addEventListener("click", function_gruppe_05);

	//ersetzte diese waren f�r die Einzelbilder //alte Versionen
	//Button-01-------------------------------------------------------------------------	
	document.getElementById("stufe_01").addEventListener("click", function_stufe_01);
	//Button-02-------------------------------------------------------------------------	
	document.getElementById("stufe_02").addEventListener("click", function_stufe_02);
	//Button-03-------------------------------------------------------------------------	
	document.getElementById("stufe_03").addEventListener("click", function_stufe_03);
	//Button-04-------------------------------------------------------------------------	
	document.getElementById("stufe_04").addEventListener("click", function_stufe_04);
	//Button-05-------------------------------------------------------------------------	
	document.getElementById("stufe_05").addEventListener("click", function_stufe_05);
	//Button-06-------------------------------------------------------------------------	
	document.getElementById("stufe_06").addEventListener("click", function_stufe_06);
	//Button-07-------------------------------------------------------------------------	
	document.getElementById("stufe_07").addEventListener("click", function_stufe_07);
	//Button-08-------------------------------------------------------------------------	
	document.getElementById("stufe_08").addEventListener("click", function_stufe_08);
	//Button-09-------------------------------------------------------------------------	
	document.getElementById("stufe_09").addEventListener("click", function_stufe_09);
	//Button-10-------------------------------------------------------------------------	
	document.getElementById("stufe_10").addEventListener("click", function_stufe_10);
	//Button-Narrenmutter-------------------------------------------------------------------------	
	document.getElementById("stufe_11").addEventListener("click", function_stufe_11);

	//Audios auf stumm //Wichtig damit beim laden der Audios der Teller stumm ist
	document.getElementById("r1e7").volume=0.0;
	document.getElementById("r2e7").volume=0.0;
	document.getElementById("r3e7").volume=0.0;
	document.getElementById("r4e7").volume=0.0;
	document.getElementById("r5e7").volume=0.0;
	document.getElementById("r6e7").volume=0.0;
	document.getElementById("r7e7").volume=0.0;
	document.getElementById("r8e7").volume=0.0;
	document.getElementById("ende_1").volume=0.0;
	document.getElementById("ende_2").volume=0.0;
	document.getElementById("ende_3").volume=0.0;
	document.getElementById("ende_4").volume=0.0;
	document.getElementById("person_9_1").volume=0.0;		
	document.getElementById("person_9_8").volume=0.0;

	//Buttons der Personen auf dem Teller
	document.getElementById("person_1").addEventListener("click", function_person_1);
	document.getElementById("person_2").addEventListener("click", function_person_2);
	document.getElementById("person_3").addEventListener("click", function_person_3);
	document.getElementById("person_4").addEventListener("click", function_person_4);
	document.getElementById("person_5").addEventListener("click", function_person_5);
	document.getElementById("person_6").addEventListener("click", function_person_6);
	document.getElementById("person_7").addEventListener("click", function_person_7);
	document.getElementById("person_8").addEventListener("click", function_person_8);
	document.getElementById("person_9").addEventListener("click", function_person_9);
	document.getElementById("person_10").addEventListener("click", function_person_10);
	document.getElementById("person_11").addEventListener("click", function_person_11);
	document.getElementById("person_12").addEventListener("click", function_person_12);
	document.getElementById("person_13").addEventListener("click", function_person_13);
	document.getElementById("person_14").addEventListener("click", function_person_14);
	document.getElementById("person_15").addEventListener("click", function_person_15);
	document.getElementById("person_16").addEventListener("click", function_person_16);
	document.getElementById("person_17").addEventListener("click", function_person_17);
	document.getElementById("person_18").addEventListener("click", function_person_18);

	//Buttons-Ende------------------

//Physische Buttons/Flaechen umgesetzt mit Tastatureingaben
//Somit haette die Anwendung auf der Projektionsflaeche gesteuert werden koennen
//Wurde nicht implementiert 
//(Arduino Nano koennte als Tastatur fungieren und Kapazitive Flaechen koennten Anwendung steuern)

	/*//Key-Code 0=48, 1=49, ... 9=57
	document.addEventListener('keypress', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}*/

	//Funktionen-------------------------------------------------------------------------	
	/*request.addEventListener('load', function(event) {
   if (request.status >= 200 && request.status < 300) {
      console.log(request.responseText);
   } else {
      console.warn(request.statusText, request.responseText);
   }
});*/

//die Entwickler-Info ist ggf. nicht mehr aktuell. 
document.getElementById("id_entwickler_info").innerHTML = ("Ebene: "+ebene+"<br> Person: "+person+"<br> Sprecherdauer: "+audio_sprechpart_dauer+"<br> Anzahl der Soehne: "+anzahl_soehne+"<br> Naechste Person: "+naechste_ebene[ebene]);	
function_hervorhebungen();

	function function_start_anwendung(){
		//iOS und Android haben so wie es aussieht Probleme damit automatisch Audios vom js gesteuert abzuspielen.
		//Lediglich wenn sie über ein Click-Event ausglöst werden nicht.
		//Deswegen werden beim Start der Anwendung via Button alle Audios gestartet und gleich wieder beendet,
		//damit sie an gewünschter Stelle funktionieren. (Videos auch!)
		//es kann sein, dass das Antippen des ersten Buttons deswegen etwas länger dauert.

		//Randbilder
		//document.getElementById("r1e7").volume=0.0;
		document.getElementById("r1e7").play();
		document.getElementById("r1e7").pause();
		//document.getElementById("r2e7").volume=0.0;
		document.getElementById("r2e7").play();
		document.getElementById("r2e7").pause();
		//document.getElementById("r3e7").volume=0.0;
		document.getElementById("r3e7").play();
		document.getElementById("r3e7").pause();
		//document.getElementById("r4e7").volume=0.0;
		document.getElementById("r4e7").play();
		document.getElementById("r4e7").pause();
		//document.getElementById("r5e7").volume=0.0;
		document.getElementById("r5e7").play();
		document.getElementById("r5e7").pause();
		//document.getElementById("r6e7").volume=0.0;
		document.getElementById("r6e7").play();
		document.getElementById("r6e7").pause();
		//document.getElementById("r7e7").volume=0.0;
		document.getElementById("r7e7").play();
		document.getElementById("r7e7").pause();
		//document.getElementById("r8e7").volume=0.0;
		document.getElementById("r8e7").play();
		document.getElementById("r8e7").pause();

		//Personen
		//hatten reibungslos funktioniert
		//Ende Audios Monolog
		//document.getElementById("ende_1").volume=0.0;
		document.getElementById("ende_1").play();
		document.getElementById("ende_1").pause();
		//document.getElementById("ende_2").volume=0.0;
		document.getElementById("ende_2").play();
		document.getElementById("ende_2").pause();
		//document.getElementById("ende_3").volume=0.0;
		document.getElementById("ende_3").play();
		document.getElementById("ende_3").pause();
		//document.getElementById("ende_4").volume=0.0;
		document.getElementById("ende_4").play();
		document.getElementById("ende_4").pause();

		//film
		document.getElementById("id_film").play();
		document.getElementById("id_film").pause();

		//Zunftmeister ist die erste Person
		//document.getElementById("person_9_1").volume=0.0;
		document.getElementById("person_9_1").play();
		document.getElementById("person_9_1").pause();
		//document.getElementById("person_9_8").volume=0.0;
		document.getElementById("person_9_8").play();
		document.getElementById("person_9_8").pause();
		function_person_9();
		}


	//Gruppen-------------------------------------------------------------------------	
		//Die Gruppen waren für eine Zusammenfassung von Tellerbereichen und wurden verworfen, damit der Teller interaktiver ist.
	//Gruppe-01--------------------------------------
	function function_gruppe_01() {
		console.log("Gruppe 01");
		gruppe = 1;
		gruppenstufe = 7;
		programmnummer = 1;
		function_stufe_08();//�ffnet erst Bild 12 Uhr
		}
	//Gruppe-02--------------------------------------	
	function function_gruppe_02() {
		console.log("Gruppe 02");
		gruppe = 2;
		gruppenstufe = 7;
		programmnummer = 1;
		function_stufe_03();//�ffnet erst Bild 4 Uhr
		
		}
	//Gruppe-03--------------------------------------	
	function function_gruppe_03() {
		console.log("Gruppe 3");
		gruppe = 3;
		gruppenstufe = 7;
		programmnummer = 1;
		function_stufe_06();//�ffnet erst Bild 9 Uhr
		
		}
	//Gruppe-04--------------------------------------
	//Narrenmutter mit S�hnen
	function function_gruppe_04() {
		console.log("Gruppe 04");
		person = 0;
		gruppe = 4;
		gruppenstufe = 7;
		programmnummer = 1;
		function_stufe_10();//�ffnet Bild Mitte unten		
		}
	//Gruppe-05--------------------------------------	
	//M�hle
	function function_gruppe_05() {
		console.log("Gruppe 05");
		gruppe = 5;
		gruppenstufe = 7;
		programmnummer = 1;
		function_stufe_09();//�ffnet Bild Mitte oben		
		}

	//Funktion-01--------------------------------------	
	//Fassreifen Rand2
	function function_stufe_01() {
		console.log("Button 01 - Press");
		if(ebene === 7){
			rand_doppel++;
			if(aussenbilder_schatten_2 === 0){
				aussenbilder_schatten_2 = 1;
				console.log("Button 01");
				person = 0;
				document.getElementById("stufe_01").innerHTML = "geklickt";	
				winkelposition2 = (360 / 8) * 3;
				ringdunkelwinkelverschiebung = (360 / 8) * 1;
				rotieren = true;
				zoom = false;
				zoom_ring = true;
				ohnerotierien = false;
				programmnummer = 1;
				var_audiobild = "r2e7";
				audio_sprechpart_dauer = audio_dauer_rand[2];//in Millisekunden
				var_rotation++;
				maske_person = false;
				if(ebene === 7){
					if(aussenbilder_schatten_2 === 0){
						aussenbilder_schatten_2 = 1;
						}
					}
				anzahl_aussenbilder = (aussenbilder_schatten_1 + aussenbilder_schatten_2 + aussenbilder_schatten_3 + aussenbilder_schatten_4 + aussenbilder_schatten_5 + aussenbilder_schatten_6 + aussenbilder_schatten_7);
				if(anzahl_aussenbilder >= min_aussenbilder){
					aussenbilder_schatten_8 = 0;
					}
				programmdurchlauf();
				}//ende if aussenbilder
			}//ende if ebene
		}//ende funktion Stufe

	//Funktion-02--------------------------------------	
	//Blasebalg Rand3
	function function_stufe_02() {
		console.log("Button 02 - Press");
		if(ebene === 7){
			rand_doppel++;
			if(aussenbilder_schatten_3 === 0){
				aussenbilder_schatten_3 = 1;
				console.log("Button 02 - Funktion");
				person = 0;
				winkelposition2 = (360 / 8) * 2;
				ringdunkelwinkelverschiebung = (360 / 8) * 2;
				rotieren = true;
				zoom = false;
				ohnerotierien = false;
				zoom_ring = true;
				programmnummer = 1;
				var_audiobild = "r3e7";
				audio_sprechpart_dauer = audio_dauer_rand[3];//in Millisekunden
				var_rotation++;
				maske_person = false;
				anzahl_aussenbilder = (aussenbilder_schatten_1 + aussenbilder_schatten_2 + aussenbilder_schatten_3 + aussenbilder_schatten_4 + aussenbilder_schatten_5 + aussenbilder_schatten_6 + aussenbilder_schatten_7);
				if(anzahl_aussenbilder >= min_aussenbilder){
					aussenbilder_schatten_8 = 0;
					}
				programmdurchlauf();
				}//ende if aussenbilder
			}//ende if ebene
		}//ende funktion Stufe

	//Funktion-03--------------------------------------	
	//Hobel Rand4
	function function_stufe_03() {
		console.log("Button 02 - Press");
		if(ebene === 7){
			rand_doppel = 0;
			if(aussenbilder_schatten_4 === 0){
				aussenbilder_schatten_4 = 1;
				console.log("Button 03");
				person = 0;
				winkelposition2 = (360 / 8) * 1;
				ringdunkelwinkelverschiebung = (360 / 8) * 3;
				rotieren = true;
				zoom = false;
				ohnerotierien = false;
				zoom_ring = true;
				programmnummer = 1;
				var_audiobild = "r4e7";
				audio_sprechpart_dauer = audio_dauer_rand[4];//in Millisekunden
				var_rotation++;
				maske_person = false;
				if(ebene === 7){
					if(aussenbilder_schatten_4 === 0){
						aussenbilder_schatten_4 = 1;
						}
					}
				anzahl_aussenbilder = (aussenbilder_schatten_1 + aussenbilder_schatten_2 + aussenbilder_schatten_3 + aussenbilder_schatten_4 + aussenbilder_schatten_5 + aussenbilder_schatten_6 + aussenbilder_schatten_7);
				if(anzahl_aussenbilder >= min_aussenbilder){
					aussenbilder_schatten_8 = 0;
					}
				programmdurchlauf();
				}//ende if aussenbilder
			}//ende if ebene
		}//ende funktion Stufe
	//Funktion-04--------------------------------------	
	//kopfbohren 6uhr Rand5
	function function_stufe_04() {
		console.log("Button 04 - Press");
		if(ebene === 7){
			rand_doppel++;
			if(aussenbilder_schatten_5 === 0){
				aussenbilder_schatten_5 = 1;
				console.log("Button 04");
				person = 0;
				winkelposition2 = (360 / 8) * 0;
				ringdunkelwinkelverschiebung = (360 / 8) * 4;
				rotieren = false;
				zoom = false;
				ohnerotierien = true;
				zoom_ring = true;
				programmnummer = 1;
				var_audiobild = "r5e7";
				audio_sprechpart_dauer = audio_dauer_rand[5];//in Millisekunden
				maske_person = false;
				if(ebene === 7){
					if(aussenbilder_schatten_5 === 0){
						aussenbilder_schatten_5 = 1;
						}
					}
				anzahl_aussenbilder = (aussenbilder_schatten_1 + aussenbilder_schatten_2 + aussenbilder_schatten_3 + aussenbilder_schatten_4 + aussenbilder_schatten_5 + aussenbilder_schatten_6 + aussenbilder_schatten_7);
				if(anzahl_aussenbilder >= min_aussenbilder){
					aussenbilder_schatten_8 = 0;
					}
				programmdurchlauf();
				}//ende if aussenbilder
			}//ende if ebene
		}//ende funktion Stufe
	//Funktion-05--------------------------------------	
	//kopf sp�len Rand6
	function function_stufe_05() {
		console.log("Button 05 - Press");
		if(ebene === 7){
			rand_doppel++;
			if(aussenbilder_schatten_6 === 0){
				aussenbilder_schatten_6 = 1;
				console.log("Button 05");
				person = 0;
				winkelposition2 = (360 / 8) * 7;
				ringdunkelwinkelverschiebung = (360 / 8) * 5;
				rotieren = true;
				zoom = false;
				ohnerotierien = false;
				zoom_ring = true;
				programmnummer = 1;
				var_audiobild = "r6e7";
				audio_sprechpart_dauer = audio_dauer_rand[6];//in Millisekunden
				var_rotation++;
				maske_person = false;
				if(ebene === 7){
					if(aussenbilder_schatten_6 === 0){
						aussenbilder_schatten_6 = 1;
						}
					}
				anzahl_aussenbilder = (aussenbilder_schatten_1 + aussenbilder_schatten_2 + aussenbilder_schatten_3 + aussenbilder_schatten_4 + aussenbilder_schatten_5 + aussenbilder_schatten_6 + aussenbilder_schatten_7);
				if(anzahl_aussenbilder >= min_aussenbilder){
					aussenbilder_schatten_8 = 0;
					}
				programmdurchlauf();
				}//ende if aussenbilder
			}//ende if ebene
		}//ende funktion Stufe
	//Funktion-06--------------------------------------	
	//Einlauf Rand7
	function function_stufe_06() {
		console.log("Button 06 - Press");
		if(ebene === 7){
			rand_doppel++;
			if(aussenbilder_schatten_7 === 0){
				aussenbilder_schatten_7 = 1;
				console.log("Button 06");
				person = 0;
				winkelposition2 = (360 / 8) * 6;
				ringdunkelwinkelverschiebung = (360 / 8) * 6;
				rotieren = true;
				zoom = false;
				ohnerotierien = false;
				zoom_ring = true;
				programmnummer = 1;
				var_audiobild = "r7e7";
				audio_sprechpart_dauer = audio_dauer_rand[7];//in Millisekunden
				var_rotation++;
				maske_person = false;
				if(ebene === 7){
					if(aussenbilder_schatten_7 === 0){
						aussenbilder_schatten_7 = 1;
						}
					}
				anzahl_aussenbilder = (aussenbilder_schatten_1 + aussenbilder_schatten_2 + aussenbilder_schatten_3 + aussenbilder_schatten_4 + aussenbilder_schatten_5 + aussenbilder_schatten_6 + aussenbilder_schatten_7);
				if(anzahl_aussenbilder >= min_aussenbilder){
					aussenbilder_schatten_8 = 0;
					}
				programmdurchlauf();
				}//ende if aussenbilder
			}//ende if ebene
		}//ende funktion Stufe
	//Funktion-07--------------------------------------	
	//Narrensamen s�hen Rand8
	function function_stufe_07() {
		console.log("Button 07 - Press");
		if(ebene === 7){
			rand_doppel = 0;
			//wichtig
			//if noch dunkel dann soll extra audio in ebene 7 ohne Animation
			//audio_sprechpart_dauer = audio_dauer_rand[0];//in Millisekunden
			//wichtig
			if(aussenbilder_schatten_8 === 1){
				function_extra_audio_rand_8();
				}
			if(aussenbilder_schatten_8 === 0){
				aussenbilder_schatten_8 = 1;
				//}
				console.log("Button 07");
				person = 0;
				winkelposition2 = (360 / 8) * 5;
				ringdunkelwinkelverschiebung = (360 / 8) * 7;
				rotieren = true;
				zoom = false;
				ohnerotierien = false;
				zoom_ring = true;
				programmnummer = 1;
				var_audiobild = "r8e7";
				audio_sprechpart_dauer = audio_dauer_rand[8];//in Millisekunden
				var_rotation++;
				maske_person = false;
				//if(ebene === 7){   //if((aussenbilder_schatten_8 === 0) && (anzahl_aussenbilder === 7)){
					if((aussenbilder_schatten_8 === 0)){
						aussenbilder_schatten_1 = 0;
						aussenbilder_schatten_2 = 0;
						aussenbilder_schatten_3 = 0;
						aussenbilder_schatten_4 = 0;
						aussenbilder_schatten_5 = 0;
						aussenbilder_schatten_6 = 0;
						aussenbilder_schatten_7 = 0;
						aussenbilder_schatten_8 = 0;
						}
				ebene++;
		
				programmdurchlauf();
				}//ende if aussenbilder
			}//ende if ebene
		}//ende funktion Stufe
	//Funktion-08--------------------------------------	
	//Erstes Bild 12 Uhr //kopf �ffnen Rand1
	function function_stufe_08() {
		console.log("Button 08 - Press");
		if(ebene === 7){
			rand_doppel++;
			if(aussenbilder_schatten_1 === 0){
				aussenbilder_schatten_1 = 1;
				console.log("Button 08");
				person = 0;
				winkelposition2 = (360 / 8) * 4;
				ringdunkelwinkelverschiebung = (360 / 8) * 0;
				rotieren = true;
				zoom = false;
				ohnerotierien = false;
				zoom_ring = true;
				programmnummer = 1;
				var_audiobild = "r1e7";
				audio_sprechpart_dauer = audio_dauer_rand[1];//in Millisekunden
				var_rotation++;
				maske_person = false;
				if(ebene === 7){
					if(aussenbilder_schatten_1 === 0){
						aussenbilder_schatten_1 = 1;
						}
					}
				anzahl_aussenbilder = (aussenbilder_schatten_1 + aussenbilder_schatten_2 + aussenbilder_schatten_3 + aussenbilder_schatten_4 + aussenbilder_schatten_5 + aussenbilder_schatten_6 + aussenbilder_schatten_7);
				if(anzahl_aussenbilder >= min_aussenbilder){
					aussenbilder_schatten_8 = 0;
					}
				programmdurchlauf();
				}//ende if aussenbilder
			}//ende if ebene
		}//ende funktion Stufe
	//Funktion-09--------------------------------------	
	function function_stufe_09() {
		console.log("Button 09");
		person = 0;
		var_zoom_mitte_2 = 1.6;
		programmnummer = 1;
		zoom = true;
		rotieren = false;
		ohnerotierien = false;
		zoom_ring = false;
		var_audiobild = 9;
		audio_sprechpart_dauer = 4000;//in Millisekunden
		maske_person = false;
		programmdurchlauf();
		}
	//Funktion-10--------------------------------------	
	function function_stufe_10() {
		console.log("Button 10");
		person = 0;
		var_zoom_mitte_2 = 1.6;
		programmnummer = 1;
		zoom = true;
		rotieren = false;
		ohnerotierien = false;
		zoom_ring = false;
		var_audiobild = 10;
		audio_sprechpart_dauer = 4000;//in Millisekunden
		maske_person = false;
		programmdurchlauf();
		}
	//Funktion-11-Narrenmutter--------------------------------------	
	function function_stufe_11() {
		console.log("Button 11 Narrenmutter");
		person = 0;
		var_zoom_mitte_2 = 1.6;
		programmnummer = 1;
		zoom = true;
		rotieren = false;
		ohnerotierien = false;
		zoom_ring = false;
		var_audiobild = 11;
		audio_sprechpart_dauer = 6000;//in Millisekunden
		maske_person = true;
		programmdurchlauf();
		}


	//Funktion-Person-1--------------------------------------	
	function function_person_1() {
		console.log("Button P1");
		//Soehne sollen nach Ausgrauung, nicht anwaehlbar sein //(ebene === 5 && sohnX === 0)
		if(ebene === 3 || ebene === 4 || ebene === 6 || (ebene === 5 && sohn1 === 0)){
			console.log("Funktion Person 1");
			person = 1;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_1[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			if(ebene === 5){
				if(sohn1 === 0){
					sohn1 = 1;
					}
				}
			anzahl_soehne = (sohn1 + sohn2 + sohn3 + sohn4 + sohn5 + sohn6 + sohn7);
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}

	//Funktion-Person-2--------------------------------------	
	function function_person_2() {
		console.log("Button P2");
		//S�hne sollen nach Ausgrauung, nicht anw�hlbar sein //(ebene === 5 && sohnX === 0)
		if(ebene === 3 || ebene === 4 || ebene === 6 || (ebene === 5 && sohn2 === 0)){
			console.log("Funktion Person 2");
			person = 2;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_2[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			if(ebene === 5){
				if(sohn2 === 0){
					sohn2 = 1;
					}
				}
			anzahl_soehne = (sohn1 + sohn2 + sohn3 + sohn4 + sohn5 + sohn6 + sohn7);
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}

		//Funktion-Person-3--------------------------------------	
	function function_person_3() {
		console.log("Button P8");
		//S�hne sollen nach Ausgrauung, nicht anw�hlbar sein //(ebene === 5 && sohnX === 0)
		if(ebene === 3 || ebene === 4 || ebene === 6 || (ebene === 5 && sohn3 === 0)){
			console.log("Funktion Person 3");
			person = 3;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_3[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			if(ebene === 5){
				if(sohn3 === 0){
					sohn3 = 1;
					}
				}
			anzahl_soehne = (sohn1 + sohn2 + sohn3 + sohn4 + sohn5 + sohn6 + sohn7);
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}
		
	//Funktion-Person-4--------------------------------------	
	function function_person_4() {
		console.log("Button P4");
		//S�hne sollen nach Ausgrauung, nicht anw�hlbar sein //(ebene === 5 && sohnX === 0)
		if(ebene === 3 || ebene === 4 || ebene === 6 || (ebene === 5 && sohn4 === 0)){
			console.log("Funktion Person 4");
			person = 4;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_4[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			if(ebene === 5){
				if(sohn4 === 0){
					sohn4 = 1;
					}
				}
			anzahl_soehne = (sohn1 + sohn2 + sohn3 + sohn4 + sohn5 + sohn6 + sohn7);
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}

	//Funktion-Person-5--------------------------------------	
	function function_person_5() {
		console.log("Button P5");
		//S�hne sollen nach Ausgrauung, nicht anw�hlbar sein //(ebene === 5 && sohnX === 0)
		if(ebene === 3 || ebene === 4 || ebene === 6 || (ebene === 5 && sohn5 === 0)){
			console.log("Funktion Person 5");
			person = 5;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_5[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			if(ebene === 5){
				if(sohn5 === 0){
					sohn5 = 1;
					}
				}
			anzahl_soehne = (sohn1 + sohn2 + sohn3 + sohn4 + sohn5 + sohn6 + sohn7);
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}
	//Funktion-Person-6--------------------------------------	
	function function_person_6() {
		console.log("Button P6");
		//S�hne sollen nach Ausgrauung, nicht anw�hlbar sein //(ebene === 5 && sohnX === 0)
		if(ebene === 3 || ebene === 4 || ebene === 6 || (ebene === 5 && sohn6 === 0)){
			console.log("Funktion Person 6");
			person = 6;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_6[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			if(ebene === 5){
				if(sohn6 === 0){
					sohn6 = 1;
					}
				}
			anzahl_soehne = (sohn1 + sohn2 + sohn3 + sohn4 + sohn5 + sohn6 + sohn7);
			maske_person = true;
			if(ebene === 0){
				}
			programmdurchlauf();
			}
		}
	//Funktion-Person-7--------------------------------------	
	function function_person_7() {
		console.log("Button P7");
		//S�hne sollen nach Ausgrauung, nicht anw�hlbar sein //(ebene === 5 && sohnX === 0)
		if(ebene === 3 || ebene === 4 || ebene === 6 || (ebene === 5 && sohn7 === 0)){
			console.log("Funktion Person 7");
			person = 7;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_7[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			if(ebene === 5){
				if(sohn7 === 0){
					sohn7 = 1;
					}
				}
			anzahl_soehne = (sohn1 + sohn2 + sohn3 + sohn4 + sohn5 + sohn6 + sohn7);
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}
	//Funktion-Person-8--------------------------------------	
	function function_person_8() {
		console.log("Button P8");
		if(ebene === 3 || ebene === 4 || ebene === 5 || ebene === 6){
			console.log("Funktion Person 8 - Narrenmutter");
			person = 8;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_8[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			if(ebene === 5 && anzahl_soehne === wie_viele_soehne_muss){
				//audio_person = "extra_audio_narrenmutter";
				audio_sprechpart_dauer = audio_dauer_person_8[0];//in Millisekunden //Array 0 = extra
				audio_person = 'person_' + person + '_0';
				sohn1 = 0; sohn2 = 0; sohn3 = 0; sohn4 = 0; sohn5 = 0; sohn6 = 0; sohn7 = 0;
				anzahl_soehne = 0;
				ebene++;
				}
			if(ebene === 4){
				ebene++;
				}
			maske_person = true;
			if(ebene === 0){
				}
			programmdurchlauf();
			}
		}
	//Funktion-Person-9--------------------------------------	if (anzahl_aussenbilder > 0){
	function function_person_9() {
		console.log("Button P9");
		if(ebene === 1 || ebene === 3 || ebene === 4 || ebene === 5 || ebene === 6 || (ebene === 7 && anzahl_aussenbilder === 0) || ebene === 8){
			console.log("Funktion Person 9");
			person = 9;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_9[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
		
			anzahl_soehne = (sohn1 + sohn2 + sohn3 + sohn4 + sohn5 + sohn6 + sohn7);
			if(anzahl_soehne === 7){
				//hier muss funktion s�hne extra audio eingef�gt werden // verschieben an programmende
				sohn1 = 0; sohn2 = 0; sohn3 = 0; sohn4 = 0; sohn5 = 0; sohn6 = 0; sohn7 = 0;
				anzahl_soehne = 0;
				}
			maske_person = true;
			if(ebene === 0){
				}
			if(ebene === 1){
				ebene++;
				}
			if(ebene === 3){
				ebene++;
				}
			if(ebene === 8){
				ebene++;
				}
			programmdurchlauf();
			}
		}//ende funktion person

	//Funktion-Person-10--------------------------------------	
	function function_person_10() {
		console.log("Button P10");
		if(ebene === 3 || ebene === 4 || ebene === 5 || ebene === 6 || (ebene === 7 && anzahl_aussenbilder === 0)){
			console.log("Funktion Person 10");
			person = 10;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_10[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}//ende funktion person

	//Funktion-Person-11--------------------------------------	
	function function_person_11() {
		console.log("Button P11");
		if(ebene === 3 || ebene === 4 || ebene === 5 || ebene === 6 || (ebene === 7 && anzahl_aussenbilder === 0)){
			console.log("Funktion Person 11");
			person = 11;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_11[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}//ende funktion person

	//Funktion-Person-12--------------------------------------	
	function function_person_12() {
		console.log("Button P12");
		if(ebene === 3 || ebene === 4 || ebene === 5 || ebene === 6 || (ebene === 7 && anzahl_aussenbilder === 0)){
			console.log("Funktion Person 12");
			person = 12;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;//noch anpassen bzw entfernen
			audio_sprechpart_dauer = audio_dauer_person_12[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}//ende funktion person

	//Funktion-Person-13--------------------------------------	
	function function_person_13() {
		console.log("Button P13");
		if(ebene === 3 || ebene === 4 || ebene === 5 || ebene === 6 || (ebene === 7 && anzahl_aussenbilder === 0)){
			console.log("Funktion Person 13");
			person = 13;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_13[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			if(ebene === 6){
				ebene++;
				}
			programmdurchlauf();
			}
		}//ende funktion person

	//Funktion-Person-14--------------------------------------	
	function function_person_14() {
		console.log("Button P14");
		if(ebene === 3 || ebene === 4 || ebene === 5 || ebene === 6 || (ebene === 7 && anzahl_aussenbilder === 0)){
			console.log("Funktion Person 14");
			person = 14;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_14[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}//ende funktion person

	//Funktion-Person-15--------------------------------------	
	function function_person_15() {
		console.log("Button P15");
		if(ebene === 2 || ebene === 3 || ebene === 4 || ebene === 5 || ebene === 6 || (ebene === 7 && anzahl_aussenbilder === 0)){
			console.log("Funktion Person 15");
			person = 15;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_15[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			if(ebene === 2){
				ebene++;
				ebene++;//Ebene 3 ueberspringen. Ebene 3 wurde von der Story herausgekuerzt und ein umschreiben aller Ebenen war schwieriger als diese zu ueberspringen.
				}
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}//ende funktion person

	//Funktion-Person-16--------------------------------------	
	function function_person_16() {
		console.log("Button P16");
		if(ebene === 3 || ebene === 4 || ebene === 5 || ebene === 6 || (ebene === 7 && anzahl_aussenbilder === 0)){
			console.log("Funktion Person 16");
			person = 16;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_16[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}//ende funktion person

	//Funktion-Person-17--------------------------------------	
	function function_person_17() {
		console.log("Button P17");
		if(ebene === 3 || ebene === 4 || ebene === 5 || ebene === 6 || (ebene === 7 && anzahl_aussenbilder === 0)){
			console.log("Funktion Person 17");
			person = 17;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_17[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}//ende funktion person

	//Funktion-Person-18--------------------------------------	
	function function_person_18() {
		console.log("Button P18");
		if(ebene === 3 || ebene === 4 || ebene === 5 || ebene === 6 || (ebene === 7 && anzahl_aussenbilder === 0)){
			console.log("Funktion Person 18");
			//var_zoom_mitte_2 = 7;//1.6;
			person = 18;
			var_zoom_mitte_2 = 1.6;
			programmnummer = 1;
			zoom = true;
			rotieren = false;
			ohnerotierien = false;
			zoom_ring = false;
			var_audiobild = 11;
			audio_sprechpart_dauer = audio_dauer_person_18[ebene];//in Millisekunden
			audio_person = 'person_' + person + '_' + ebene;
			maske_person = true;
			if(ebene === 0){
				ebene++;
				}
			programmdurchlauf();
			}
		}//ende funktion person

//programmdurchlauf-----------------------------------------------------------------------------------------------------------------
//programmdurchlauf-----------------------------------------------------------------------------------------------------------------
//programmdurchlauf-----------------------------------------------------------------------------------------------------------------
//programmdurchlauf-----------------------------------------------------------------------------------------------------------------
//programmdurchlauf-----------------------------------------------------------------------------------------------------------------
//programmdurchlauf-----------------------------------------------------------------------------------------------------------------
//programmdurchlauf-----------------------------------------------------------------------------------------------------------------
function programmdurchlauf(){

//Stufe-1----------------------------------------------------------------------------------------------------------------
//erste Animation
if(programmnummer === 1){
	console.log("P1");
	console.log("Ebene: "+ebene);
	document.getElementById("id_div_buttons").style.display = "none";
	document.getElementById("id_start_button_text").style.display = "none";
	document.getElementById("id_reset_button").style.display = "initial";

	function_timer_reset();

	function_hervorhebungen_reset();
	ringdunkelwinkelverschiebung = ringdunkelwinkelverschiebung + 1;//+1 Weil sonst fehlt das eine Grad
	rotieren_uhrzeiger();   
	animate_mitte_zoom();
	animate_ohne_rotation();
	}//if programmnr 1


//Stufe-2----------------------------------------------------------------------------------------------------------------
//Zoom des Rotationsring
	if(programmnummer === 2){
		console.log("P2");
		function_zoom_ring();
		}//ende winkelvergleich

//Stufe-3----------------------------------------------------------------------------------------------------------------
//Sprechpassage
	if (programmnummer === 3){
		console.log("P3");
		function_audio_bilder();
		}//Ende Programm nr 3
//Stufe-4----------------------------------------------------------------------------------------------------------------
	if (programmnummer === 4){
		console.log("P4");
		window.setTimeout(function_pause, audio_sprechpart_dauer);
		}//Ende Programm nr 4

//Stufe-5----------------------------------------------------------------------------------------------------------------

	if (programmnummer === 5){
		console.log("P5");
		function_zoom_ring_zurueck();
		}//Ende Programm nr 3

//Stufe-6----------------------------------------------------------------------------------------------------------------
//zur�cksetzen auf Grundposition
if (programmnummer === 6){
		console.log("P6");
		winkelposition2 = 361;//Sonst nicht genau an Ursprungs Rotationsposition
		var_zoom_mitte_2 = 0;
		animatezurueck();

		animate_mitte_zoom_zurueck();
		animate_ohne_rotation_zurueck();
		}//ende if 5
//Stufe-7----------------------------------------------------------------------------------------------------------------
//Stufe-8----------------------------------------------------------------------------------------------------------------
//Stufe-9----------------------------------------------------------------------------------------------------------------
//Stufe-10----------------------------------------------------------------------------------------------------------------
	if (programmnummer === 10){
		console.log("P10");
		
		varReset();
		if(rand_doppel === 2){
			rand_doppel = 0
			}//ende if rand doppel2
		document.getElementById("id_div_buttons").style.width = "800px";//Einblenden unsichtbare Buttons
		document.getElementById("id_div_buttons").style.display = "";
		document.getElementById("id_start_button").style.display = "none";//Startbutton nicht
		function_hervorhebungen_reset();
		function_hervorhebungen();
		console.log("Ebene: "+ebene+" Person: "+person+" Anzahl der S�hne: "+anzahl_soehne+" N�chste Person: "+naechste_ebene[ebene]);
		document.getElementById("id_entwickler_info").innerHTML = ("Ebene: "+ebene+"<br> Person: "+person+"<br> Sprecherdauer: "+audio_sprechpart_dauer+"<br> Anzahl der Soehne: "+anzahl_soehne+"<br> Naechste Person: "+naechste_ebene[ebene]);
		function_narrenmutter_extra();
		function_gegenueberliegende_randbilder();
		function_nach_randbilder();
		}//ende if 5

}//-----------}}}}}} Ende Programmdurchlauf
	//Funktion-Audio-Click--------------------------------------------------------
	function function_audio_click(){
		//Wurde herausgekürzt. Haette sonst an folgenden positionen wie ein Gluecksrad geklickt.
		//360/32=11,25
		//if((var_rotation == 0 || var_rotation == 22 || var_rotation == 44 || var_rotation == 68 || var_rotation == 90 || var_rotation == 112 || var_rotation == 135 || var_rotation == 158 || var_rotation == 180 || var_rotation == 203 || var_rotation == 225 || var_rotation == 248 || var_rotation == 270 || var_rotation == 293 || var_rotation == 315 || var_rotation == 338 || var_rotation == 359) && rotieren === true){
		/*	
		if(var_rotation == 1 || var_rotation == 11 || var_rotation == 22 || var_rotation == 33 || var_rotation == 44 || var_rotation == 56 || var_rotation == 68 || var_rotation == 79 || var_rotation == 90 || var_rotation == 101 || var_rotation == 112 || var_rotation == 124 || var_rotation == 135 || var_rotation == 146 || var_rotation == 158 || var_rotation == 169 || var_rotation == 180 || var_rotation == 191 || var_rotation == 203 || var_rotation == 214 || var_rotation == 225 || var_rotation == 236 || var_rotation == 248 || var_rotation == 259 || var_rotation == 270 || var_rotation == 281 || var_rotation == 293 || var_rotation == 304 || var_rotation == 315 || var_rotation == 326 || var_rotation == 338 || var_rotation == 349 || var_rotation == 359){
			console.log("Audio Click" + clickPlayerNr);
			document.getElementById('audio_click' + clickPlayerNr).play();
			document.getElementById('audio_click' + clickPlayerNr).volume=0.50;//in %
			clickPlayerNr++;
			if(clickPlayerNr === 8){
				clickPlayerNr = 0;
				}//ende if clickPlayerNr zur�ck auf 0
				

			}//if Audio*/
	}//Ende Audio click

//----------------------------------------------------------------------------------------------------------------
//Animate - Schreibt Variablenwerte in die gestapelten Grafiken
function animate(){
	//IDs umbenennen / div eigenschaften zusammen in img id => so dass id f�r div unn�tig ???
	if(rotieren === true){
		document.getElementById("id_ring_rotieren").style.transform = "rotate("+var_rotation+"deg) scale("+var_zoom_ring+")";
		}//ende if
	//bei rotaton der randbilder---------------------------------------------------------------------------
	if(rand_doppel === 0){	
		if(zoom_ring === true || rotieren === true || ohnerotierien === true){//
			document.getElementById("id_ring_dunkel_rotieren").style.transform = "rotate("+positonringdunkel+"deg) scale("+var_zoom_ring+")";
			}//ende if
		if(zoom_ring === true || rotieren === true || ohnerotierien === true){//
			document.getElementById("div_id_ring_dunkel_rotieren").style.opacity = deckkraftRingDunkel;
			}//ende if
		if(zoom_ring === true || rotieren === true || ohnerotierien === true){//
			document.getElementById("div_id_ring_dunkel_rotieren").style.top = var_verschieb_ring+"%";//Mitte
			}//ende if
		}//ende if rand nicht doppel
	//doppeldunkel
	//if(rand_doppel === 1 || rand_doppel === 2){
	if(rand_doppel >= 1){
		if(zoom_ring === true || rotieren === true || ohnerotierien === true){//
			document.getElementById("img_id_doppel").style.transform = "rotate("+positonringdunkel+"deg) scale("+var_zoom_ring+")";
			}//ende if
		if(zoom_ring === true || rotieren === true || ohnerotierien === true){//
			document.getElementById("div_id_doppel").style.opacity = deckkraftRingDunkel;
			}//ende if
		if(zoom_ring === true || rotieren === true || ohnerotierien === true){//
			document.getElementById("div_id_doppel").style.top = var_verschieb_ring+"%";//Mitte
			}//ende if

		}//ende if rand doppel
	

	//ende randbilder rotation-----------------------------------------------------------------------------
		//schauen ob eines der beiden reicht v
		if(zoom === true){
			document.getElementById("id_mitte_zoom").style.transform = "scale("+var_zoom_mitte+")";// evl mit if au�enbild oder if inneres bild vlt auchextra variable
			}//ende if
		if(zoom_ring === true){//
			document.getElementById("id_mitte_zoom").style.transform = "scale("+var_zoom_ring+")";
			}//ende if
		//Zoomen
			document.getElementById("id_ring_rotieren").style.transform = "rotate("+var_rotation+"deg) scale("+var_zoom_ring+")";

	//braucht eigene variable sonst doppeldunkel
	if(zoom === true){//solltenur dann aktiv sein wenn unischer // kann sein dass folgendes gleichzeitig aktiviert wird
		document.getElementById("mitte_maske_dunkel").style.opacity = deckkraftRingDunkel;
		}//ende if
	if(zoom_ring === true){//
		document.getElementById("mitte_maske_dunkel").style.top = var_verschieb_ring+"%";//Mitte Dunkel
		}//ende if
	//st�rt aktuelle programmfluss //diese animation ist f�r die grafikmasken der einzelnen szenen wichtig//aber nicht ausgebaut
	
	//Deckkraft Maske
			if(maske_person === true){
				if(person === 0){
					document.getElementById("div_id_maske_"+var_audiobild).style.opacity = deckkraftMaske;//Audiobild wegen der richtigen Maske
					document.getElementById("id_maske_narrenmutter").style.transform = "scale("+var_zoom_mitte+")";
					}//Ende if
				if(person >= 1){//div_grafik_person_1
					document.getElementById("div_grafik_person_"+person).style.opacity = deckkraftMaske;//Audiobild wegen der richtigen Maske
					document.getElementById("img_grafik_person_"+person).style.transform = "scale("+var_zoom_mitte+")";
					}//Ende if
				}//Ende if maske true

	document.getElementById("id_maske_narrenmutter").style.transform = "scale("+var_zoom_mitte+")";

	document.getElementById("div_id_ring_rotieren").style.top = var_verschieb_ring+"%";//Ring

	document.getElementById("div_id_mitte_zoom").style.top = var_verschieb_ring+"%";//Ring Dunkel


}//Ende animate
//----------------------------------------------------------------------------------------------------------------
	//Funktion-Audio-Sprech-Part--------------------------------------------------------
	function function_audio_bilder(){
		
			if(person === 0){
				console.log("Audio Au�enbilder");
				document.getElementById(var_audiobild).volume=0.99;//in %
				document.getElementById(var_audiobild).play();
				}//Ende if

			if(person >= 1){
				console.log("Audiodatei ID: " +'person_' + person + '_' + ebene);//person_1_12 (bsp)
				document.getElementById(audio_person).volume=0.99;//in %
				document.getElementById(audio_person).play();
				}//Ende if
			//k�nnte mit einer Variable angepasst werden, um verschiedene Lautst�rken umzusetzen //bsp Modus f�r F�hrungen und Modus f�r Normal
			//-----------------------------------------------------------------
			programmnummer = 4;
			programmdurchlauf();
		}//Ende Audio click

	
//----------------------------------------------------------------------------------------------------------------
function rotieren_uhrzeiger(){
	if(rotieren === true){
		console.log("rotieren_uhrzeiger");
		if(var_rotation > 360){
			var_rotation = 1;
			}//Ende if 359

		if(deckkraftRingDunkel < 0.6){
			b++;
			if(b === 4){
				deckkraftRingDunkel = deckkraftRingDunkel + 0.1;
				b = 0;
				}
			}//Ende if 359

//----------------------------------------------------------------------------------------------------------------
		positonringdunkel = var_rotation + ringdunkelwinkelverschiebung;
		animate();
		var_rotation++;
		console.log(var_rotation);		
		if (var_rotation >= winkelposition2) {
            cancelAnimationFrame(repeater);
			console.log("if weiter zu stufe 2");
			programmnummer = 2;
			programmdurchlauf();
			}//ende if vergleich
		else {
				repeater = requestAnimationFrame(rotieren_uhrzeiger);
			}//ende Else
		}//ende if rotieren
	}//ende Animate

//----------------------------------------------------------------------------------------------------------------
function animatezurueck(){
	if(rotieren === true){
		if(deckkraftRingDunkel > 0.0 && (rand_doppel === 0 || rand_doppel === 2)){
			b++;
			if(b === 4){
				deckkraftRingDunkel = deckkraftRingDunkel - 0.1;
				b = 0;
				}
			}//ende if heller

		console.log("Rotation zur�ck an Ursprungsposition");
		positonringdunkel = var_rotation + ringdunkelwinkelverschiebung;
		animate();
		var_rotation++;
		console.log(var_rotation);
		if (var_rotation >= winkelposition2) {
            cancelAnimationFrame(repeater_animatezurueck);
			console.log("if weiter zu stufe 10 (Reset Variablen)");
			programmnummer = 10;
			programmdurchlauf();
			}//ende if vergleich
		else {
				repeater_animatezurueck = requestAnimationFrame(animatezurueck);
			}//ende Else
		}//ende if rotieren
	}//ende Animate

//----------------------------------------------------------------------------------------------------------------
//Gegen Uhrzeiger
function gegenrotation(){
	//War fuer die Gruppen wichtig. Wurde entfernt
	}//ende gegenrotation

//----------------------------------------------------------------------------------------------------------------
	function varReset(){//Reset aller anf�nglichen Variablen
		console.log("Reset alle Variablen bereit f�r Neustart");
		let var_rotation = 0;//Ausgabe an Bild
		let winkelposition1 = 0;//Aktuell
		let winkelposition2 = 0;//Angestrebt
		let rotieren = false;
		let gruppe = 0;//0 = Keine Gruppe, groesser 0 = limitierte Gruppen
		let gruppenstufe = 10;//wenn 10 dann wird var gruppe auf 0 gesetzt

		let ohnerotierien = false;
		let zoomstop = false;

		let programmnummer = 0;//wichtig fuer programmablauf

		let a = 1;
		let rotationsgeschwindigkeit = 30;

		let clickPlayerNr = 0;
		let var_audiobild = 0;

		let var_zoom_mitte = 1.0;
		let var_zoom_mitte2 = 0;
		let deckkraftRingDunkel = 0.0;

		let repeater = 0;//
		let repeater2 = 0;//
		let repeater3 = 0;//
		let repeater4 = 0;//

		//Maske Personen
		let maske_person = false;
		let deckkraftMaske = 0.0;
		let e = 0;//Z�hler Maske oacity

		//Zoom und Verschiebe Variablen + Hilfsvariablen
		let zoom = false;
		let zoom_ring = false;
		let h = 0;
		let var_verschieb_ring = 50;//als Betrag angegeben /erst in der Ausgabe ist ein - vorgesetzt//startet bei 50% -->mittig
		let g = 0;
		let var_zoom_ring = 1;
		
		let person = 0;

		animate();

	}//Ende ruecksetzen

//----------------------------------------------------------------------------------------------------------------
function animate_ohne_rotation(){
	if(ohnerotierien === true){
		console.log("Animate ohne Rotation, nur abdunkeln"+deckkraftRingDunkel);

		if(deckkraftRingDunkel < 0.6){
			b++;
			if(b === 4){
				deckkraftRingDunkel = deckkraftRingDunkel + 0.1;
				b = 0;
				}
			}//Ende if 359
		positonringdunkel = var_rotation + ringdunkelwinkelverschiebung;
		animate();
		if (deckkraftRingDunkel >= 0.6) {
            cancelAnimationFrame(repeater2);
			console.log("if weiter zu stufe 2");
			programmnummer = 2;
			programmdurchlauf();
			}//ende if vergleich
		else {
			repeater = requestAnimationFrame(animate_ohne_rotation);
			}//ende Else
		}//ende if ohnerotierien
	}//ende Animate

//----------------------------------------------------------------------------------------------------------------
function animate_ohne_rotation_zurueck(){
	if(ohnerotierien === true){
		console.log("Animate ohne Rotation, nur abdunkeln");
		if(rand_doppel === 1){
			cancelAnimationFrame(repeater3);
			console.log("if weiter zu stufe 10 (Reset Variablen)");
			programmnummer = 10;
			programmdurchlauf();
			}//ende if doppel
		if(deckkraftRingDunkel > 0.0){
			b++;
			if(b === 4){
				deckkraftRingDunkel = deckkraftRingDunkel - 0.1;
				b = 0;
				}
			}//Ende if 359
		positonringdunkel = var_rotation + ringdunkelwinkelverschiebung;
		animate();
		if (deckkraftRingDunkel <= 0.0) {
            cancelAnimationFrame(repeater3);
			console.log("if weiter zu stufe 10 (Reset Variablen)");
			programmnummer = 10;
			programmdurchlauf();
			}//ende if vergleich
		else {
			repeater = requestAnimationFrame(animate_ohne_rotation_zurueck);
			}//ende Else
		}//ende if ohnerotierien
	}//ende Animate

//----------------------------------------------------------------------------------------------------------------
	function animate_mitte_zoom(){
		if(zoom === true){
			console.log("Animate Mitte zoom");
		
			//anpassen auf aeusserern Ring
			if(deckkraftRingDunkel < 0.6){
				b++;
				if(b === 4){
					deckkraftRingDunkel = deckkraftRingDunkel + 0.1;
					b = 0;
					}
				}//Ende if 359

			//anpassen auf aeusserern Ring
			if(maske_person === true){
				if(deckkraftMaske < 0.6){
					e++;
					if(e === 4){
						deckkraftMaske = deckkraftMaske + 0.1;
						e = 0;
						}
					}//Ende if 359
				}//Ende if maske true

				u++;
				if(u === 4){
					var_zoom_mitte = var_zoom_mitte + 0.1;
					u = 0;
					}
			console.log(var_zoom_mitte);
			animate();

			//Deckkraft Maske
			if(maske_person === true){
				if(person === 0){
					document.getElementById("div_id_maske_"+var_audiobild).style.opacity = deckkraftMaske;//Audiobild wegen der richtigen Maske
					document.getElementById("id_maske_narrenmutter").style.transform = "scale("+var_zoom_mitte+")";
					}//Ende if
				if(person >= 1){//div_grafik_person_1
					document.getElementById("div_grafik_person_"+person).style.opacity = deckkraftMaske;//Audiobild wegen der richtigen Maske
					document.getElementById("img_grafik_person_"+person).style.transform = "scale("+var_zoom_mitte+")";
					}//Ende if
				}//Ende if maske true

			if (var_zoom_mitte >= var_zoom_mitte_2) {
			    cancelAnimationFrame(repeater3);
				console.log("if weiter zu stufe 2");
				programmnummer = 3;
				programmdurchlauf();
				}//ende if vergleich
			else {
					repeater3 = requestAnimationFrame(animate_mitte_zoom);
				}//ende Else
			}//ende if zoom
		}//ende Animate

//----------------------------------------------------------------------------------------------------------------
	function animate_mitte_zoom_zurueck(){
		if(zoom === true){
			console.log("Animate Mitte zoom zurueck");
			var_zoom_mitte_2 = 1.0;
			//anpassen auf aeusserern Ring
			if(deckkraftRingDunkel > 0.0){
				b++;
				if(b === 4){
					deckkraftRingDunkel = deckkraftRingDunkel - 0.1;
					b = 0;
					}
				}//Ende if 359

			if(maske_person === true){
				if(deckkraftMaske > 0.0){
					e++;
					if(e === 4){
						deckkraftMaske = deckkraftMaske - 0.1;
						e = 0;
						}
					}//Ende if 359
				}//Ende if maske true

			u++;
				if(u === 4){
					var_zoom_mitte = var_zoom_mitte - 0.1;
					u = 0;
					}

			animate();
			
			console.log(var_zoom_mitte);
			console.log(var_zoom_mitte_2);

			if (var_zoom_mitte <= var_zoom_mitte_2) {
			    cancelAnimationFrame(repeater3);
				console.log("if weiter zu stufe 10 (Reset Variablen)");
				programmnummer = 10;
				programmdurchlauf();
				}//ende if vergleich
			else {
					repeater3 = requestAnimationFrame(animate_mitte_zoom_zurueck);
				}//ende Else
			}//ende if zoom
		}//ende Animate

//----------------------------------------------------------------------------------------------------------------
	function function_zoom_ring(){
		if(zoom_ring === true){
			//Zoom und verschieben nach oben	
			var_zoom_ring = var_zoom_ring + 0.03;
			console.log(var_zoom_ring);
			animate();
			var_verschieb_ring = var_verschieb_ring - 2;
			if (var_verschieb_ring === -30) {//Hoehe des Bildes
			    cancelAnimationFrame(repeater_zoom_ring);
				console.log("if weiter zu stufe 3 Audio");
				programmnummer = 3;
				programmdurchlauf();
				}//ende if vergleich
			else {
					repeater_zoom_ring = requestAnimationFrame(function_zoom_ring);
				}//ende Else
			}//ende if zoom true
		if(zoom_ring === false){
			//wenn nicht der ring gezoomt wird dann springe zu Programmnummer 3
			programmnummer = 3;
			}//ende if zoom false
		}//ende Animate

//----------------------------------------------------------------------------------------------------------------
		function function_zoom_ring_zurueck(){//fehler zoom zurueck steckt hier !!!!!!
		if(zoom_ring === true){
			var_zoom_ring = var_zoom_ring - 0.03;
			animate();
			var_verschieb_ring = var_verschieb_ring + 2;
			if (var_verschieb_ring === 50) {
			    cancelAnimationFrame(repeater_zoom_ring_zurueck);
				console.log("if weiter zu stufe 6");
				programmnummer = 6;
				zoom_ring = false;//vorerst loesung fuer zoom zurueck Problem
				programmdurchlauf();
				}//ende if vergleich
			else {
					repeater_zoom_ring_zurueck = requestAnimationFrame(function_zoom_ring_zurueck);
				}//ende Else
			}//ende if zoom true

		if(zoom_ring === false){
			programmnummer = 6;
			}//ende if zoom false
		}//ende Animate
	
//----------------------------------------------------------------------------------------------------------------
	function function_pause(){
		//Pause solange Sprechen
		//zoomstop = true;
		//if (gruppe === 0){
			if(zoom_ring === true){
				programmnummer = 5;
				programmdurchlauf();
				}
			if(zoom_ring === false){
				programmnummer = 6;
				programmdurchlauf();
				}
			
		}

//----------------------------------------------------------------------------------------------------------------
	function function_hervorhebungen(){
		//hebt personen optisch hervor // also macht die anderen dunkler
		let deckkraft_hervorhebung = 0.6;//laut prof 0.8
		
		if (ebene === 1){
			//Zunftmeister nicht
			//Aus�engrau Rest
			/*document.getElementById("div_restgrau").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_restgrau").style.transform = "scale("+var_zoom_mitte+")";
			//Person 1 grau
			document.getElementById("div_hervorhebung_grafik_person_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_1").style.transform = "scale("+var_zoom_mitte+")";
			//Person 2 grau
			document.getElementById("div_hervorhebung_grafik_person_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_2").style.transform = "scale("+var_zoom_mitte+")";
			//Person 3 grau
			document.getElementById("div_hervorhebung_grafik_person_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_3").style.transform = "scale("+var_zoom_mitte+")";
			//Person 4 grau
			document.getElementById("div_hervorhebung_grafik_person_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_4").style.transform = "scale("+var_zoom_mitte+")";
			//Person 5 grau
			document.getElementById("div_hervorhebung_grafik_person_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_5").style.transform = "scale("+var_zoom_mitte+")";
			//Person 6 grau
			document.getElementById("div_hervorhebung_grafik_person_6").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_6").style.transform = "scale("+var_zoom_mitte+")";
			//Person 7 grau
			document.getElementById("div_hervorhebung_grafik_person_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_7").style.transform = "scale("+var_zoom_mitte+")";
			//Person 8 grau
			document.getElementById("div_hervorhebung_grafik_person_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_8").style.transform = "scale("+var_zoom_mitte+")";
			//Person 9 grau
			//document.getElementById("div_hervorhebung_grafik_person_9").style.opacity = deckkraft_hervorhebung;
			//document.getElementById("img_hervorhebung_grafik_person_9").style.transform = "scale("+var_zoom_mitte+")";
			//Person 10 grau
			document.getElementById("div_hervorhebung_grafik_person_10").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_10").style.transform = "scale("+var_zoom_mitte+")";
			//Person 11 grau
			document.getElementById("div_hervorhebung_grafik_person_11").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_11").style.transform = "scale("+var_zoom_mitte+")";
			//Person 12 grau
			document.getElementById("div_hervorhebung_grafik_person_12").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_12").style.transform = "scale("+var_zoom_mitte+")";
			//Person 13 grau
			document.getElementById("div_hervorhebung_grafik_person_13").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_13").style.transform = "scale("+var_zoom_mitte+")";
			//Person 14 grau
			document.getElementById("div_hervorhebung_grafik_person_14").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_14").style.transform = "scale("+var_zoom_mitte+")";
			//Person 15 grau
			document.getElementById("div_hervorhebung_grafik_person_15").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_15").style.transform = "scale("+var_zoom_mitte+")";
			//Person 16 grau
			document.getElementById("div_hervorhebung_grafik_person_16").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_16").style.transform = "scale("+var_zoom_mitte+")";
			//Person 17 grau
			document.getElementById("div_hervorhebung_grafik_person_17").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_17").style.transform = "scale("+var_zoom_mitte+")";
			
			//au�enbild 1 grau
			document.getElementById("div_aussenbildhervorhebung_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_1").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 2 grau
			document.getElementById("div_aussenbildhervorhebung_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_2").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 3 grau
			document.getElementById("div_aussenbildhervorhebung_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_3").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 4 grau
			document.getElementById("div_aussenbildhervorhebung_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_4").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 5 grau
			document.getElementById("div_aussenbildhervorhebung_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_5").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 6 grau
			document.getElementById("div_aussenbildhervorhebung_6").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_6").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 7 grau
			document.getElementById("div_aussenbildhervorhebung_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_7").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 8 grau
			document.getElementById("div_aussenbildhervorhebung_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_8").style.transform = "scale("+var_zoom_mitte+")";
			*/
			}//Ende if
		if (ebene === 2){
			//bootsmann
			//Aus�engrau Rest
			document.getElementById("div_restgrau").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_restgrau").style.transform = "scale("+var_zoom_mitte+")";
			//Person 1 grau
			document.getElementById("div_hervorhebung_grafik_person_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_1").style.transform = "scale("+var_zoom_mitte+")";
			//Person 2 grau
			document.getElementById("div_hervorhebung_grafik_person_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_2").style.transform = "scale("+var_zoom_mitte+")";
			//Person 3 grau
			document.getElementById("div_hervorhebung_grafik_person_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_3").style.transform = "scale("+var_zoom_mitte+")";
			//Person 4 grau
			document.getElementById("div_hervorhebung_grafik_person_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_4").style.transform = "scale("+var_zoom_mitte+")";
			//Person 5 grau
			document.getElementById("div_hervorhebung_grafik_person_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_5").style.transform = "scale("+var_zoom_mitte+")";
			//Person 6 grau
			document.getElementById("div_hervorhebung_grafik_person_6").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_6").style.transform = "scale("+var_zoom_mitte+")";
			//Person 7 grau
			document.getElementById("div_hervorhebung_grafik_person_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_7").style.transform = "scale("+var_zoom_mitte+")";
			//Person 8 grau
			document.getElementById("div_hervorhebung_grafik_person_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_8").style.transform = "scale("+var_zoom_mitte+")";
			//Person 9 grau
			document.getElementById("div_hervorhebung_grafik_person_9").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_9").style.transform = "scale("+var_zoom_mitte+")";
			//Person 10 grau
			document.getElementById("div_hervorhebung_grafik_person_10").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_10").style.transform = "scale("+var_zoom_mitte+")";
			//Person 11 grau
			document.getElementById("div_hervorhebung_grafik_person_11").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_11").style.transform = "scale("+var_zoom_mitte+")";
			//Person 12 grau
			document.getElementById("div_hervorhebung_grafik_person_12").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_12").style.transform = "scale("+var_zoom_mitte+")";
			//Person 13 grau
			document.getElementById("div_hervorhebung_grafik_person_13").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_13").style.transform = "scale("+var_zoom_mitte+")";
			//Person 14 grau
			document.getElementById("div_hervorhebung_grafik_person_14").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_14").style.transform = "scale("+var_zoom_mitte+")";
			//Person 15 grau
			//document.getElementById("div_hervorhebung_grafik_person_15").style.opacity = deckkraft_hervorhebung;
			//document.getElementById("img_hervorhebung_grafik_person_15").style.transform = "scale("+var_zoom_mitte+")";
			//Person 16 grau
			document.getElementById("div_hervorhebung_grafik_person_16").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_16").style.transform = "scale("+var_zoom_mitte+")";
			//Person 17 grau
			document.getElementById("div_hervorhebung_grafik_person_17").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_17").style.transform = "scale("+var_zoom_mitte+")";

			//au�enbild 1 grau
			document.getElementById("div_aussenbildhervorhebung_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_1").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 2 grau
			document.getElementById("div_aussenbildhervorhebung_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_2").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 3 grau
			document.getElementById("div_aussenbildhervorhebung_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_3").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 4 grau
			document.getElementById("div_aussenbildhervorhebung_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_4").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 5 grau
			document.getElementById("div_aussenbildhervorhebung_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_5").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 6 grau
			document.getElementById("div_aussenbildhervorhebung_6").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_6").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 7 grau
			document.getElementById("div_aussenbildhervorhebung_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_7").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 8 grau
			document.getElementById("div_aussenbildhervorhebung_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_8").style.transform = "scale("+var_zoom_mitte+")";
			}//Ende if
		if (ebene === 3){
			//alle au�er ring
			//Aus�engrau Rest
			document.getElementById("div_restgrau").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_restgrau").style.transform = "scale("+var_zoom_mitte+")";
			
			//au�enbild 1 grau
			document.getElementById("div_aussenbildhervorhebung_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_1").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 2 grau
			document.getElementById("div_aussenbildhervorhebung_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_2").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 3 grau
			document.getElementById("div_aussenbildhervorhebung_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_3").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 4 grau
			document.getElementById("div_aussenbildhervorhebung_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_4").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 5 grau
			document.getElementById("div_aussenbildhervorhebung_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_5").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 6 grau
			document.getElementById("div_aussenbildhervorhebung_6").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_6").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 7 grau
			document.getElementById("div_aussenbildhervorhebung_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_7").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 8 grau
			document.getElementById("div_aussenbildhervorhebung_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_8").style.transform = "scale("+var_zoom_mitte+")";
			}//Ende if
		if (ebene === 4){
			//alle au�er ring
			//Aus�engrau Rest
			document.getElementById("div_restgrau").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_restgrau").style.transform = "scale("+var_zoom_mitte+")";
			
			//au�enbild 1 grau
			document.getElementById("div_aussenbildhervorhebung_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_1").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 2 grau
			document.getElementById("div_aussenbildhervorhebung_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_2").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 3 grau
			document.getElementById("div_aussenbildhervorhebung_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_3").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 4 grau
			document.getElementById("div_aussenbildhervorhebung_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_4").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 5 grau
			document.getElementById("div_aussenbildhervorhebung_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_5").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 6 grau
			document.getElementById("div_aussenbildhervorhebung_6").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_6").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 7 grau
			document.getElementById("div_aussenbildhervorhebung_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_7").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 8 grau
			document.getElementById("div_aussenbildhervorhebung_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_8").style.transform = "scale("+var_zoom_mitte+")";
			}//Ende if
		if (ebene === 5){
			//alle au�er ring
			//Aus�engrau Rest
			document.getElementById("div_restgrau").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_restgrau").style.transform = "scale("+var_zoom_mitte+")";
			
			//au�enbild 1 grau
			document.getElementById("div_aussenbildhervorhebung_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_1").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 2 grau
			document.getElementById("div_aussenbildhervorhebung_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_2").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 3 grau
			document.getElementById("div_aussenbildhervorhebung_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_3").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 4 grau
			document.getElementById("div_aussenbildhervorhebung_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_4").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 5 grau
			document.getElementById("div_aussenbildhervorhebung_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_5").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 6 grau
			document.getElementById("div_aussenbildhervorhebung_6").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_6").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 7 grau
			document.getElementById("div_aussenbildhervorhebung_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_7").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 8 grau
			document.getElementById("div_aussenbildhervorhebung_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_8").style.transform = "scale("+var_zoom_mitte+")";

			//s�hne brauchen extra funktion weil diese ja nicht mehr aktiv sein wird
			if (sohn1 === 1){
				document.getElementById("div_hervorhebung_grafik_person_1").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_1").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (sohn2 === 1){
				document.getElementById("div_hervorhebung_grafik_person_2").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_2").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (sohn3 === 1){
				document.getElementById("div_hervorhebung_grafik_person_3").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_3").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (sohn4 === 1){
				document.getElementById("div_hervorhebung_grafik_person_4").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_4").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (sohn5 === 1){
				document.getElementById("div_hervorhebung_grafik_person_5").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_5").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (sohn6 === 1){
				document.getElementById("div_hervorhebung_grafik_person_6").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_6").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (sohn7 === 1){
				document.getElementById("div_hervorhebung_grafik_person_7").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_7").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
		

			}//Ende if
		if (ebene === 6){
			//alle au�er ring //besonders m�hle
			//Aus�engrau Rest
			document.getElementById("div_restgrau").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_restgrau").style.transform = "scale("+var_zoom_mitte+")";
			
			//au�enbild 1 grau
			document.getElementById("div_aussenbildhervorhebung_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_1").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 2 grau
			document.getElementById("div_aussenbildhervorhebung_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_2").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 3 grau
			document.getElementById("div_aussenbildhervorhebung_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_3").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 4 grau
			document.getElementById("div_aussenbildhervorhebung_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_4").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 5 grau
			document.getElementById("div_aussenbildhervorhebung_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_5").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 6 grau
			document.getElementById("div_aussenbildhervorhebung_6").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_6").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 7 grau
			document.getElementById("div_aussenbildhervorhebung_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_7").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 8 grau
			document.getElementById("div_aussenbildhervorhebung_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_8").style.transform = "scale("+var_zoom_mitte+")";
			}//Ende if
		if (ebene === 7){
			//ring au�er ende
			//Aus�engrau Rest
			document.getElementById("div_restgrau").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_restgrau").style.transform = "scale("+var_zoom_mitte+")";

			
			//Person 1 grau
			document.getElementById("div_hervorhebung_grafik_person_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_1").style.transform = "scale("+var_zoom_mitte+")";
			//Person 2 grau
			document.getElementById("div_hervorhebung_grafik_person_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_2").style.transform = "scale("+var_zoom_mitte+")";
			//Person 3 grau
			document.getElementById("div_hervorhebung_grafik_person_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_3").style.transform = "scale("+var_zoom_mitte+")";
			//Person 4 grau
			document.getElementById("div_hervorhebung_grafik_person_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_4").style.transform = "scale("+var_zoom_mitte+")";
			//Person 5 grau
			document.getElementById("div_hervorhebung_grafik_person_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_5").style.transform = "scale("+var_zoom_mitte+")";
			//Person 6 grau
			document.getElementById("div_hervorhebung_grafik_person_6").style.opacity = deckkraft_hervorhebung;				
			document.getElementById("img_hervorhebung_grafik_person_6").style.transform = "scale("+var_zoom_mitte+")";
			//Person 7 grau
			document.getElementById("div_hervorhebung_grafik_person_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_7").style.transform = "scale("+var_zoom_mitte+")";
			//Person 8 grau
			document.getElementById("div_hervorhebung_grafik_person_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_8").style.transform = "scale("+var_zoom_mitte+")";
		
			if (anzahl_aussenbilder > 0){
				//Person 9 grau
				document.getElementById("div_hervorhebung_grafik_person_9").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_9").style.transform = "scale("+var_zoom_mitte+")";
				//Person 10 grau
				document.getElementById("div_hervorhebung_grafik_person_10").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_10").style.transform = "scale("+var_zoom_mitte+")";
				//Person 11 grau
				document.getElementById("div_hervorhebung_grafik_person_11").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_11").style.transform = "scale("+var_zoom_mitte+")";
				//Person 12 grau
				document.getElementById("div_hervorhebung_grafik_person_12").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_12").style.transform = "scale("+var_zoom_mitte+")";
				//Person 13 grau
				document.getElementById("div_hervorhebung_grafik_person_13").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_13").style.transform = "scale("+var_zoom_mitte+")";
				//Person 14 grau
				document.getElementById("div_hervorhebung_grafik_person_14").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_14").style.transform = "scale("+var_zoom_mitte+")";
				//Person 15 grau
				document.getElementById("div_hervorhebung_grafik_person_15").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_15").style.transform = "scale("+var_zoom_mitte+")";
				//Person 16 grau
				document.getElementById("div_hervorhebung_grafik_person_16").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_16").style.transform = "scale("+var_zoom_mitte+")";
				//Person 17 grau
				document.getElementById("div_hervorhebung_grafik_person_17").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_hervorhebung_grafik_person_17").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			
			if (aussenbilder_schatten_1 === 1){
				//au�enbild 1 grau
				document.getElementById("div_aussenbildhervorhebung_1").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_aussenbildhervorhebung_1").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (aussenbilder_schatten_2 === 1){
				//au�enbild 2 grau
				document.getElementById("div_aussenbildhervorhebung_2").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_aussenbildhervorhebung_2").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (aussenbilder_schatten_3 === 1){
				//au�enbild 3 grau
				document.getElementById("div_aussenbildhervorhebung_3").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_aussenbildhervorhebung_3").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (aussenbilder_schatten_4 === 1){
				//au�enbild 4 grau
				document.getElementById("div_aussenbildhervorhebung_4").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_aussenbildhervorhebung_4").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (aussenbilder_schatten_5 === 1){
				//au�enbild 5 grau
				document.getElementById("div_aussenbildhervorhebung_5").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_aussenbildhervorhebung_5").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (aussenbilder_schatten_6 === 1){
				//au�enbild 6 grau
				document.getElementById("div_aussenbildhervorhebung_6").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_aussenbildhervorhebung_6").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (aussenbilder_schatten_7 === 1){
				//au�enbild 7 grau
				document.getElementById("div_aussenbildhervorhebung_7").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_aussenbildhervorhebung_7").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if
			if (aussenbilder_schatten_8 === 1){
				//au�enbild 8 grau
				document.getElementById("div_aussenbildhervorhebung_8").style.opacity = deckkraft_hervorhebung;
				document.getElementById("img_aussenbildhervorhebung_8").style.transform = "scale("+var_zoom_mitte+")";
				}//Ende if


			}//Ende if
		if (ebene === 8){
			//Zunftmeister nicht
			//Aus�engrau Rest
			document.getElementById("div_restgrau").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_restgrau").style.transform = "scale("+var_zoom_mitte+")";
			//Person 1 grau
			document.getElementById("div_hervorhebung_grafik_person_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_1").style.transform = "scale("+var_zoom_mitte+")";
			//Person 2 grau
			document.getElementById("div_hervorhebung_grafik_person_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_2").style.transform = "scale("+var_zoom_mitte+")";
			//Person 3 grau
			document.getElementById("div_hervorhebung_grafik_person_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_3").style.transform = "scale("+var_zoom_mitte+")";
			//Person 4 grau
			document.getElementById("div_hervorhebung_grafik_person_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_4").style.transform = "scale("+var_zoom_mitte+")";
			//Person 5 grau
			document.getElementById("div_hervorhebung_grafik_person_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_5").style.transform = "scale("+var_zoom_mitte+")";
			//Person 6 grau
			document.getElementById("div_hervorhebung_grafik_person_6").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_6").style.transform = "scale("+var_zoom_mitte+")";
			//Person 7 grau
			document.getElementById("div_hervorhebung_grafik_person_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_7").style.transform = "scale("+var_zoom_mitte+")";
			//Person 8 grau
			document.getElementById("div_hervorhebung_grafik_person_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_8").style.transform = "scale("+var_zoom_mitte+")";
			//Person 9 grau
			//document.getElementById("div_hervorhebung_grafik_person_9").style.opacity = deckkraft_hervorhebung;
			//document.getElementById("img_hervorhebung_grafik_person_9").style.transform = "scale("+var_zoom_mitte+")";
			//Person 10 grau
			document.getElementById("div_hervorhebung_grafik_person_10").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_10").style.transform = "scale("+var_zoom_mitte+")";
			//Person 11 grau
			document.getElementById("div_hervorhebung_grafik_person_11").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_11").style.transform = "scale("+var_zoom_mitte+")";
			//Person 12 grau
			document.getElementById("div_hervorhebung_grafik_person_12").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_12").style.transform = "scale("+var_zoom_mitte+")";
			//Person 13 grau
			document.getElementById("div_hervorhebung_grafik_person_13").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_13").style.transform = "scale("+var_zoom_mitte+")";
			//Person 14 grau
			document.getElementById("div_hervorhebung_grafik_person_14").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_14").style.transform = "scale("+var_zoom_mitte+")";
			//Person 15 grau
			document.getElementById("div_hervorhebung_grafik_person_15").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_15").style.transform = "scale("+var_zoom_mitte+")";
			//Person 16 grau
			document.getElementById("div_hervorhebung_grafik_person_16").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_16").style.transform = "scale("+var_zoom_mitte+")";
			//Person 17 grau
			document.getElementById("div_hervorhebung_grafik_person_17").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_17").style.transform = "scale("+var_zoom_mitte+")";
			
			//au�enbild 1 grau
			document.getElementById("div_aussenbildhervorhebung_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_1").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 2 grau
			document.getElementById("div_aussenbildhervorhebung_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_2").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 3 grau
			document.getElementById("div_aussenbildhervorhebung_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_3").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 4 grau
			document.getElementById("div_aussenbildhervorhebung_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_4").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 5 grau
			document.getElementById("div_aussenbildhervorhebung_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_5").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 6 grau
			document.getElementById("div_aussenbildhervorhebung_6").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_6").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 7 grau
			document.getElementById("div_aussenbildhervorhebung_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_7").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 8 grau
			document.getElementById("div_aussenbildhervorhebung_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_8").style.transform = "scale("+var_zoom_mitte+")";

			}//Ende if
		if (ebene === 9){
			
			}//Ende if
		if (ebene === 10){
			
			}//Ende if
		if (ebene === 11){
			
			}//Ende if
		if (ebene === 12){
			
			}//Ende if
		
		}//ende hervorhebungen
//----------------------------------------------------------------------------------------------------------------
	function function_hervorhebungen_reset(){
		//hebt personen optisch hervor // also mach die anderen dunkler
		let deckkraft_hervorhebung = 0.0;
		document.getElementById("div_restgrau").style.opacity = deckkraft_hervorhebung;
		document.getElementById("img_restgrau").style.transform = "scale("+var_zoom_mitte+")";
		//Alle auf 0.0 setzen
			document.getElementById("div_hervorhebung_grafik_person_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_1").style.transform = "scale("+var_zoom_mitte+")";
			//Person 2 grau
			document.getElementById("div_hervorhebung_grafik_person_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_2").style.transform = "scale("+var_zoom_mitte+")";
			//Person 3 grau
			document.getElementById("div_hervorhebung_grafik_person_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_3").style.transform = "scale("+var_zoom_mitte+")";
			//Person 4 grau
			document.getElementById("div_hervorhebung_grafik_person_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_4").style.transform = "scale("+var_zoom_mitte+")";
			//Person 5 grau
			document.getElementById("div_hervorhebung_grafik_person_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_5").style.transform = "scale("+var_zoom_mitte+")";
			//Person 6 grau
			document.getElementById("div_hervorhebung_grafik_person_6").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_6").style.transform = "scale("+var_zoom_mitte+")";
			//Person 7 grau
			document.getElementById("div_hervorhebung_grafik_person_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_7").style.transform = "scale("+var_zoom_mitte+")";
			//Person 8 grau
			document.getElementById("div_hervorhebung_grafik_person_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_8").style.transform = "scale("+var_zoom_mitte+")";
			//Person 9 grau
			document.getElementById("div_hervorhebung_grafik_person_9").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_9").style.transform = "scale("+var_zoom_mitte+")";
			//Person 10 grau
			document.getElementById("div_hervorhebung_grafik_person_10").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_10").style.transform = "scale("+var_zoom_mitte+")";
			//Person 11 grau
			document.getElementById("div_hervorhebung_grafik_person_11").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_11").style.transform = "scale("+var_zoom_mitte+")";
			//Person 12 grau
			document.getElementById("div_hervorhebung_grafik_person_12").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_12").style.transform = "scale("+var_zoom_mitte+")";
			//Person 13 grau
			document.getElementById("div_hervorhebung_grafik_person_13").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_13").style.transform = "scale("+var_zoom_mitte+")";
			//Person 14 grau
			document.getElementById("div_hervorhebung_grafik_person_14").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_14").style.transform = "scale("+var_zoom_mitte+")";
			//Person 15 grau
			document.getElementById("div_hervorhebung_grafik_person_15").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_15").style.transform = "scale("+var_zoom_mitte+")";
			//Person 16 grau
			document.getElementById("div_hervorhebung_grafik_person_16").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_16").style.transform = "scale("+var_zoom_mitte+")";
			//Person 17 grau
			document.getElementById("div_hervorhebung_grafik_person_17").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_hervorhebung_grafik_person_17").style.transform = "scale("+var_zoom_mitte+")";

			//au�enbild 1 grau
			document.getElementById("div_aussenbildhervorhebung_1").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_1").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 2 grau
			document.getElementById("div_aussenbildhervorhebung_2").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_2").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 3 grau
			document.getElementById("div_aussenbildhervorhebung_3").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_3").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 4 grau
			document.getElementById("div_aussenbildhervorhebung_4").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_4").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 5 grau
			document.getElementById("div_aussenbildhervorhebung_5").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_5").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 6 grau
			document.getElementById("div_aussenbildhervorhebung_6").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_6").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 7 grau
			document.getElementById("div_aussenbildhervorhebung_7").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_7").style.transform = "scale("+var_zoom_mitte+")";
			//au�enbild 8 grau
			document.getElementById("div_aussenbildhervorhebung_8").style.opacity = deckkraft_hervorhebung;
			document.getElementById("img_aussenbildhervorhebung_8").style.transform = "scale("+var_zoom_mitte+")";
		}//ende hervorhebungen reset

	function function_gegenueberliegende_randbilder(){
		//wenn gegenueberliegende Randbilder gewaehlt wurden soll, danach das andere gegenueber abgespielt werden
		console.log("Funktion gegen�berliegende randbilder");
		//Vertikal--------------------------------------
		//wenn 12 uhr dann 6 uhr
		if(aussenbilder_schatten_1 === 1){
			if(aussenbilder_schatten_5 === 0){
				function_stufe_04();
				}//ende if
			}//ende if
		//wenn 6 uhr dann 12 uhr
		if(aussenbilder_schatten_5 === 1){
			if(aussenbilder_schatten_1 === 0){
				function_stufe_08();
				}//ende if
			}//ende if
		//Horizontal--------------------------------------
		//wenn 3 uhr dann 9 uhr
		if(aussenbilder_schatten_3 === 1){
			if(aussenbilder_schatten_7 === 0){
				function_stufe_06();
				}//ende if
			}//ende if
		//wenn 9 uhr dann 3 uhr
		if(aussenbilder_schatten_7 === 1){
			if(aussenbilder_schatten_3 === 0){
				function_stufe_02();
				}//ende if
			}//ende if
		//diagonlal positiv--------------------------------------
		//wenn 1 uhr dann 7 uhr
		if(aussenbilder_schatten_2 === 1){
			if(aussenbilder_schatten_6 === 0){
				function_stufe_05();
				}//ende if
			}//ende if
		//wenn 7 uhr dann 1 uhr
		if(aussenbilder_schatten_6 === 1){
			if(aussenbilder_schatten_2 === 0){
				function_stufe_01();
				}//ende if
			}//ende if
		}//ende funktion

	function function_reset_reload(){
		//Seite/Programm wird neu geladen
		location.reload();
		}//ende
	console.log("test ");

//timer reset funktion------------------------------------------------------------
function function_timer_reset(){	
	if(ebene > 2){
		clearTimeout(timer_var);
		}
	//soll anwendung neustarten wenn Besucher*innen ueber var "timer_neustart_zeit" nicht aktiv sind
	if(ebene < 8){
		timer_var = setTimeout(function_reset_reload, timer_neustart_zeit);
		}
	}

function function_narrenmutter_extra(){
	if(anzahl_soehne === wie_viele_soehne_muss){
		console.log("Funktion Narrenmutter Extra");
		function_person_8();
		}
	}//ende narrenmutter extra

function function_extra_audio_rand_8(){
	//extra Audio wenn letztes (dunkles) Randbild angeklickt wird. => aussert sich abwesend, dass man erst andere antippen soll.
	document.getElementById("r81e7").play();
	document.getElementById("r81e7").volume=0.99;//in %
	}

function function_nach_randbilder(){
	console.log("Funktion nach Randbilder");
	//wichtig dass spaetere oben sind sonst werden sie zeitgleich ausgefuehrt
	if(ebene === 14){
		//Abspann Logos
		document.getElementById("div_akteure").style.opacity = 0;
		document.getElementById("div_id_logos_abspann").style.opacity = 1;
		function_ende_pausen_zeit();
		var_enden_pause = 5000;//17000+ ewas laenger
		window.setTimeout(function_ende_pausen, var_enden_pause);
		}
	if(ebene === 13){
		//Abspann Schrift
		document.getElementById("div_akteure").style.opacity = 1;
		document.getElementById("div_id_logos_abspann").style.opacity = 1;//damit teller Schwarz. Die Schrift ist darueber
		function_ende_pausen_zeit();
		var_enden_pause = 5000;//17000+ ewas laenger
		window.setTimeout(function_ende_pausen, var_enden_pause);
		}
	if(ebene === 12){
		//ferdi und philipine welser part
		document.getElementById("div_film").style.opacity = 0;
		document.getElementById("ende_4").play();
		document.getElementById("ende_4").volume=0.99;//in %
		function_ende_pausen_zeit();
		var_enden_pause = 25000;//17000+ ewas laenger //temp
		window.setTimeout(function_ende_pausen, var_enden_pause);
		}
	if(ebene === 11){
		//Ferdi und Philipine Welser Part weg und Drohne
		document.getElementById("div_film").style.opacity = 1;
		playVid();
		document.getElementById("div_id_ferdinand").style.opacity = 0;
		document.getElementById("div_id_philippine").style.opacity = 0;
		document.getElementById("ende_3").play();
		document.getElementById("ende_3").volume=0.99;//in %
		function_ende_pausen_zeit();
		var_enden_pause = 34000;
		window.setTimeout(function_ende_pausen, var_enden_pause);
		}
	if(ebene === 10){
		//Ferdi und Philipine Welser Part
		document.getElementById("div_id_philippine").style.opacity = 1;
		document.getElementById("ende_2").play();
		document.getElementById("ende_2").volume=0.99;//in %
		function_ende_pausen_zeit();
		var_enden_pause = 18000;
		window.setTimeout(function_ende_pausen, var_enden_pause);
		}
	if(ebene === 9){
		//Ferdi Part
		document.getElementById("div_id_ferdinand").style.opacity = 1;
		document.getElementById("ende_1").play();
		document.getElementById("ende_1").volume=0.99;//in %
		function_ende_pausen_zeit();
		var_enden_pause = 14000;
		window.setTimeout(function_ende_pausen, var_enden_pause);
		}
	if(ebene === 8){
		function_person_9();
		}
	

	}
function playVid() {
	let var_video = document.getElementById("id_film");
	var_video.play();
	console.log("Video Play");
	}
function pauseVid() {
	var_video = document.getElementById("div_film");
    var_video.pause();
	console.log("Video Pause");
	ebene++;
	function_nach_randbilder();
	}
function function_ende_pausen_zeit(){
	let var_enden_pause = 14000;
	if(ebene === 12){//
		var_enden_pause = 25000;//15000+ ewas laenger
		}
	if(ebene === 11){//
		var_enden_pause = 34000;
		}
	if(ebene === 10){//
		var_enden_pause = 18000;
		}
	if(ebene === 9){//
		var_enden_pause = 14000;
		}
	}
function function_ende_pausen(){
	if(ebene === 14){//
		function_reset_reload();
		}
	ebene++;
	function_nach_randbilder();
	}
//Tasten-----------------------------------------------------------------

	function TasteGedrueckt (evt) {
		//Ermittlung welche Taste der Tastatur welche Nummer hat
		console.log("Zeichen (event.keyCode): " + event.keyCode);
		
		//Reset/Reload
		if (event.keyCode === 82){
			console.log("Taste R");
			function_reset_reload();
			}//ende if
		//Entwickler Infos einblenden + Buttons sichtbar machen
		if (event.keyCode === 69){
			document.getElementById("id_entwickler_info").style.display = "initial";
			document.getElementById("person_1").style.opacity = 0.5;
			document.getElementById("person_2").style.opacity = 0.5;
			document.getElementById("person_3").style.opacity = 0.5;
			document.getElementById("person_4").style.opacity = 0.5;
			document.getElementById("person_5").style.opacity = 0.5;
			document.getElementById("person_6").style.opacity = 0.5;
			document.getElementById("person_7").style.opacity = 0.5;
			document.getElementById("person_8").style.opacity = 0.5;
			document.getElementById("person_9").style.opacity = 0.5;
			document.getElementById("person_10").style.opacity = 0.5;
			document.getElementById("person_11").style.opacity = 0.5;
			document.getElementById("person_12").style.opacity = 0.5;
			document.getElementById("person_13").style.opacity = 0.5;
			document.getElementById("person_14").style.opacity = 0.5;
			document.getElementById("person_15").style.opacity = 0.5;
			document.getElementById("person_16").style.opacity = 0.5;
			document.getElementById("person_17").style.opacity = 0.5;
			document.getElementById("stufe_08").style.opacity = 0.5;
			document.getElementById("stufe_01").style.opacity = 0.5;
			document.getElementById("stufe_02").style.opacity = 0.5;
			document.getElementById("stufe_03").style.opacity = 0.5;
			document.getElementById("stufe_04").style.opacity = 0.5;
			document.getElementById("stufe_05").style.opacity = 0.5;
			document.getElementById("stufe_06").style.opacity = 0.5;
			document.getElementById("stufe_07").style.opacity = 0.5;
			console.log("Taste E");
			}//ende if
		if (event.keyCode === 87){
			document.getElementById("id_entwickler_info").style.display = "none";//Startbutton nicht
			document.getElementById("person_1").style.opacity = 0.0;
			document.getElementById("person_2").style.opacity = 0.0;
			document.getElementById("person_3").style.opacity = 0.0;
			document.getElementById("person_4").style.opacity = 0.0;
			document.getElementById("person_5").style.opacity = 0.0;
			document.getElementById("person_6").style.opacity = 0.0;
			document.getElementById("person_7").style.opacity = 0.0;
			document.getElementById("person_8").style.opacity = 0.0;
			document.getElementById("person_9").style.opacity = 0.0;
			document.getElementById("person_10").style.opacity = 0.0;
			document.getElementById("person_11").style.opacity = 0.0;
			document.getElementById("person_12").style.opacity = 0.0;
			document.getElementById("person_13").style.opacity = 0.0;
			document.getElementById("person_14").style.opacity = 0.0;
			document.getElementById("person_15").style.opacity = 0.0;
			document.getElementById("person_16").style.opacity = 0.0;
			document.getElementById("person_17").style.opacity = 0.0;
			document.getElementById("stufe_08").style.opacity = 0.0;
			document.getElementById("stufe_01").style.opacity = 0.0;
			document.getElementById("stufe_02").style.opacity = 0.0;
			document.getElementById("stufe_03").style.opacity = 0.0;
			document.getElementById("stufe_04").style.opacity = 0.0;
			document.getElementById("stufe_05").style.opacity = 0.0;
			document.getElementById("stufe_06").style.opacity = 0.0;
			document.getElementById("stufe_07").style.opacity = 0.0;
			console.log("Taste W");
			}//ende if
		if (event.keyCode === 84){
			document.getElementById("id_start_button_text").style.display = "none";//Startbutton nicht
			console.log("Taste T");
			}//ende if
		//funktioniert wenn man nach dem ersten Klick Taste Q drueckt  //sollte an Ebene x fuehren an der die Endautomation ablaeuft
		if (event.keyCode === 81){
			ebene = 8;
			console.log("Taste Q");
			}//ende if
		if (event.keyCode === 65){
			ebene = 5;
			console.log("Taste A");
			}//ende if
		if (event.keyCode === 83){
			ebene = 7;
			console.log("Taste S");
			}//ende if
		}//ende taste gedrueckt