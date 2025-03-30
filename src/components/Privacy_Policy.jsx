/**
 * @copyright 2024 - All rights reserved Roberto Vicari
 * @license Apache-2.0 License
 */

import React from 'react';
import { ButtonOutline } from './Button';

const PrivacyPolicy = ({ onShowPortfolio }) => {
    return (
        <>
            <section className='section'>
                <div className='container mt-12'>
                    <div className='bg-zinc-800/30 p-7 rounded-2xl md:p-12'>
                        <h1 className="headline-1 break-all max-w-[15ch] sm:max-w-[20ch] lg:max-w-[30ch] mt-5 mb-8 lg:mb-10 ">Datenschutzerklärung</h1>
                        <h3 className='headline-2'>1. Verantwortlicher</h3>
                        <p><b>- Besitzer:</b> Roberto Vicari</p>
                        <p><b>- Email:</b> <a href="mailto:roberto.vicari79@gmail.com?subject=Contact%20request" className="text-sky-400 hover:text-sky-600">roberto.vicari79@gmail.com</a></p>
                        <p><b>- Website:</b> <a href="http://roberto-vic.github.io/portfolio/" className="text-sky-400 hover:text-sky-600">Personal Portfolio</a></p>
                        <br />
                        <h3 className='headline-2'>2. Algemeine Hinweise</h3>
                        <p>Diese Datenschutzerklärung informiert die Besucher über die Art, den Umfang und den Zweck der Erhebung und Verwendung
                            personenbezogener Daten auf dieser Website.</p>
                        <br />
                        <h3 className='headline-2'>3. Hosting und Zugriffsdaten</h3>
                        <p>Diese Website wird auf GitHub Pages gehostet. GitHub erfasst beim Zugriff automatisch technische Informationen wie:</p>
                        <p>- IP-Adresse (in anonymisierter Form)</p>
                        <p>- Browsertyp und -version</p>
                        <p>- Betriebssystem</p>
                        <p>- Referrer URL</p>
                        <p>- Datum und Uhrzeit der Serveranfrage</p>
                        <p>Diese Daten werden nur zur Sicherstellung eines reibungslosen Betriebs der Website sowie zur Optimierung des Angebots verarbeitet und nicht mit anderen Datenquellen zusammengeführt.</p>
                        <br />
                        <h3 className='headline-2'>4. Cookies</h3>
                        <p>Diese Webseite verwendet keine Cookies.</p>
                        <br />
                        <h3 className='headline-2'>5. Eingebettete Inhalte und Drittanbieter-Dienste</h3>
                        <p>Diese Website verwendet Google Fonts und Material Icons, die von Google-Servern geladen werden. Dabei kann es sein, dass personenbezogene Daten (wie die IP-Adresse) an Google übermittelt werden. Weitere Informationen zur Datenverarbeitung durch Google findest du in deren Datenschutzerklärung: <a href='https://policies.google.com/privacy'>Google privacy</a>.</p>
                        <br />
                        <h3 className='headline-2'>6. Kontaktformular</h3>
                        <p>Wenn du das Kontaktformular auf dieser Website nutzt, werden deine eingegebenen Daten per E-Mail an mich gesendet. Es erfolgt keine Speicherung dieser Daten auf dem Server der Website. Die übermittelten Daten werden ausschließlich zur Beantwortung deiner Anfrage verwendet und nicht an Dritte weitergegeben.</p>
                        <br />
                        <h3 className='headline-2'>8. Rechte als Nutzer</h3>
                        <p>Du hast das recht auf:</p>
                        <p>- Auskunft über die von dir gespeicherten Daten</p>
                        <p>- Berichtigung unrichtiger Daten</p>
                        <p>- Löschung deiner Daten</p>
                        <p>- Einschränkung gegen die Verarbeitung</p>
                        <p>- Wiederspruch gegen die Verarbeitung</p>
                        <p>- Datenübertragbarkeit</p>
                        <p>Zur Wahrnehmung dieser Rechte kannst du dich unter der oben genannten E-Mail-Adresse an mich wenden.</p>
                        <br />
                        <h3 className='headline-2'>7. Änderungen der Datenschutzerklärung</h3>
                        <p>Diese Datenschutzerklärung kann sich in Zukunft ändern. Bitte prüfe sie regelmäßig auf Aktualisierungen.</p>
                        <br />
                        <hr />
                        <h1 className='headline-1 max-w-[15ch] break-all sm:max-w-[20ch] lg:max-w-[30ch] mt-10 mb-5 lg:mb-10 '>Informationssicherheitserklärung</h1>
                        <h3 className='headline-2'>1. Zweck</h3>
                        <p>Diese Erklärung beschreibt die Maßnahmen zur Sicherstellung der Informationssichereit auf diese Webseite.</p>
                        <br />
                        <h3 className='headline-2'>2. Technische Schutzmaßnahmen</h3>
                        <p>- <b>HTTPS-Verschlüsselung:</b> GitHub Pages stellt sicher, dass die Website nur über HTTPS ausgeliefert wird.</p>
                        <p>- <b>Regelmäßige Updates:</b> Der Code der Website wird regelmäßig gewartet und aktualisiert.</p>
                        <p>- <b>Minimierung externer Abhängigkeiten:</b> Externe Skripte und Bibliotheken werden nur eingesetzt, wenn unbedingt notwendig.</p>
                        <h3 className='headline-2'>3. Datenschutzfreundliches Design</h3>
                        <p>- Es werden keine personenbezogenen Daten gespeichert oder verarbeitet.</p>
                        <p>- Kein Tracking oder Profiling der Nutzer.</p>
                        <p>- Keine Einbindung von externen Analyse- oder Werbediensten.</p>
                        <br />
                        <h3 className='headline-2'>4. Verantwortlichkeiten</h3>
                        <p>Die Verantwortung für die Sicherheit der Website liegt beim Betreiber. Alle relevanten Sicherheitsupdates und Verbesserungen werden regelmäßig geprüft und umgesetzt.</p>
                        <br />
                        <h3 className='headline-2'>5. Kontante</h3>
                        <p>Wenn du Fragen oder Anmerkungen hast, kannst du mich unter der oben angegebenen E-Mail-Adresse kantaktieren.</p>
                        <br />
                        <br />
                        <ButtonOutline onClick={onShowPortfolio} label="Back to Homepage" icon="home"></ButtonOutline>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;