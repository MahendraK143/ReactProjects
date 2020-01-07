import React from 'react';

function Title(props) {
    console.log('rendering title')
    return (
        <div>
            Title Component
        </div>
    );
}

export default React.memo(Title);