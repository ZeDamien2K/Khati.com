const defaultPreset = ['😙', '💋', '💋', '🫶🏻', '❤️‍🔥', '😍', '❣', '💙', '💙', '🩷', '🩷', '💙', '💌', '💌', '🧡', '🧡', '💛', '🩵', '💛', '💜', '❤', '❤', '💜', '💜', '🤗', '💝', '🩵', '💕', '💙', '💞', '💓', '💓', '💌', '💘', '💘', '🥰', '❤️‍🔥', '❤️‍🔥', '🫰🏻', '💖', '🩵', '🩵', '💟', '💟', '☺', '☺', '💌', '💌', '🧡', '🤗', '🤗', '😗', '💟', '😚', '😉', '😘', '💙', '💙', '💗', '😊', '💋', '💋', '❤️‍🔥', '🫶🏻', '🫰🏻', '❤', '❤', '🩷', '🩷']

const DEFAULT_NUMBER_OF_LINES = 30
const generateButtonDefaultLabel = 'Gimme a pile of Emojis!'
const copyButtonDefaultLabel = "Jam em' to the Clipboard"
const labelCooldownDuration = 3 // in seconds!
const EmojiRegExPattern = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g
const LineCountRegExPattern = /^([1-9][0-9]{0,1})$/
const INCORRECT_EMOJI_FORMAT_MESSAGE = 'Only emojis are allowed! Please remove other characters and try again!'
const INCORRECT_LINECOUNT_FORMAT_MESSAGE = 'Invalid line count! A value between 0 and 99 will be perfect!'

var contentArea = document.getElementById('appContentArea')
var emojiCustomField = document.getElementById('appEmojiCustomizationField')
var lineCountCustomField = document.getElementById('appLineCountCustomizationField')

var generateButton = document.getElementById('generateButton')
var copyButton = document.getElementById('copyButton')

var generateButtonLabelTimer = null
var copyButtonLabelTimer = null
