import './index.scss';


window.onload= function() {
        document.getElementById('burgerlink').onclick = function() {
        toogleclass(this);
        opennav('nav', this);
        return false;
    };
};

function opennav(id, click_burger) {
    const div = document.getElementById(id);
    if(div.style.display == 'flex') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'flex';
    }
};

function toogleclass(click_burger) {
	if (click_burger.classList.contains('active')) {
		click_burger.classList.remove('active');
	}
	else {
		click_burger.classList.add('active');
	}
};

$('.clients__slider').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
	{
	  breakpoint: 1024,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: true
	  }
	},
	{
	  breakpoint: 600,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 2
	  }
	},
	{
	  breakpoint: 480,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1
	  }
	}
  ]
});

console.log('Boilerplate is working!');