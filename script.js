function firstNonRepeatedChar(str) {
  if (!str) return null;
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = (count[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (count[char] === 1) {
      return char;
    }
  }
  return null;
}