import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiBtn = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-box">
      <button className="emoji-button" type="button" onClick={onClickEmojiBtn}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
