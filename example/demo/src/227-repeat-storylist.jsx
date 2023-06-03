import { useState } from 'react';
import { useTimeTTO } from './221-hook-useTime'
import { StoryTray } from './227-StoryTray';
let initialStories = [
  {id: 0, label: "Ankit's Story" },
  {id: 1, label: "Taylor's Story" },
];
export default function RepeatStoryList() { 
  const time = useTimeTTO();
  const [stories] = useState(initialStories);
  if (stories.length > 100) {
    stories.length = 100;
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <h2>{time.toLocaleTimeString()}</h2>
      <StoryTray stories={stories} />
    </div>
  )
}