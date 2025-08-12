// hooks/useHighlights.ts
import { useQuery } from "@tanstack/react-query";
import { getHighlights } from "../services/highlight-service";

export const useHighlights = (sectionKey: string) => {
  return useQuery({
    queryKey: ["highlight-section", sectionKey],
    queryFn: () => getHighlights(sectionKey),
  });
};