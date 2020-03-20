export default function domReady(callback) {
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		return void callback();
	}

	document.addEventListener('DOMContentLoaded', callback);
}