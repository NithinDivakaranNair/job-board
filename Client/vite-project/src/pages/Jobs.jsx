import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobs?search=${search}&category=${filter}`)
      .then((res) => setJobs(res.data));
  }, [search, filter]);

  return (
    <div className="container mx-auto px-4 py-8  ">
      <h2 className="text-2xl font-bold text-center mb-6">Find Your Dream Job</h2>

      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          className="p-3 border rounded"
          placeholder="Search by title or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <label className="mr-2">Filter by Category: </label>
          <select
            className="p-2 border rounded"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="All">All</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job._id} job={job} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
