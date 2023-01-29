function sendToLink() {
  const webhookUrl = document.getElementById("webhook").value;
  const finalLink = "https://assignment-notebook.netlify.app/notebook?webhook_url=" + webhookUrl
  console.log(finalLink);
  window.location.replace(finalLink);
}
