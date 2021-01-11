export const initialTemps = {
	celsius: 0,
	fahrenheit: 0,
	kelvin: 0
};

export const tempReducer = (state, action) => {
	const value = +action.payload;

	switch (action.type) {
		case 'convert_celsius':
			return {
				...state,
				celsius: value,
				fahrenheit: (value * 1.8 + 32).toFixed(2),
				kelvin: (value + 273.15).toFixed(2)
			};

		case 'convert_fahrenheit':
			return {
				...state,
				celsius: ((value - 32) / 1.8).toFixed(2),
				fahrenheit: value,
				kelvin: ((value - 32) / 1.8 + 273.15).toFixed(2)
			};

		case 'convert_kelvin':
			return {
				...state,
				celsius: (value - 273.15).toFixed(2),
				fahrenheit: ((value - 273.15) * 1.8 + 32).toFixed(2),
				kelvin: value
			};

		case 'reset_temps':
			return initialTemps;

		default:
			return state;
	}
};
