import './index.css'

const TabItem = props => {
  const {tabList, updateActiveId, isActive} = props
  const {displayText, tabId} = tabList
  const onClickingTab = () => {
    updateActiveId(tabId)
  }

  const activeClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item">
      <button
        type="button"
        className={`btn ${activeClassName}`}
        onClick={onClickingTab}
      >
        <p className="tab-text">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
