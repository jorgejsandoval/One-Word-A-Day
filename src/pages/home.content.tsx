import { t, type Dictionary} from 'intlayer';
import type {ReactNode} from 'react';

const homeContent = {
    key: "home",
    content: {
        title: t({
            en: 'One Word A Day',
            es: 'Una Palabra Al Dia',
        }),
        startButton: t({
            en: 'START',
            es: 'INICIAR',
        }),
    },
} satisfies Dictionary;

export default homeContent;