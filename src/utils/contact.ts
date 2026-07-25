// Base64-encoded so the address/number aren't sitting as plain text in the
// compiled bundle for naive scrapers to regex out. Not real security, just a
// speed bump — pair with botDetection to actually gate rendering.
const EMAIL_ENCODED = 'ZXZhbkB0cm93YnJpZGdlLnRlY2g=';
const PHONE_DIGITS_ENCODED = 'MTcxNzMwNTA3ODM=';
const PHONE_DISPLAY_ENCODED = 'KzEgNzE3LTMwNS0wNzgz';

export function getEmail(): string {
	return atob(EMAIL_ENCODED);
}

export function getPhoneDigits(): string {
	return atob(PHONE_DIGITS_ENCODED);
}

export function getPhoneDisplay(): string {
	return atob(PHONE_DISPLAY_ENCODED);
}
