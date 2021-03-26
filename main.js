
const sliders = document.querySelectorAll(".slider__creator");

// данные для каждого слайда
const slidesData = [
  {
    image: "./1.jpg",
    textSpanStart:"Lorem ipsum dolor!",
    text: "Ab officiis rerum fuga soluta cum?",
    textSpanEnd: "dolorum laboriosam ipsa, ea repellendus, minima fugiat eligendi aliquid ex distinctio consequuntur labore!",
    textDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officiis rerum fuga soluta cum? Recusandae consectetur possimus, dolorum laboriosam ipsa, ea repellendus, minima fugiat eligendi aliquid ex distinctio consequuntur labore!",
    link: "otb.od.ua",
    linkHref: "https://otb.od.ua/",
    dots: "Brake replacing",
  },
  {
    image: "./2.jpg",
    textSpanStart:"Lorem ipsum dolor!",
    text: "Ab officiis rerum fuga soluta cum?",
    textSpanEnd: "dolorum laboriosam ipsa!",
    textDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officiis rerum fuga soluta cum? Recusandae consectetur possimus",
    link: "i need this work)",
    linkHref: "https://www.google.com/search?q=i+need+this+wrk&tbm=isch&ved=2ahUKEwjvhZ3IpMzvAhVC1uAKHU87CUkQ2-cCegQIABAA&oq=i+need+this+wrk&gs_lcp=CgNpbWcQAzoECCMQJzoFCAAQsQM6AggAOgcIIxDqAhAnOggIABCxAxCDAToECAAQHjoECAAQE1DrKViLRWDdRmgCcAB4AIABf4gB5Q2SAQQ0LjEzmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=4PJcYO-VM8KsgwfP9qTIBA&bih=754&biw=1536&rlz=1C1CHBD_ruUA936UA936#imgrc=BoER5HPUzQqouM",
    dots: "Driver Shift Control",
  },
  {
    image: "./3.jpg",
    textSpanStart:"",
    text: "Ab officiis rerum fuga soluta cum?",
    textSpanEnd: "dolorum laboriosam ipsa!",
    textDescription: "Lorem ipsum dolor sit amet consectetur",
    link: "https",
    linkHref: "https://www.google.com/search?q=https&tbm=isch&ved=2ahUKEwiJ35bNpMzvAhWn2OAKHaP9C68Q2-cCegQIABAA&oq=https&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BQgAELEDOgYIABAKEAFQ1PgBWJX9AWC4_gFoAHAAeACAAWmIAfoDkgEDMi4zmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=6_JcYMm9Daexgwej-6_4Cg&bih=754&biw=1536&rlz=1C1CHBD_ruUA936UA936#imgrc=aSzmGXZNnkFmOM",
    dots: "Sportmatic",
  },
  {
    image: "./4.jpg",
    textSpanStart:"Lorem ipsum dolor!",
    text: "Ab officiis rerum fuga soluta cum?",
    textSpanEnd: "",
    textDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officiis rerum fuga soluta cum? Recusandae consectetur possimus, dolorum laboriosam ipsa, ea repellendus, minima fugiat eligendi aliquid ex distinctio consequuntur labore!",
    link: "xd",
    linkHref: "https://www.google.com/search?q=xd&tbm=isch&ved=2ahUKEwjUtsvlpMzvAhUXAWMBHcqoDGIQ2-cCegQIABAA&oq=xd&gs_lcp=CgNpbWcQAzIECAAQQzIECAAQQzIECAAQQzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BQgAELEDUKkhWIAjYKcoaABwAHgAgAFxiAHbAZIBAzAuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=HvNcYNSvGZeCjLsPytGykAY&bih=754&biw=1536&rlz=1C1CHBD_ruUA936UA936#imgrc=hns06lRvv-tYFM",
    dots: "Supplemental Resraint System",
  },
];
// перебор всех слайдеров, для прокидывания их в функию createSlider, таким образом каждый слайдер будет создан независимо
sliders.forEach(function (slider) {
  createSlider(slider, slidesData);
});

// функция для наполнения слайдера контентом и описания логики поведения слайдера
function createSlider(slider, data) {
  const slidesWrapper = document.createElement("div");
  const dotsBlock = document.createElement("div");
  const leftBtn = document.createElement("div");
  const rightBtn = document.createElement("div");


  function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }
    this.reset = function(newT) {
        t = newT;
        return this.stop().start();
    }
  }





  let slideIndex = 1;

  slidesWrapper.className = "slider";
  dotsBlock.className = "dots_block";
  leftBtn.className = "btn btn_left";
  rightBtn.className = "btn btn_right";

  data.forEach(function (slideData,i) {
    const sliderItem = document.createElement("div");
    const image = document.createElement("img");
    const dotsItem = document.createElement("div");
    const dotsNumber = document.createElement("p");
    const dotsText = document.createElement("p");
    const range = document.createElement("div")
    const rangeBar = document.createElement("div")
    rangeBar.className = "range__bar";
    range.className = "range";
    range.append(rangeBar)

    const textContent = document.createElement("h2");
    textContent.className = "text__item";
    const textLink = document.createElement("a");
    textLink.className = "text__Link";
    textLink.setAttribute("href", slideData.linkHref);
    const textDescription = document.createElement("p");
    textDescription.className = "text__description";
    
    const textContainer = document.createElement("div");
    textContainer.className = "text__container";


    textContainer.append(textContent);
    textContainer.append(textDescription);
    textContainer.append(textLink);

    textContent.innerHTML = "<span>"+slideData.textSpanStart+"</span>"+" "+slideData.text+" "+"<span>"+slideData.textSpanEnd+"</span>";
    textLink.textContent = slideData.link;
    textDescription.textContent = slideData.textDescription;

  


    image.className = "slider__item";
    image.setAttribute("src", slideData.image);

    sliderItem.className = "slider__block";
    sliderItem.append(image);
    sliderItem.append(textContainer);

    slidesWrapper.appendChild(sliderItem);

    dotsItem.className = "dots__item";
    dotsItem.append(dotsNumber);
    dotsItem.append(dotsText);
    dotsItem.append(range);

    dotsText.className = "dots__text";
    dotsText.textContent = slideData.dots;

    dotsNumber.className = "dots__number";
    dotsNumber.textContent = "0" + (i+1);
    dotsBlock.append(dotsItem);
  });
  slider.append(slidesWrapper);
  slider.append(leftBtn);
  slider.append(rightBtn);
  slider.append(dotsBlock);
  
  var slides = slidesWrapper.getElementsByClassName("slider__item");
  var dots = dotsBlock.getElementsByClassName("dots__item");
  var textContainer = slider.getElementsByClassName("text__container");
  var dotsNumber = slider.getElementsByClassName("dots__number");
  var range = dotsBlock.getElementsByClassName("range");
  var sliderRangeBar = dotsBlock.getElementsByClassName("range__bar");
  var slideBarActimeItem = 0;
  
  showSlides();
  




  function showSlides(n) {
    if (n <1) {
      slideIndex = slides.length;
    } else if (n > slides.length) {
      slideIndex = 1;
    }
    for (let i = 0; i <slides.length; i++) {
      slides[i].classList.remove('active__slide');
    }
    for (let i = 0; i <dots.length; i++) {
      dots[i].classList.remove("active__dots");
      textContainer[i].classList.remove("active__text_container");
      dotsNumber[i].classList.remove("dots__number_active");
      range[i].classList.remove("range__active");
    }
    range[slideIndex - 1].classList.add("range__active")
    dotsNumber[slideIndex - 1].classList.add("dots__number_active");
    textContainer[slideIndex - 1].classList.add("active__text_container");
    slides[slideIndex - 1].classList.add("active__slide");
    dots[slideIndex - 1].classList.add("active__dots");
  };
  
  var timerId = null;

  var timer = new Timer(function() {
    move(1);
  }, 5000)

  leftBtn.addEventListener("click", () => {
    plusSlides(-1);
    move(1)
    timer.reset(5000);
  });

  rightBtn.addEventListener("click", () => {
    plusSlides(1);
    move(1)
    timer.reset(5000);
  });
  
  Array.from(dotsBlock.getElementsByClassName("dots__item")).forEach((el, i) => {
    el.addEventListener("click", function (e) {
        var toBeSelected = e.target;
        var currentlySelected = dotsBlock.querySelectorAll(".active__dots")[0];
        currentlySelected.classList.remove("active__dots")
        if (toBeSelected.parentElement.className === currentlySelected.className) {
          toBeSelected.parentElement.classList.add("active__dots");
        } else if (toBeSelected.className === currentlySelected.className) {
          toBeSelected.classList.add("active__dots")
        }
        currentSlider(i+1);
        move(1)
        timer.reset(5000);
    });
  });
  
  function plusSlides(n) {
    showSlides((slideIndex += n));
  };

  function currentSlider(n) {
    showSlides((slideIndex = n));
  };

  
  


  Array.from(dotsBlock.getElementsByClassName("dots__item")).forEach((el) => {
    el.addEventListener("mouseover", function (e) {
        var toBeSelected = e.target;
        var currentlySelected = dotsBlock.querySelectorAll(".active__dots")[0];
          if (toBeSelected.parentElement === currentlySelected) {
            move(0)
          } else if (toBeSelected === currentlySelected) {
            move(0)
            timer.stop();
          } else timer.start()
    });
  })
  dotsBlock.addEventListener('mouseout', event => {
    if(event.target.classList.contains('active__dots')) {
      move(1)
      timer.start();
    }
  });
  window.onload = function() {
    timer.reset(5000);
    move(1);
  };
  function move(param) {
    // let movePause = 0;
    // param = movePause; ---------------------- убрать таймер слайдера
    let rangeBarItem = 0;
    dotsBlock.querySelectorAll('.range__bar').forEach(element => {
      if(element.parentElement === slider.querySelector(".range__active")) {
        rangeBarItem = element;
      }
    });

    var elem = rangeBarItem;
    var width = 0;
    width = param;
    timer.reset(5000);
    clearInterval(timerId);

    timerId = setInterval(frame,48);
    function frame() { 
      if(width===100) {
        plusSlides(1);      
      }
       if(elem.parentElement != slider.querySelector(".range__active")){
        width = 0; 
      }if(width === 0){
        elem.style.width = 0; 
        if(elem.style.width != elem.style.width) { 
          clearInterval(timerId)
        }
      } else {
        width+=1;
        elem.style.width = width + '%';  
      }
    }
    
  }
  document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'visible') {
      move(1);
    } else {
      move(0)
    }
  });
}
