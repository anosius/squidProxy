const fs = require('fs');
const { finished } = require('stream');
const Rule = require('./../models/rulesModel');
const APIFeatures = require('./../utils/apiFeatures');
const exportRules = require('./../dev-data/data/export-dev-data')


exports.getAllRules = async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Rule.find(), req.query)
    //  .paginate();
   
    const rules = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: rules.length,
      data: {
        rules
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
  
  // Write file

  try {

    // EXECUTE QUERY
    const features = new APIFeatures(Rule.find(), req.query)
    //  .paginate();
   
    const rules = await features.query;

        
      // SEND RESPONSE
     let data = JSON.stringify(rules);
     fs.writeFile('respondRules.json',data, (err) =>{
         if(err) throw err;
         console.log('Data written to file');
     }); 

    } catch (err) {
      console.log("can't write")
    }
};

exports.getRule = async (req, res) => {
  try {
    const rule = await Rule.findById(req.params.id);
    // Tour.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        rule
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }

};

exports.createRule = async (req, res) => {
  try {
    // const newTour = new Tour({})
    // newTour.save()

    const newRule = await Rule.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        rule: newRule
      }
    })

    
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }

    // Write file

    try {

      // EXECUTE QUERY
      const features = new APIFeatures(Rule.find(), req.query)
      //  .paginate();
     
      const rules = await features.query;
  
          
        // SEND RESPONSE
       let data = JSON.stringify(rules);
       fs.writeFile('respondRules.json',data, (err) =>{
           if(err) throw err;
           console.log('Data written to file');
       }); 
  
      } catch (err) {
        console.log("can't write")
      }
};


exports.updateRule = async (req, res) => {
  try {
    const rule = await Rule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        rule
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }

    // Write file

    try {

      // EXECUTE QUERY
      const features = new APIFeatures(Rule.find(), req.query)
      //  .paginate();
     
      const rules = await features.query;
  
          
        // SEND RESPONSE
       let data = JSON.stringify(rules);
       fs.writeFile('respondRules.json',data, (err) =>{
           if(err) throw err;
           console.log('Data written to file');
       }); 
  
      } catch (err) {
        console.log("can't write")
      }
};

exports.deleteRule = async (req, res) => {
  try {
    await Rule.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }

  // Write file

  try {

    // EXECUTE QUERY
    const features = new APIFeatures(Rule.find(), req.query)
    //  .paginate();
   
    const rules = await features.query;

        
      // SEND RESPONSE
     let data = JSON.stringify(rules);
     fs.writeFile('respondRules.json',data, (err) =>{
         if(err) throw err;
         console.log('Data written to file');
     }); 

    } catch (err) {
      console.log("can't write")
    }
};