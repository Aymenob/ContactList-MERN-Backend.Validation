const { check, validationResult } = require('express-validator');


exports.validate=[check("Email").isEmail().withMessage("Email adress is empty!")
, check("Firstname").notEmpty().withMessage("Missing a First name!")
,check("Lastname").notEmpty().withMessage("Missing a Last name!"),
check("Age").isNumeric().withMessage("Missing an Age")
]
exports.validated=(req,res,next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      console.log({errors:errors.array()})
      
     
    return res.json({ errors: errors.array() })
   
  }
    
next()
}
