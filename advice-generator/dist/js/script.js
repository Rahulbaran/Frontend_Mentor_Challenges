const $adviceBtn = document.querySelector(".advice-btn");
const $adviceLabel = document.querySelector(".advice");
const $adviceId = document.querySelector(".advice-card > h4");

const getAdviceJSON = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  if (response.status === 200) {
    return data;
  } else {
    throw new Error("something went wrong");
  }
};

$adviceBtn.onclick = async () => {
  try {
    const data = await getAdviceJSON();
    $adviceLabel.innerHTML = `&ldquo;${data.slip.advice}&rdquo;`;
    $adviceId.textContent = `advice #${data.slip.id}`;
  } catch (error) {
    console.error(error);
  }
};
