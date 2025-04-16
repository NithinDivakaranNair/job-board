import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-gray-100 border border-red-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
      <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
      <p className="text-sm text-blue-600 font-medium mb-2">{job.category}</p>
      <p className="text-sm text-gray-600 font-semibold">
        {job.company} — {job.location}
      </p>
      <p className="text-sm text-gray-700 line-clamp-3">{job.description}</p>
    </div>
  );
};

export default JobCard;
