import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang, T } from './content';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (v: T | string) => string };
const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = 'grumysh-lang';

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    // almacenamiento bloqueado: seguimos con el idioma por defecto
  }
  return 'es';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // sin persistencia, no pasa nada
    }
  }, [lang]);

  const t = (v: T | string) => (typeof v === 'string' ? v : v[lang]);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang debe usarse dentro de LangProvider');
  return ctx;
}
