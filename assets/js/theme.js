// Light / Dark theme toggle
(function () {
    const defaultTheme = '{{ site.Params.theme.default | default `system`}}';
  
    const themeToggleButtons = document.querySelectorAll(".theme-toggle");
  
    // Function to update image sources based on theme
    const updateSourceMedia = (colorPreference) => {
      const pictures = document.querySelectorAll('.theme-toggle-picture');
  
      pictures.forEach((picture) => {
        const sources = picture.querySelectorAll('source');
  
        sources.forEach((source) => {
          if (source.media.includes('prefers-color-scheme')) {
            source.dataset.media = source.media;
          }
  
          if (source.dataset.media.includes(colorPreference)) {
            source.media = 'all';
          } else {
            source.media = 'none';
          }
        });
      });
    };
  
    // Function to set dark theme
    const setDarkTheme = () => {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute('data-theme', 'dark');
      updateSourceMedia('dark');
    };
  
    // Function to set light theme
    const setLightTheme = () => {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute('data-theme', 'light');
      updateSourceMedia('light');
    };
  
    // Set initial theme based on saved preference or system setting
    const currentTheme = localStorage.getItem("color-theme") ||
      ((window.matchMedia("(prefers-color-scheme: dark)").matches && defaultTheme === "system") ? "dark" : "light");
    
    if (currentTheme === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  
    themeToggleButtons.forEach((el) => el.dataset.theme = currentTheme);
  
    // Add click event handler to the buttons
    themeToggleButtons.forEach((el) => {
      el.addEventListener("click", function () {
        if (document.documentElement.classList.contains("dark")) {
          setLightTheme();
          localStorage.setItem("color-theme", 'light');
        } else {
          setDarkTheme();
          localStorage.setItem("color-theme", 'dark');
        }
        el.dataset.theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      });
    });
  
    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (defaultTheme === "system" && !("color-theme" in localStorage)) {
        if (e.matches) {
          setDarkTheme();
        } else {
          setLightTheme();
        }
        themeToggleButtons.forEach((el) => el.dataset.theme = document.documentElement.classList.contains("dark") ? "dark" : "light");
      }
    });
  })();
  