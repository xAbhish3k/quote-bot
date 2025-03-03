const { Schema } = require('mongoose')

const userSchema = Schema({
  telegram_id: {
    type: Number,
    index: true,
    unique: true,
    required: true
  },
  first_name: {
    type: String,
    index: true
  },
  last_name: {
    type: String,
    index: true
  },
  full_name: {
    type: String,
    index: true
  },
  username: {
    type: String
  },
  settings: {
    locale: String,
    quote: {
      backgroundColor: {
        type: String,
        default: '#1b1429'
      }
    },
    hidden: {
      type: Boolean,
      default: false
    },
    privacy: {
      type: Boolean,
      default: false
    },
    emojiSuffix: {
      type: String,
      default: 'random'
    }
  },
  tempStickerSet: {
    name: String,
    create: {
      type: Boolean,
      default: false
    }
  },
  adv: {
    credit: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true
})

module.exports = userSchema
