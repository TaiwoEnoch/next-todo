import React from 'react'

const page = () => {
  return (
    <>
      <section className='bg-[#e6ecee] py-32'>
        <div className='flex flex-col w-[50%] max-md:w-[90%] gap-4 justify-center mx-auto'>
          <h1 className='text-center font-semibold text-3xl pb-2'>
            To-Do App Overview
          </h1>
          <p className='text-xl font-light'>
            I am excited to present my To-Do application, built using a modern tech stack that includes MongoDB, Tailwind CSS, and Next.js. This app allows users to efficiently manage their tasks with a clean and responsive design.
          </p>
          <div className='flex flex-col gap-3'>
            <h2 className='text-center font-semibold text-2xl'>Key Features</h2>
            <p>
              <span className='text-xl font-medium'>User-Friendly Interface:</span> The app boasts an intuitive layout styled with Tailwind CSS, ensuring a seamless user experience across devices.
            </p>

            <p>
              <span className='text-xl font-medium'>Task Management:</span> Users can easily add tasks, which are securely stored in a MongoDB database. Each task is readily accessible and organized for quick reference.
            </p>

            <p>
              <span className='text-xl font-medium'>Task Deletion:</span> Users have the ability to delete tasks effortlessly, with changes reflected in the MongoDB database in real-time.
            </p>
            <p>
              <span className='text-xl font-medium'>Real-Time Notifications:</span> I have integrated React Toast for instant feedback, allowing users to receive notifications when tasks are added or deleted, enhancing overall interactivity.
            </p>
          </div>
          <div>
            <h2 className='text-center font-semibold text-2xl'>Technical Details</h2>
          </div>
          <p>
            <span className='text-xl font-medium'>Next.js File Structure:</span> The project is structured following Next.js conventions, promoting maintainability and scalability.
          </p>
          <p>
            <span className='text-xl font-medium'>MongoDB Integration:</span> Data is managed through a robust MongoDB backend, ensuring secure and efficient storage of user tasks.
          </p>
          <p className='pt-4 text-xl font-medium'>
            With this app, users can stay organized and productive while enjoying a smooth and responsive experience. I look forward to further enhancements and features in the future!
          </p>
        </div>
      </section>
    </>
  )
}

export default page
