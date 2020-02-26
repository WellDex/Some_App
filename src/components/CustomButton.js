import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Time from './Time';

function CustomButton(props) {
    let [count, setNewCount] = useState(0);

    let updateCount = () => {
        setNewCount(count + 1);
    };

    return (
        <div>
            <Button variant="primary" onClick={updateCount}
                    className={props.data.classToAdd}>{props.data.title}</Button>
            <div>Clicked: {count}</div>
            <Time/>
        </div>
    );
}

export default CustomButton;