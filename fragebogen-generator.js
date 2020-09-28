import {writeFileSync} from "fs";
import clipboardy from "clipboardy";

let name = process.argv[2] || "", formal = false;

let template = `${formal ? "Hallo" : "Hi"} ${name}, ich melde mich bei dir wegen einer kleinen Bitte: ich arbeite aktuell mit einem Freund an einem Projekt. Um einige Meinungen einzuholen haben wir einen Fragebogen erstellt und würden dich jetzt bitten, diesen auszufüllen.  Das dauert nur wenige Minuten und hilft uns wirklich weiter! ^^ 
Hier der Link: https://forms.gle/XZxCVTiJmRhrK6nW6 
Vielen Dank! ${formal ? "Beste Grüße :)" : "Bis bald! :)"}`;
clipboardy.writeSync(template);
