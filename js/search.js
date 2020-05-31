/**
 * Searches and highlights the text that matches the search words inserted.
 * Shows error message if the inserted text is invalid.
 */
$(".search-btn").click(function() {
    if (validateSearch()) {
        search(document.querySelector(".search-text").value);
    }
    else {
        alert("Invalid search, insert a minimum of 3 characters.");
    }
});

/**
 * Performs the search of a string determined by the user in
 * the whole page's text elements.
 * 
 * @param {string} toFind String value to find in the page.
 */
function search(toFind) {
    let occursCount = 0;
    let textContainers = [
                        ".text div p",
                        ".form div h1",
                        ".form div form *",
                        ".title h1"
                    ];

    textContainers.forEach(container => {
        document.querySelectorAll(container).forEach(element => {
            occursCount += performSearchInElement(element, toFind);
        });
    });

    let resultsMsg = $(".results");
    if (occursCount == 0) {
        resultsMsg[0].innerText = "No results found.";
    }
    else if (occursCount == 1) {
        resultsMsg[0].innerText = "Found " + occursCount + " result.";
    }
    else {
        resultsMsg[0].innerText = "Found " + occursCount + " results.";
    }
    resultsMsg.removeClass("hide");
}

/**
 * Searches for a string in an HTMLElement.
 * 
 * @param {HTMLElement} container Element containing text.
 * @param {string} text String value to find in element.
 * @return {number} Amount of occurrences of the text in the element.
 */
function performSearchInElement(container, text) {
    let occurs = 0;
    if(container.innerHTML.indexOf(text) !== -1){
        container.innerHTML = container.innerHTML.replace(text, getRedText(text));
        occurs++;
    }
    return occurs;
}

/**
 * Produces a red version of the string searched for where it is found.
 * 
 * @param {string} content Text to enclose inside a span tag.
 * @return {string} Original string encapsulated by a '.red' span.
 */
function getRedText(content) {
    let openTag = '<span class="red">';
    let closeTag = '</span>';

    return openTag + content + closeTag;
}

/**
 * Validates the search parameters inserted by the user.
 * 
 * @return {boolean} Indication of whether the text to search for is valid or not.
 */
function validateSearch() {
    let search = document.querySelector(".search-text").value;
    return /.{3,}/g.test(search);
}