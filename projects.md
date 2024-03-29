---
layout: default
title: "Projects"
---
<div class="project-header-container" onclick="toggleProjectDetails(this, 1);">
  <div style="width:90%;float:left">
    <div class="project-header-top">Gemini</div>
    <div style="display:inline-block">
      <div class="project-type project-header-bottom">PERSONAL PROJECT</div>
      <div class="swift project-header-bottom">Swift</div>
      <div class="xcode project-header-bottom">Xcode</div>
    </div>
  </div>
  <div style="width:10%;float:left">
    <img id="project-toggle-button-1" class="project-toggle-button" style="width:24px" src="./images/collapse-icon.png"/>
  </div>
</div>

<div class="project-detail" id="project-detail-1">
  <div style="display:block;text-align:center">
    <a style="margin:0 auto" href="https://github.com/BENJYI/Gemini/">
      Project URL
      <img style="margin-right:0.25em;top:50%;transform:translateY(20%);position:relative;width:1.4em;height:1.4em;" src="./images/github-logo.png"/>
    </a>
  </div>
  
  <p>This game was inspired by a close friend who introduced me to this game while playing a game of Mahjong. Gemini is a puzzle game where the goal is to match two identical pieces per move until the board is emptied. The basic gameplay is as follows:</p>
  <div style="width:80%;display:inline-block;padding:8px; margin:0 10%;border:solid 1px #2b2b2b;">
  <p style="line-height:16px;font-size: 16px">1. Choose a tile.</p>
  <p style="line-height:16px;font-size: 16px">2. Move the tile and all leading tiles towards an empty area. We can also choose not to move at all.</p>
  <p style="line-height:16px;font-size: 16px">3. At the end of the move, if the selected tile can "see" an identical piece in any of four directions, then it can match with that piece. "Seeing" means no tiles exists between the selected tile and its twin. This means any two adjacent tiles that are identical can be matched.</p>
  <p style="line-height:16px;font-size: 16px;">4. If no identical tiles are visible, then the movement is invalid and is reverted.</p>

  </div>

  <div style="text-align:center">
    <div style="display:inline-block">
      <p style="font-size:1.5em;color:#3c3c3c">
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
          Start by matching adjacent pairs of tiles.
        </p>
      </div>
      
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
      <p style="font-size:1.5em;color:#3c3c3c">
      • • •
      </p>
    </div>
  </div>

  <div style="width:80%;padding:0 10%;text-align:center">
    <h3 style="margin-top:0;text-decoration:underline">Demo - iOS (Simulator)</h3>
    <div class="demo-video">
      <object data="https://www.youtube.com/embed/e-fX8VSi2xM"></object>
    </div>
  </div>
</div>

<div class="project-detail-divider"></div>

<div class="project-header-container" onclick="toggleProjectDetails(this, 2);">
  <div style="width:90%;float:left">
    <div class="project-header-top">JPMorgan Chase, Code For Good</div>
    <div style="display:inline-block">
      <div class="project-type project-header-bottom">HACKATHON</div>
      <div class="objc project-header-bottom">Objective-C</div>
      <div class="xcode project-header-bottom">Xcode</div>
    </div>
  </div>
  <div style="width:10%;float:left">
    <img id="project-toggle-button-2" class="project-toggle-button" style="width:24px" src="./images/collapse-icon.png"/>
  </div>
</div>

<div class="project-detail" id="project-detail-2">
  <div style="display:block;text-align:center">
    <a style="margin:0 auto" href="https://github.com/brooklyn2016/team-21">
      Project URL
      <img style="margin-right:0.25em;top:50%;transform:translateY(20%);position:relative;width:1.4em;height:1.4em;" src="./images/github-logo.png"/>
    </a>
  </div>
  <p>This first and only hackathon I ever attended was a special experience. Since I applied alone, I was placed in a randomly organized group with three other students. As a group, we had 24 hours to come up with a solution presented to us by the non-profit organization <a style="color:red" href="https://eden2.org/">Eden II</a>, a community that provides the autistic community with educational programs, adult day care programs, and general support for families. </p>

  <p>One of the issues the staff at Eden II had was that often clients would have vocabulary a little different from the rest. For example, one of the boys' word for apple was the word "ah". The solution we came up with was to form a method for staff to create an audio mapping of that word "ah" to a visual representation of an apple. Thus, if a new staff member were to be introduced to this boy, he/she will be able to find a special dictionary unique to the individual.</p>

  <p>As a team, we were able to share our skillsets and create decent workflow. With some iOS development experience, I was able to provide the front-end and dispatch calls to a backend provided by my other team member. Unfortunately, 24 hours was not enough to fully implement what we had envisioned. But, this was a learning experience for all of us as it was our first hackathon ever. I hope to soon register for another hackathon to see what improvements I've made as a student.</p>
</div>

<div class="project-detail-divider"></div>

<div class="project-header-container" onclick="toggleProjectDetails(this, 3);">
  <div style="width:90%;float:left">
    <div class="project-header-top">CISC 3320, Operating Systems</div>
    <div style="display:inline-block">
      <div class="project-type project-header-bottom">GROUP PROJECT</div> 
      <div class="clang project-header-bottom">C</div>
      <div class="unix project-header-bottom">UNIX</div>
    </div>
  </div>
  <div style="width:10%;float:left">
    <img id="project-toggle-button-3" class="project-toggle-button" style="width:24px" src="./images/collapse-icon.png"/>
  </div>
</div>

<div class="project-detail" id="project-detail-3">
  <div style="display:block;text-align:center">
    <a style="margin:0 auto" href="https://github.com/BENJYI/cisc3320-project3-REDACTED">
      Project URL (Redacted)
      <img style="margin-right:0.25em;top:50%;transform:translateY(20%);position:relative;width:1.4em;height:1.4em;" src="./images/github-logo.png"/>
    </a>
  </div>
  <p>The program created for this project measured the cost of a context switch by recording the time it took for two processors to calculate the sum of integers in a very large array. The inspiration for this project was a similar research done by Li, Ding, and Shen, whose research can be found in the USENIX database <a href="https://www.usenix.org/legacy/events/expcs07/papers/2-li.pdf">here</a>. Using the sched and pthread library, we were able to observe the advantages of multicore processing as the workload increased, while observing performance losses when workload decreased when comparing to work done by a single processor.</p>
</div>

<div class="project-detail-divider"></div>

<div class="project-header-container" onclick="toggleProjectDetails(this, 4)  ;">
  <div style="width:90%;float:left">
    <div class="project-header-top">CISC 3171, Software Engineering</div>
    <div style="display:inline-block">
      <div class="project-type project-header-bottom">GROUP PROJECT</div> 
      <div class="ruby project-header-bottom">Ruby on Rails</div>
      <div class="dbm project-header-bottom">PostgreSQL</div>
    </div>
  </div>
  <div style="width:10%;float:left">
    <img id="project-toggle-button-4" class="project-toggle-button" style="width:24px" src="./images/collapse-icon.png"/>
  </div>
</div>

<div class="project-detail" id="project-detail-4">
  <div style="display:block;text-align:center">
    <a style="margin:0 auto" href="https://github.com/BENJYI/too_many_cooks">
      Project URL
      <img style="margin-right:0.25em;top:50%;transform:translateY(20%);position:relative;width:1.4em;height:1.4em;" src="./images/github-logo.png"/>
    </a>
  </div>
  <p>Too Many Cooks was final team project for my Software Engineering course. We were required to create specifications in the form of a system design report, which is viewable in the repository <a href="https://github.com/BENJYI/too_many_cooks/blob/master/SDR.pdf">here</a>. To build the product, we use Ruby on Rails, which was the perfect framework to build both the frontend and backend without having to everything from scratch. </p>

  <p>The final product had a login system with authentication allowing a user to function as a customer, chef, delivery personnel, or a manager, each having unique functionality - customers can order food, chefs can produce the orders, delivery personnel can delivery the orders, and managers can hire or fire employees.</p>

  <p>This group project was an extremely valuable experience as I was required to work with both the front-end and back-end and also use Git for version control heavily for the first time. Although the end product might need some UI makeup, much of the functionality mentioned in the system design report was fully implemented.</p>

  <div style="text-align:center">
    <div style="display:inline-block">
      <p style="font-size:1.5em;color:#3c3c3c">
      • • •
      </p>
    </div>
  </div>

  <div style="width:100%;text-align:center;">
    <div style="width:80%;display:inline-block;text-align:center">
      <div>
        <img id="project-img2" src="./images/tmc-mockup-1.png">
      </div>
      
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
</div>