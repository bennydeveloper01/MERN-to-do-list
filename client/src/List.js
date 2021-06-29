import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./style.css";
import {
    Link
  } from "react-router-dom";
import DataTable from 'react-data-table-component';

  
class List extends Tasks {

    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;

        const data = tasks;



        const columns = [
            {
              name: 'Task',
              selector: 'task',
              sortable: true,
            },
            {
                cell: (data) => <Link    to={'/edit/'+data._id}><Button>Edit</Button></Link>,
                ignoreRowClick: true,
                allowOverflow: true,
                button: true,
              },
              {


                cell: (data) => <Button onClick={() => this.handleDelete(data._id)}>Delete</Button>,
                ignoreRowClick: true,
                allowOverflow: true,
                button: true,
              },


        ];
        
        return (
            <div>
                <center><h2>Mern To do List</h2></center>
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

                <DataTable
                    title=""
                    columns={columns}
                    data={data}
                />                                           
            </div> 
        );
    }
}

export default List;
