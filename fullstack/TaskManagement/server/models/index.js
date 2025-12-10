const User = require('./userModel');
const Task = require('./taskModel');
const AssignTask = require('./AssignTask');

// ---------------------------
// AssignTask relations
// ---------------------------
AssignTask.belongsTo(User, { foreignKey: 'userId', as: 'users' });
AssignTask.belongsTo(Task, { foreignKey: 'taskId', as: 'tasks' });

// ---------------------------
// User relations
// ---------------------------
User.hasMany(AssignTask, { foreignKey: 'userId', as: 'assigntasks' });
User.belongsToMany(Task, { through: AssignTask, foreignKey: 'userId', as: 'tasks' });

// ---------------------------
// Task relations
// ---------------------------
Task.hasMany(AssignTask, { foreignKey: 'taskId', as: 'assigntasks' });
Task.belongsToMany(User, { through: AssignTask, foreignKey: 'taskId', as: 'users' });

module.exports = { User, Task, AssignTask };
