import React from 'react';

function LandingPage() {
  return (
    <div className="bg-gray-100">
    <header className="bg-blue-500 py-8">
      <h1 className="text-4xl text-white text-center">Welcome to our Blog Website</h1>
    </header>
    <section className="container mx-auto py-12">
  <h2 className="text-3xl text-center mb-8">Blogs</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg overflow-hidden shadow-md">
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg overflow-hidden shadow-md text-white px-4 py-3">
        <h3 className="text-xl font-semibold">Segment 1</h3>
      </div>
      <ul className="p-4">
        <li className="text-gray-700 mb-2">News</li>
        <li className="text-gray-700 mb-2">Updates</li>
        <li className="text-gray-700">Blogs</li>
      </ul>
    </div>
    <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg overflow-hidden shadow-md">
    <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg overflow-hidden shadow-md text-white px-4 py-3">
        <h3 className="text-xl font-semibold">Segment 2</h3>
      </div>
      <ul className="p-4">
        <li className="text-gray-700 mb-2">Science</li>
        <li className="text-gray-700 mb-2">Art</li>
        <li className="text-gray-700">Commerce</li>
      </ul>
    </div>
    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg overflow-hidden shadow-md">
    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg overflow-hidden shadow-md text-white px-4 py-3">
        <h3 className="text-xl font-semibold">Segment 3</h3>
      </div>
      <ul className="p-4">
        <li className="text-gray-700 mb-2">World</li>
        <li className="text-gray-700 mb-2">Country</li>
        <li className="text-gray-700">State</li>
      </ul>
    </div>
    <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg overflow-hidden shadow-md">
    <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg overflow-hidden shadow-md text-white px-4 py-3">
        <h3 className="text-xl font-semibold">Segment 4</h3>
      </div>
      <ul className="p-4">
        <li className="text-gray-700 mb-2">Technology</li>
        <li className="text-gray-700 mb-2">Sports</li>
        <li className="text-gray-700">Entertainment</li>
      </ul>
    </div>
  </div>
</section>

``

<section className="container mx-auto py-12">
  <h2 className="text-3xl text-center mb-8">Latest News Updates</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg p-4 shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">Latest Blog 1</h3>
      <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, voluptatum?</p>
    </div>
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-4 shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">Latest Blog 2</h3>
      <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, enim.</p>
    </div>
    <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-lg p-4 shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">Latest Blog 3</h3>
      <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, reprehenderit.</p>
    </div>
  </div>
</section>

<section className="container mx-auto py-12">
  <h2 className="text-3xl text-center mb-8">Upcoming Events</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-4 shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">Event 1</h3>
      <p className="text-lg mb-2">Date: July 15, 2023</p>
      <p className="text-lg mb-2">Location: City Hall</p>
      <p className="text-lg">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla mauris vitae velit tincidunt, non lobortis mi bibendum.</p>
    </div>
    <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg p-4 shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">Event 2</h3>
      <p className="text-lg mb-2">Date: August 2, 2023</p>
      <p className="text-lg mb-2">Location: Conference Center</p>
      <p className="text-lg">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla mauris vitae velit tincidunt, non lobortis mi bibendum.</p>
    </div>
    <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-lg p-4 shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">Event 3</h3>
      <p className="text-lg mb-2">Date: September 10, 2023</p>
      <p className="text-lg mb-2">Location: Exhibition Hall</p>
      <p className="text-lg">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla mauris vitae velit tincidunt, non lobortis mi bibendum.</p>
    </div>
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-4 shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">Event 4</h3>
      <p className="text-lg mb-2">Date: October 20, 2023</p>
      <p className="text-lg mb-2">Location: Community Center</p>
      <p className="text-lg">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla mauris vitae velit tincidunt, non lobortis mi bibendum.</p>
    </div>
  </div>
</section>

<section className="container mx-auto py-12">
  <h2 className="text-3xl text-center mb-8">Jobs</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg p-4 shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">Job Position 1</h3>
      <p className="text-lg mb-2">Company: ABC Corporation</p>
      <p className="text-lg mb-2">Location: City</p>
      <p className="text-lg mb-2">Salary: $50,000 - $60,000 per year</p>
      <p className="text-lg">Requirements: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla mauris vitae velit tincidunt, non lobortis mi bibendum.</p>
    </div>
    <div className="bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg p-4 shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">Job Position 2</h3>
      <p className="text-lg mb-2">Company: XYZ Ltd.</p>
      <p className="text-lg mb-2">Location: City</p>
      <p className="text-lg mb-2">Salary: $40,000 - $50,000 per year</p>
      <p className="text-lg">Requirements: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla mauris vitae velit tincidunt, non lobortis mi bibendum.</p>
    </div>
    <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-lg p-4 shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">Job Position 3</h3>
      <p className="text-lg mb-2">Company: PQR Inc.</p>
      <p className="text-lg mb-2">Location: City</p>
      <p className="text-lg mb-2">Salary: $60,000 - $70,000 per year</p>
      <p className="text-lg">Requirements: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla mauris vitae velit tincidunt, non lobortis mi bibendum.</p>
    </div>
    <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-4 shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">Job Position 4</h3>
      <p className="text-lg mb-2">Company: LMN Corporation</p>
      <p className="text-lg mb-2">Location: City</p>
      <p className="text-lg mb-2">Salary: $70,000 - $80,000 per year</p>
      <p className="text-lg">Requirements: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla mauris vitae velit tincidunt, non lobortis mi bibendum.</p>
    </div>
  </div>
</section>


      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">&copy; 2023 Blog Website. All rights reserved Attacker.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
