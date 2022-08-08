/* eslint-disable no-unused-vars */
import startCar, {
  newPage, startEngine, app,
} from '../../index';
import Buttons from '../buttons/botton';
import ICar from './ICar';

class Car {
  id: number;

  name: string;

  color: string;

  callback: () => void;

  constructor(id: number, name: string, color: string, callback?: () => void) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.callback = callback;

    const carContainer = document.createElement('div');
    carContainer.className = 'car-container';
    const row1 = document.createElement('div');
    row1.className = 'car-row1';
    carContainer.appendChild(row1);
    const select = new Buttons('btn-select', row1, 'SELECT', () => {
      carContainer.classList.add('car-selected');
      (document.querySelectorAll('.btn-btn')).forEach((el: HTMLButtonElement) => {
        el.disabled = true;
      });
      (document.querySelector('.btn-car-update') as HTMLButtonElement).disabled = false;

      (<HTMLInputElement>document.querySelector('.car-name-update')).focus();
      (<HTMLInputElement>document.querySelector('.car-name-update')).value = this.name;
      (<HTMLInputElement>document.querySelector('.car-color-update')).value = this.color;
      (<HTMLButtonElement>document.querySelector('.btn-car-update')).addEventListener('click', () => {
        // const color = (<HTMLInputElement>document.querySelector('.car-color-update')).value;
        app.model.onUpdateCar(this.id, this.name, this.color);
        // carContainer.classList.remove('car-selected');
        //window.location.reload();
        /* ;
        (document.querySelector('.btn-car-update') as HTMLButtonElement).disabled = true; */
/*         const pageNumber = +(localStorage.getItem('page'));
        console.log(pageNumber);

        (document.querySelector('.page-garage') as HTMLDivElement).innerHTML = '';
        newPage(pageNumber); */
      });
    }, '', false, 'btn-btn');

    const remove = new Buttons('btn-select', row1, 'REMOVE', () => {
      fetch('http://localhost:3000/garage')
        .then((response) => response.json())
        .then((data: ICar[]) => {
          document.querySelector('.page-type').innerHTML = `GARAGE ( ${data.length - 1} )`;

          let nn = 0;
          console.log(`my id = ${this.id}`);
          data.forEach((el, ind) => {
            console.log(`el id = ${el.id}`);
            if (el.id === this.id) {
              nn = ind;
            }
          });
          const count = Math.ceil((nn + 1) / 7);
          document.querySelector('.page-count').innerHTML = `Page #${count}`;

          if (count === Math.ceil(data.length / 7)) {
            (document.getElementById('next') as HTMLButtonElement).disabled = true;
          } else {
            (document.getElementById('next') as HTMLButtonElement).disabled = false;
          }

          fetch(`http://localhost:3000/garage/${this.id}`, { method: 'DELETE' })
            .then((response) => response.json())
            .then((datas: ICar[]) => {
              console.log(datas);
            });

          newPage(count);
        });

      carContainer.remove();

      document.querySelector('.page-garage').innerHTML = '';

      /*       const count = Math.ceil(this.id / 7);
      document.querySelector('.page-count').innerHTML = `Page #${count}`; */
    });

    const carModel = document.createElement('div');
    carModel.className = 'car-model';
    carModel.textContent = this.name;
    row1.appendChild(carModel);

    const row2 = document.createElement('div');
    row2.className = 'start-stop';

    const start = new Buttons('btn-start', row2, 'A', () => {
      localStorage.setItem('winnerCar', 'fff');
      const vel = startEngine(id);
      vel.then((data) => {
        // eslint-disable-next-line no-use-before-define
        startCar(car, this.id, data.velocity, this.name);
        console.log(data.distance);
        console.log(data.velocity);
      }).catch((err: string) => console.log(err));
    });
    const stop = new Buttons('btn-stop', row2, 'B', () => {
      window.cancelAnimationFrame(/* requestId */this.id);
      // eslint-disable-next-line no-use-before-define
      car.style.transform = 'translateX(0px)';
    }, `stop${this.id}`);
    carContainer.appendChild(row2);

    const race = document.createElement('div');
    race.className = 'car-flag';

    const car = document.createElement('div');
    car.className = 'car';
    car.id = id.toString();
    car.innerHTML = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="64.000000pt" height="32.000000pt" viewBox="0 0 1280.000000 640.000000"
    preserveAspectRatio="xMidYMid meet">
   <metadata>
   Created by potrace 1.16, written by Peter Selinger 2001-2019
   </metadata>
   <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
   fill=${color} stroke="none">
   <path d="M3535 5334 c-67 -21 -73 -28 -80 -82 -15 -118 -7 -107 -100 -146 -46
   -19 -245 -96 -442 -171 -636 -243 -1049 -413 -1260 -518 -150 -75 -216 -94
   -383 -112 -80 -9 -194 -24 -255 -35 -149 -26 -274 -38 -505 -50 -107 -5 -205
   -10 -217 -10 -15 0 -32 -17 -61 -62 -56 -89 -58 -102 -28 -139 32 -37 33 -71
   5 -141 -18 -44 -23 -85 -30 -252 l-8 -199 -38 -32 c-113 -97 -148 -292 -124
   -689 16 -269 14 -263 124 -376 51 -52 107 -117 125 -143 25 -37 47 -55 95 -77
   167 -78 545 -134 1137 -170 91 -5 184 -10 206 -10 l42 0 5 183 c3 144 9 198
   25 258 83 299 278 546 542 688 41 22 125 57 185 78 109 37 111 37 295 41 172
   3 192 1 285 -22 337 -87 629 -348 751 -675 56 -149 67 -230 61 -436 -3 -99
   -11 -206 -18 -238 -6 -31 -10 -59 -8 -60 7 -5 6012 12 6017 17 2 3 -4 38 -14
   78 -16 59 -19 110 -19 273 l0 200 38 110 c124 359 382 613 732 722 86 26 99
   28 290 28 217 0 248 -5 403 -65 161 -62 354 -206 458 -341 93 -121 183 -323
   210 -469 7 -41 13 -124 13 -185 1 -101 -4 -149 -25 -274 l-7 -43 114 7 c164
   10 362 32 449 50 122 26 176 67 232 180 l25 50 -15 154 c-15 149 -15 158 8
   320 28 204 38 481 20 589 -23 146 -60 210 -164 288 -197 148 -673 294 -1426
   438 -684 130 -1059 170 -1741 186 -218 5 -409 14 -423 20 -15 5 -59 31 -99 58
   -345 232 -1449 827 -1717 925 -307 113 -608 176 -1080 224 -149 15 -271 18
   -830 17 -572 0 -696 -3 -973 -23 -470 -32 -434 -34 -547 24 -109 56 -171 65
   -255 39z m1982 -784 c45 -283 82 -526 82 -539 l1 -24 -372 7 c-1376 25 -1929
   52 -2069 101 -147 52 -272 240 -255 383 14 116 46 156 186 230 295 157 815
   273 1475 328 157 13 780 35 855 30 12 -1 32 -105 97 -516z m623 489 c338 -31
   881 -142 1075 -219 95 -38 307 -144 421 -211 221 -129 464 -291 464 -308 0 -5
   -12 -11 -27 -14 -41 -8 -94 -48 -117 -87 -22 -37 -29 -138 -13 -194 l8 -29
   -107 6 c-59 4 -464 7 -900 7 l-792 0 -45 123 c-102 277 -307 901 -307 934 0
   13 17 14 118 8 64 -3 164 -11 222 -16z"/>
   <path d="M2620 3129 c-30 -5 -98 -24 -152 -43 -315 -108 -564 -374 -665 -711
   -25 -84 -27 -102 -26 -280 0 -176 2 -196 26 -275 55 -181 129 -310 253 -440
   97 -101 175 -160 284 -215 467 -234 1032 -95 1330 327 144 204 198 393 187
   662 -6 157 -31 261 -92 391 -133 276 -388 488 -684 567 -88 23 -367 34 -461
   17z m389 -319 c231 -64 413 -234 508 -475 26 -66 27 -79 27 -230 0 -149 -2
   -166 -28 -240 -36 -105 -85 -185 -165 -269 -75 -78 -156 -136 -245 -176 -98
   -44 -159 -55 -301 -54 -111 0 -141 4 -207 26 -254 84 -434 278 -499 538 -44
   173 -11 391 82 546 79 132 220 250 366 309 92 37 128 43 268 44 93 1 137 -4
   194 -19z"/>
   <path d="M2635 2716 c-56 -18 -170 -73 -184 -89 -9 -11 12 -37 104 -126 69
   -66 123 -111 135 -111 19 0 20 6 20 164 0 140 -2 165 -16 170 -9 3 -16 6 -17
   5 -1 0 -20 -6 -42 -13z"/>
   <path d="M2920 2560 c0 -164 1 -170 20 -170 12 0 67 45 137 114 l117 114 -48
   30 c-45 29 -129 61 -198 76 l-28 6 0 -170z"/>
   <path d="M2238 2374 c-22 -48 -43 -104 -45 -125 l-6 -39 167 0 c155 0 166 1
   166 19 0 25 -197 231 -222 231 -15 0 -29 -21 -60 -86z"/>
   <path d="M3320 2444 c-48 -32 -210 -199 -210 -216 0 -17 14 -18 165 -18 l165
   0 0 25 c0 32 -54 172 -78 203 -16 21 -18 21 -42 6z"/>
   <path d="M2746 2165 c-59 -55 -14 -165 67 -165 24 0 46 9 66 26 26 22 31 33
   31 70 0 62 -32 94 -93 94 -33 0 -51 -6 -71 -25z"/>
   <path d="M2190 1966 c0 -34 40 -143 75 -202 l28 -48 119 123 c66 67 117 128
   115 134 -2 8 -55 13 -170 15 l-167 2 0 -24z"/>
   <path d="M3110 1971 c0 -23 218 -254 231 -245 25 15 99 195 99 241 l0 23 -165
   0 c-157 0 -165 -1 -165 -19z"/>
   <path d="M2558 1703 c-60 -60 -108 -115 -108 -124 0 -20 166 -99 222 -107 l38
   -5 -2 169 c-4 216 -2 216 -150 67z"/>
   <path d="M2926 1798 c-9 -28 -15 -205 -9 -265 5 -57 8 -63 28 -63 55 0 235 83
   235 108 0 23 -210 232 -233 232 -10 0 -19 -6 -21 -12z"/>
   <path d="M10695 3124 c-422 -94 -748 -436 -815 -856 -19 -114 -8 -352 20 -448
   33 -117 120 -284 197 -380 135 -167 344 -301 558 -357 86 -22 121 -26 255 -27
   172 0 242 11 376 63 181 70 372 216 479 366 269 378 256 904 -31 1264 -100
   125 -207 211 -349 281 -168 84 -241 101 -450 106 -129 3 -187 0 -240 -12z
   m471 -333 c188 -73 321 -195 412 -377 56 -111 67 -164 66 -324 0 -136 -2 -150
   -30 -227 -40 -107 -85 -180 -162 -264 -229 -248 -590 -310 -882 -152 -245 133
   -390 373 -392 648 -1 124 19 209 77 331 37 77 58 104 141 187 82 82 111 104
   188 142 137 67 176 75 351 72 141 -4 155 -6 231 -36z"/>
   <path d="M11020 2561 c0 -166 1 -171 21 -171 28 0 229 199 229 227 0 16 -18
   28 -78 56 -43 20 -92 39 -108 42 -16 4 -37 9 -46 12 -17 4 -18 -9 -18 -166z"/>
   <path d="M10657 2686 c-85 -37 -107 -52 -107 -71 0 -21 218 -225 240 -225 19
   0 20 7 20 165 l0 165 -37 0 c-21 0 -73 -16 -116 -34z"/>
   <path d="M10366 2434 c-34 -52 -76 -160 -76 -196 l0 -28 165 0 c144 0 165 2
   165 16 0 9 -51 68 -114 132 l-113 116 -27 -40z"/>
   <path d="M11334 2378 c-100 -103 -136 -147 -128 -159 3 -5 80 -9 171 -9 l166
   0 -6 40 c-8 58 -83 210 -105 210 -10 0 -54 -37 -98 -82z"/>
   <path d="M10841 2161 c-30 -42 -28 -105 4 -136 59 -60 165 -12 165 75 0 60
   -33 90 -99 90 -43 0 -52 -4 -70 -29z"/>
   <path d="M10292 1947 c5 -43 77 -209 95 -220 15 -10 233 219 233 243 0 19 -6
   20 -166 20 l-167 0 5 -43z"/>
   <path d="M11200 1981 c0 -31 222 -257 240 -246 19 12 92 173 97 216 l6 39
   -172 0 c-101 0 -171 -4 -171 -9z"/>
   <path d="M10658 1703 c-60 -60 -108 -115 -108 -124 0 -27 177 -109 235 -109
   l25 0 -2 168 c-4 214 -2 213 -150 65z"/>
   <path d="M11027 1803 c-4 -3 -7 -80 -7 -170 0 -162 0 -163 23 -163 51 0 227
   82 227 106 0 16 -212 234 -228 234 -5 0 -12 -3 -15 -7z"/>
   </g>
   </svg><img src='assets/images/head.png' alt='' class="car-headlight">`;

    const flag = document.createElement('img');
    flag.src = 'assets/images/flag.png';
    flag.className = 'flag';
    race.appendChild(car);

    (document.querySelector('.page-garage') as HTMLDivElement).appendChild(carContainer);
    race.appendChild(flag);
    carContainer.appendChild(race);
  }

  onCallback(): void {
    this.onCallback();
  }
}

export default Car;
