import React from 'react';

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((element) => {
                    return (
                        <li key={element.id}><input type="checkbox" checked={element.isDone}/> <span>{element.title}</span></li>
                    )
                })}

            </ul>
            <div>
                <button>All</button>
                <button>Actccive</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
