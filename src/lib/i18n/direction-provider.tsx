import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { getDirection, type DemoLocale, type Direction } from "@/lib/i18n/direction";

type DirectionContextValue = {
  direction: Direction;
  locale: DemoLocale;
  setLocale: (locale: DemoLocale) => void;
};

const DirectionContext = createContext<DirectionContextValue | null>(null);

type DirectionProviderProps = {
  children: ReactNode;
  defaultLocale: DemoLocale;
};

export function DirectionProvider({ children, defaultLocale }: DirectionProviderProps) {
  const [locale, setLocale] = useState<DemoLocale>(defaultLocale);
  const direction = getDirection(locale);

  const value = useMemo(
    () => ({
      direction,
      locale,
      setLocale,
    }),
    [direction, locale],
  );

  return (
    <DirectionContext.Provider value={value}>
      <div dir={direction} lang={locale}>
        {children}
      </div>
    </DirectionContext.Provider>
  );
}

export function useDirection() {
  const context = useContext(DirectionContext);

  if (!context) {
    throw new Error("useDirection must be used within DirectionProvider.");
  }

  return context;
}
