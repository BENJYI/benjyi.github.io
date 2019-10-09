---
layout: default
title: "Projects"
---

<br/>

## Gemini, Personal Project

Repository: [https://github.com/BENJYI/Gemini/](https://github.com/BENJYI/Gemini)

Gemini was inspired by a close friend who claims it originated from his hometown. This puzzle game has a slow tempo similar to a game of Solitaire. 
The state of the board starts with all 144 Mahjong tiles laid out on a 16-by-9 grid, and the goal is to match two identical pieces every move. Any two tiles that are matched are removed from the board. The goal of the game is to empty the board, and the rules are as follows:
1. Choose a tile.
2. Move the tile and all leading tiles towards an empty area. We can also choose not to move at all.
3. At the end of the move, if the selected tile can "see" an identical piece in any of four directions, then it can match with that piece. "Seeing" means no tiles exists between the selected tile and its twin. This means any two adjacent tiles that are identical can be matched.
4. If no identical tiles are visible, then the movement is invalid and is reverted.

<div style="text-align:center">
  <div style="display:inline-block">
    <p style="font-size:1.5em;color:rgba(218, 236, 242, 0.5)">
    • • •
    </p>
  </div>
</div>

<div style="width:100%;text-align:center;">
  <div style="width:80%;display:inline-block;text-align:center">
    <div>
      <img id="project-img" src="./images/mockup-1.png">
    </div>
    <div>
      <p id="project-text">
        To start, we find a pair of identical adjacent tiles to create some space.
      </p>
    </div>
    <br/>
    <div>
      <div class="project-preview" style="width:17%;">
        <img class="test-img" src="./images/mockup-1.png" onclick="myFunction(this,1);">
      </div>
      <div class="project-preview" style="width:17%;margin-left:1%">
        <img class="test-img" src="./images/mockup-2.png" onclick="myFunction(this,2);">
      </div>
      <div class="project-preview" style="width:17%;margin-left:1%">
        <img class="test-img" src="./images/mockup-3.png" onclick="myFunction(this,3);">
      </div>
      <div class="project-preview" style="width:17%;margin-left:1%">
        <img class="test-img" src="./images/mockup-4.png" onclick="myFunction(this,4);">
      </div>
    </div>
  </div>
</div>

<div style="text-align:center">
  <div style="display:inline-block">
    <p style="font-size:1.5em;color:rgba(218, 236, 242, 0.5)">
    • • •
    </p>
  </div>
</div>

<div style="width:100%;text-align:center">
  <div style="width:90%;display:inline-block;">
    <video style="width:100%;outline:none;" autoplay mute controls="controls">
      <source src="./images/gemini-test.mp4" type="video/mp4">
    </video>
  </div>
</div>

<br/>

---

<br/>

## Too Many Cooks - Web Application

Repository: [https://github.com/BENJYI/too_many_cooks](https://github.com/BENJYI/too_many_cooks)

This was a final team project for my Software Engineering course. The goal of the project was to display practical knowledge of entity-relationship and use case models by creating a food delivery system with proper documentation. To create both ends, we used Rails to scaffold the project. The final product had a login system with authentication allowing a user to function as a customer, chef, delivery personnel, or a manager, each having unique functionality - customers can order food, chefs can produce the orders, delivery personnel can delivery the orders, and managers can hire or fire employees. For documentation, we wrote a system design report, which is viewable in the repository or <a href="https://github.com/BENJYI/too_many_cooks/blob/master/SDR.pdf">here</a>.

<div style="width:100%;text-align:center;">
  <div style="width:80%;display:inline-block;text-align:center">
    <div>
      <img id="project-img2" src="./images/tmc-mockup-1.png">
    </div>
    <br/>
    <div>
      <div class="project-preview" style="width:17%;">
        <img class="test-img" src="./images/tmc-mockup-1.png" onclick="myFunction2(this);">
      </div>
      <div class="project-preview" style="width:17%;margin-left:1%">
        <img class="test-img" src="./images/tmc-mockup-2.png" onclick="myFunction2(this);">
      </div>
      <div class="project-preview" style="width:17%;margin-left:1%">
        <img class="test-img" src="./images/tmc-mockup-3.png" onclick="myFunction2(this);">
      </div>
      <div class="project-preview" style="width:17%;margin-left:1%">
        <img class="test-img" src="./images/tmc-mockup-4.png" onclick="myFunction2(this);">
      </div>
    </div>
  </div>
</div>

<br/>

---

<br/>

## JPM Chase Code for Good Hackathon - iOS Mobile Application

Repository: [https://github.com/brooklyn2016/team-21](https://github.com/brooklyn2016/team-21)

In this Hackathon, several non-profit organizations presented problems that needed solving. As a randomly organized group of four students, we had 24-hours to produce a strategy which solved one of these problems. We chose to create a mobile application for the organization <a href="https://eden2.org/">Eden II</a>, which helped the autistic community through several extracurricular programs. The application functioned as a medium of communication between caretakers and clients who sometimes used unrecognizable words. The application allowed Eden II to hold a database of words specific to a unique client as a reference for the staff to use in order to communicate with a particular individual.
