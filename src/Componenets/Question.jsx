import React, { Component } from "react";
import "../CSS/Question.css";
import { setQuestion, removeQuestion } from "../redux/actions/questionActions";
import { connect } from "react-redux";
import Popuptimeup from "./Popuptimeup";
import Popupcorrect from "./Popupcorrect";
import Popupwrong from "./Popupwrong";
import wrongQuestionMusic from "../music/quest-wrong.mp3";
import trueQuestionMusic from "../music/quest-true.mp3";
import clockticking from "../music/Clock-Ticking.mp3";
import questionData from "../Questions";
import PopupScorecard from "../Componenets/PopupScorecard";
import { Redirect } from "react-router-dom";
export class Question extends Component {
  constructor(props) {
    super(props);
    this.wrongMusic = React.createRef();
    this.trueMusic = React.createRef();
    this.clockTicking = React.createRef();
    this.timer = React.createRef();
    this.optionref1 = React.createRef();
    this.optionref2 = React.createRef();
    this.optionref3 = React.createRef();
    this.optionref4 = React.createRef();
    this.timercontrol = React.createRef();

    this.state = {
      questionNumber: 0,
      timeleft: 30,
      score: 0,
      correctquestions: 0,
      correctionOption: false,
      wrongOption: false,
      timeUp: false,
      timerId: null,
      noOfquestions: null,
      attempted: 0,
      showscorecard: false,
      timerpause: true,
    };
  }

  componentDidMount() {
    const { questionArray } = questionData;
    const arraylength = questionArray.length;
    this.setState({ noOfquestions: arraylength });

    setTimeout(() => {
      this.props.setQuestion(this.state.questionNumber);
      this.timerFunction();
    }, 1000);
  }
  handlepause = () => {
    this.setState({ timerpause: !this.state.timerpause });
    clearInterval(this.state.timerId);
    if (Number(this.state.timeleft) <= 8) {
      this.clockTicking.current.pause();
    }
  };
  handleplay = () => {
    this.setState({ timerpause: !this.state.timerpause });
    this.timerFunction();
    if (Number(this.state.timeleft) <= 8) {
      this.clockTicking.current.play();
    }
  };
  handleshowscorecard = () => {
    clearInterval(this.state.timerId);
    this.setState({ showscorecard: !this.state.showscorecard });
  };
  timerFunction = () => {
    var setintervelFunction = setInterval(() => {
      if (Number(this.state.timeleft) > 0) {
        if (Number(this.state.timeleft) === 8) {
          this.timer.current.style.backgroundColor = "red";

          this.clockTicking.current.play();
        }
        this.setState({ timeleft: Number(this.state.timeleft) - 1 });
      } else {
        this.setState({ timeUp: !this.state.timeUp });
        this.clockTicking.current.pause();
        clearInterval(setintervelFunction);
        this.wrongMusic.current.play();
        this.optionref1.current.style.pointerEvents = "none";
        this.optionref2.current.style.pointerEvents = "none";
        this.optionref3.current.style.pointerEvents = "none";
        this.optionref4.current.style.pointerEvents = "none";
        this.timercontrol.current.style.pointerEvents = "none";
      }
    }, 1000);

    this.setState({ timerId: setintervelFunction });
  };
  handleClicknext = () => {
    clearInterval(this.state.timerId);
    this.props.removeQuestion();
    setTimeout(async () => {
      await this.setState({
        correctionOption: false,
        wrongOption: false,
        timeUp: false,
      });
      await this.setState(
        { questionNumber: this.state.questionNumber + 1 },
        () => {
          this.props.setQuestion(this.state.questionNumber);
        }
      );

      await this.setState({ timeleft: Number(30) });
      this.timerFunction();
    }, 900);
  };
  handleclickoption = (e) => {
    this.optionref1.current.style.pointerEvents = "none";
    this.optionref2.current.style.pointerEvents = "none";
    this.optionref3.current.style.pointerEvents = "none";
    this.optionref4.current.style.pointerEvents = "none";
    clearInterval(this.state.timerId);
    e.target.style.backgroundColor = "#424e4e";
    this.setState({ attempted: this.state.attempted + 1 });
    if (
      Number(e.target.dataset.optionno) === Number(this.props.question.answer)
    ) {
      this.setState({ correctionOption: !this.state.correctionOption });
      this.setState({ score: Number(this.state.score) + 1 });
      this.setState({ correctquestions: this.state.correctquestions + 1 });
      this.trueMusic.current.play();
    } else {
      this.wrongMusic.current.play();
      this.setState({ wrongOption: !this.state.wrongOption });
    }
  };
  render() {
    return this.props.userData ? (
      !this.props.question ? (
        <>
          <div class="lds-hourglass"></div>
        </>
      ) : (
        <div className="question_page">
          <audio ref={this.wrongMusic} src={wrongQuestionMusic}></audio>
          <audio ref={this.trueMusic} src={trueQuestionMusic}></audio>
          <audio ref={this.clockTicking} src={clockticking}></audio>
          <div className="timer_header">
            <span className="score_data">Score: {this.state.score}</span>
            <h1>
              Question:{Number(this.state.questionNumber) + 1}/
              {this.state.noOfquestions}
            </h1>
            <div className="timer_control">
              <div ref={this.timercontrol} className="timer_icon">
                {this.state.timerpause ? (
                  <i onClick={this.handlepause} class="far fa-pause-circle"></i>
                ) : (
                  <i onClick={this.handleplay} class="far fa-play-circle"></i>
                )}
              </div>

              <span ref={this.timer} className="timer">
                {this.state.timeleft}
              </span>
            </div>
          </div>
          <div className="question_image">
            <img src={this.props.question.quesionImage} alt="question-code" />
          </div>
          <ul className="options_table">
            <li
              ref={this.optionref1}
              data-optionno={0}
              onClick={this.handleclickoption}
            >
              <span>A</span> <span>{this.props.question.options[0]}</span>
            </li>
            <li
              ref={this.optionref2}
              data-optionno={1}
              onClick={this.handleclickoption}
            >
              <span>B</span>
              <span>{this.props.question.options[1]}</span>
            </li>
            <li
              ref={this.optionref3}
              data-optionno={2}
              onClick={this.handleclickoption}
            >
              <span>C</span>
              <span>{this.props.question.options[2]}</span>
            </li>
            <li
              ref={this.optionref4}
              data-optionno={3}
              onClick={this.handleclickoption}
            >
              <span>D</span>
              <span> {this.props.question.options[3]}</span>
            </li>
          </ul>
          <div className="score_card">
            {Number(this.state.questionNumber) + 1 ===
            Number(this.state.noOfquestions) ? (
              <span onClick={this.handleshowscorecard} className="score_data ">
                Score Card
              </span>
            ) : (
              <span
                style={{ marginTop: "20px" }}
                onClick={this.handleClicknext}
                className="score_data"
              >
                Next
              </span>
            )}
          </div>
          {this.state.correctionOption ? <Popupcorrect /> : null}
          {this.state.wrongOption ? <Popupwrong /> : null}
          {this.state.timeUp ? <Popuptimeup /> : null}
          {this.state.showscorecard ? (
            <PopupScorecard
              totalquestion={this.state.noOfquestions}
              attempted={this.state.attempted}
              score={this.state.score}
              correctquestions={this.state.correctquestions}
            />
          ) : null}
        </div>
      )
    ) : (
      <Redirect to="/" />
    );
  }
}
const mapstatetoprops = (storeData) => {
  return {
    question: storeData.questionState.question,
    userData: storeData.userState.user,
  };
};

export default connect(mapstatetoprops, { setQuestion, removeQuestion })(
  Question
);
