import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getTotal } from './dashboardActions'

export class dashboard extends Component {

  componentWillMount() {
    this.props.getTotal()
  }

  render() {
    const { value } = this.props.total
    return (
      <div>
         {`Total de clientes ${value}`}  
      </div>
    )
  }
}

const mapStateToProps = state => ({total : state.dashboard.total})
const mapDispatchToProps = dispatch => bindActionCreators({getTotal}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(dashboard)
