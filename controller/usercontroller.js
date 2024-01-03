var usermodel = require('../model/usermodel');

exports.insert = async (req,res) => {
    var data = await usermodel.create(req.body);
    
    res.status(200).json({
        status:"success",
        data
    })
}

exports.select_data = async (req,res) => {
    var data = await usermodel.find();
      res.status(200).json({
        status:"success",
        data,
    })
}

exports.delete_data =  async(req,res) => {
    var id = req.params.id;
    var data = await usermodel.findByIdAndDelete(id);

    res.status(200).json({
        status :"deleted data"
    })
}
exports.update_data =  async(req,res) => {
    var id = req.params.id;
    var data = await usermodel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status :"updated data",
        data
    })
}

// ================ running ===============================
exports.run =  async(req,res) => {
 
    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:"running"});

    res.status(200).json({
        status :"status update",
        data
    })
}

exports.running = async(req,res) => {
    var data = await usermodel.find({status:"running"});

    res.status(200).json({
        data
    })
}

// ================ pending ===============================
exports.pend =  async(req,res) => {
 
    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:"pending"});

    res.status(200).json({
        status :"status update",
        data
    })
}

exports.pending = async(req,res) => {
    var data = await usermodel.find({status:"pending"});

    res.status(200).json({
        data
    })
}

// ================ pending ===============================
exports.pend =  async(req,res) => {
 
    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:"pending"});

    res.status(200).json({
        status :"status update",
        data
    })
}

exports.pending = async(req,res) => {
    var data = await usermodel.find({status:"pending"});

    res.status(200).json({
        data
    })
}

// ================ dicline ===============================
exports.decline =  async(req,res) => {
 
    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:"decline"});

    res.status(200).json({
        status :"status update",
        data
    })
}

exports.declining = async(req,res) => {
    var data = await usermodel.find({status:"decline"});

    res.status(200).json({
        data
    })
}

// ================ complated ===============================
exports.complate =  async(req,res) => {
 
    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:"complated"});

    res.status(200).json({
        status :"status update",
        data
    })
}

exports.complated = async(req,res) => {
    var data = await usermodel.find({status:"complated"});

    res.status(200).json({
        data
    })
}