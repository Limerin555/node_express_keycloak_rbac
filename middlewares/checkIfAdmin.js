module.exports = async (req, res, next) => {
  try {
    const tokenData = req.tokenData;
    const roles = tokenData.realm_access.roles;
    const isAdmin = roles.includes("admin");

    if (isAdmin) {
      // If user has Admin role, proceed.
      next();
    } else {
      // Throw error if user is not an admin
      const error = new Error("Access Denied: You do not have permission to access this.");
      error.statusCode = 401;
      throw error;
    }
  } catch (error) {
    next(error);
  }
}