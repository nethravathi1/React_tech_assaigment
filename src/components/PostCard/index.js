// Write your code here

import './index.css'

const PostCard = props => {
  const {teamData} = props
  const {title, body} = teamData

  return (
    <li className="team-card">
      <h1>{title}</h1>
      <p className="team-name">{body}</p>
    </li>
  )
}

export default PostCard
