import defaultLogo from "../../../../assets/images/logoEquipos/defauldProfile.webp";

const tools: Record<string, string> = {
  
};

export const getProfile = (cod: string): string => {
  return tools[cod] || defaultLogo;
};