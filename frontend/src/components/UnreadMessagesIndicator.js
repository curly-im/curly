import React from 'react';

export default function UnreadMessagesIndicator({count}) {

    let hiddenClass = count <= 0 ? 'hidden' : '';

      return (
        <div className={hiddenClass}>
            {count}
        </div>
      )}

  