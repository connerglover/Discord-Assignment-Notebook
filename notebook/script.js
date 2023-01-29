function sendAssignment() {
  const subjectName = document.getElementById("subject").value;
  const assignmentName = document.getElementById("assignment").value;
  const date = new Date().toJSON();
  const webhookUrl =
    "https://discord.com/api/webhooks/1069088693031272578/zDdnvFuY_QrOWJg2DF4ruZgNn8M63GlcwFUUBgYUhX_e9T2kqROZOU_boPFQxW4fikdD"; // Put Webhook URL here.
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
