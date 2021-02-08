// Ctrl + C to terminate
setInterval( () => {
  setTimeout(() => {
    process.stdout.write('\r|   ');
    setTimeout(() => {
      process.stdout.write('\r/   ');
      setTimeout(() => {
        process.stdout.write('\r-   ');
        setTimeout(() => {
          // Need to escape the backslash since it's a special character.
          process.stdout.write('\r\\   ');
        }, 700);
      }, 500);
    }, 300);
  }, 100);
}, 2000);

