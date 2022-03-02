import React from 'react';
import Clock from "../clock/Clock";
import Todo from "../toDo/Todo";
import DiceGame from "../scarne/DiceGame";
import Quote from '../quote/Quote';
import "./styles/Projects.css";
import { withRouter } from 'react-router-dom';

function Projects() {

        const getClock = () => {
            return (
                <section  className='protfolio-projects-clock-wrapper'>
                    <Clock />
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Digital Clock</h2>
                        <p>Clocks are useful element for any UI if used in a proper way. Clocks can be used in sites where time is the main concern like some booking sites or some app showing arriving times of train, buses, flights, etc. Clock is basically of two types, Analog and Digital. We will be looking at making a digital one.</p>
                    <ul>
                        <li>HTML file, we set our clock to display 2 digits for hourOfDay, seconds, and minutes (00:00:00).</li>
                        <li>For CSS, we have just aligned our clock to the center of the page. Other than that, it is just some font-size and width which you can adjust according to your need.</li>
                        <li>JavaScript file and declare a function in it. I call mine displayTime.</li>
                    </ul>
                    </section>
                </section>
            )
        }

        const getTodoApp = () => {
            return (
                <section  className='protfolio-projects-todo-wrapper'>
                   <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Todo App</h2>
                        <p>TODO List are the lists that we generally use to maintain our day to day tasks or list of everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks any time and delete a task which is completed.</p>
                    <ul>
                        <li>React is a JavaScript library used to develop interactive user interfaces.some custom CSS code to do some styling.It is very simple styling to make our Todo app look a bit nicer.</li>
                        <li>define a todos javascript list which would contain all our todos and also carries the status of each todo whether they are done or not. We will use setTodos and will use React.useState which is enabled by React Hooks.</li>
                    </ul>
                    </section>
                    <Todo />
                </section>
            )
        }

        const getDiceGame = () => {
            if(window.innerWidth<661) {
                return (
                <section  className='protfolio-projects-dicegame-wrapper'>
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Dice Game</h2>
                        <p>Ther is a dice and a button to roll the dices. As we click the button both dices shake and generate a new number that shows on the upper face of the dice (in dotted form as a standard dice). The numbers shown on the upper face generates randomly each time we roll the dice.</p>
                    <ul>
                        <li>RollDice component contains all the logic to generate random numbers to show on the upper face of the dice, roll each dice upon click on the roll button.</li>
                        <li>The setting event handler, updating all the states according to the user’s interaction render Die component.</li>
                        <li>JS files are responsible to show single-die component only with correct dotted number face as communicated by the parent RollDice component. This file has to be created by you.</li>
                    </ul>
                    </section>
                    <DiceGame />
                </section>
            )
            }
            return (
                <section  className='protfolio-projects-dicegame-wrapper'>
                    <DiceGame />
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Dice Game</h2>
                        <p>Ther is a dice and a button to roll the dices. As we click the button both dices shake and generate a new number that shows on the upper face of the dice (in dotted form as a standard dice). The numbers shown on the upper face generates randomly each time we roll the dice.</p>
                    <ul>
                        <li>RollDice component contains all the logic to generate random numbers to show on the upper face of the dice, roll each dice upon click on the roll button.</li>
                        <li>The setting event handler, updating all the states according to the user’s interaction render Die component.</li>
                        <li>JS files are responsible to show single-die component only with correct dotted number face as communicated by the parent RollDice component. This file has to be created by you.</li>
                    </ul>
                    </section>
                </section>
            )
        }

        const getQuote = () => {
            return (
                <section  className='protfolio-projects-quote-wrapper'>
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Quote Generator</h2>
                        <p>A Random Quote Generator is capable of pulling quotes randomly from an API, a database, or simply from an array. We will be designing a Random Quote Generator from scratch using HTML, CSS, JavaScript, and type.fit</p>
                    <ul>
                        <li>The webpage displays a random quote from a collection and upon the click of a button, it randomly generates a new quote.</li>
                        <li>HTML Template and style it using CSS before diving deeper into the JavaScript Logic.</li>
                        <li>Link your stylesheet and add other resources required for the project as desired, for instance, we have added additional bootstrap libraries and Google fonts for styling purposes.</li>
                    </ul>
                    </section>
                    <Quote />
                </section>
            )
        }

        
    const getAllProjects = () => {
        return (
            <section  className='protfolio-projects-together-wrapper'>
                {getClock()}
                {getTodoApp()}
                {getDiceGame()}
                {getQuote()}
            </section>
        )
    }

  return ( 
    <section id='protfolio-projects-wrapper'>
        <h1>Projects</h1>
        {getAllProjects()}
    </section>
  )
}

export default Projects;
