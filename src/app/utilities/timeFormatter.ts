const timeFormatter = (time: number) => {
  return {
    minutes: ("0" + Math.floor((time / 60000) % 60)).slice(-2),
    seconds: ("0" + Math.floor((time / 1000) % 60)).slice(-2),
    centiseconds: ("0" + (time / 10) % 100).slice(-2)
  }
};

export { timeFormatter };