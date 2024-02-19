export const answerAnalyticsQuestion = () => useLocalStorage<boolean>('answerAnalyticsQuestion', () => false);

export const enableGoogleAnalytics =  () => useLocalStorage<boolean>('enableGoogleAnalytics', () => false);