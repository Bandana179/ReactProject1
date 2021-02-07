import React from 'react';
import SlotM from './SlotM' ;


const App=()=>{
  return(<>
<h1>🎰 Welcome to {" "} <span style={{fontWeight:'bold'}}>Slot Machine Game</span>🎰</h1>
<SlotM x='😄' y='😄' z='😄'/>
<SlotM x='😄' y='😢' z='🎅'/>
<SlotM x='❤️'  y='❤️' z='❤️'  />
<SlotM x= '💁‍♀️' y='🧙' z='👦' />
</>
  )
}

export default App;