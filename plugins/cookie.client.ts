export default defineNuxtPlugin((nuxtApp) => {
  const cookieControl = useCookieControl();
  const { gtag, grantConsent, revokeConsent } = useGtag();
  
  if (cookieControl.cookiesEnabledIds.value === undefined)
    return;

  // Cookieが承認されている場合は、Google Analyticsを有効化する
  if (cookieControl.cookiesEnabledIds.value.includes('ga')) {
    grantConsent();
  }
});