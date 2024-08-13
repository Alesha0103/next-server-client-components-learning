import { cookies } from 'next/headers';
import React from 'react'

const About = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  console.log('theme', theme);
  console.log('Console log of the about page, look vscode console.');
  return (
    <div>About Page {new Date().toLocaleTimeString()}</div>
  )
}

export default About;