export const ellipsedStr = (text) => {
  var maxLength = 50;

  if (text.length > maxLength) {
    const truncatedText = text.substring(0, maxLength);
    // Find the last space within the truncated text
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");
    // Remove any incomplete word at the end
    return truncatedText.substring(0, lastSpaceIndex).trim() + "...";
  } else {
    return text + "...";
  }
};
