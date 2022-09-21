// hides the popup container
function hideContainer() {
    var container = document.getElementById("wl-container");
    container.style.visibility = "collapse";
}

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    // all new muations (childList, attribute etc.)
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            // check if the right container was added
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                if (mutation.addedNodes[i].id == "wl-container") {
                    console.log("FOUND IT!");
                    hideContainer(); // hide the container
                }
            }
        }
    }
};

// Create an observer
const observer = new MutationObserver(callback);

// Start observing
observer.observe(document, config);