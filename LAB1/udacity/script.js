const yesBtn = document.getElementById("yes");

yesBtn.addEventListener("click", () => {
  const imgUrl = "https://i.pinimg.com/736x/9f/86/31/9f8631522cd638df2b8eece8360475d6.jpg"; 

  const win = window.open("", "_blank");

  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>work</title>
      <style>
        html, body {
          width: 500px;
          height: 500px;
        }
        img {
          width: 500px;
          height: 500px;
          object-fit: cover;
        }
      </style>
    </head>
    <body>
      <img src="${imgUrl}">
    </body>
    </html>
  `);
});

