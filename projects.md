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

## JPMorgan Chase "Code for Good Hackathon"

Repository (Private): [https://github.com/brooklyn2016/team-21](https://github.com/brooklyn2016/team-21)

This first and only hackathon I ever attended was a special experience. Since I applied alone, I was placed in a randomly organized group with three other students. As a group, we had 24 hours to come up with a solution presented to us by the non-profit organization <a href="https://eden2.org/">Eden II</a>, a community that helps the autistic community by providing institutes, caretakers, and extracurricular programs for people of all ages. 

The problem presented to us was that newly hired staff sometimes had difficulty understanding incoherent words spoken by clients. The solution we devised was an application which allowed caregivers to record audio and provide a specific definition for the sound pattern for an individual. This would be recorded into a database which other staff can reference when the problem occurs.

We were able to share our skillsets to produce some kind of workflow. With some iOS development experience, I was able to provide the front-end and dispatch calls to a backend provided by my other team member. Unfortunately, 24 hours was not enough to fully implement what we had envisioned. But, this was a learning experience for all of us as it was our first hackathon ever. I hope to soon register for another hackathon to see what improvements I've made as a student.

<br/>

---

<br/>

## CISC 3320 Operating Systems Group Project

Repository: [https://github.com/CISC3320SP19/cisc3320proj3-jabytz](https://github.com/CISC3320SP19/cisc3320proj3-jabytz)

The program created for this project measured the cost of a context switch by recording the time it took for two processors to calculate the sum of integers in a very large array. The inspiration for this project was a similar research done by Li, Ding, and Shen, whose research can be found in the USENIX database <a href="https://www.usenix.org/legacy/events/expcs07/papers/2-li.pdf">here</a>. Using the sched and pthread library, we were able to observe the advantages of multicore processing as the workload increased, while observing performance losses when workload decreased when comparing to work done by a single processor.

## CISC 3171 Software Engineering Group Project
## Too Many Cooks

Repository: [https://github.com/BENJYI/too_many_cooks](https://github.com/BENJYI/too_many_cooks)

Too Many Cooks was final team project for my Software Engineering course. We were required to create specifications in the form of a system design report, which is viewable in the repository <a href="https://github.com/BENJYI/too_many_cooks/blob/master/SDR.pdf">here</a>. To build the product, we use Ruby on Rails, which was the perfect framework to build both the frontend and backend without having to everything from scratch. 

The final product had a login system with authentication allowing a user to function as a customer, chef, delivery personnel, or a manager, each having unique functionality - customers can order food, chefs can produce the orders, delivery personnel can delivery the orders, and managers can hire or fire employees.

This group project was an extremely valuable experience as I was required to work with both the front-end and back-end and also use Git for version control heavily for the first time. Although the end product might need some UI makeup, much of the functionality mentioned in the system design report was fully implemented.

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