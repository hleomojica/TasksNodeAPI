import {
  addNewTask,
  getTask,
  getTaskWhitID,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const routes = (app) => {
  app.route("/tasks").get(getTask)
  // Post endpoint
  .post(addNewTask); // Passing the function frm controllers

  app
    .route("/task/:taskID")
    .get(getTaskWhitID)
    .put(updateTask)
    .delete(deleteTask);

    app.route("/user").post(addNewUser);

    app.route("/login").post(login);

    app.route("/newuser").post(addNewUserWithValidation);
};
export default routes;
