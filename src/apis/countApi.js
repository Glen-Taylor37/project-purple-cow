import countApi from 'countapi-js';

const COUNT_KEY = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';
const INCREMENT_AMOUNT = 1;

// count will be incremeneted when the user clicks the button
export async function incrementCount() {
	await countApi.update(COUNT_KEY, INCREMENT_AMOUNT);
}

// count will be displayed on app
export async function getCount() {
	const { value } = await countApi.get(COUNT_KEY);
	console.log('count is: ', value);
	return value;
}
