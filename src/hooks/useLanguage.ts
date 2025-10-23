export const useLanguage = () => {
  const format = (lang: string, defaultLabel: string = ""): string => {
    switch(lang) {
        case "react":
            return "React";
        case "typescript":
            return "TypeScript";
        case "rust":
            return "Rust";
        case "c":
            return "C";
        case "cpp":
            return "C++";
        case "c-sharp":
            return "C#";
        default:
            return defaultLabel;
    };
  }

  return {
    format
  };
}
