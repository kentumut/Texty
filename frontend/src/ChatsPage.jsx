/* eslint-disable react/prop-types */
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'ddba0586-4da1-4402-b5ae-521481bd3e1e', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>
        </div>
    )
}

export default ChatsPage
