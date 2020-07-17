import React, { useState } from 'react';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
 
const Emoji = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
 
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
 
  return (
    <div style={{marginLeft:'40%'}}>
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};

export default Emoji;