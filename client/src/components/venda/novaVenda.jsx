import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Form from './vendaNew'
import List from './vendaItemList'

export class NovaVenda extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Fragment>
        <Form />
        <List />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NovaVenda)
