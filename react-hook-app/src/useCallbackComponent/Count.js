import React from 'react';

function Count({text, count}) {
    console.log('rendering ', text)
    return (
        <div>
            text - {text}, count - {count}
        </div>
    );
}

export default React.memo(Count);