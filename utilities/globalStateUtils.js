function writeToClipboard(extractor) {
  /* Could become more complex depending on requirements
  hence separating this out into separate function. */
  try {
    const targetText = extractor();
    //There are no guarantees of a browser supporting this
    navigator.clipboard.writeText(targetText);
    return true;
  } catch {
    return false;
  }
}

// Might make use of boolean output in the future to indicate to the user that the text was copied
function copyUrlsSectionUrl(event) {
  const textExtractor = () => event.target.closest("tr").querySelector(".url-cell").innerText;
  const isSuccess = writeToClipboard(textExtractor);
  return isSuccess;
}

module.exports = {
  copyUrlsSectionUrl,
};
