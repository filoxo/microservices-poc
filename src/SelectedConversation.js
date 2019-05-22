import React from 'react'
import ChatBubble from './ChatBubble'
import styles from './SelectedConversation.css'

const conversationData = {
  '12345': [
    {
      id: '1',
      from: 'location',
      content: 'Hi Zac, thank you for choosing to do business with us!',
      timestamp: ''
    }
  ],
  '23456': [
    {
      id: '2',
      from: 'location',
      content: 'Hola Juan, gracias por su negocio con nosotros!',
      timestamp: ''
    }
  ],
  '34567': [
    {
      id: '3',
      from: 'customer',
      content: 'Hi do you have any trucks available? Or on sale?',
      timestamp: ''
    },
    {
      id: '4',
      from: 'location',
      content: 'We will respond to your inquiry shortly.',
      timestamp: ''
    },
    {
      id: '5',
      from: 'location',
      content:
        'We have two F150s on the lot today. You should come check them out!',
      timestamp: ''
    },
    {
      id: '6',
      from: 'customer',
      content: 'What is the current list price?',
      timestamp: ''
    }
  ]
}
//   },
//   {
//     id: '23456',
//     recipient: {
//       id: 'asdf',
//       name: 'Juan'
//     },
//     latestMessage: {
//       id: '123inlwkejr',
//       sender: 'mylocation',
//       content: ''
//     }
//   },
//   {
//     id: '34567',
//     recipient: {
//       id: 'oiew',
//       name: 'Chen'
//     },
//     latestMessage: {
//       id: 'jdjlsa',
//       sender: 'oiew',
//       content: 'What is the current list price?'
//     }
//   },
//   {
//     id: '45678',
//     recipient: {
//       id: 'as9d',
//       name: 'Wendy'
//     },
//     latestMessage: {
//       id: 'aiud89',
//       sender: 'as9d',
//       content: 'I might have to think about that then.'
//     }
//   },
//   {
//     id: '56789',
//     recipient: {
//       id: 'qwert',
//       name: 'Sarai'
//     },
//     latestMessage: {
//       id: 'doidjwb',
//       sender: 'mylocation',
//       content: 'We will be with you shortly.'
//     }
//   }
// ]

export default function SelectedConversation(props) {
  const conversations = conversationData[props.conversationId] || []
  return (
    <div style={{ flex: '1' }}>
      <article className={styles.ConversationList}>
        {conversations.map(message => (
          <ChatBubble
            key={message.id}
            isExternalSender={message.from !== 'location'}
          >
            {message.content}
          </ChatBubble>
        ))}
      </article>
    </div>
  )
}
