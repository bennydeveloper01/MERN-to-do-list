import React, { Component } from "react";
import Tasks from "./Tasks";
import List from "./List";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import {
    getTaskId,
    editTask
} from "./services/taskServices";

import "./style.css";

class EditForm extends Tasks {
    state = { tasks: [], currentTask: "" };

    constructor(props) {
        super(props);
    }

    async componentDidMount() {

        const  url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);        
        try {
            const { data } = await getTaskId(id);
            this.setState({ tasks: data });
            this.setState({currentTask: data.task})
        } catch (error) {
            console.log(error);
        }
    }


    handleEdit = async (currentTask) => {

        currentTask.preventDefault();

        const originalTasks = this.state.tasks;
        console.log(originalTasks);
        try {
            const tasks =originalTasks;
            const index = tasks._id;
            this.setState({ tasks });
            await editTask(tasks._id, {
                task: this.state.currentTask,
            });
            window.location.href= window.location.protocol + "//" + window.location.host ;
        } catch (error) {
            this.setState({ tasks: originalTasks });
            console.log(error);
        }
    };

    render() {
        const { tasks } = this.state;
        return (
            <div className="App flex">
                <Paper elevation={1} className="container">
                    <div className="heading">Edit</div>
                    <form
                        onSubmit={this.handleEdit}
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
                            placeholder=""
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
                    {/*<div>
                        <Button
                            onClick={() => this.handleDelete(task._id)}
                            color="secondary"
                            >
                                    delete
                        </Button>
                    </div>*/}
                </Paper>
            </div>
        );
    }
}

export default EditForm;