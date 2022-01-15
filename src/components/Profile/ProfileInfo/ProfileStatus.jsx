import React, {useState} from 'react';

const ProfileStatus = () => {
    const [status, setStatus] = useState('Double click to change status')
    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const onStatusChanged = (event) => {
        setStatus(event.target.value)
    }

    return (
        <div>
            {
                !editMode

                    ? <span onDoubleClick={activateEditMode}> {status} </span>

                    : <input onChange={onStatusChanged}
                             value={status}
                             autoFocus={true}
                             onBlur={() => setEditMode(false)}/>
            }
        </div>
    );
};

export default ProfileStatus;