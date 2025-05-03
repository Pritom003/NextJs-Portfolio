import React from 'react';

const blogPosts = [
  {
    title: "Unveiling Mongoose: A Dive into the World of MongoDB's ODM",
    link: 'https://medium.com/@njahanpritom65/title-unveiling-mongoose-a-dive-into-the-world-of-mongodbs-odm-e7cd0c914ea2',
    platform: 'Medium',
  },
  {
    title: 'Optimizing React Projects for Performance',
    link: 'https://medium.com/@njahanpritom65/title-unveiling-mongoose-a-dive-into-the-world-of-mongodbs-odm-e7cd0c914ea2',
    platform: 'Dev.to',
  },
  {
    title: ' A Comprehensive Guide to Building Dynamic Web Applications',
    link: 'https://www.linkedin.com/in/nilima-jahan-pritom-0967a929a/',
    platform: 'LinkdIn',
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
   <h2 className="text-6xl lg:text-8xl my-10 text-transparent
     stroke-purple-500 stroke-1 uppercase font-extrabold
      tracking-widest">
      My Blogs
    </h2>
      <ul className="space-y-4">
        {blogPosts.map((post, index) => (
          <li key={index} className="border p-4 rounded hover:shadow-md transition">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-purple-900 font-medium hover:underline"
            >
              {post.title}
            </a>
            <p className="text-sm text-gray-500 mt-1">Published on {post.platform}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
