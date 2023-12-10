module.exports = async (req, res, next) => {
  try {
    const tokenData = req.tokenData;
    const roles = tokenData.realm_access.roles;
    const isAdmin = roles.includes("Admin");

    // If user has Admin role, proceed.
    if (isAdmin) {
      next();
    } else {
      // Throw error if user is not an admin
      const error = new Error("You do not have permission to access this.");
      error.statusCode = 401;
      throw error;
    }
  } catch (error) {
    next(error);
  }
}