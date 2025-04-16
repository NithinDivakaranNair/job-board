import Job from "../models/JobModel.js";

const Getjobs = async (req, res) => {
  try {
    const search = req.query.search || "";
    const category = req.query.category || "All";

    const searchFilter = search
      ? {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { company: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const categoryFilter = category !== "All" ? { category } : {};

    const jobs = await Job.find({
      ...searchFilter,
      ...categoryFilter,
    }).sort({ createdAt: -1 });

    res.json(jobs);
  } catch (err) {
    console.error("Getjobs Error:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// POST a new job
const createJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    console.error("createJob Error:", err.message);
    res.status(400).json({ message: err.message });
  }
};

export { Getjobs, createJob };
