import './index.css'

const AppItem = props => {
  const {appList} = props
  const {appName, imageUrl} = appList

  return (
    <li className="appItem-container">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
