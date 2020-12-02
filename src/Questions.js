import quesionImage from "./Images/quest-1.png";

const questionData1 = {
  passcode: 12122,
  questionArray: [
    {
      quesionImage: quesionImage,
      options: ["true", "false", "Reference Error", "Question data 1"],
      answer: 0,
    },
    {
      quesionImage: quesionImage,
      options: ["sghsh", "shdhsgh", "Reference Error", "None of these"],
      answer: 2,
    },
    {
      quesionImage: quesionImage,
      options: ["hgtryrty", "shghghg", "Reference Error", "None of these"],
      answer: 3,
    },
    {
      quesionImage: quesionImage,
      options: ["stytsd", "rywtegh", "Reference Error", "None of these"],
      answer: 4,
    },
    {
      quesionImage: quesionImage,
      options: ["true", "false", "Reference Error", "None of these"],
      answer: 1,
    },
  ],
};

const questionData2 = {
  passcode: 12123,
  questionArray: [
    {
      quesionImage: quesionImage,
      options: ["true", "false", "Reference Error", "Question data 2"],
      answer: 0,
    },
    {
      quesionImage: quesionImage,
      options: ["sghsh", "shdhsgh", "Reference Error", "None of these"],
      answer: 2,
    },
    {
      quesionImage: quesionImage,
      options: ["hgtryrty", "shghghg", "Reference Error", "None of these"],
      answer: 3,
    },
    {
      quesionImage: quesionImage,
      options: ["stytsd", "rywtegh", "Reference Error", "None of these"],
      answer: 4,
    },
    {
      quesionImage: quesionImage,
      options: ["true", "false", "Reference Error", "None of these"],
      answer: 1,
    },
  ],
};

const exportedset = sessionStorage.getItem("passcode")
  ? parseInt(sessionStorage.getItem("passcode")) === 12122
    ? questionData1
    : questionData2
  : null;

export default exportedset;
