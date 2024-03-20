const taskApp = () => {
  return {
    tasks: [],
    newTask: "",

    userDatas: JSON.parse(localStorage.getItem("tasks")),

    submit() {
      this.tasks.push({ body: this.newTask, completed: false });
      this.newTask = "";
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      let userData = JSON.parse(localStorage.getItem("tasks"));
      console.log(userData);
    },
  };
};
