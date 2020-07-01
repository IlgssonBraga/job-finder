const Job = require('../models/Job');

class JobsController {
    async index(req, res){
        const jobs = await Job.findAll();
        return res.json(jobs);
    }

    async store(req, res){
       const {title, techs, description, budget, contact_email} = req.body;

       const job = await Job.create({title, techs, description, budget, contact_email});

       return res.json(job);
    }
}

module.exports = new JobsController();