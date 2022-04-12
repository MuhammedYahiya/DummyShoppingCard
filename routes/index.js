var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let gaming=[ 
    {
      name:"ASUS TUF F15",
      category:'Gaming',
      description:"Intel Core i5-10300H RTX 3050 Ti",
      image:"https://m.media-amazon.com/images/I/914o5xV1+8L._AC_UY218_.jpg"
    },
    {
      name:"ASUS TUF A15",
      category:"Gaming",
      description:"AMD Ryzen 7 4800H RTX 3050",
      image:"https://m.media-amazon.com/images/I/91pyswFh31L._AC_UY218_.jpg"
    },
    {
      name:"ASUS TUF F15",
      category:"Gaming",
      description:"Intel Core i5-11400H RTX 3050 Ti",
      image:"https://m.media-amazon.com/images/I/91aWfctUptL._AC_UY218_.jpg"
    },
    {
      name:"ASUS TUF F15",
      category:"Gaming",
      description:"Intel Core i5-10300H GTX 1650",
      image:"https://m.media-amazon.com/images/I/91zVSkGGZbS._AC_UY218_.jpg"

    }
  ]
  let pro =[
    {
      name:"Asus VivoBook Pro 14",
      category:"professional ",
      discription:"Intel Core i5-11300H",
      image:"https://m.media-amazon.com/images/I/71NLcqubvmL._AC_UY218_.jpg"
    },
    {
      name:"Asus VivoBook Pro 14",
      category:"professional ",
      discription:"Intel Core i5-11300H",
      image:"https://m.media-amazon.com/images/I/71NLcqubvmL._AC_UY218_.jpg"
    },
    {
      name:"Asus VivoBook Pro 14",
      category:"professional ",
      discription:"Intel Core i5-11300H",
      image:"https://m.media-amazon.com/images/I/71NLcqubvmL._AC_UY218_.jpg"
    },
    {
      name:"Asus VivoBook Pro 14",
      category:"professional ",
      discription:"Intel Core i5-11300H",
      image:"https://m.media-amazon.com/images/I/71NLcqubvmL._AC_UY218_.jpg"
    }
  ]
  res.render('index', {gaming});
  
  
});


module.exports = router;
