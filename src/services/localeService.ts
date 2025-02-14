import api from "@/lib/api";
import { LocaleResponse } from "@/types/locale";

export const getLocales = async (): Promise<LocaleResponse> => {
  const response = await api.get("/getLocale");
  return response.data;
};
