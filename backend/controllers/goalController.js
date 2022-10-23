//@desc Get all goals
//@route GET /api/goals
//@access Private
const getGoals = (req, res) => {
	res.status(200).json({ message: "Get goals" });
};

// @desc Create a goal
// @route POST /api/goals
// @access Private
const createGoal = (req, res) => {
	res.status(200).json({ message: "Create goal" });
};

// @desc Update a goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
	res.status(200).json({ message: "Update goal" });
};

// @desc Delete a goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
	res.status(200).json({ message: "Delete goal" });
};

module.exports = {
	getGoals,
	createGoal,
	updateGoal,
	deleteGoal,
};
