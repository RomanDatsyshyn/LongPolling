import React, {useEffect, useState} from 'react';
import axios from "axios";

const User1 = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');


    useEffect(() => {
        subscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const subscribe = async () => {
        try {
            const {data} = await axios.get('http://localhost:3001/feed/user/getOffers',
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzM3MmI0OWY4MGNkMWNlZjRhMTdiZCIsImlhdCI6MTY0ODM1NTM3NiwiZXhwIjoxNjQ4NDQxNzc2fQ.w6LH_lYZq9Z2o08C6shco2iLJFnHYiju6Ywei65C1fY",
          },
        })
            setMessages(data)
            await subscribe()
        } catch (e) {
            setTimeout(() => {
                subscribe()
            }, 500)
        }
    }

    const sendMessage = async () => {
        await axios.post('http://localhost:3001/feed/user/sendOrder/623da65073deea0ebf9ba44d', {
            message: value,
            id: Date.now()
        },
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzM3MmI0OWY4MGNkMWNlZjRhMTdiZCIsImlhdCI6MTY0ODM1NTM3NiwiZXhwIjoxNjQ4NDQxNzc2fQ.w6LH_lYZq9Z2o08C6shco2iLJFnHYiju6Ywei65C1fY",
          },
        })
    }

    return (
        <div className="center">
            <div>
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button onClick={sendMessage}>SEND</button>
                </div>
                <div className="messages">
                    {messages.map(mess =>
                        <div className="message">
                            {mess}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default User1;
