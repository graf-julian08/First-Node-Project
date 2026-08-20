# First Node Project

## Übersicht
Das **First Node Project** ist eine Backend-Demonstrationsanwendung auf Basis von Node.js und Express. Das System stellt eine RESTful HTTP-Schnittstelle zur Verfügung, um Aufgaben zu verwalten und Datensätze in einem lokalen JSON-Speicher zu verwalten.

## Projektstruktur & Architektur
- `server.js`: Haupteinstiegspunkt des Express-Servers mit allen Route-Handlern und Middlewares.
- `public/`: Statische Web-Dateien (HTML, JavaScript, CSS) für das Frontend-Interface.
- `data/tasks.json`: Lokale JSON-Datenbasis für die Speicherung der Aufgaben.
- `package.json`: Projektkonfiguration mit Abhängigkeiten und Skript-Befehlen.

## Hauptfunktionalitäten
- **REST-API**: Bereitstellung von Endpunkten für GET-, POST-, PUT- und DELETE-Anfragen.
- **Dateibasierte Datenhaltung**: Lesen und Schreiben von Daten in `data/tasks.json`.
- **Statische Dateiausgabe**: Auslieferung der Benutzeroberfläche über Express Static.

## Ausführung & Nutzung
Die Ausführung des Servers erfolgt mit dem Befehl `node server.js` oder `npm start`. Die Anwendung ist anschliessend über den lokalen Port erreichbar.

## Lizenz
Dieses Projekt steht unter der MIT-Lizenz.
