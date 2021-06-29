import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export function getTasks() {
    return axios.get(apiUrl);
}

export function getTaskId(id) {
    return axios.get(apiUrl + "/" + id);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function editTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
