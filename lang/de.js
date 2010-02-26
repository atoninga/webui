var lang = [
	  "Torrent Dateien||*.torrent||Alle Dateien (*.*)||*.*||"
	, "OK"
	, "Abbruch"
	, "Anwenden"
	, "Einstellungen"
	, "Sprache:"
	, "Persönliche Einstellungen"
	, "Automatisch auf Updates prüfen"
	, "Auch Betaversionen installieren"
	, "Erlaube das Senden anonymer Information beim Updaten"
	, "beim Download"
	, "An unfertige Dateien .!ut anhängen"
	, "Speicher für Dateien vorbelegen"
	, "Kein Standby solange noch Torrents aktiv sind"
	, "Löschen von Torrents bestätigen"
	, "Abwechselnder Listenhintergrund"
	, "Zeige aktuelle Geschwindigkeiten"
	, "Beim Hinzufügen von Torrents"
	, "Download nicht automatisch starten"
	, "Speicherort für die heruntergeladene Dateien"
	, "Neue Downloads ins Verzeichnis:"
	, "Dialog bei manuellem Hinzufügen"
	, "Verschiebe fertige Downloads nach:"
	, "den Gruppennamen anhängen"
	, "Verschieben nur aus dem Standard-Downloadverzeichnis"
	, "Speicherort für die .torrent-Dateien"
	, ".torrent-Dateien speichern in:"
	, "Verschiebe fertige .torrents nach:"
	, "Lade .torrents automatisch aus:"
	, "Lösche geladene .torrents"
	, "Port für den Empfang"
	, "Port für eingehende Verbindungen:"
	, "Zufälliger Port"
	, "Bei jedem Start ein anderer Port"
	, "Aktiviere UPnP Port Mapping"
	, "Aktiviere NAT-PMP Port Mapping"
	, "Proxy Server"
	, "Typ:"
	, "Proxy:"
	, "Port:"
	, "Zugriffsdaten"
	, "Benutzer:"
	, "Passwort:"
	, "Hostnamen durch Proxy auflösen"
	, "Benutze Proxyserver für Peer zu Peer Verbindungen"
	, "Ausnahme für Windows Firewall"
	, "Globale Upload-Begrenzung"
	, "Max. Upload-Rate (kB/s): [0: unbegrenzt]"
	, "Automatisch"
	, "Alternative Upload-Rate, wenn Du nur seedest (kB/s):"
	, "Globale Download-Begrenzung"
	, "Maximale Download-Rate (kB/s): [0: unbegrenzt]"
	, "Anzahl der Verbindungen"
	, "Maximale Gesamtanzahl der Verbindungen:"
	, "Maximale Anzahl von verbundenen Peers pro Torrent:"
	, "Anzahl der Uploadslots pro Torrent:"
	, "Nutze zusätzliche Uploadslots falls Upload < 90%"
	, "Grundlegende BitTorrent-Funktionen"
	, "Verwende DHT-Netz"
	, "Frage beim Tracker n. Scrape-Info"
	, "Erlaube DHT für neue Torrents"
	, "Aktiviere Peerlistentausch (PEX)"
	, "Lokale Peersuche (LPD) aktivieren"
	, "Bandbreite f. lok. Peers beschränk."
	, "IP/Hostname an den Tracker melden:"
	, "Protokoll Verschlüsselung"
	, "Ausgehend:"
	, "Erlaube unverschlüsselte eingeh."
	, "Erlaube Transferlimit"
	, "Begrenzungen"
	, "Stoppe Torrents wenn"
	, "erreichen"
	, "in den letzten"
	, "Tagen"
	, "Warteschlangen Einstellungen"
	, "Maximale Anzahl von aktiven Torrents (Up- oder Download):"
	, "Maximale Anzahl von aktiven Downloads:"
	, "Seede solange [Standard Werte]"
	, "Rate ist:  <="
	, "%   oder geseedet für:"
	, "Seeds haben eine höhere Priorität als Downloads"
	, "Wenn die gewünschte Share-Rate erreicht ist"
	, "Upload-Rate begrenzen auf (kB/s): [0: hält Torrent an]"
	, "Zeitplan verwenden"
	, "Übersicht Zeitplan"
	, "Einstellungen für den Zeitplan"
	, "Begrenzte Upload-Rate (kB/s):"
	, "Begrenzte Download-R. (kB/s):"
	, "DHT mit Zeitplan deaktivieren"
	, "Erlaube den Web-Zugriff (WebUI)"
	, "Zugriffsdaten"
	, "Benutzer:"
	, "Passwort:"
	, "Erlaube Gastzugriff mit Benutzernamen:"
	, "Verbindungen"
	, "Alternativer Listening-Port (Standard: uTorrent-Port):"
	, "Beschränke Zugriff auf folgende IPs (Trenne mehrere Einträge durch \",\"):"
	, "Experten-Einstellungen [ACHTUNG: Änderungen auf eigenes Risiko!]"
	, "Fixe Gruppennamen [Trenne mehrere Einträge durch das Zeichen \"|\"]"
	, "Suchmaschinen [zur Suche mit der Lupe, Format: Name|URL]"
	, "Einstellungen für den Disk-Cache"
	, "Der Disk-Cache wird verwendet, um oft benötigte Daten im RAM zu halten, und dadurch die Lese- u. Schreibzugriffe auf der Festplatte zu reduzieren. µTorrent regelt das normalerweise automatisch, aber hier kannst du die Einstellungen ändern."
	, "Überschreibe die automatische Cache-Größe und verwende (in MB):"
	, "Reduziere die Speicherbenutzung wenn der Cache nicht benötigt wird"
	, "Erweiterte Cache-Einstellungen"
	, "Verwende Caching bei Schreibzugriffen"
	, "Schreibe unveränderte Blöcke alle 2 Minuten"
	, "Schreibe fertige Teile sofort"
	, "Verwende Caching bei Lesezugriffen"
	, "Schalte Caching aus, wenn die Upload-Geschwindigkeit niedrig ist"
	, "Entferne alte Blöcke aus dem Cache"
	, "Erhöhe die Größe des Cache automatisch bei Überlast"
	, "Schreibcache von Windows abschalten"
	, "Lesecache von Windows abschalten"
	, "Torrent Einstellungen"
	, "Tracker (trenne Ebenen-Einträge durch Leerzeilen)"
	, "Bandbreiten Einstellungen"
	, "Maximale Upload-Rate (kB/s): [0: Standard]"
	, "Maximale Download-Rate (kB/s): [0: Standard]"
	, "Anzahl der Upload-Slots: [0: Standard]"
	, "Seede solange"
	, "Standard überschreiben"
	, "Rate ist:  <="
	, "%  oder geseedet für:"
	, "Sonstige Einstellungen"
	, "Initial-Seeden"
	, "DHT verwenden"
	, "Peerlistentausch"
	, "Fertig"
	, "Name"
	, "Prozent"
	, "Priorität"
	, "Größe"
	, "auslassen"
	, "niedrig"
	, "normal"
	, "hoch"
	, "Geladen:"
	, "Gesendet:"
	, "Seeds:"
	, "Restzeit:"
	, "Download-Rate:"
	, "Upload-Rate:"
	, "Peers:"
	, "Share-Rate:"
	, "Prüf-ID:"
	, "Verbindung"
	, "zu %d von %d verbunden (aus %d Verfügbaren)"
	, "D:%s U:%s - %s"
	, "Gruppen-Liste zeigen"
	, "Ausführliche Infos zeigen"
	, "Reset"
	, "Nicht Laden"
	, "Hohe Priorität"
	, "Niedrige Priorität"
	, "Normale Priorität / wieder laden"
	, "nur Daten löschen"
	, "Erzwinge neuerliche Überprüfung"
	, "Erzwinge Start"
	, "Gruppe"
	, "Pause"
	, "Eigenschaften"
	, "Entfernen"
	, "Entfernen und"
	, "Start"
	, "Stop"
	, "Aktiv"
	, "Alle"
	, "Fertig"
	, "Download"
	, "Nicht aktiv"
	, "Keine Gruppe"
	, "||Verf.||Verfügbarkeit"
	, "Fertig %"
	, "Geladen"
	, "DL-Rate"
	, "Restzeit"
	, "Gruppe"
	, "Name"
	, "Nr."
	, "Peers"
	, "fehlt noch"
	, "Seeds"
	, "Seeds/Peers"
	, "Rate"
	, "Größe"
	, "Status"
	, "Upgeloadet"
	, "UL-Rate"
	, "Möchtest du wirklich die %d markierten Torrents und die dazu heruntergeladenen Daten löschen?"
	, "Möchtest du wirklich den markierten Torrent und die dazu heruntergeladenen Daten löschen?"
	, "Möchtest Du die %d markierten Torrents wirklich löschen?"
	, "Möchtest Du den markierten Torrent wirklich löschen?"
	, "Geprüft: %:.1d%%"
	, "Download"
	, "Fehler: %s"
	, "Fertig"
	, "Angehalten"
	, "Warte"
	, "Warte auf Seed"
	, "Seeden"
	, "Gestoppt"
	, "Gruppe eingeben"
	, "Neue Gruppe für markierte Torrents eingeben:"
	, "Neue Gruppe..."
	, "Entferne Gruppe"
	, "Allgemein||Tracker||Peers||Teile||Dateien||Grafik||Protokoll||"
	, "Torrent hinzufügen"
	, "Pause"
	, "Einstellungen"
	, "Entfernen"
	, "Start"
	, "Stop"
	, "GB"
	, "kB"
	, "MB"
	, "Erweitert"
	, "Bandbreite"
	, "Verbindung"
	, "Disk-Cache"
	, "Verzeichnisse"
	, "Allgemein"
	, "Zeitplan"
	, "Warteschlange"
	, "BitTorrent"
	, "Web-Zugriff"
	, "Transferlimit"
	, "Deaktiviert||Erlaubt||Erzwungen||"
	, "(keiner)||Socks4||Socks5||HTTPS||HTTP||"
	, "die Uploads||die Downloads||die Up- und Downloads||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Name"
	, "Wert"
	, "Mo||Di||Mi||Do||Fr||Sa||So||"
	, "Montag||Dienstag||Mittwoch||Donnerstag||Freitag||Samstag||Sonntag||"
	, "Maximum"
	, "Maximum - nutzt die normal eingestellte Bandbreite"
	, "Begrenzt"
	, "Begrenzt - nutzt die im Zeitplan angegebene Bandbreite"
	, "nur Seeden"
	, "nur Seeden - nur Daten uploaden (inkl. unvollständiger Torrents)"
	, "Aus"
	, "Aus - stoppt alle nicht erzwungenen Torrents"
	, "<= %d Stunden"
	, "(Ignorieren)"
	, "<= %d Minuten"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dw %dd"
	, "%dy %dw"
];