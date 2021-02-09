const spin = ['|','/','-','\\'];

const doTimeout = (char, time) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}\t`);
  }, time);
};

const spinloop = () => {
  for (let i = 0; i < 4; i++) {
    doTimeout(spin[i], 200 * i);
  }
};
setInterval(spinloop,spin.length * 200 + 200);

