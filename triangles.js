const triangleAblock = document.querySelector("#triangleA");
const triangleBblock = document.querySelector("#triangleB");
const triangleCblock = document.querySelector("#triangleC");
const triangleDblock = document.querySelector("#triangleD");
const triangleA = (row, char = "*") => {
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j < i; j++) {
      triangleAblock.append(char);
    }
    triangleAblock.innerHTML += "<br>";
  }
};

triangleA(5);

document.write("<br/>");

const triangleB = (row, char = "*") => {
  for (let i = row; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      triangleBblock.append(char);
    }
    triangleBblock.innerHTML += "<br>";
  }
};
triangleB(5);

const triangleC = (row, char = "*") => {
  for (let i = row; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      triangleCblock.append(char);
    }
    triangleCblock.innerHTML += "<br>";
    for (let space = row - (row - 1); space <= row - (i - 1); space++) {
      if (i != 1) {
        triangleCblock.innerHTML += "&nbsp;&nbsp;";
      }
    }
  }
};

triangleC(5);

const triangleD = (row, char = "*") => {
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j < i; j++) {
      triangleDblock.append(char);
    }

    triangleDblock.innerHTML += "<br>";
    for (let space = 0; space <= row - i - 1; space++) {
      triangleDblock.innerHTML += "&nbsp;&nbsp;";
    }
  }
};
triangleD(5);
