import React, { Component } from 'react';

export default class TaskList extends Component {
  render() {
    const tasksList = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];
    const Task = (value) => {
      return (
        <li>{value}</li>
      );
    }
    return (
      <div>
        {tasksList.map((task) => Task(task) )}
      </div>
    )
  }
}
