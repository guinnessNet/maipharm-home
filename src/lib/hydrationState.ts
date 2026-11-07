type LanguageEnvironment = {
  snapshotLanguage?: string;
  queryLanguage?: string | null;
  storedLanguage?: string | null;
  browserLanguage?: string;
};
const supported = (language?: string | null) => language?.toLowerCase().startsWith('en') ? 'en' : 'ko';
export function getLanguageState(environment: LanguageEnvironment) {
  const requestedLanguage = supported(environment.queryLanguage || environment.storedLanguage || environment.browserLanguage);
  return {
    initialLanguage: environment.snapshotLanguage ? supported(environment.snapshotLanguage) : requestedLanguage,
    requestedLanguage,
  };
}
export function readSnapshotCaptcha(label: string) {
  const match = label.match(/(\d+) \+ (\d+) = \?/);
  return match ? { question: match[0], answer: Number(match[1]) + Number(match[2]) } : null;
}
