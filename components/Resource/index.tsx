import React, { useEffect } from 'react';
import { LuArrowUpRight } from "react-icons/lu";
import smoothscroll from 'smoothscroll-polyfill';
import Banner from '../Banner';
import NewBanner from '../NewBanner';

import { IoCodeSlashOutline, IoConstructOutline, IoSchoolOutline } from "react-icons/io5";
import { BiMath } from "react-icons/bi";

interface Resource {
  title: string;
  description: string;
  icon: string;
  resources: ResourceItem[];
}

interface ResourceItem {
  title: string;
  description: string;
  link: string;
  image: string;
  codeLink?: string;
  buildLink?: string;
  mathLink?: string;
  theoryLink?: string;
}

const items: Resource[] = [
  {
    "title": "Online Courses",
    "description": "Taking online courses composed of various modules is an excellent way to learn the foundational concepts of machine learning. Many courses not only help you master computer science knowledge but also provide the tools needed to directly apply machine learning in your work and personal projects.",
    "icon": "/resources/icon/books.png",
    "resources": [
      {
        "title": "Introduction to TensorFlow for AI, Machine Learning, and Deep Learning",
        "description": "Through this course, you will learn about the applications of TensorFlow in development and research.",
        "link": "#",
        "image": "/resources/dl.jpg",
        "codeLink": "#",
        "buildLink": "#",
        "mathLink": "#",
        "theoryLink": "#"
      },
      {
        "title": "Introduction to TensorFlow for Deep Learning",
        "description": "A course developed jointly by the TensorFlow team and Udacity.",
        "link": "#",
        "image": "/resources/dl.jpg",
        "codeLink": "#",
        "buildLink": "#",
        "mathLink": "#",
        "theoryLink": "#"
      },
      {
        "title": "TensorFlow Developer Specialization",
        "description": "Learn through four tightly integrated courses in this TensorFlow specialization program.",
        "link": "#",
        "image": "/resources/dl.jpg",
        "buildLink": "#",
        "mathLink": "#",
        "theoryLink": "#"
      },
      {
        "title": "Machine Learning Crash Course",
        "description": "A quick learning process about the TensorFlow API.",
        "link": "#",
        "image": "/resources/dl.jpg",
        "codeLink": "#",
      },
      {
        "title": "MIT Course 6.S191: Introduction to Deep Learning",
        "description": "A quick introduction to deep learning by MIT.",
        "link": "#",
        "image": "/resources/dl.jpg",
        "codeLink": "#",
      },
      {
        "title": "Deep Learning Specialization",
        "description": "Through these five courses, you will understand the basic knowledge of deep learning.",
        "link": "#",
        "image": "/resources/dl.jpg",
        "codeLink": "#",
        "buildLink": "#",
      }
    ]
  },
  {
    "title": "E-Learning Courses",
    "description": "Participating in online courses that consist of several parts is a great way to learn the essential concepts of machine learning. Many of these courses not only help you gain computer science knowledge but also provide tools that you can directly apply to your work and personal projects.",
    "icon": "/resources/icon/books.png",
    "resources": [
      {
        "title": "Introduction to TensorFlow for AI, Machine Learning, and Deep Learning",
        "description": "In this course, you will explore how TensorFlow is used in development and research.",
        "link": "#",
        "image": "/resources/dl.jpg",
        "codeLink": "#",
        "buildLink": "#",
      },
      {
        "title": "Intro to TensorFlow for Deep Learning",
        "description": "A course created by the TensorFlow team in collaboration with Udacity.",
        "link": "#",
        "image": "/resources/dl.jpg",
        "codeLink": "#",
        "mathLink": "#",
        "theoryLink": "#"
      },
      {
        "title": "TensorFlow Developer Specialization",
        "description": "This TensorFlow specialization includes four closely linked courses.",
        "link": "#",
        "image": "/resources/dl.jpg",
        "codeLink": "#",
        "mathLink": "#",
      },
      {
        "title": "Machine Learning Crash Course",
        "description": "A quick overview of the TensorFlow API.",
        "link": "#",
        "image": "/resources/dl.jpg",
        "codeLink": "#",
      },
      {
        "title": "MIT Course 6.S191: Introduction to Deep Learning",
        "description": "MIT's rapid introduction to deep learning.",
        "link": "#",
        "image": "/resources/dl.jpg",
        "codeLink": "#",
      },
      {
        "title": "Deep Learning Specialization",
        "description": "These five courses will help you understand the basics of deep learning.",
        "link": "#",
        "image": "/resources/dl.jpg",
        "codeLink": "#",
      }
    ]
  }
];



export default function Resource() {
  const ResourceDirectory = ({ items }) => {
    return (
      <div className="flex flex-wrap justify-center space-y-4 py-8 sm:space-y-0 sm:space-x-10">
        {items.map((item, index) => (
          <a 
            key={index} 
            href={`#${item.title}`}
            className="flex flex-col items-center w-full sm:w-auto sm:px-4"
          >
            <img src={item.icon} alt={item.title} className="w-16 h-16 mb-2" />
            <span className="text-center">{item.title}</span>
          </a>
        ))}
      </div>
    );
  };
  
  
  const ResourcesList = ({ item, index }) => {
    return (
      <div 
        id={`${item.title}`}
        className="flex flex-col md:flex-row h-max gap-10 my-10"
      >
        {/* Left Side: Text */}
        <div className="w-full md:w-1/4 text-black dark:text-white px-4 md:px-0">
          <h2 className="text-xl font-semibold mb-4">
            {item.title}
          </h2>
          <p className="text-sm">
            {item.description}
          </p>
          <div className="mt-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-blue-500 hover:underline"
            >
              Back to Resource Library ↑
            </button>
          </div>
        </div>
  
        {/* Right Side: Scrollable List */}
        <div className="w-full md:w-3/4 md:ml-auto overflow-y-auto p-4 text-black dark:text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {item.resources.map((course, index) => (
              <div key={index} className="bg-white dark:bg-[#202020] rounded-lg overflow-hidden shadow hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-200 cursor-pointer h-full">
                <img src={course.image} alt={course.title} className="w-full h-32 object-cover border-b border-gray-200 dark:border-gray-800" />
                <div className="p-4 flex flex-col justify-between h-96">
                  <div>
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <p className="text-sm mt-2">{course.description}</p>
                  </div>
                  <div>
                    <div className="flex w-max justify-center mt-4 items-center">
                      <a href={course.link} target={'_blank'} className="text-gray-800 text-sm font-bold">View Course</a>
                      <LuArrowUpRight className="ml-1" />
                    </div>
                    {
                      (course.codeLink || course.buildLink || course.mathLink || course.theoryLink) && (
                        <div className="flex flex-wrap justify-start items-center mt-4 border-t pt-2">
                          {course.codeLink && (
                            <a href={course.codeLink} className="text-gray-500 text-xs flex items-center px-2 w-1/2 sm:w-1/4 dark:text-white" target="_blank">
                              <IoCodeSlashOutline className="inline-block mr-1 text-sm" />
                              Code
                            </a>
                          )}
                          {course.buildLink && (
                            <a href={course.buildLink} className="text-gray-500 text-xs flex items-center px-2 w-1/2 sm:w-1/4 dark:text-white" target="_blank">
                              <IoConstructOutline className="inline-block mr-1 text-sm" />
                              Build
                            </a>
                          )}
                          {course.mathLink && (
                            <a href={course.mathLink} className="text-gray-500 text-xs flex items-center px-2 w-1/2 sm:w-1/4 dark:text-white" target="_blank">
                              <BiMath className="inline-block mr-1 text-sm" />
                              Math
                            </a>
                          )}
                          {course.theoryLink && (
                            <a href={course.theoryLink} className="text-gray-500 text-xs flex items-center px-2 w-1/2 sm:w-1/4 dark:text-white" target="_blank">
                              <IoSchoolOutline className="inline-block mr-1 text-sm" />
                              Theory
                            </a>
                          )}
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    // Ensure smooth scrolling works for all browsers
    smoothscroll.polyfill();
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <NewBanner title='Resources' description='Explore the best resources to learn machine learning and deep learning.' />
      <ResourceDirectory items={items} />
      <div className='nx-max-w-[90rem] nx-items-center nx-justify-end nx-gap-2 nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]'>
        <div className='flex flex-col justify-center items-start h-max w-full my-10'>
          {items.map((item, index) => (
            <ResourcesList key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}