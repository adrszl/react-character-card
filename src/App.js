import React from 'react';

import Abilities from './components/Abilities';
import CurrentPoints from './components/CurrentPoints';
import Dices from './components/Dices';
import Equipment from './components/Equipment';
import Graphics from './components/Graphics';
import Skills from './components/Skills';
import Stats from './components/Stats';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: {
        ww: 66,
        us: 42,
        k: 44,
        odp: 55,
        zr: 31,
        int: 32,
        sw: 37,
        ogd: 27,
        a: 2,
        zyw: 19,
        s: 4,
        wt: 5,
        sz: 3,
        mag: 0,
        po: 1,
        pp: 4 
      },
      skills: ['Spostrzegawczość', 
               'Wspinaczka', 
               'Wiedza (krasnoludy)', 
               'Język (khazalid)', 
               'Rzemiosło (górnictwo)', 
               'Język (staroświatowy)',
               'Nawigacja',
               'Śledzenie',
               'Unik'],
      abilities: ['Krasnoludzki fach', 
                  'Krzepki', 
                  'Odporność na magię', 
                  'Odwaga',
                  'Widzenie w ciemności', 
                  'Zapiekła nienawiść', 
                  'Morderczy atak', 
                  'Ogłuszanie', 
                  'Czuły słuch', 
                  'Silny cios', 
                  'Wyczucie kierunku'],
      abilitiesDescription: {
        'Krasnoludzki fach': 'Krasnoludy są urodzonymi rzemieślnikami. Bohater otrzymuje modyfikator +10 do testów rzemiosła: górnictwo, kamieniarstwo, kowalstwo, jubilerstwo, piwowarstwo, płatnerstwo i rusznikarstwo', 
        'Krzepki': 'Bohater, który posiada tę zdolność, w czasie wielu przygód nabrał niesamowitej krzepy. Może nosić ciężki pancerz lub zbroję płytową bez zmniejszania Szybkości. Szczegółowy opis pancerzy znajdziesz w Rozdziale V: Ekwipunek', 
        'Odporność na magię': 'Bohater w naturalny sposób opiera się działaniu czarów. Otrzymuje modyfikator +10 do Siły Woli podczas testów przeciwko magii', 
        'Odwaga': 'Bohater odznacza się wyjątkową odwagą. Otrzymuje modyfikator +10 do Siły Woli podczas testów przeciwko Strachowi i Grozie oraz zastraszaniu',
        'Widzenie w ciemności': 'Bohater dysponuje zdolnością wyraźnego widzenia przy oświetleniu porównywalnym ze światłem gwiazd. Zasięg wzroku w takich warunkach wynosi 30 metrów. Zdolność jest bezużyteczna w całkowitej ciemności', 
        'Zapiekła nienawiść': 'Bohater podziela głęboko zakorzenioną wśród swojego ludu wrogość wobec wszystkich zielonoskórych. Ta wiekowa już tradycja napełnia go taką nienawiścią, że otrzymuje modyfikator +5 do Walki Wręcz, gdy atakuje gobliny, orki i hobgobliny', 
        'Morderczy atak': 'Dzięki znajomości podstaw anatomii Bohater potrafi wymierzyć atak w newralgiczną część ciała przeciwnika. Zwiększa to o 1 Wartość Krytyczną wszystkich trafień krytycznych zadanych przez BG', 
        'Ogłuszanie': 'Po udanym ataku bronią białą Bohater może zadeklarować próbę ogłuszenia przeciwnika, zamiast zadawać mu obrażenia. W takiej sytuacji należy wykonać przeciwstawny test Krzepy. Jeżeli Bohater wygra, jego przeciwnik musi natychmiast wykonać test Odporności, dodając modyfikator +10 za każdy Punkt Zbroi hełmu lub osłony noszonej na głowie. Jeśli ten test będzie nieudany, przeciwnik zostaje ogłuszony na 1k10 rund. W tym czasie nie może podejmować żadnych akcji i nie może stosować umiejętności unik', 
        'Czuły słuch': 'Bohater obdarzony jest wyjątkowo czułym słuchem. Otrzymuje modyfikator +20 do testów spostrzegawczości podczas nasłuchiwania', 
        'Silny cios': 'Dzięki doświadczeniu nabytemu w wielu walkach Bohater potrafi precyzyjnie wymierzać ciosy w walce wręcz. Otrzymuje modyfikator +1 do obrażeń zadawanych bronią białą', 
        'Wyczucie kierunku': 'Bohater instynktownie potrafi określać strony świata i orientować się w przestrzeni. Prawie nigdy się nie gubi i bez wahania potrafi wskazać kierunek północny. Dodatkowo otrzymuje modyfikator +10 do testów nawigacji'
      },
      equipment: [
        'prowiant x 9',
        '13 bełtów do kuszy',
        'amulet z tymczasową runą ochrony',
        'łuski po trolu x 5 (wielkość kartki samoprzylepnej)',
        'zmiotka',
        'księga magiczna',
        'miecz',
        'borowik',
        '17 bełtów do kuszy',
        'bukłak z wodą',
        'sztylet x2',
        'koc, miska, sztućce, plecak, ubranie podróżne',
        'srebrny pierścień',
        'antałek piwa „Ogier”',
        'zniszczone części broni',
        'klamry do brody - starożytny artefakt z Karak Durn "Klamry założycieli Karak Durn"'
      ],
      money: {
        zk: '160',
        ss: '5',
        mp: '4'
      },
      currentPoints: {
        pd: 56,
        obrazenia: '2 / 19'
      }
    }
  }
  
  render() {
    return (
      <div>
        <h1 className="text-center">Karta postaci</h1>
        <div className="d-flex flex-row flex-wrap container-fluid justify-content-around">
          <Stats stats={this.state.stats} />
          <Skills skills={this.state.skills} />
          <Abilities abilities={this.state.abilities} abilitiesDescription={this.state.abilitiesDescription} />
          <CurrentPoints currentPoints={this.state.currentPoints} />
          <Graphics />
          <Dices />
          <Equipment equipment={this.state.equipment} money={this.state.money} />
        </div>
      </div>
    );
  }
}

export default App;
