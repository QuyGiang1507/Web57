const checkRole = (role) => { 
    return (req, res, next) => { 
        const senderUser = req.user;
      
        switch (role) {
            case "admin":
                if(role !== senderUser.role) {
                    throw new Error("Only admin can delete the post"); 
                }
                next();
                break;
            default:
                if(role !== senderUser.role) {
                    throw new Error("Only user can create the post"); 
                }
                next();
                break;
      }
}}
  
module.exports = checkRole;