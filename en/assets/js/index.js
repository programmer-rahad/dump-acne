// Header
function Header() {
    this.button = document.querySelector('header svg:last-child');
    this.closeButton = document.querySelector('.mobile-fullheight-navbar > button:first-child');
    this.navBar = document.querySelector('header .mobile-fullheight-navbar');
    console.log(this.navBar);

    this.button.addEventListener('click', function () {
        this.navBar.classList.add('active-navbar');
        document.body.style.overflow = 'hidden';
    }.bind(this));
    this.closeButton.addEventListener('click', function () {
        this.navBar.classList.remove('active-navbar');
        document.body.style.overflow = 'auto';
    }.bind(this));
}

// Red Flag Slider
function RedFlagSlider(container) {
    this.items = container.querySelectorAll('[class*=col-]');
    this.buttonsWrapper = container.querySelector('.slide-buttons');
    this.currentIndex = 0;

    this.showHideItem = function () {
        if(window.innerWidth > 991) {
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].classList.remove('d-none');
            }   
        } else {
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].classList.add('d-none');
            }
            this.items[this.currentIndex].classList.remove('d-none');
            this.items[this.currentIndex].animate([
                { opacity: 0.1 },
                { opacity: 1 }
              ],{
                duration: 250,
              });
        }
    }

    this.eventListeners = function () {
        var $this = this;
        var buttons = this.buttonsWrapper.children;
        this.nextButton = container.querySelector('.arrow-button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].classList.remove('active');
                    if (this === buttons[i]) {
                        $this.currentIndex = i;
                    }
                }
                buttons[$this.currentIndex].classList.add('active');
                $this.showHideItem(); 
            });
        }

        // Next Slide 
        this.nextButton.addEventListener('click',function(){

            $this.currentIndex = $this.currentIndex + 1;
            if($this.currentIndex === $this.items.length) {
                $this.currentIndex = 0;
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('active');
                if (this === buttons[i]) {
                    $this.currentIndex = i;
                }
            }
            buttons[$this.currentIndex].classList.add('active');
            $this.showHideItem();
        })
    }

    this.activation = function () {
        this.showHideItem();
        this.eventListeners();
    }
    this.activation();
    window.addEventListener('resize',this.showHideItem.bind(this))
}

// Questions 
function Questions() {
    this.currentIndex = 0;
    this.questionItems = document.querySelectorAll('.question-items .question');
    this.options = document.querySelectorAll('.question-items .question li');
    this.showHideQuestion = function(){
        for(let i = 0; i < this.questionItems.length; i++) {
            this.questionItems[i].classList.add('d-none');
        }
        if(!this.questionItems[this.currentIndex]) {
            document.querySelector('.download-result').classList.remove('d-none');
            return;
        } 
        this.questionItems[this.currentIndex].classList.remove('d-none');
    }
    this.eventListeners = function() {
        for(let i = 0; i < this.options.length; i++) {
            this.options[i].addEventListener('click',function(){
                this.currentIndex = this.currentIndex + 1;
                this.showHideQuestion();
            }.bind(this))
        }
    }
    this.activation = function(){
        this.showHideQuestion();
        this.eventListeners();
    }
    this.activation();
}

document.addEventListener('DOMContentLoaded', function () {
    const header = new Header();
    const redFlagSlide1 = new RedFlagSlider(document.querySelector('.red-flag-section .red-flag-items-wrapper'));
    const redFlagSlide2 = new RedFlagSlider(document.querySelector('.red-flag-section.two .red-flag-items-wrapper'));
    const redFlagSlide3 = new RedFlagSlider(document.querySelector('.red-flag-section.three .red-flag-items-wrapper'));
    const redFlagSlide4 = new RedFlagSlider(document.querySelector('.red-flag-section.four .red-flag-items-wrapper'));

    const question = new Questions();
})