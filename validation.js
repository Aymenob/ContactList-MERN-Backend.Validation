const { check, validationResult } = require('express-validator');


exports.validate=[check("Email").isEmail().withMessage("Missing an a valid Email!")
, check("Firstname").notEmpty().withMessage("Missing a Valid First name!")
,check("Lastname").notEmpty().withMessage("Missing a Valid Last name!"),
check("Age").isNumeric().withMessage("Missing a Valid Age")
]
exports.validated=(req,res,next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      console.log({errors:errors.array()})
      
     
    return res.json({ errors: errors.array() })
   
  }
    
next()
}
