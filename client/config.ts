

interface Config {
  baseUrl: string;
}

const checkConfig = (mode: string): Config => {
  switch (mode) {
    case "development":
      return { baseUrl: "http://localhost:5000/api" }; // local dev server
    case "staging":
      return { baseUrl: "https://staging-api.example.com" };
    case "production":
      return { baseUrl: "https://api.example.com" };
    default:
      throw new Error(`Unsupported mode: ${mode}`);
  }
};

const mode = import.meta.env.MODE; // auto-detected from Vite
export const config = checkConfig(mode);
