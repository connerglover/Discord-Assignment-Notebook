function sendAssignment() {
  const subjectName = document.getElementById("subject").value;
  const assignmentName = document.getElementById("assignment").value;
  const date = new Date().toJSON();
  const urlParams = new URLSearchParams(window.location.search);
  const webhookUrl = urlParams.get('webhook_url') 
  const webhookContents = {
    content: "@everyone",
    embeds: [
      {
        title: "Assignment in " + subjectName,
        description: assignmentName,
        color: 16777215,
        timestamp: date,
        thumbnail: {
          url: "https://cdn-icons-png.flaticon.com/512/1754/1754306.png",
        },
      },
    ],
    username: "Assignment Notebook",
    avatar_url: "https://cdn-icons-png.flaticon.com/512/1754/1754306.png",
    attachments: [],
  };
  fetch(webhookUrl + "?wait=true", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(webhookContents),
  });
  alert("Your assignment has been sent!");
}
