const habitModel = require("../models/habit.model");

async function createHabit(req, res) {
  try {
    const { title, description, category, frequency, completed_dates } =
      req.body;
    const userId = req.user._id;

    const titleExists = await habitModel.findOne({ title, user_id: userId });

    if (titleExists) {
      return res.status(400).json({
        message: "Habit with this title already exists",
      });
    }

    const newHabit = await habitModel.create({
      title,
      description,
      category,
      frequency,
      user_id: userId,
      completed_dates,
    });
    res.status(201).json({
      message: "Habit created successfully",
      habit: {
        _id: newHabit._id,
        title: newHabit.title,
        description: newHabit.description,
        category: newHabit.category,
        frequency: newHabit.frequency,
        completed_dates: newHabit.completed_dates,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function updateHabit(req, res) {
  try {
    const updatedHabit = await habitModel.findByIdAndUpdate(
      {
      _id: req.params.id,
      user_id: req.user._id
   },

      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      },
    );

    if (!updatedHabit) {
      return res.status(404).json({
        message: "Habit Not Found",
      });
    }

    res.status(200).json({
      message: "Habit Updated successfully",
      updatedHabit,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function deleteHabit(req, res) {
  try {
    const deletedHabit = await habitModel.findByIdAndDelete(req.params.id);
    if (!deletedHabit) {
      return res.status(404).json({
        message: "Habit Not Found",
      });
    }

    res.status(200).json({
      message: "Habit Deleted Successfully",
      deletedHabit,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function markCompletedHabit(req, res) {
  try {
    const id = req.params.id;
    const currHabit = await habitModel.findById(id);

    if (!currHabit) {
    return res.status(404).json({
        message: "Habit Not Found"
    });
}

    const today = new Date().toISOString().split("T")[0];

    if (currHabit.completedDates.includes(today)) {
      return res.status(400).json({
        message: "Habit is already marked",
      });
    }

    currHabit.completedDates.push(today);

    await currHabit.save();
    res.status(200).json({
      message: "Habit is marked for today",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = { createHabit, updateHabit, deleteHabit, markCompletedHabit };
