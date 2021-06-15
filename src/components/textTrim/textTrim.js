function textTrim(text, number) {
  if (text.length < number) {
    return text;
  }
  let newText = (text.match(new RegExp(`.{${number}}\\S*`)) || [text])[0];
  newText += '...';
  return newText;
}
export default textTrim;
