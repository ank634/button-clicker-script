// this should match the command we see in manifest
const COMMAND = "click-all-passed-buttons";

// this is a listener that listens for keyboard short cuts
// query needs await so we need async
chrome.commands.onCommand.addListener(async (command) => {
  // if the command isn't the one we care about early return
  if (command !== COMMAND) return;

  // query current tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  // this checks to make sure its valid
  if (!tab?.id) return;

  try {
    // run file at run time
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["src/content/content.js"]
    });
  } catch (error) {
    console.error("could not run on this tab.", error);
  }
});
