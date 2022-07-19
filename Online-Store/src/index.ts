/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */

import * as noUiSlider from 'nouislider';
import IProduct from './components/intefaces/IProduct';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import ProductCard from './components/productCard';
import PRODUCT from '../server/product';
import { head } from './components/page/header';
import Main from './components/page/main';
import 'nouislider/dist/nouislider.css';
import SortButton from './components/buttons/sortButton';
import checkLastSort from './components/functions/functions'
import SortType from './components/intefaces/enum';
import Footer from './components/page/footer';

class Product {
  dataProd: IProduct[] = PRODUCT;

  render(data: Array<IProduct>) {

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'main__buttons';
    (document.querySelector('.main__cards') as HTMLDivElement).appendChild(buttonContainer)

    data.forEach(({ id, title, description, price, rating, image, category, release, color, countInStock }) => {
      const newCard = new ProductCard({ id, title, description, price, rating, image, category, release, color, countInStock })
      newCard.createCard();
    })

    const titleDownContent = `Name <img class='za' src="assets/images/za.png" alt=''><img class='sort-down' src="assets/images/up.png" alt=''>`
    const priceContent = `Price <img class='min' src="assets/images/123.png" alt=''>`
    const priceMaxContent = `Price <img class='max' src="assets/images/321.png" alt=''>`
    const ratingContent = `Rating <img class='max' src="assets/images/rating.png" alt=''><img class='sort-rating' src="assets/images/up.png" alt=''>`
    const ratingDownContent = `Rating <img class='max' src="assets/images/rating.png" alt=''><img class='sort-rating-down' src="assets/images/up.png" alt=''>`
    const releaseContent = `Release <img class='calendar' src="assets/images/calendar.png" alt=''><img class='sort-rating' src="assets/images/up.png" alt=''>`
    const releaseDownContent = `Release <img class='calendar' src="assets/images/calendar.png" alt=''><img class='sort-rating-down' src="assets/images/up.png" alt=''>`

    const sortButton = new SortButton('btn btn-outline-success btn-sort-price', priceContent, this.dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = '';      
      prod.sortProducts(SortType.PriceMin);
      listner();
      localStorage.setItem('sorting', 'priceMin');
      
    });
    sortButton.render();

    const sortButtonMax = new SortButton('btn btn-outline-success btn-sort-pricemax', priceMaxContent, this.dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = ''
      prod.sortProducts(SortType.PriceMax)
      listner();
      localStorage.setItem('sorting', 'priceMax')

    });
    sortButtonMax.render();

    const sortRating = new SortButton('btn btn-outline-warning btn-sort-rating', ratingContent, this.dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = ''
      prod.sortProducts(SortType.Rating)
      listner();
      localStorage.setItem('sorting', 'rate')

    });

    sortRating.render();

    const sortRatingDown = new SortButton('btn btn-outline-warning btn-sort-ratingdown', ratingDownContent, this.dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = '';
      prod.sortProducts(SortType.RatingDown);
      listner();
      localStorage.setItem('sorting', 'rateDown')

    });

    sortRatingDown.render();

    const titleContent = `Name <img class='az' src="assets/images/az.png" alt=''><img class='sort-up' src="assets/images/up.png" alt=''>`
    const sortTitle = new SortButton('btn btn-outline-primary btn-sort-title', titleContent, this.dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = '';
      prod.sortProducts(SortType.TitleUp);
      listner();
      localStorage.setItem('sorting', 'titleUp')

    });

    sortTitle.render();

    const sortTitleDown = new SortButton('btn btn-outline-primary btn-sort-titleDown', titleDownContent, this.dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = ''
      prod.sortProducts(SortType.TitleDown);
      listner();
      localStorage.setItem('sorting', 'titleDown')

    });
    sortTitleDown.render();

    const sortRealise = new SortButton('btn btn-outline-primary btn-sort-realise', releaseContent, this.dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = ''
      prod.sortProducts(SortType.Realise);
      listner();
      localStorage.setItem('sorting', 'release')

    });
    sortRealise.render();

    const sortRealiseDown = new SortButton('btn btn-outline-primary btn-sort-realisedown', releaseDownContent, this.dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = ''
      prod.sortProducts(SortType.RealiseDown);
      listner();
      localStorage.setItem('sorting', 'releaseDown')

    });
    sortRealiseDown.render();

    const resetAll = new SortButton('btn btn-outline-danger btn-reset', 'reset all', this.dataProd, buttonContainer, () => {
      document.querySelector('.main__cards').innerHTML = '';
      buttonContainer.innerHTML = ''
      prod.render(PRODUCT);
      prod.dataProd = PRODUCT;
      const inputColor = document.querySelectorAll('input');
      inputColor.forEach(el => { el.checked = true });
      localStorage.clear()
    });
    resetAll.render()
    const cart = document.querySelector('.cart-content') as HTMLDivElement;
    head.renderCountInCart(cart)
  }

  colorCheckRender() {
    const checkContainer = document.createElement('div');
    const colorTitle = document.createElement('div');
    colorTitle.className = 'color-title check-title';
    colorTitle.textContent = 'Colors:';
    checkContainer.appendChild(colorTitle);
    const checkboxes = document.createElement('div');
    checkboxes.className = 'checkboxes';
    const arr: Array<string> = [];
    this.dataProd.map(el => arr.push(el.color));
    const colorCheckItems = new Set(arr);

    colorCheckItems.forEach((data) => {
      const inputColor = document.createElement('input');
      inputColor.className = 'color-checkbox';
      inputColor.type = 'checkbox';
      inputColor.id = data;
      inputColor.name = data;
      if (data === localStorage.getItem(data)) {
        inputColor.checked = false;
      } else {
        inputColor.checked = true;

      }

      checkboxes.appendChild(inputColor);
      const labeltColor = document.createElement('label');
      labeltColor.className = 'checkbox__label';
      labeltColor.htmlFor = data;
      labeltColor.textContent = data;
      checkboxes.appendChild(labeltColor);
    });

    (checkContainer as HTMLDivElement).appendChild(checkboxes);
    document.querySelector('.root__filters').appendChild(checkContainer);

  }

  typeCheckRender() {
    const checkContainerCategory = document.createElement('div');
    const typeTitle = document.createElement('div');
    typeTitle.className = 'category-title check-title';
    typeTitle.textContent = 'Product categories:';
    checkContainerCategory.appendChild(typeTitle);
    const checkboxesCategory = document.createElement('div');
    checkboxesCategory.className = 'checkboxes-category';
    const arr: Array<string> = [];
    this.dataProd.map(el => arr.push(el.category));
    const categoryCheckItems = new Set(arr);

    categoryCheckItems.forEach((data) => {
      const inputCategory = document.createElement('input');
      inputCategory.className = 'category-checkbox';
      inputCategory.type = 'checkbox';
      inputCategory.id = data;
      inputCategory.name = data;

      if (data === localStorage.getItem(data)) {
        inputCategory.checked = false;
      } else {
        inputCategory.checked = true;
      }

      checkboxesCategory.appendChild(inputCategory);
      const labeltCategory = document.createElement('label');
      labeltCategory.className = 'check-category__label';
      labeltCategory.htmlFor = data;
      labeltCategory.textContent = data;
      checkboxesCategory.appendChild(labeltCategory);
    });

    (checkContainerCategory as HTMLDivElement).appendChild(checkboxesCategory);
    document.querySelector('.root__filters').appendChild(checkContainerCategory);
  }

  yearCheckRender() {
    const checkContainerYear = document.createElement('div');
    const yearTitle = document.createElement('div');
    yearTitle.className = 'year-title check-title';
    yearTitle.textContent = 'Release year:';
    checkContainerYear.appendChild(yearTitle);
    const checkboxesYear = document.createElement('div');
    checkboxesYear.className = 'checkboxes-year';
    const arr: Array<string> = [];
    this.dataProd.map(el => arr.push(el.release.toString()));
    const yearCheckItems = new Set(arr);

    yearCheckItems.forEach((data) => {
      const inputYear = document.createElement('input');
      inputYear.className = 'year-checkbox';
      inputYear.type = 'checkbox';
      inputYear.id = data;
      inputYear.name = data;

      if (data === localStorage.getItem(data)) {
        inputYear.checked = false;
      } else {
        inputYear.checked = true;

      }

      checkboxesYear.appendChild(inputYear);
      const labeltYear = document.createElement('label');
      labeltYear.className = 'check-year__label';
      labeltYear.htmlFor = data;
      labeltYear.textContent = data;
      checkboxesYear.appendChild(labeltYear);
    });

    (checkContainerYear as HTMLDivElement).appendChild(checkboxesYear);
    document.querySelector('.root__filters').appendChild(checkContainerYear);
    const resetContainer = document.createElement('div');
    resetContainer.className = 'reset-container';
    document.querySelector('.root__filters').appendChild(resetContainer);

    const resetFilters = document.querySelector('.reset-container') as HTMLDivElement;
    const reset = new SortButton('btn btn-outline-danger btn-reset', 'reset filters', this.dataProd, resetFilters, () => {
      document.querySelector('.main__cards').innerHTML = '';
      resetFilters.innerHTML = ''
      prod.render(PRODUCT);
      prod.dataProd = PRODUCT;
      const inputColor = document.querySelectorAll('input');
      inputColor.forEach(el => { el.checked = true });
      checkLastSort();
      reset.render();
    });
    reset.render();
    
  }

  notFound(): void {

    const notFound = document.createElement('div');
    notFound.className = 'alert-window';
    notFound.innerHTML = `<div class="alert alert-danger" role="alert">
    <strong>Oh snap!</strong> Change a few things up and try submitting again (no matches found).
  </div>`
    document.querySelector('.header').appendChild(notFound);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      notFound.remove()
    }, 2000);
    notFound.addEventListener('click', () => {
      notFound.remove();
      document.body.style.overflow = 'visible';

    })

  }

  modal(data: IProduct) {

    const modalWindowWrapper = document.createElement('div');
    modalWindowWrapper.className = 'modal-wrapper';
    const modalWindow = document.createElement('div');
    modalWindow.className = 'modals';
    modalWindow.innerHTML = `<div class="modals__img-wrapper">                                  
                              <img class="modals__img" src=${data.image} alt=${data.category}>
                             </div>
                            <div class="modals__title-wrapper">
      <p class="modals__title">${data.title}</p>
      <p class="modals__decribtion">${data.description}</p>          
      <div class="modals__rating-wrapper">
        <img class="modals__star" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="">
          <div class="modals__rating">${data.rating.rate}</div>
          <div class="modals__reviews">${data.rating.count} Reviews</div>          
          <div class="modals__price">$ ${data.price}</div>          
      </div>      
      <div class="modals__release">Released in ${data.release}</div>
      <div class="modals__countstorage">In stock ${data.countInStock} pieces</div>
      <button type="button" class='btn btn-success modals__close'>Close</button>     
    </div>`;

    modalWindowWrapper.appendChild(modalWindow)
    document.body.appendChild(modalWindowWrapper)
    const closeBtn = document.querySelector('.modals__close')! as HTMLDivElement;
    closeBtn.addEventListener('click', () => {
      modalWindowWrapper.remove();
      document.body.style.overflow = 'visible';
    })

    modalWindowWrapper.addEventListener('click', (e) => {
      if (e.target === modalWindowWrapper) {
        modalWindowWrapper.remove();
        document.body.style.overflow = 'visible';
      }
    })
  }

  sortProducts(type: SortType) {
    const arr: Array<IProduct> = []
    this.dataProd.forEach(elememt => {
      arr.push(elememt)
    })
    let sortArr;
    if (type === SortType.PriceMin) {
      sortArr = arr.sort((a, b) => a.price - b.price)
    } else if (type === SortType.PriceMax) {
      sortArr = arr.sort((a, b) => b.price - a.price)
    } else if (type === SortType.RealiseDown) {
      sortArr = arr.sort((a, b) => b.release - a.release)
    } else if (type === SortType.Rating) {
      sortArr = arr.sort((a, b) => a.rating.rate - b.rating.rate)
    } else if (type === SortType.RatingDown) {
      sortArr = arr.sort((a, b) => b.rating.rate - a.rating.rate)
    } else if (type === SortType.Count) {
      sortArr = arr.sort((a, b) => a.rating.count - b.rating.count)
    } else if (type === SortType.Realise) {
      sortArr = arr.sort((a, b) => a.release - b.release)
    } else if (type === SortType.TitleUp) {
      sortArr = arr.sort((a, b) => a.title.localeCompare(b.title))
    } else if (type === SortType.TitleDown) {
      sortArr = arr.sort((a, b) => b.title.localeCompare(a.title))

    }

    document.querySelector('.main__cards').innerHTML = ''
    prod.render(sortArr)
    this.dataProd = sortArr;   

  }
}

const main = new Main();
main.render();

const prod = new Product();
if (localStorage.getItem('newData')) {
  const dataStorage: IProduct[] = JSON.parse(localStorage.getItem('newData'))
  prod.render(dataStorage)
  checkLastSort()

} else {
  prod.render(prod.dataProd);
}

prod.colorCheckRender();
prod.typeCheckRender();
prod.yearCheckRender();

const footer = new Footer();
footer.render();
window.onload = () => {
  (document.querySelector('.header__input-search') as HTMLInputElement).focus()
}

const search = document.querySelector('.header__input-search') as HTMLInputElement;
search.addEventListener('keyup', () => {
  const data = PRODUCT;
  const searchData = data.filter(el => el.title.toLowerCase().includes(search.value.toLowerCase()));
  (document.querySelector('.main__cards') as HTMLDivElement).innerHTML = '';

  if (search.value.length === 0) {
    (document.querySelector('.main__cards') as HTMLDivElement).innerHTML = '';
    prod.render(prod.dataProd);
    checkLastSort();
    return;
  }

  if (searchData.length === 0) {
    (document.querySelector('.main__cards') as HTMLDivElement).innerHTML = '';
    prod.notFound();
    return;
  }
  
  prod.render(searchData)
  prod.dataProd = PRODUCT;
});

const colorCheckboxes = document.querySelectorAll('.color-checkbox') as NodeListOf<HTMLInputElement>;
colorCheckboxes.forEach(el => {
  el.addEventListener('change', () => {
    if (!el.checked) {
      localStorage.setItem(el.id, el.id)
    } else {
      localStorage.removeItem(el.id)
    }
    onChangeColor()
    checkLastSort()

  })
});
const onChangeColor = () => {
  (document.querySelector('.main__cards') as HTMLDivElement).innerHTML = '';
  let newData = filteres(PRODUCT, colorCheckboxes)
  newData = filterCategory(newData, categoryCheckboxes)
  prod.render(newData)
  if (newData.length === 0) {
    prod.notFound();
  }
  prod.dataProd = newData;
  localStorage.setItem('newData', JSON.stringify(newData))
}

const categoryCheckboxes = document.querySelectorAll('.category-checkbox') as NodeListOf<HTMLInputElement>;
categoryCheckboxes.forEach(el => {
  el.addEventListener('change', () => {
    if (!el.checked) {
      localStorage.setItem(el.id, el.id)
    } else {
      localStorage.removeItem(el.id)
    }

    (document.querySelector('.main__cards') as HTMLDivElement).innerHTML = ''
    let newData = filterCategory(PRODUCT, categoryCheckboxes);
    newData = filterYear(newData, yearCheckboxes);
    newData = filteres(newData, colorCheckboxes)
    prod.render(newData)

    if (newData.length === 0) {
      prod.notFound()
    }
    prod.dataProd = newData;
    localStorage.setItem('newData', JSON.stringify(newData))
    checkLastSort()
  })
});

const yearCheckboxes = document.querySelectorAll('.year-checkbox') as NodeListOf<HTMLInputElement>;
yearCheckboxes.forEach(el => {
  el.addEventListener('change', () => {
    if (!el.checked) {
      localStorage.setItem(el.id, el.id)
    } else {
      localStorage.removeItem(el.id)
    }

    (document.querySelector('.main__cards') as HTMLDivElement).innerHTML = '';
    let newData = filterYear(PRODUCT, yearCheckboxes)
    newData = filterCategory(newData, categoryCheckboxes)
    newData = filteres(newData, colorCheckboxes)
    prod.render(newData)

    if (newData.length === 0) {
      prod.notFound()
    }
    prod.dataProd = newData;
    localStorage.setItem('newData', JSON.stringify(newData))
    checkLastSort()
  })
});

function check(type: NodeListOf<HTMLInputElement>) {
  const ideas: Array<string> = []
  for (let i = 0; i < type.length; i += 1) {
    if (type[i].checked === true) {
      ideas.push(type[i].id)
    }
  } return ideas;
}

function filteres(data: IProduct[], type: NodeListOf<HTMLInputElement>) {
  const dfg = check(type);
  const newData: IProduct[] = [];
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < dfg.length; j += 1) {
      if (dfg[j] === data[i].color) {
        if (!newData.includes(data[i]))
          newData.push(data[i])

      }
    }
  }
  return newData
}

function filterCategory(data: IProduct[], type: NodeListOf<HTMLInputElement>) {
  const dfg = check(type);
  const newData: IProduct[] = [];
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < dfg.length; j += 1) {
      if (dfg[j] === data[i].category) {
        if (!newData.includes(data[i]))
          newData.push(data[i])
      }
    }
  }
  return newData
}

function filterYear(data: IProduct[], type: NodeListOf<HTMLInputElement>) {
  const dfg = check(type);
  const newData: IProduct[] = [];
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < dfg.length; j += 1) {
      if (dfg[j] === data[i].release.toString()) {
        if (!newData.includes(data[i]))
          newData.push(data[i])
      }
    }
  }
  return newData
}

const createPriseSlider = () => {
  const rangeContainer = document.createElement('div');
  const rangeWrapper = document.createElement('div');
  rangeWrapper.className = "ranger-wrapper";
  rangeContainer.className = "range-container";
  const sl = document.createElement('div');
  sl.className = "slider";
  sl.id = "slider";
  const spanSliderMin = document.createElement('div');
  spanSliderMin.className = 'span-slider-min';
  const spanSliderMax = document.createElement('div');
  spanSliderMax.className = 'span-slider-max';

  rangeContainer.appendChild(rangeWrapper);
  rangeWrapper.appendChild(spanSliderMin);
  rangeWrapper.appendChild(spanSliderMax);
  rangeContainer.appendChild(sl)
  document.querySelector('.root__filters').appendChild(rangeContainer);
  const slider = document.getElementById('slider') as noUiSlider.target;

  noUiSlider.create(slider, {
    start: [0, 1000],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 1000
    }
  });

  slider.noUiSlider.on('update', (values) => {
    let data = prod.dataProd;

    if (localStorage.getItem('newData')) {
      data = JSON.parse(localStorage.getItem('newData'))
    }

    const dataPrice = data.filter((el) => el.price >= Math.round(Number(values[0])) && el.price <= Math.round(Number(values[1])));
    (document.querySelector('.main__cards') as HTMLDivElement).innerHTML = '';
    prod.render(dataPrice);
    prod.dataProd = dataPrice
    checkLastSort()
    spanSliderMin.innerText = `$ ${parseInt((values[0]).toString(), 10).toString()}`;
    spanSliderMax.innerText = `$ ${parseInt((values[1]).toString(), 10).toString()}`;

  });
}

createPriseSlider();

const createRateSlider = () => {
  const rangeRateContainer = document.createElement('div');
  const rateWrapper = document.createElement('div');
  rateWrapper.className = "rate-wrapper";
  rangeRateContainer.className = "rate-container";

  const rateSl = document.createElement('div');
  rateSl.className = "slider-rate";
  rateSl.id = "slider-rate";
  const rateSliderMin = document.createElement('div');
  rateSliderMin.className = 'rate-slider-min';
  const rateSliderMax = document.createElement('div');
  rateSliderMax.className = 'rate-slider-max';

  rangeRateContainer.appendChild(rateWrapper);
  rateWrapper.appendChild(rateSliderMin);
  rateWrapper.appendChild(rateSliderMax);
  rangeRateContainer.appendChild(rateSl)
  document.querySelector('.root__filters').appendChild(rangeRateContainer);
  const sliderRate = document.getElementById('slider-rate') as noUiSlider.target;

  noUiSlider.create(sliderRate, {
    start: [0, 5],
    connect: true,
    step: 0.1,
    range: {
      'min': 0,
      'max': 5
    }

  });

  sliderRate.noUiSlider.on('update', (values) => {
    let data: IProduct[] = prod.dataProd;

    if (localStorage.getItem('newData')) {
      data = JSON.parse(localStorage.getItem('newData'))
    }

    const dataRate = data.filter((el) => el.rating.rate >= +values[0] && el.rating.rate <= +values[1]);
    (document.querySelector('.main__cards') as HTMLDivElement).innerHTML = '';
    prod.render(dataRate);
    prod.dataProd = dataRate
    checkLastSort()

    rateSliderMin.innerHTML = `${(values[0]).toString()} <img class="range-star" src= "assets/images/icon-star.png" alt=""> `;
    rateSliderMax.innerHTML = `${(values[1]).toString()} <img class="range-star" src= "assets/images/icon-star.png" alt="">`;

  });
}

createRateSlider();

const listner = () => {
  const cart = document.querySelector('.cart-content') as HTMLDivElement;
  const but = Array.from(document.querySelectorAll('.card-product__button'));
  const butAct = Array.from(document.querySelectorAll('.button_active'));

  but.forEach(el => {
    el.addEventListener('click', () => {
      head.renderCountInCart(cart)
    })
  })

  butAct.forEach(el => {
    el.addEventListener('click', () => {
      head.renderCountInCart(cart);
    })
  })
}
listner()

export { Product, prod, listner };
