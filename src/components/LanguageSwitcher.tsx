import { type FC } from 'react';
import { Locales } from 'intlayer';
import { useLocale } from 'react-intlayer';

const LanguageSwitcher: FC = () =>  {
    const {locale, setLocale, defaultLocale, availableLocales} = useLocale();
    const handleChange = (newLocale:any) => {
        setLocale(newLocale);
    };

    return(
        <>
        <nav>
    
            <select value={locale} onChange={(e) => handleChange(e.target.value)}>
                {availableLocales.map((locale) => (
                    <option key={locale} value={locale}>{locale}</option>
                ))}
            </select>
        </nav>
        </>
    );
}

export default LanguageSwitcher