/**
 * Make <picture> <source> elements with media="(prefers-color-scheme:)"
 * respect custom theme preference overrides.
 * Otherwise the `media` preference will only respond to the OS-level setting
 */
const updateSourceMedia = (colorPreference) => {
    const pictures = document.querySelectorAll('picture');
  
    pictures.forEach((picture) => {
      const sources = picture.querySelectorAll(`
        source[media*="prefers-color-scheme"], 
        source[data-media*="prefers-color-scheme"]
      `);
  
      sources.forEach((source) => {
        // Preserve the source `media` as a data-attribute
        // to be able to switch between preferences
        if (source?.media.includes('prefers-color-scheme')) {
          source.dataset.media = source.media;
        }
  
        // If the source element `media` target is the `preference`,
        // override it to 'all' to show
        // or set it to 'none' to hide
        if (source?.dataset.media.includes(colorPreference)) {
          source.media = 'all';
        } else if (source) {
          source.media = 'none';
        }
      });
    });
  };
  
  // Hooking into the theme toggle logic
  document.addEventListener('DOMContentLoaded', () => {
    const defaultTheme = '{{ .Site.Params.theme.default | default "system" }}';
    const themeToggleButtons = document.querySelectorAll(".theme-toggle");
  
    const updateTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      updateSourceMedia(theme);
    };
  
    const currentTheme = localStorage.getItem("color-theme") ||
      ((window.matchMedia("(prefers-color-scheme: dark)").matches && defaultTheme === "system") ? "dark" : "light");
    updateTheme(currentTheme);
  
    themeToggleButtons.forEach((el) => {
      el.addEventListener("click", function () {
        const newTheme = (document.documentElement.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
        localStorage.setItem("color-theme", newTheme);
        updateTheme(newTheme);
      });
    });
  
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (defaultTheme === "system" && !("color-theme" in localStorage)) {
        const newTheme = e.matches ? 'dark' : 'light';
        updateTheme(newTheme);
      }
    });
  });
  