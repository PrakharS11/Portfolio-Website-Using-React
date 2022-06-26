import React from 'react';
import Todo from "../toDo/Todo";
import "./styles/Projects.css";

function Projects() {

       
    const getTodoApp = () => {
        return (
            <section  className='protfolio-projects-todo-wrapper'>
                <Todo />
            </section>
        )
    }

    const getAllProjects = () => {
        return (
            <section  className='protfolio-projects-together-wrapper'>
                {getTodoApp()}
            </section>
        )
    }

    return ( 
        <section id='protfolio-projects-wrapper'>
            {getAllProjects()}
        </section>
    )
}

export default Projects;
