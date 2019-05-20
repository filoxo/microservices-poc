import React from 'react'
import ConversationSplitContainer from './ConversationSplitContainer'
import ConversationLink from './ConversationLink'
import SelectedConversation from './SelectedConversation'

const data = [
  {
    id: '12345',
    recipient: {
      id: 'abcd',
      name: 'Zac'
    },
    latestMessage: {
      id: '1b2b3b5j',
      sender: 'mylocation',
      content: 'Hi Zac, thank you for choosing to do business with us!'
    }
  },
  {
    id: '23456',
    recipient: {
      id: 'asdf',
      name: 'Juan'
    },
    latestMessage: {
      id: '123inlwkejr',
      sender: 'mylocation',
      content: 'Hola Juan, gracias por su negocio con nosotros!'
    }
  },
  {
    id: '34567',
    recipient: {
      id: 'oiew',
      name: 'Chen'
    },
    latestMessage: {
      id: 'jdjlsa',
      sender: 'oiew',
      content: 'What is the current list price?'
    }
  },
  {
    id: '45678',
    recipient: {
      id: 'as9d',
      name: 'Wendy'
    },
    latestMessage: {
      id: 'aiud89',
      sender: 'as9d',
      content: 'I might have to think about that then.'
    }
  },
  {
    id: '56789',
    recipient: {
      id: 'qwert',
      name: 'Sarai'
    },
    latestMessage: {
      id: 'doidjwb',
      sender: 'mylocation',
      content: 'We will be with you shortly.'
    }
  }
]

export default function AllConversations(props) {
  const { url } = props.match
  const { conversationId } = props.match.params
  console.log(conversationId)
  return (
    <ConversationSplitContainer>
      <>
        {data.map(convo => (
          <ConversationLink
            key={convo.id}
            to={`${url}/${convo.id}`}
            name={convo.recipient.name}
            content={convo.latestMessage.content}
            isReply={convo.latestMessage.sender === convo.recipient.id}
          />
        ))}
      </>
      <div>
        {!!conversationId && (
          <SelectedConversation conversationId={conversationId} />
        )}
      </div>
    </ConversationSplitContainer>
  )
}
