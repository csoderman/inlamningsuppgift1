new Splide( '.splide', {
    type   : 'loop',
    perPage: 5,
    breakpoints: {
        768: {
			perPage: 3,
		},
		576: {
			perPage: 2,
		},
	},
    focus  : 'center',
    gap    : '1rem',
    pagination: false,
} ).mount();