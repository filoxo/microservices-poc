import conversationData from './conversation.data.json'

function setupConversations() {
  Object.keys(conversationData).forEach(conversationId => {
    if (!localStorage.getItem(`conversation:${conversationId}`)) {
      localStorage.setItem(
        `conversation:${conversationId}`,
        JSON.stringify(conversationData[conversationId])
      )
    }
  })
}

export function setup() {
  console.info('Setting up data store...')
  setupConversations()
}

export function get(itemKey, defaultValue = null) {
  return JSON.parse(localStorage.getItem(itemKey)) || defaultValue
}

export function set(itemKey, value) {
  return localStorage.setItem(itemKey, JSON.stringify(value))
}
