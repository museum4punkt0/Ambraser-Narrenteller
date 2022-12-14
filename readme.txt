Website Copyright Narrenschopf Bad Dürrheim / Entwickler Peter Bandle
V49

--------------------------------------------------------------------------------------------------------------------------------------
Kurzes Vorwort:
Der JS-Code ist leider nur in einer Datei abgelegt. Dies liegt daran, dass der Code nach und nach gewachsen ist 
und für das Testing eine Flexiebilität benötigte.
Nun fehlt leider die Zeit den Code in Objekte aufzuteilen, auch wenn eine Objektorientierung die Übersicht erheblich verbessern würde. 
Allgemein bezieht sich der Code auf den Stand der Entwicklung von September 2022. 

Diese Web-Anwendung ist offline lauffähig und lässt sich auf iPadOS und auf Google Chrome installieren. 
MS-Edge und Android wurde nicht getestet, wird aber nicht ausgeschlossen. 
Firefox erlaubt die installation von Web-Apps nicht. Es ist jedoch möglich, die Anwendung zu öffnen und im Fullscreen zu zeigen.

Um die Anwendung installieren zu können, muss sie entweder über den Local-Host oder von einer HTTPS URL geöffent werden.
Wenn die Web-App installiert wird cachet sie ihre Daten offline und benötigt danach keine Netzwerkverbindung mehr. 
Am Desktop läuft sie in einem Fenster ohne Browserleiste und an iPadOS-Geräten in Fullscreen. 

Die Anwendung ist mit VS-Code in JavaScript geschrieben. 
Es wäre wahrscheinlich besser gewesen die Anwendung in TypeScript zu schreiben, 
damit sie in verschiedene JS-Versionen kompiliert werden kann.

Eine Steuerung über Touchflächen an der Projektionscheibe wurde angedacht, 
aber wegen der Höhe (Durchmesser 1,6m + hängt direkt unter Decke)
und die dadurch schwierige Bedienbarkeit verworfen.
Somit wäre die Anwendung nicht barrierefrei. Gerade Personen mit kleiner Körpergröße 
oder Menschen, die bewegungseingeschränkt sind, könnten Probleme haben.
Dennoch wäre eine Anpassung des Codes denkbar, 
bei der Sensoren als Touchflächen auf der Projektionsscheibe über einen Arduino als Tastatureingaben erkannt würden.

Alternativ wäre eine Touchsteuerung auf einem sehr großen Touchmonitor oder mittels Microsoft Kinect auch denkbar.
Dafür müsste man jedoch die Größe reduzieren.

Tastatur Befehle:
Dadurch, dass die Anwendung auf einem Tablet oder PC mit Touchscreen gezeigt wird, gibt es für die Rezipierenden keine Tastatur.
Deswegen gibt es Abkürzungen und Entwickler-Informationen, die mittels Tastatur aktiviert werden können.
Sie haben die Entwicklung vereinfacht und Testvorgänge beschleunigt.
"r" = Reset/Reload
"e" = Entwickler-Modus an (Zeigt Informationen zum Programmstatus und die Buttons inkl. deren Bezeichnung)
"w" = Entwickler-Modus beenden
"q" = Sprung auf die Story am Ende. Wichtig! Dafür muss man erst auf den Teller tippen und wärend einem Monolog einer Person die Taste drücken. Sonst kommt der Code durcheinander. 
"s" = Sprung zu den Außenbildern. Wichtig! Dafür muss man erst auf den Teller tippen und während einem Monolog einer Person die Taste drücken. Sonst kommt der Code durcheinander.

Da die Anwendung in JavaScript geschrieben ist, ist sie relativ kompatibel. 
Sie läuft auf jedem Gerät mit aktuellem Webbrowser und etwas Leistung.
Theoretisch somit mit leichten Darstellungsanpassungen auf Smartphones.
Für die Zukunft ist davon auszugehen, dass die Anwendung langlebiger sein wird, 
da sie nicht aus einem App Store geschmissen werden kann und alte Webseiten sehr lange auf modernen Geräten unterstützt werden.

Im Fastnachtsmuseum Narrenschopf in Bad Dürrheim läuft die Anwendung auf einem iPad Pro 12,9* mit M1.
Gesteuert wird sie auf dem Tablet und der Bildschirm wird mittels Laser-Projektor auf eine runde Projektionsfläche (d=1,6m) gespiegelt.

Empfehlung des Entwicklers:
Für eine möglichst eindrucksvolle Präsentation ist ein großer Touchmonitor am geschicktesten. 
Er ist relativ einfach zu installieren und ermöglicht eine direkte Steuerung.

Anpassungen für bestimmte Geräte oder Änderungen:
-Schwarzer Rand ist nur Wichtig! nur bei Rundprojektionen. 
    Bei Rechteckiger Darstellung sollte man diesen auskommentieren (sieht so besser aus)
    ggf. müssen im CSS die ID's "div_id_schwarzer_rand" und "id_schwarzer_rand" auch auskommentiert werden.
-In der "Tabelle für die Länge der Audio-Dateien" (main.js) müssen die Zeiten angepasst werden, 
    wenn man die Audio-Dateien verändert. Bspw. kürzen...
-Wenn man Bilder, Videos oder Audios gegen Versionen anderer Qualität austauschen möchte, 
    müssen diese Dateien lediglich in den entsprechenden Medien-Ordner bei gleichem Namen ersetzt werden. 
    
