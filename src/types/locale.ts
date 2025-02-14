export interface LocaleResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: Locale[];
}

export interface Locale {
  text: string;
  id: string;
}
