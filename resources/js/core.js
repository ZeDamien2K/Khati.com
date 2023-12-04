const clearContents = () => {
    if (displayBox.value == '') {
        playSound('erase_fail')
        return
    }

    displayBox.value = ''
    playSound('erase')
}

const getEmojis = () => {
    let inputSet = emojiInputField.value.trim()
    let inputLineCount = lineCountInputField.value.trim()
    let passedArg1, passedArg2

    if (inputSet != '') {
        if (!EmojiRegExPattern.test(inputSet)) {
            alert(INCORRECT_EMOJI_FORMAT_MESSAGE)
            return
        }
        passedArg1 = inputSet
    }
    else passedArg1 = false

    inputLineCount.trim()
    if (inputLineCount != '') {
        if (!LineCountRegExPattern.test(inputLineCount)) {
            alert(INCORRECT_LINECOUNT_FORMAT_MESSAGE)
            return
        }
        passedArg2 = parseInt(inputLineCount)
    }
    else passedArg2 = false

    displayBox.value = generateEmoji(passedArg1, passedArg2)
    generateButton.textContent = "Hate it? Have another pile!"

    clearInterval(generateButtonLabelTimer)
    generateButtonLabelTimer = setInterval(() => { generateButton.textContent = generateButtonDefaultLabel }, labelCooldownDuration * 1000)

    playSound('generate')
}

const toClipboard = () => {
    if (displayBox.value == '') {
        playSound(getRandomSound('copy_fail'))
        return
    }

    navigator.clipboard.writeText(displayBox.value)
    copyButton.textContent = "Clipboard jamm'd!"
    
    clearInterval(copyButtonLabelTimer)
    copyButtonLabelTimer = setInterval(() => { copyButton.textContent = copyButtonDefaultLabel }, labelCooldownDuration * 1000)
    
    playSound(getRandomSound('copy'))
}