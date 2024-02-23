const FAQQuestion = [
  {
    id: 1,
    question: `Professional web dasturchi bolish uchin html va css ni bilish shartmi?`,
    answer: `html va css da faqaf saytni chiyorli qlish uchin foydalansa boladi.`,
  },
  {
    id: 2,
    question: `ingliz tilini bilmasdan dasturchi bo'lish mumkinmi?`,
    answer: `Ingliz tilini bilish kerak`,
  },
  {
    id: 3,
    question: `JavaScriptda web sahifa yaratish qiyin emasmi?`,
    answer: `Yaxshi bilsangiz qiyin emas`,
  },
  {
    id: 4,
    question: `Fikirizcha web dasturlashni o'rgangan yaxshimi yoki android/ios uchun dastur tuzishnimi? `,
    answer: `Qizqishizga qarab`,},
  {
    id: 5,
    question: ` Webda algoritm zarurmi?`,
    answer: `Ha albatta`,
  },
];

const faqContEl = document.getElementById("faqCont");

function createFAQEl(data) {
  const faqEl = document.createElement("div");
  faqEl.classList.add("faq");



  const questionCont = document.createElement("div");
  questionCont.classList.add("questionCont");

  faqEl.appendChild(questionCont);

  const questionEl = document.createElement("div");
  questionEl.classList.add("question");
  const questionPara = document.createElement("p");
  questionPara.innerHTML = data.question;
  questionEl.appendChild(questionPara);



  const iconEl = document.createElement("div");
  iconEl.classList.add("icon");
  const iconBtn = document.createElement("button");
  iconBtn.innerHTML = `<ion-icon name="chevron-down"></ion-icon>`;
  iconEl.appendChild(iconBtn);

  questionCont.appendChild(questionEl);
  questionCont.appendChild(iconEl);

  

  const answerCont = document.createElement("div");
  answerCont.classList.add("answerCont");
  const answerEl = document.createElement("div");
  answerEl.classList.add("answer");
  const answerPara = document.createElement("p");
  answerPara.innerHTML = data.answer;

  answerEl.appendChild(answerPara);
  answerCont.appendChild(answerEl);
  faqEl.appendChild(answerCont);

  faqContEl.appendChild(faqEl);

  

  questionCont.addEventListener("click", (e) => {
    const allFaq = document.querySelectorAll(".faqCont .faq");
    allFaq.forEach((item) =>
      item !== faqEl ? item.classList.remove("active") : false
    );

    faqEl.classList.toggle("active");

    createRipple(e);
  });

  

  function createRipple(pos) {
    let topPos = pos.clientY - faqEl.getBoundingClientRect().top;

    let leftPos = pos.clientX - faqEl.getBoundingClientRect().left;

    const spanEl = document.createElement("span");
    spanEl.classList.add("ripple");
    questionCont.appendChild(spanEl);
    spanEl.style.cssText = `height:1000px;
        width:1000px;background-color:#647dee33;
        position:absolute;transform:translate(-50%,-50%);border-radius:50%;opacity:1;
        animation:rippleEffect 1s ease-in-out;
        top:${topPos}px;
        left:${leftPos}px;
        opacity:0;
        `;

    spanEl.addEventListener("animationend", (e) => {
      spanEl.remove();
    });
  }
}

FAQQuestion.forEach((question) => {
  createFAQEl(question);
});
