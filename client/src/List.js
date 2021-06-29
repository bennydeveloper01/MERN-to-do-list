import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
//import history from './history';
import "./style.css";
import {
    Link
  } from "react-router-dom";

class List extends Tasks {
    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;

        return (
            <div className="App flex">
                <Paper elevation={3} className="container">
                    <div className="heading">To Do List</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "90%" }}
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New To Do"
                        />
                        <Button
                            style={{ height: "40px" }}
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                    <div>
                        {tasks.map((task) => (
                            <Paper
                                key={task._id}
                                className="flex task_container"
                            >
                                <Checkbox
                                    checked={task.completed}
                                    onClick={() => this.handleUpdate(task._id)}
                                    color="primary"
                                />
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.task}
                                </div>

                                <Link to={'/edit/'+task._id}>Edit</Link>
                                <Button
                                    onClick={() => this.handleDelete(task._id)}
                                    color="secondary"
                                >
                                    delete
                                </Button>

                            </Paper>
                        ))}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default List;
