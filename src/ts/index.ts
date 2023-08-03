// Global variables
const form = document.getElementById('submit-form')!;
const errMsg = document.getElementById('error-msg')!;
const input: HTMLInputElement = document.getElementById('input')!;
const sucessMessageCard = document.getElementById('sucess-message-card')!;
const mainCard = document.getElementById('main-card')!;
const customMsgEl = document.getElementById('custom-msg')!;
const dismissBtn = document.getElementById('dismiss-btn')!;
const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

// Form validation

const validateForm = (e: Event): void => {
	e.preventDefault();
	const inputValue = input.value;

	if (inputValue === '' || regex.test(inputValue) === false) {
		errMsg.classList.toggle('hidden');
		input.classList.toggle('text-tomato');
		return;
	}

	// Create custom message and swap wievs
	cardSwap();
	customMsg(inputValue);

	// Clear form state
	errMsg.classList.add('hidden');
	input.classList.remove('text-tomato');
	input.value = '';
};

const customMsg = (email: string) => {
	// Create custom message
	customMsgEl.innerHTML = `
	A confirmation email has been sent to ${email.bold()}.
	Please open it and click the button inside to confirm your subscription.`;
};

const cardSwap = () => {
	// Swap cards
	mainCard.classList.toggle('hidden');
	sucessMessageCard.classList.toggle('hidden');
};

// Events
form.addEventListener('submit', validateForm);
dismissBtn.addEventListener('click', cardSwap);
