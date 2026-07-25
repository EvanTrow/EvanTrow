// Heuristics to detect headless browsers, automation frameworks, and crawlers
// so we can avoid exposing contact details to scrapers while still showing
// them to real visitors.

const BOT_UA_PATTERNS = [
	/bot/i,
	/spider/i,
	/crawl/i,
	/slurp/i,
	/headless/i,
	/phantom/i,
	/selenium/i,
	/puppeteer/i,
	/playwright/i,
	/curl/i,
	/wget/i,
	/python-requests/i,
	/scrapy/i,
	/facebookexternalhit/i,
	/whatsapp/i,
	/telegrambot/i,
	/discordbot/i,
	/semrush/i,
	/ahrefs/i,
	/mj12bot/i,
	/dotbot/i,
	/petalbot/i,
	/bytespider/i,
	/gptbot/i,
	/ccbot/i,
	/claudebot/i,
	/anthropic/i,
	/perplexity/i,
];

export function isLikelyBot(): boolean {
	if (typeof navigator === 'undefined') return true;

	// Automation frameworks (Selenium, Puppeteer, Playwright) set this flag.
	if (navigator.webdriver) return true;

	const ua = navigator.userAgent || '';
	if (BOT_UA_PATTERNS.some((pattern) => pattern.test(ua))) return true;

	// Headless Chrome reports a Chrome UA but omits the `window.chrome` global
	// that's present in every real Chrome/Chromium build.
	const isChromeUA = /chrome/i.test(ua) && !/edg|opr/i.test(ua);
	if (isChromeUA && typeof window !== 'undefined' && !(window as any).chrome) return true;

	// Real browsers always report at least one language; most bot/headless
	// setups report none.
	if (navigator.languages && navigator.languages.length === 0) return true;

	return false;
}
