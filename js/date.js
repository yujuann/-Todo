const day = document.querySelector("h4#today");

function dayDay() {
  const now = new Date();
  const year = now.getFullYear();
  //   const month = now.getMonth();
  //   const date = now.getDate();
  //   today.innerText = `${year}-${month}-${date}`;
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const date = ("0" + now.getDate()).slice(-2);

  today.innerText = `${year}-${month}-${date}`;
}

dayDay();
setInterval(dayDay, 1000);
