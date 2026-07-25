// reCAPTCHA v3 (invisible) — an extra signal layered on top of botDetection's
// heuristics before we reveal contact details.
//
// Only the site key belongs here. Site keys are meant to be public (Google's
// own integration docs have you embed it directly in client HTML/JS). The
// secret key must never live in this project: this app is a static bundle
// with no server, so anything in src/ ships to every visitor's browser. Real
// score-based verification requires POSTing the token to Google's
// `siteverify` endpoint with the secret key from a server — there isn't one
// here, so this only tells us whether the challenge loaded and ran at all.
const RECAPTCHA_SITE_KEY = '6Ld1PmUtAAAAAFFtAvUfAd2FH0oWB8sb9hiLjTI_';

declare global {
	interface Window {
		grecaptcha?: {
			ready: (callback: () => void) => void;
			execute: (siteKey: string, options: { action: string }) => Promise<string>;
		};
	}
}

let scriptPromise: Promise<void> | null = null;

function loadRecaptchaScript(): Promise<void> {
	if (window.grecaptcha) return Promise.resolve();
	if (scriptPromise) return scriptPromise;

	scriptPromise = new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
		script.async = true;
		script.defer = true;
		script.onload = () => resolve();
		script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
		document.head.appendChild(script);
	});

	return scriptPromise;
}

// Resolves with a token once the challenge runs, or null if it fails/errors/
// times out — treat null as another reason to hide contact details.
export function getRecaptchaToken(action: string, timeoutMs = 4000): Promise<string | null> {
	const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), timeoutMs));

	const attempt = loadRecaptchaScript()
		.then(
			() =>
				new Promise<string | null>((resolve) => {
					window.grecaptcha!.ready(() => {
						window
							.grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action })
							.then(resolve)
							.catch(() => resolve(null));
					});
				})
		)
		.catch(() => null);

	return Promise.race([attempt, timeout]);
}
