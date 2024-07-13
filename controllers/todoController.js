import Todo from "../models/Todo.js";

const createTodo = async (req, res) => {
  const body = req.body;
  try {
    const newTodo = new Todo({
      title: body.title,
      completed: body.completed,
      id: uuidv4(),
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ err: err.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    if (todo) {
      return res.status(200).json(todo);
    }
    res.status(404).json({ err: "Todo was not found" });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    if (!id) {
      return res.status(404).json({ err: "Id is required" });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(id, body, { new: true });
    if (updatedTodo) {
      return res.status(200).json(updatedTodo);
    }
    res.status(404).json({ err: "Todo was not found" });
  } catch (error) {
    res.status(404).json({ err: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (deletedTodo) {
      return res.status(200).json(deletedTodo.id + "is deleted");
    }
    res.status(404).json({ err: "Todo is not found" });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

export { createTodo, getAllTodos, getTodo, updateTodo, deleteTodo };
