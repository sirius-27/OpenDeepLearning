import React from 'react';
import { LuArrowUpRight } from "react-icons/lu";

// Define the course data as an array of objects
const courses = [
  {
    title: 'TensorFlow 在 AI，机器学习和深度学习中的应用简介',
    description: '通过课程，您将了解 TensorFlow 在开发和研究中的应用。',
    link: '#',
    image: '/resources/dl.jpg'
  },
  {
    title: 'TensorFlow 在深度学习中的应用简介',
    description: '由 TensorFlow 团队和 Udacity 联合开发的课程。',
    link: '#',
    image: '/resources/dl.jpg'
  },
  {
    title: '《TensorFlow 开发者》专项课程',
    description: '在这个 TensorFlow 专项课程项目中 4 门紧密相关的课程中学习。',
    link: '#',
    image: '/resources/dl.jpg'
  },
  {
    title: '机器学习快速课程',
    description: '有关 TensorFlow API 的快速学习过程。',
    link: '#',
    image: '/resources/dl.jpg'
  },
  {
    title: '麻省理工学院课程 6.S191：深度学习简介',
    description: '麻省理工学院的深度学习快速入门课程。',
    link: '#',
    image: '/resources/dl.jpg'
  },
  {
    title: '《深度学习》专项课程',
    description: '通过学习这 5 门课程，您将了解深度学习的基础知识。',
    link: '#',
    image: '/resources/dl.jpg'
  }
];

const ResourcesList: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side: Fixed Text */}
      <div className="md:w-1/4 p-4 text-black dark:text-white fixed md:static top-0 md:h-auto h-full">
        <div className="md:sticky md:top-20">
          <h2 className="text-xl font-semibold mb-4">在线课程</h2>
          <p className="text-sm">
            学习由各个部分组成的在线课程是学习机器学习基础概念的绝佳方式。很多课程不仅在帮助您
            掌握计算机科学知识，还提供了在您的工作和个人项目中直接运用机器学习所需的工具。
          </p>
        </div>
      </div>

      {/* Right Side: Scrollable List */}
      <div className="md:w-3/4 md:ml-auto overflow-y-auto p-4 text-black dark:text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 cursor-pointer">
              <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm mt-2">{course.description}</p>
                <div className="flex w-max justify-center  mt-4 items-center">
                    <a href={course.link} className="text-blue-500">View Resource</a>
                    <LuArrowUpRight className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesList;
