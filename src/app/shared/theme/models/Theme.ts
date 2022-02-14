export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--bg": "#ffffff",
    "--color": "#000000",
    "--sbar": "#f1f1f1",
    "--sbar-track": "#555",
    "--sbar-hover": "#888"
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--bg": "#000000",
    "--color": "#ffffff",
    "--sbar": "#888",
    "--sbar-track": "#555",
    "--sbar-hover": "#f1f1f1"
  }
};
