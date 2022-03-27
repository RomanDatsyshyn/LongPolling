import React, {useEffect, useState} from 'react';
import axios from "axios";

const User2 = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');


    useEffect(() => {
        subscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const subscribe = async () => {
        try {
            const {data} = await axios.get('http://localhost:3001/feed/serviceSeller/getOrders',
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2RhYzEyZjExOWFjYTRlMDEwODYxMyIsImlhdCI6MTY0ODM1NTQyNiwiZXhwIjoxNjQ4NDQxODI2fQ.xtXaa2iGH8FdG6uvtjP-W3bJZg_FY5l5wdhjoMvRhrE",
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
        await axios.post('http://localhost:3001/feed/serviceSeller/sendOffer', {
            userId: "623372b49f80cd1cef4a17bd",
            message: value,
            id: Date.now()
        },
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2RhYzEyZjExOWFjYTRlMDEwODYxMyIsImlhdCI6MTY0ODM1NTQyNiwiZXhwIjoxNjQ4NDQxODI2fQ.xtXaa2iGH8FdG6uvtjP-W3bJZg_FY5l5wdhjoMvRhrE",
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

export default User2;
