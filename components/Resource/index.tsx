import React from 'react';
import { LuArrowUpRight } from "react-icons/lu";
import Banner from '../Banner';

const items = [
  {
    "title": "Online Courses",
    "description": "Taking online courses composed of various modules is an excellent way to learn the foundational concepts of machine learning. Many courses not only help you master computer science knowledge but also provide the tools needed to directly apply machine learning in your work and personal projects.",
    "resources": [
      {
        "title": "Introduction to TensorFlow for AI, Machine Learning, and Deep Learning",
        "description": "Through this course, you will learn about the applications of TensorFlow in development and research.",
        "link": "#",
        "image": "/resources/dl.jpg"
      },
      {
        "title": "Introduction to TensorFlow for Deep Learning",
        "description": "A course developed jointly by the TensorFlow team and Udacity.",
        "link": "#",
        "image": "/resources/dl.jpg"
      },
      {
        "title": "TensorFlow Developer Specialization",
        "description": "Learn through four tightly integrated courses in this TensorFlow specialization program.",
        "link": "#",
        "image": "/resources/dl.jpg"
      },
      {
        "title": "Machine Learning Crash Course",
        "description": "A quick learning process about the TensorFlow API.",
        "link": "#",
        "image": "/resources/dl.jpg"
      },
      {
        "title": "MIT Course 6.S191: Introduction to Deep Learning",
        "description": "A quick introduction to deep learning by MIT.",
        "link": "#",
        "image": "/resources/dl.jpg"
      },
      {
        "title": "Deep Learning Specialization",
        "description": "Through these five courses, you will understand the basic knowledge of deep learning.",
        "link": "#",
        "image": "/resources/dl.jpg"
      }
    ]
  },
  {
    "title": "E-Learning Courses",
    "description": "Participating in online courses that consist of several parts is a great way to learn the essential concepts of machine learning. Many of these courses not only help you gain computer science knowledge but also provide tools that you can directly apply to your work and personal projects.",
    "resources": [
      {
        "title": "Introduction to TensorFlow for AI, Machine Learning, and Deep Learning",
        "description": "In this course, you will explore how TensorFlow is used in development and research.",
        "link": "#",
        "image": "/resources/dl.jpg"
      },
      {
        "title": "Intro to TensorFlow for Deep Learning",
        "description": "A course created by the TensorFlow team in collaboration with Udacity.",
        "link": "#",
        "image": "/resources/dl.jpg"
      },
      {
        "title": "TensorFlow Developer Specialization",
        "description": "This TensorFlow specialization includes four closely linked courses.",
        "link": "#",
        "image": "/resources/dl.jpg"
      },
      {
        "title": "Machine Learning Crash Course",
        "description": "A quick overview of the TensorFlow API.",
        "link": "#",
        "image": "/resources/dl.jpg"
      },
      {
        "title": "MIT Course 6.S191: Introduction to Deep Learning",
        "description": "MIT's rapid introduction to deep learning.",
        "link": "#",
        "image": "/resources/dl.jpg"
      },
      {
        "title": "Deep Learning Specialization",
        "description": "These five courses will help you understand the basics of deep learning.",
        "link": "#",
        "image": "/resources/dl.jpg"
      }
    ]
  }
]


function ResourcesList(item) {
    return (
      <div className="flex flex-col md:flex-row h-max gap-10 my-10">
        {/* Left Side: Fixed Text */}
        <div className="md:w-1/4 text-black dark:text-white fixed md:static top-0 md:h-auto h-full">
          <div className="md:sticky md:top-20">
            <h2 className="text-xl font-semibold mb-4">
              {item.title}
            </h2>
            <p className="text-sm">
              {item.description}
            </p>
          </div>
        </div>
  
        {/* Right Side: Scrollable List */}
        <div className="md:w-3/4 md:ml-auto overflow-y-auto p-4 text-black dark:text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {item.resources.map((course, index) => (
              <div key={index} className="bg-white dark:bg-[#202020] rounded-lg overflow-hidden shadow hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-200 cursor-pointer">
                <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
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

export default function Resource() {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
          <Banner title='Resources' description='Explore the best resources to learn machine learning and deep learning.' />
          <div className='nx-max-w-[90rem] nx-items-center nx-justify-end nx-gap-2 nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]'>
              <div className='flex flex-col justify-center items-start h-max w-full my-10'>
                {
                    items.map((item, index) => (
                        <ResourcesList key={index} {...item} />
                    ))
                }
              </div>
          </div>
        </div>
    )
}