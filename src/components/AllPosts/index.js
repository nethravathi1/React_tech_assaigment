import React from 'react'
import './index.css'

class AllPosts extends React.Component {
  // Constructor
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      DataisLoaded: false,
    }
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          DataisLoaded: true,
        })
      })
  }

  render() {
    const {DataisLoaded, items} = this.state
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{' '}
        </div>
      )

    return (
      <div className="App">
        <h1> Posts </h1>{' '}
        {items.map(item => (
          <ol key={item.id}>
            <h1 className="heading">{item.tile}</h1>
            <br />
            <p> {item.body}</p>
          </ol>
        ))}
      </div>
    )
  }
}

export default AllPosts
