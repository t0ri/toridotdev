import React, { Component } from 'react'

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.projects = []
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }


  // componentDidMount() {
  //   this.handleProjects()
  // }


  // async getProjects() {
    // try {
    //   const response = await fetch('/api/projects')
    //   const json = await response.json()
    //   return await json
    // }
    // } catch (err) {
    //   return err
    // }
  // }

  handleProjects() {
    const data = this.getProjects()
    if (data === err) {
      return (
        <div>
          <h1>
            can't fetch my projects right now
            <span role="img" aria-label="sad face">😔</span>
          </h1>
        </div>
      )
    }

  }
}

// function Project({ match }) {
//   return (
//     <h2>
//       This is a page for project with ID:
//       {match.params.id}
//     </h2>
//   )
// }

