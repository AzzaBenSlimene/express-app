const userController = {
  getAll: (req, res, next) => {
    return res.status(200).json({ success: true, message: "Job well done" });
  },
  getById: (req, res, next) => {
    const { id } = req.params;
    return res
      .status(200)
      .json({ success: true, message: `Job well done ${id}` });
  },
  createUser: (req, res, next) => {
    const { firstName, lastName, email, userType } = req.body;

    // Validate with Vanilla JavaScript functions !!
    let errors = {};
    let errorMessage = "";
    let isBodyValid = true;

    if (
      !firstName ||
      typeof firstName !== "string" ||
      firstName.trim().length === 0
    ) {
      isBodyValid = false;
      errors["firstName"] = "This should be a string & not empty";
    }

    if (
      !lastName ||
      typeof lastName !== "string" ||
      lastName.trim().length === 0
    ) {
      isBodyValid = false;
      errors["lastName"] = "This should be a string & not empty";
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      isBodyValid = false;
      errors["email"] = "This should be a string & not empty";
    }

    if (
      !userType ||
      typeof userType !== "string" ||
      userType.trim().length === 0
    ) {
      isBodyValid = false;
      errors["userType"] = "This should be a string & not empty";
    } else {
      const checks = ["user", "admin", "support"];
      const found = checks.some((check) => check === userType);
      if (!found) {
        isBodyValid = false;
        errors["userType"] =
          "This should be a string & can have these values " + checks.join(".");
      }
    }

    if (!isBodyValid) {
      return res.status(400).json({
        success: isBodyValid,
        errorMessage: "Kindly correct the error(s)",
        errors,
      });
    }

    // only execute bellow after validating data
    const userPayload = {
      firstName,
      lastName,
      email,
      userType,
    };
    return res.status(200).json({
      success: true,
      message: `Job well done ${firstName}`,
      //Data is equal to userPayload
      data: userPayload,
    });
  },
};
module.exports = userController;
