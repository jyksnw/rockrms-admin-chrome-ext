const resizeCodeEditor800 = document.getElementById("resizeCodeEditor800");
const resizeCodeEditor1200 = document.getElementById("resizeCodeEditor1200");
const blockConfig = document.getElementById("blockConfig");
const pageZones = document.getElementById("pageZones");


if (resizeCodeEditor800) {
    resizeCodeEditor800.onclick = function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    action: "resizeCodeEditor800",
                    tabId: tabs[0].id
                },
                function () {
                    window.close();
                }
            );
        });
    };
}

if (resizeCodeEditor1200) {
    resizeCodeEditor1200.onclick = function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    action: "resizeCodeEditor1200",
                    tabId: tabs[0].id
                },
                function () {
                    window.close();
                }
            );
        });
    };
}

if (blockConfig) {
    blockConfig.onclick = function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    action: "blockConfig",
                    tabId: tabs[0].id
                },
                function () {
                    window.close();
                }
            );
        });
    };
}

if (pageZones) {
    pageZones.onclick = function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    action: "pageZones",
                    tabId: tabs[0].id
                },
                function () {
                    console.log('Action Sent')
                    window.close();
                }
            );
        });
    };
}