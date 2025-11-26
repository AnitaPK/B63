const tasks = [];

const createTask = (req, res) => {
  try {
    console.log(req.body);
    const newTask = {
      id: Date.now(),
      title: req.body.title,
      description: req.body.description,
      isComplete: false,
    };
    // task title should be unique
    tasks.push(newTask);
    console.log(tasks);
    res.status(201).send({ msg: "task created successfully", success: true });
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};

function getAllTasks(req, res) {
  try {
    res.send({ t: tasks, success: true });
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
}

function getTaskByID(req,res) {
  try {
    const ID = req.params.ID;
    const task = tasks.find((t, i) => t.id == ID);

    res.status(200).send({ task: task });
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
}

function getIncompleteTasks(req,res){
  try {
    const incompleteTasksList = tasks.filter((t,i)=> !t.isComplete)

    res.status(200).send({incompleteTasksList:incompleteTasksList})
    
  } catch (error) {
    res.status(500).send({ msg: "server error" });
    
  }
}

function StatusUpdate(req,res){
try {
  const ID = req.params.ID
  const indexFoUpdate = tasks.findIndex((t)=>t.id == ID)
  if(indexFoUpdate == -1){
    res.status(400).send({msg:"Task not found"})
  }else{
    tasks[indexFoUpdate].isComplete = true
  res.status(200).send({msg:"Task status updated successfully"})

  }

} catch (error) {
    res.status(500).send({ msg: "server error" });
  
}
}

function deleteTask(req,res){
  try {
  const ID = req.params.ID
  const indexFoUpdate = tasks.findIndex((t)=>t.id == ID)
  if(indexFoUpdate == -1){
    res.status(400).send({msg:"Task not found"})
  }
  const updatedTasks = tasks.filter((t,i)=> t.id != ID)
  res.status(200).send({msg:"Task delted successfully"})
    
  } catch (error) {
    res.status(500).send({ msg: "server error" });
    
  }
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskByID,
  getIncompleteTasks,
  StatusUpdate,
  deleteTask
};
