import React from 'react';

import '../styles/UnreadMessagesIndicator.css'

export default function UnreadMessagesIndicator({count}) {

    let hiddenClass = count <= 0 ? 'hidden' : '';

      return (
        <div className={hiddenClass} className='unread-messages-counter'>
            <span className='unread-messages-count'>   
                {count}
            </span>
        </div>
      )}

  