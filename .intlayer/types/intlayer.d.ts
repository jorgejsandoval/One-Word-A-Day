/* eslint-disable */
import { Locales } from 'intlayer';
import _9kLxI87VhAlJTedeboS0 from './home.ts';
import _yuKTmfngHpgEleYjSaPB from './languageSelector.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "home": typeof _9kLxI87VhAlJTedeboS0;
    "languageSelector": typeof _yuKTmfngHpgEleYjSaPB;
  }

  type DeclaredLocales = Locales.ENGLISH | Locales.SPANISH | Locales.FRENCH;
  type RequiredLocales = Locales.ENGLISH | Locales.SPANISH | Locales.FRENCH;
  type ExtractedLocales = Extract<Locales, RequiredLocales>;
  type ExcludedLocales = Exclude<Locales, RequiredLocales>;
  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}