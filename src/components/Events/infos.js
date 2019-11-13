export default day => ({
  day,
  title: `Cool${day % 2 === 0 ? "er" : ""} Event`,
  description: `This event is really cool${
    day % 2 === 0 ? "er than the other" : ""
  }`
});
