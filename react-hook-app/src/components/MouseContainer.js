import React, {useState} from 'react';
import HookMouseEffect from './HookMouseEffect';

function MouseContainer(props) {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouseEffect />}
        </div>
    );
}

export default MouseContainer;