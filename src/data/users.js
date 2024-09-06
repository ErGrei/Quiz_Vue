export default class createUser {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.resultsQuiz = [];
  }

  setResultQuiz = function (obj) {
    this.resultsQuiz.length <= 5
      ? this.resultsQuiz.unshift(obj)
      : this.changingResultsArray(obj);
  };

  getResultsQuiz = function () {
    return this.resultsQuiz;
  };

  changingResultsArray = function (obj) {
    this.resultsQuiz.shift();
    this.resultsQuiz.unshift(obj);
  };

  getId = function () {
    return this.id;
  };

  getName = function () {
    return this.name;
  };
}
