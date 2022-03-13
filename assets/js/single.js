
var issueContainerEl = document.querySelector("#issues-container");
var limitWarningEl = document.querySelector("#limit-warning");
var getRepoIssues = function(repo) {
    console.log(repo);
};
getRepoIssues("facebook/react");
    if (response.ok) {
        respose.json().then(function(data) {
            displayIssues(data);
            //check if api has paginated issues
            if (displayWarning(repo)) {
                console.log("repo has more than 30 issues");
            }
        });
    }


var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";

var displayWarning = function(repo) {
    //add text to warning container
    limitWarningEl.textContent = "To see more than 30 issues, visit";
};

var linkEl = document.createElement("a");
linkEl.textContent = "See More Issues on Github.com";
linkEl.setAttribute("href", "https://github.com/" + repo + "/issues");
linkEl.setAttribute("target", "_blank");

//append to warning container
limitWarningEl.appendChild(linkEl);

fetch (apiUrl).then(function(response) {
    //request was successful
    if (response.ok) {
        response.json().then(function(data) {
            displayIssues(data);
        });
    }
    if (issue.length === 0) {
        issueContainerEl.textContent = "This repo has no open issues!";
        return;
    }
    else {
        alert("There was a problem with your request!");
    }

    for (var i = 0; i<issues.length; i++) {
        //create a link element to take users to the issue on github
        var issueEl = document.createElement("a");
        issueEl.classList = "list-item flex-row justify-space-between align-center";
        issueEl.setAttribute("href", issue[i].html_url);
        issueEl.setAttribute("target", "_blanck");
        issueContainerEl.appendChild(issueEl);
    }

});

var titleEl = document.createElement("span");
titleEl.textContent = issue[i].title;

//append to container
issueEl.appendChild(titleEl);

//create a type element
var typeEl = document.createElement("span");

//check is issue is an actual issue or a pull request
if (issues[i].pull_request) {
    typeEl.textContent = "(Pull request)";
} else {
    typeEl.textContent = "(Issue)";
}

//append to container
issueEl.appendChild(typeEl);

var displayIssues = function(issues) {

};