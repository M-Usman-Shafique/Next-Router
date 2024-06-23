// Catch All Route
// http://localhost:3000/blog/saas/kkk/123/aec/1313/nmi
// Write whatever & in how much paths it will direct to Posts page.
// Wrap [...posts] inside another square bracket [[...posts]], then there will be no need to write anything after blog. No matter you write anything or not it will work.

import React from 'react'

function Posts({ params }) {
  return (
    <div className="flex flex-col gap-7 items-center justify-center h-screen">
      <h1 className="text-7xl font-semibold">Posts</h1>
      <div className="flex gap-3 flex-col bg-slate-600 resize text-white">
      <h2 className="text-2xl font-semibold">Catch All Routes</h2>
      <h3 className="text-1xl font-semibold">Garbage URL: {params.posts}</h3>
      <p className="font-medium text-white">Write whatever & in how much paths it will direct to Posts page.
        And if we wrap [...posts] folder name inside another square bracket [[...posts]], then there will be no need to write anything after blog. No matter write anything or not it will work.</p>
      </div>
    </div>
  )
}

export default Posts