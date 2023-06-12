import { CatalogContent } from "../components/CatalogContent";
import { useState, createContext } from "react";

interface OrdenationContextProps {
  currentOrdenation: string;
  setCurrentOrdenation: (currentOrdenation: string) => void;
}

interface FiltersContextProps {
  currentFilters: number[];
  setCurrentFilters: (currentFilters: number[]) => void;
}

interface PageContextProps {
  currentPage: {
    number: number;
    apiListIndex: number;
  };
  setCurrentPage: (currentPage: {
    number: number;
    apiListIndex: number;
  }) => void;
}

export const OrdenationContext = createContext<OrdenationContextProps>(
  {} as OrdenationContextProps
);

export const FiltersContext = createContext<FiltersContextProps>(
  {} as FiltersContextProps
);

export const PageContext = createContext<PageContextProps>(
  {} as PageContextProps
);

export function Catalog() {
  const [currentOrdenation, setCurrentOrdenation] = useState("popular");
  const [currentFilters, setCurrentFilters] = useState<number[]>([12, 28]);
  const [currentPage, setCurrentPage] = useState({
    number: 1,
    apiListIndex: 0,
  });

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      <FiltersContext.Provider value={{ currentFilters, setCurrentFilters }}>
        <OrdenationContext.Provider
          value={{ currentOrdenation, setCurrentOrdenation }}
        >
          <CatalogContent />
        </OrdenationContext.Provider>
      </FiltersContext.Provider>
    </PageContext.Provider>
  );
}
