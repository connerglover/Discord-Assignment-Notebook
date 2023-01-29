function sendToLink() {
    const webhookUrl = document.getElementById("webhook").value;
    location.href('https://assignment-notebook.netlify.app/notebook?webhook_url=' + webhookUrl)
}