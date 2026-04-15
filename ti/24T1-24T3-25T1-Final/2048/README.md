# COMP6080 24T3 Final Exam

For this exam you are provided with this public repository that all students have access to. This repository contains the questions being asked. You will then also have your own personal exam repository where you actually complete the work that will be submitted. The personal exam repo is where you actually commit and push your code.

## 1. The Exam

### 1.1 Overview

You are to build a single page ReactJS application that implements the game 2048. The application should be fully interactive and functional as described below.

### 1.2 Getting Started

Please clone your personal exam repository.

Run `npm install` to install all relevant dependencies to start.

Run `npm run dev` to start your ReactJS app.

You are welcome to install any dependencies on top of ReactJS that you would like using `npm install [dependency]`.

There is no backend in this application. The entire state you manage should be done in browser state.

### 1.3 Features

#### 1.3.1 Game Board (30 marks)

* The game board should consist of a 4×4 grid of cells. (2)
* The game always begins with a single `2` in the top left cell, and all other cells empty. (3)
* Each cell should display its current number value, or be empty if it contains nothing. (5)

#### 1.3.2 Key Controls (40 marks)

* You must add keyboard event listeners to the board such that: (5)
  * The "down" key slides all cells down as far as they can to the bottom. (8)
  * The "right" key slides all cells right as far as they can to the right. (8)
  * The "left" key slides all cells left as far as they can to the left. (8)
  * The "up" key slides all cells up as far as they can to the top. (8)
* After a valid slide occurs, a cell containing either `2` or `4` (randomly chosen) should appear in one of the empty cells on the board (randomly chosen). (3)

#### 1.3.3 Win and Loss Conditions (20 marks)

* If the board is full and no more valid moves can be made, the game is over. Display a message indicating the player has lost. (10)
* If a cell with the value `2048` is created, the player has won. Display a message indicating the player has won. (10)

#### 1.3.4 Merge Logic (10 marks)

* When two adjacent cells with the same number slide together, they should merge into a single cell with the combined value. (10)

### 1.4 Other notes

* If we don't specify a constraint, then you have discretion as to what to do, assuming it still ensures that your application is usable and accessible.
* While we don't specify many requirements around usability and accessibility, you should take initiative to make your work both usable and accessible to gain the marks in this area.
* You should ensure that your programs have been tested on the latest version of Google Chrome.

## 2. Marking Criteria

For each of sections, marks will be awarded according to the following criteria:
 * 80%: Providing the features and functionality required at least one of desktop, tablet, or mobile.
 * 20%: Ensuring responsiveness on desktop, tablet, mobile.

## 3. Submission

At the end of your specified exam time, we will automatically collect the code on your `master` branch's HEAD (i.e. latest commit).

Please note: If you develop locally ensure you check that your code works on the CSE servers. Failure to do so could result in a fail mark in the exam.

## 4. Originality of Work

The work you submit must be your own work. Submission of work partially or completely derived from any other person or jointly written with any other person is not permitted.
