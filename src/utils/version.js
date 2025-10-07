// Utility to get version from package.json
export function getAppVersion() {
  // Vite exposes import.meta.env, but not package.json directly
  // We'll use Vite's define to inject the version at build time
  return import.meta.env.VITE_APP_VERSION || "0.0.0";
}
