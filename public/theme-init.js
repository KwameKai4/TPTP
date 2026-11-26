try {
  const theme = localStorage.getItem('tptp-theme');
  if (theme === 'dark' || theme === 'light') {
    document.documentElement.dataset.theme = theme;
  }
} catch {
  // The browser's colour preference still applies when storage is unavailable.
}
