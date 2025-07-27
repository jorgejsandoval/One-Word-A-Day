import { t, type Dictionary } from 'intlayer';
import type { ReactNode } from 'react';

const languageSelectorContent = {
    key: 'languageSelector',
    content: {
        header: t({
            en: 'Select a language',
            es: 'Selecciona un idioma',
        }),
        backButton: t({
            en: 'Back',
            es: 'Atras',
        }),
        languages: t({
            en: ['Spanish','French', 'English'],
            es: ['Espanol','Frances', 'Ingles'],
        }),
        flags: [
            '/Flags/Spain_Flag.svg',
            '/Flags/France_Flag.svg',
            '/Flags/United_States_Flag.svg',
        ],
    },
} satisfies Dictionary;

export default languageSelectorContent;