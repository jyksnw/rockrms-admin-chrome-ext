function runScript(scriptCode) {
    var script = document.createElement('script');
    script.textContent = scriptCode;
    (document.head || document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    $(document).ready(function () {
        console.log('Ready')
        switch (request.action) {
            case "blockConfig":
                runScript("Rock.admin.pageAdmin.showBlockConfig();")
                break;
            case "pageZones":
                runScript("Rock.admin.pageAdmin.showPageZones();")
                break;
            case "resizeCodeEditor800":
                runScript("(function() {$('.code-editor-container').height(800); window.dispatchEvent(new Event('resize'));})();")
                break;
            case "resizeCodeEditor1200":
                runScript("(function() {$('.code-editor-container').height(1200); window.dispatchEvent(new Event('resize'));})();")
                break;
            default:
                runScript(`alert('${request.action}');`)
                break;
        }
        sendResponse();
    })
});